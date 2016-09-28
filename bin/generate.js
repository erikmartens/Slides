#!/usr/bin/env node

const _fs   = require('fs');
const _path = require('path');
const _MD   = require('./parser/MD.js');
const _HTML = require('./parser/HTML.js');
const _TPL  = _fs.readFileSync(__dirname + '/template.html', 'utf8');


_fs.readdir(_path.resolve(__dirname, '../book'), {
	encoding: 'utf8'
}, (err, files) => {

	if (files instanceof Array) {

		files
		.filter(name => /\.(png|svg)$/g.test(name))
		.forEach(name => {

			let read_stream  = _fs.createReadStream(_path.resolve(__dirname, '../book/' + name));
			let write_stream = _fs.createWriteStream(_path.resolve(__dirname, '../public/' + name));

			read_stream.pipe(write_stream);

		});


		files
		.filter(name => /^([0-9]{2})([A-Za-z0-9-_]+)\.md$/g.test(name))
		.map(name => { return { name, content: null }; })
		.forEach(file => {

			file.content = _fs.readFileSync(_path.resolve(__dirname, '../book/' + file.name), 'utf8');
			file.content = _MD.decode(file.content);
			file.content = _HTML.encode(file.content);

			if (file.content !== null) {

				let name  = file.name.replace(/\.md$/, '.html');
				let title = file.name.replace(/\.md$/, '');
				let book  = _TPL;

				book = book.split('${title}').join(title);
				book = book.split('${content}').join(file.content);

				_fs.writeFileSync(_path.resolve(__dirname, '../public/' + name), book, 'utf8');

			}

		});

	}

});

