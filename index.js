var fs = require('fs');

fs.readdir('./', function(err, data) {
	fs.writeFile('./new.txt', data, function(err) {
		 if (err) throw err;
  		console.log('Files: ' +data+ ' saved in new.txt');
	})
})