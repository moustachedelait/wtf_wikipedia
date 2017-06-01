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


function countHeaderNumber (section) {
	var aSection = section.match(/^={1,5}/);

	if (Array.isArray(aSection) && aSection.length !== 0) {
		return aSection[0].length;
	} else {
		return null;
	}
}


/**
 * happens in index.js between lines 108 - 184
 *



  Need to recognize empty sections and store it

  Keep it around only for sections that are non-empty with more equal signs

  as soon as we meet a section with same or less equal signs, start over




// TODO
// figure out the sectionHeadCount
// write a subroutine
//

 * It 1  = INTRO =

 section = INTRO
 headCount = 1;
 //previousSectionRelevant = false;


 * it 2 some text

 section = INTRO
 headCount = 1;
 //previousSectionRelevant = false;


 * it 3 = summary =
 section =   = summary =
 headCount = 1;
 previousSectionRelevant = false;

 * it 4 == part 1 ==
 oldheadCount = 1;
 currentHeadcount = 2;
 previousSectionRelevant = true;
 if (currentHeadcount = oldheadCount + 1) {


 /* */
 
