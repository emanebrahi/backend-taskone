const fs = require("fs") 

//add person with no duplicated data==========================
const addPerson =(id ,fname , lname , age , city)=>{
    const allData = loadFile();
    const duplicatedData = allData.filter((obj)=>{ return obj.id === id } )
    if(duplicatedData.length ===0 ){
        allData.push({
            id:id,
            fname,
            lname,
            age,
            city
        })
        savealldata(allData)
    }else{
        console.log("error duplicated data")
    }
   
}
//delete all person or specific person ================
const deletedData =(id)=>{
    let allData = loadFile();

    if(id == null){
          allData =[];
          console.log("all data deleted")
        
    }
    const deletedItem = allData.filter((obj)=>{return obj.id !== id});
    savealldata(deletedItem);
}
// load data and convert to object ===================
const loadFile = ()=>{
    try{
        const dataJson = fs.readFileSync("data.json").toString();
         return  JSON.parse(dataJson);
    }catch{
        return [];
    }
}
// save all data ==============================
const savealldata =(allData)=>{
    const savealldatajson = JSON.stringify(allData);
    fs.writeFileSync("data.json" ,savealldatajson)
}

//read all data or specific data =====================
const readData = (id =null) =>{
   const allData = loadFile();
   if(id == null){
    console.log(allData)
   }
   const readItem = allData.find((obj)=> {return obj.id === id})
   if(readItem){
    console.log(readItem)
   }else{
    console.log("no item with this id")
   }
}
//listed data ======================
const listData =()=>{
   const allData = loadFile();

   const listedItem = allData.forEach((item)=>{
            return (
                console.log(item.fname , item.lname)
            )
   })
}

module.exports = {
    addPerson,
    deletedData,
    readData,
    listData
}