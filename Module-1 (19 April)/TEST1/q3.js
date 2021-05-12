function findavg(name,duration)
{  let avg = 0;
    for(let i=0;i<duration.length;i++){
        avg+=duration[i];
    }
    return avg/duration.length;
}
function raindance(name, duration){
   for(var i =0;i<name.length;i++){
       var x = name;
       var avg = findavg(x,duration);
   }
   return name+' '+avg;
}

var name = "Pauri";
var duration =[3, 3, 3, 1, 2, 2, 2]
console.log(raindance(name,duration));
