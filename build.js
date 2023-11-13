const child = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const buildFolder = path.resolve(__dirname, 'build');
const publicFolder = path.resolve(__dirname, 'public');
fs.emptyDirSync(buildFolder);
child.execSync('./node_modules/.bin/webpack --config webpack.config.js --mode production', {
	env: {
		NODE_ENV: 'production'
	}
});
fs.copySync(publicFolder, buildFolder);