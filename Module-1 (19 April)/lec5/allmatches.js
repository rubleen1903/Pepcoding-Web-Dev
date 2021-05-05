

const request = require("request");
const cheerio = require("cheerio");
const allMatchesLink = require("./homepage");

function getallMatches(allMatchesLink) {
   request(allMatchesLink,function(err,res,data){
       processData(data);
   })

}

function processData(html) {
   let myDocument = cheerio.load(html);
   let alltags = myDocument('a[data-hover="Scorecard"]');
   console.log(alltags.length);

   for(let i=0;i<alltags.length;i++)
   {
       let matchlink="https://www.espncricinfo.com"+myDocument(alltags[i]).attr('href');
       console.log(matchlink);
   }
}

module.exports = getallMatches;