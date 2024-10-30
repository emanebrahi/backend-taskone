// const fs = require("fs");
// fs.writeFileSync("data.txt" ,"eman");
// console.log(fs.readFileSync("data.txt").toString());


// const x = require ("./allData.js");
// console.log(x.firstName);
// console.log(x.lastName);
// console.log(x.mul(3,4))



const data = require("./data.js");
const { type } = require("os")

const yargs = require("yargs");
yargs.command({
    command :"add",
    describe:"you have added an item",
    builder:{
        id:{
            describe:"this is id description",
            demandOption:true,
            type:"number"
        },
        fname:{
            describe:"this is firstName decription",
            demandOption:true,
            type:"string"

        },
        lname:{
            describe:"this is lastName decription",
            demandOption:true,
            type:"string"

        },
        age:{
            describe:"this is age description",
            demandOption:true,
            type:"number"
        },
        city:{
            describe:"this is city description",
            demandOption:true,
            type:"string"
        }
    },
    handler: (x)=>{
        data.addPerson(x.id , x.fname , x.lname , x.age , x.city)
    }
})


yargs.command({
    command:"delete",
    describe:"you have deleted an item",
    builder:{
        id:{
            describe:"this is id",
            demandOption:false,
            type:"number"
        }
    },
    handler:(x)=>{
       data.deletedData(x.id)
    }
})

yargs.command({
    command:"read",
    describe:"to read data",
    builder:{
        id:{
            describe:"id for person",
            demandOption:false,
            type:"number"
        }
    },
    handler:(x)=>{
        data.readData(x.id)
    }
})

yargs.command({
    command:"list",
    describe:"to make list of elements",
    handler:()=>{
        data.listData();

    }
})
yargs.parse()