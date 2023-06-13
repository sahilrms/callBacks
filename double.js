function twiceArray(arr,func){
    let newArr = arr.map((item)=>{
        return func(item)
    })
    return newArr
}

function func(item){
    return item*2
}

console.log(twiceArray([1,2,3,4,5],func))