let ob = {
    newObj: {
        obj2: {
          obj5: {
            one: 1,
          },
        },
      },
      obj3: {
        obj4: { two: 2 },
      },
};
  
const flattenObj = (ob) => {
  
    
    let result = {};
  
   
    for (const i in ob) {
  
        if ((typeof ob[i]) === 'object') {
            const temp = flattenObj(ob[i]);
            for (const j in temp) {
  
                
                result[i + '.' + j] = temp[j];
            }
        }
  
        
        else {
            result[i] = ob[i];
        }
    }
    return result;
};
  
console.log(flattenObj(ob));