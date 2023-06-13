function greetings(name){
    return new Promise((resolve)=>{
        let msg = `Hello, ${name}`
        resolve(msg)
    });
}

greetings('sahil hussain').then((response)=>console.log(response))