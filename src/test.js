var wtf_wikipedia = require('./index.js');

console.log('ok');

var title = 'Lolita';
var language = 'en';

wtf_wikipedia.from_api(title, language, function (markup) {

	var p,
		aAuthor,
		summarySections = [],
		disambiguationMode = false;

	p = wtf_wikipedia.parse(markup, {
		ignoreLists: false,
		removeEmptyHeaders: false
	 });

	console.log(p);


});


/**
 * happens in index.js between lines 108 - 184
 *

 **/
