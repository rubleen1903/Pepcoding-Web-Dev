const fs = require('fs');
//cat f1.txt => f1 content
//cat f1.txt f2.txt => f1 content + f2 content

let f1data = fs.readFileSync("./f1.txt","utf-8");
let f2data = fs.readFileSync("./f2.txt","utf-8");

function applysflag(data) {
    let emptyincluded= false;
    let removedspaces = [];
    let splitdata = data.split("\r\n");
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
function applybflag(data)
{
    let count = 1;
    let splitdata = data.split("\r\n");
    for(let i =0;i<splitdata.length;i++){
        if(splitdata[i]!='')
        {
            splitdata[i] = `${count}.${splitdata[i]}`;
            count++;
        }
    }
    console.log(splitdata);
    let addlinenumber = splitdata.join("\r\n");
    return addlinenumber;

}

function applynflag(data)
{  let count = 1 ;
    let splitdata = data.split("\r\n");
    for(let i= 0;i<splitdata.length;i++){
     splitdata[i] = `${count}.${splitdata[i]}`;
     count++; 
    }
    console.log(splitdata);
    let nflagstring = splitdata.join("\n");
    return nflagstring;

}
let sflag=applysflag(f1data);
let bflag=applybflag(f1data);
let nflag=applynflag(f1data);
console.log(sflag);
console.log(bflag);
console.log(nflag);