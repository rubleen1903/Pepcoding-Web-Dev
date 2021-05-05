let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require("request");
const cheerio = require("cheerio");
const getallMatches = require("./allmatches");

request(matchLink , function (err,res,data){
    processData(data);
})
let allMatchesLink;
function processData (html){
    let myDocument = cheerio.load(html);
    let aTag = myDocument(".widget-items.cta-link a");
    //console.log(aTag);
    //console.log(aTag.attr("href"));

    allMatchesLink = "https://www.espncricinfo.com" + aTag["0"].attribs.href;
    // console.log(allMatchesLink);
    getallMatches(allMatchesLink);
}