const child = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const buildFolder = path.resolve(__dirname, 'dist');
fs.emptyDirSync(buildFolder);
child.execSync('npm run tsc', {
	env: {
		NODE_ENV: 'production'
	}
});