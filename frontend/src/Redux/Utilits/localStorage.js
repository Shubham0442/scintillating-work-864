
export const getData = (key)=>{
    
    try{
        let temp = localStorage.getItem(key) 
        temp = JSON.parse(temp) 
        return temp;
    }
    catch(error){
          return undefined
    }
} 

export const saveData = (key, value) =>{

    //console.log("lc", key, value)
        localStorage.setItem(key, JSON.stringify(value))
}