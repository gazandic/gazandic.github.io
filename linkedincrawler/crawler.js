var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var pageToVisit = "https://www.linkedin.com/in/gazandi-cahyadarma-86b726a1";
console.log("Visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     // Parse the document body
     var $ = cheerio.load(body);
     console.log("Name:  " + $('#name').text());
     var ite = 0;
     var job, company, duration, location, description ;
   	 while(ite<$('ul.positions').children('li.position').length){
   	 	// console.log($('li.position').children().text);
   	 	job =$('ul.positions').children('li.position').eq(ite).children().first().children('h4.item-title');
   	 	company = $('ul.positions').children('li.position').eq(ite).children().first().children('h5.item-subtitle');
     	duration = $('ul.positions').children('li.position').eq(ite).children().eq(1).children('span.date-range');
        location = $('ul.positions').children('li.position').eq(ite).children().eq(1).children('span.location').contents();
        description = $('ul.positions').children('li.position').eq(ite).children().eq(2).contents();
     	console.log("job:  " + job.text());
     	console.log("company:  " + company.text());
     	console.log("duration:  " + duration.text());
     	console.log("location:  " + location.text());
     	console.log("description:  " + description.text());
     	ite++;
     }
     ite=0;
     var eduplace, edufocus, duration, description ;
   	 while(ite<$('ul.schools').children('li.school').length){
   	 	// console.log($('li.position').children().text);
   	 	eduplace =$('ul.schools').children('li.school').eq(ite).children().first().children('h4.item-title');
   	 	edufocus = $('ul.schools').children('li.school').eq(ite).children().first().children('h5.item-subtitle');
     	duration = $('ul.schools').children('li.school').eq(ite).children().eq(1).children('span.date-range');
        description = $('ul.schools').children('li.school').eq(ite).children().eq(2).contents();
     	console.log("eduplace:  " + eduplace.text());
     	console.log("edufocus:  " + edufocus.text());
     	console.log("duration:  " + duration.text());
     	console.log("description:  " + description.text());
     	ite++;
     }
     ite = 0;
     var organization, orgposition, duration, description ;
   	 while(ite<$('section#organizations').children('ul').children('li').length){
   	 	// console.log($('li.position').children().text);
   	 	organizations =$('section#organizations').children('ul').children('li').eq(ite).children().first().children('h4.item-title');
   	 	orgposition = $('section#organizations').children('ul').children('li').eq(ite).children().first().children('h5.item-subtitle');
     	duration = $('section#organizations').children('ul').children('li').eq(ite).children().eq(1).children('span.date-range');
        description = $('section#organizations').children('ul').children('li').eq(ite).children().eq(2).contents();
     	console.log("organizations:  " + organizations.text());
     	console.log("orgposition:  " + orgposition.text());
     	console.log("duration:  " + duration.text());
     	console.log("description:  " + description.text());
     	ite++;
     }
     ite=0;
     var skill ;
   	 while(ite<$('ul.pills').children('li.skill').length){
   	 	// console.log($('li.position').children().text);
   	 	skill =$('ul.pills').children('li.skill').eq(ite).children('a').children('span.wrap');
   		console.log("skill:  " + skill.text());
     	ite++;
     }

   }
});