let a = 20;
let b = 0;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30)
    }, 2000);
})
waitingData.then((data)=>{
    console.log(a+data)
}).catch((error)=>{
    console.log("Error")
})