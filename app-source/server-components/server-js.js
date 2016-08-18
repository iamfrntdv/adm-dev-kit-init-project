const fs = require('fs-extra');

module.exports = (source) => {
	const fileContent = 'var app = require(\'adm-dev-kit\');\n' +
		'var pjson = require(\'./package.json\');\n\n' +
		'app.server({\n' +
		'\tsrc: pjson.adm.srcFolder,\n' +
		'\tviews: pjson.adm.viewsFolder,\n' +
		'\thost: pjson.adm.host,\n' +
		'\tport: pjson.adm.port,\n' +
		'\topenURL: pjson.adm.host,\n' +
		'\tname: pjson.name,\n' +
		'\tdesc: pjson.description,\n' +
		'\tversion: pjson.version,\n' +
		'\tbrowserSync: pjson.browserSync,\n' +
		'\tcssVariables: pjson.adm.cssVariables\n' +
		'});\n';

	fs.writeFile(source, fileContent, (err) => {
		if (err) throw err;
	});
};
