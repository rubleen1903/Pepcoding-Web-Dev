const fs = require('fs');
//cat f1.txt => f1 content
//cat f1.txt f2.txt => f1 content + f2 content

let f1data = fs.readFileSync("./f1.txt","utf-8");
let f2data = fs.readFileSync("./f2.txt","utf-8");

function applysflag(f1data) {
    let emptyincluded= false;
    let removedspaces = [];
    let splitdata = f1data.split("\r\n");
    console.log(splitdata);
    for( let i =0;i< splitdata.length;i++ ){
        if(splitdata[i]=="" && emptyincluded== false)
        {
            removedspaces.push(splitdata[i]);
            emptyincluded = true;
        }
        else if(splitdata[i] !="")
        {
            removedspaces.push(splitdata[i]);
            if(i<splitdata.length-2)
            {
            emptyincluded =false;
            }

        }
    }
    let removedspacestring = removedspaces.join("\r\n");
    return removedspacestring;
}
let sflag=applysflag(f1data);
console.log(sflag);