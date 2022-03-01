interface Callback{
   (message:string):void
}

interface Predicate{
    (x:number):boolean
}

function fun(a:Callback){
     a("store")
     console.log("Finished the function")
}

function accept(a:Predicate){
    let result=a(43)
    console.log("result is ",result)
}

accept(x=>x%2==0)
//accept(x=>x)

fun(x=> console.log("We are processing it ",x))
