async function fetchData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const information =await response.json();
    console.log(information);
}
fetchData();