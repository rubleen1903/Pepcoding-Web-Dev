let ob = {
    flavor: "vanilla",
    topping: {
        drizzle: "chocolava",
        sprinkle: "choco-chips",
    },
    cone: {
        type: "waffle",
        crust: {
        color: "dark",
        texture: "soft",
        },
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