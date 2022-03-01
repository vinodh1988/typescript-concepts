interface student{
   sno:number;
   name:string;
   city:string;
}

function processObject(s:student){
    console.log(s.sno,s.name,s.city)
}

function processProject({sno,name,city}:student){
    console.log("processed ",sno,name,city)
}

processObject({sno:1,name:"Robert",city:"Jaipur"})
processProject({sno:2,name:"Rahul",city:"Bhopal"})