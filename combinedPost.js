async function getCombinedData(){
    const [todos,posts]=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then(res=>res.json())
        ,fetch("https://jsonplaceholder.typicode.com/posts/1").then(res=>res.json())])
        const combinedData = {
            todo:todos,
            posts:posts
        }
        return combinedData
}

getCombinedData().then(resp=>console.log(resp))