#!/usr/bin/env node
const {exec} = require("child_process");
const path = require("path");
const fs = require('fs');

const scriptVariables = {
    customThemeFilePath: path.join(
        process.cwd(),
        "./custom-theme.less"
    ),
    generatedThemePath: path.join(
        process.cwd(),
        "/public"
    ),
    antdLibraryPath: path.join(
        process.cwd(),
        "./node_modules/antd"
    ),
    theme: "default",
};

const content = `
  @import url("${scriptVariables.antdLibraryPath}/lib/style/themes/${scriptVariables.theme}.less");
  @import url("${scriptVariables.antdLibraryPath}/dist/antd.less");
  @import url("${scriptVariables.customThemeFilePath}");
`;

fs.createReadStream(`${scriptVariables.antdLibraryPath}/dist/antd.min.js`).pipe(fs.createWriteStream(path.resolve(scriptVariables.generatedThemePath, 'antd.min.js')));

exec(
    `echo "${content}" > /tmp/generated-theme.less`,
    {cwd: process.cwd()},
    (error1, stdout, stderr) => {
        if (!error1) {
            exec(
                `./node_modules/less/bin/lessc -x --js /tmp/generated-theme.less ${path.resolve(scriptVariables.generatedThemePath, 'antd.min.css')}`,
                {cwd: __dirname},
                (error2, stdout, stderr) => {
                }
            );
        }
    }
);