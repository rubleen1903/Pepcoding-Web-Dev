//Automation Class 1 

const puppeteer = require("puppeteer");

let browseropenpromise = puppeteer.launch({headless: false});
console.log(browseropenpromise);
//Promise Pending

browseropenpromise.then(function browser (){
    console.log("Browser is running");
    return browser.pages;
});

// .then(function(pages)
// {
//     let tab =pages[0];
//     return tab.goto("https://www.google.com/");

// })

// .then(function(){
//     console.log("Google homepage is running");
// })