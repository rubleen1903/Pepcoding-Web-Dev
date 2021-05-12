let obj = {"concept":""};


console.log(
  JSON.parse(
    JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12)
  ).concept
);


//Answer is OPTION C