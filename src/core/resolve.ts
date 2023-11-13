import path from 'path';

const globalModuleAlternative = require('module');

const Module = module.constructor.length > 1
	? module.constructor
	: globalModuleAlternative;

const moduleAliases = {};
const moduleAliasNames = [];
const moduleConfigs = {};

const getBasePathFromFilePath = filepath => (
	filepath.replace(
		/^(.+)[\\/]node_modules$/,
		'$1',
	)
);

const getModifiedRequest = ({alias, parentModule, requestedFilePath}) => {
	const parentFilePath = parentModule.paths.find(filePath => (
		moduleAliases[getBasePathFromFilePath(filePath)]
	));
	if (!parentFilePath) {
		throw new Error(`The file at '${requestedFilePath}' does not exist.`
			.concat('\n\n')
			.concat('Verify these paths:')
			.concat('\n')
			.concat(JSON.stringify(moduleAliases, null, 2)))
	}
	const basePath = getBasePathFromFilePath(parentFilePath);
	const aliasTarget = moduleAliases[basePath][alias];
	return requestedFilePath.replace(alias, aliasTarget);
};

const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function (requestedFilePath, parentModule, isMain) {
	const alias = moduleAliasNames.find(alias => requestedFilePath.indexOf(alias) === 0);
	const modifiedFilePath = alias ? getModifiedRequest({alias, requestedFilePath, parentModule}) : requestedFilePath;
	return originalResolveFilename.call(this, modifiedFilePath, parentModule, isMain);
};

function hashcode(str) {
	var hash = 0, i, chr;
	for (i = 0; i < str.length; i++) {
		chr = str.charCodeAt(i);
		hash = ((hash << 5) - hash) + chr;
		hash |= 0;
	}
	return hash;
}

const originalRequire = Module.prototype.require;
Module.prototype.require = function (p: string) {
	const f4 = p.substr(-4);
	const f3 = p.substr(-3);
	if (['sass', 'scss'].indexOf(f4) > -1 || f3 == 'css') {
		try {
			return originalRequire.call(this, p);
		} catch (e) {
			const pth = this.filename.toString().split('/');
			pth.pop();
			const basePath = moduleConfigs['basePath'];
			const fle = path.resolve(pth.join('/'), p).substr(basePath.length);
			const v = /^\/?(.+\/)*(.*)\.(sass|scss|css)$/.exec(fle)[2].replace(/\./g, '-');
			const proxy = new Proxy<any>({}, {
				get(target, key, receiver) {
					return v + '__' + key.toString() + '--' + hashcode(fle);
				}
			});
			return {
				default: proxy,
				__esModule: proxy,
			};
		}
	} else if (['jpg', 'gif', 'bmp', 'png', 'svg'].indexOf(f3) > -1) {
		const pth = this.filename.toString().split('/');
		pth.pop();
		const dir = pth.join('/');
		const requestedFilePath = p;
		const basePath = moduleConfigs['basePath'];
		const alias = moduleAliasNames.find(alias => requestedFilePath.indexOf(alias) === 0);

		const abs = alias ? p.replace(alias, moduleAliases[basePath][alias]) : path.join(dir, p);

		const base = abs.substr(basePath.length);

		return {default: path.join('/images/src', base)};
	} else if (f3 === 'mp4' || f4 === 'webm') {
		const pth = this.filename.toString().split('/');
		pth.pop();
		const dir = pth.join('/');
		const requestedFilePath = p;
		const basePath = moduleConfigs['basePath'];
		const alias = moduleAliasNames.find(alias => requestedFilePath.indexOf(alias) === 0);
		const abs = alias ? p.replace(alias, moduleAliases[basePath][alias]) : path.join(dir, p);
		const base = abs.substr(basePath.length);
		return {default: path.join('/videos/src', base)};
	}
	return originalRequire.call(this, p);
};

const addModuleAliases = (
	(basePath, aliases) => {
		moduleConfigs['basePath'] = basePath;
		Object.keys(aliases)
			.map(alias => ({
				alias,
				filePath: aliases[alias],
			})).forEach(({alias, filePath}) => {
			if (!moduleAliases[basePath]) {
				moduleAliases[basePath] = {}
			}
			moduleAliases[basePath][alias] = filePath;
			!(moduleAliasNames.indexOf(alias) === 0) && (moduleAliasNames.push(alias)) && (moduleAliasNames.sort())
		})
	}
);

const getAliasList = basePath => {
	const conf = require(path.join(basePath, '..', 'tsconfig.json'));
	const paths = conf.compilerOptions.paths;
	const keys = Object.keys(paths);
	return keys.reduce((acc, key) => {
		const item = path.join(basePath, paths[key][0]);
		acc[key.substr(0, key.length - 2)] = item.substr(0, item.length - 2);
		return acc;
	}, {});
};

const setupModuleAliases = basePath => addModuleAliases(basePath, getAliasList(basePath));
module.exports = setupModuleAliases;