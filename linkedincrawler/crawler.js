
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
     var joblist = [];
     var result  = [];
     var hitung =0;
     var $ = cheerio.load(body);
     result.push({fullname: $('#name').text()});
     result.push({about: $('#summary .description p').text()});
     result.push({now: $('#profile .headline').text()});
     result.push({location: $('#profile .locality').text()});
     //result.push({now: $('#profile .extra-info .org').text()});
     var ite = 0;
     var job, company, duration, location, description ;
   	 while(ite<$('ul.positions').children('li.position').length){
   	 	// console.log($('li.position').children().text);
   	 	job =$('ul.positions').children('li.position').eq(ite).children().first().children('h4.item-title');
      company = $('ul.positions').children('li.position').eq(ite).children().first().children('h5.item-subtitle');
      duration = $('ul.positions').children('li.position').eq(ite).children().eq(1).children('span.date-range');
        location = $('ul.positions').children('li.position').eq(ite).children().eq(1).children('span.location').contents();
        description = $('ul.positions').children('li.position').eq(ite).children().eq(2).contents();
      joblist.push({job: job.text(), company: company.text(),duration: duration.text(),
        location: location.text() , description: description.text() });
      ite++;
      hitung++;
     }
      result.push({joblist : joblist});

     var edulist=[];
     ite=0;
     var eduplace, edufocus, duration, description ;
   	 while(ite<$('ul.schools').children('li.school').length){
   	 	// console.log($('li.position').children().text);
   	 	eduplace =$('ul.schools').children('li.school').eq(ite).children().first().children('h4.item-title');
   	 	edufocus = $('ul.schools').children('li.school').eq(ite).children().first().children('h5.item-subtitle');
     	duration = $('ul.schools').children('li.school').eq(ite).children().eq(1).children('span.date-range');
        description = $('ul.schools').children('li.school').eq(ite).children().eq(2).contents();
      edulist.push({eduplace: eduplace.text(), edufocus: edufocus.text(),duration: duration.text(),
        description: description.text() });
     	ite++;
      hitung++;
     }
     result.push({edulist : edulist});
     ite = 0;
     var orglist=[];
     var organization, orgposition, duration, description ;
   	 while(ite<$('section#organizations').children('ul').children('li').length){
   	 	// console.log($('li.position').children().text);
   	 	organizations =$('section#organizations').children('ul').children('li').eq(ite).children().first().children('h4.item-title');
   	 	orgposition = $('section#organizations').children('ul').children('li').eq(ite).children().first().children('h5.item-subtitle');
     	duration = $('section#organizations').children('ul').children('li').eq(ite).children().eq(1).children('span.date-range');
        description = $('section#organizations').children('ul').children('li').eq(ite).children().eq(2).contents();
     	orglist.push({organization: organizations.text(), position: orgposition.text(),duration: duration.text(),
        description: description.text() });
     	ite++;
      hitung++;
     }
     result.push({orglist : orglist});
     ite=0;
     var res;
     var skills=[];
     var skill ;
   	 while(ite<$('ul.pills').children('li.skill').length){
   	 	// console.log($('li.position').children().text);
   	 	skill =$('ul.pills').children('li.skill').eq(ite).children('a').children('span.wrap');
   		skills.push({skill: skill.text()});
     	ite++;
      hitung++;
     }
     result.push({skills : skills});
     fs = require('fs');
     fs.writeFile('data.json', JSON.stringify({data: result},null,hitung), function (err) {
        if (err) {
          return console.log(err);
        }
      });
     //console.log(  );
    //res.contentType('application/json');
    // console.log(JSON.stringify(result));
   }
});