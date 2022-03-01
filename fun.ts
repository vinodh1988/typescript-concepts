function fun(sno:number,name:string):string{
  if(sno%2==0)
      return sno+""
  else
      return name
}

fun(1,"Raj")

function callit(x:(message:string)=>void){
    console.log("fun started running")
    x("Industry")
}

//callit(23)
//callit("raj")
callit(function(x:string){
    console.log(x)
})
