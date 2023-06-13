let books = [{
    'title':'C complete refrence',
    'author':'Herbit',
    'year': 2020
},
{
    'title':'C++ complete refrence',
    'author':'Robert',
    'year': 2020
},
{
    'title':'BEEE',
    'author':'B l Thareja',
    'year': 2020
}]

function booksTitleFinder(books,callBack){
    let bookTitles =  books.map((i)=>i.title)
    callBack(bookTitles)
}

function sorter(bookTitles){
    console.log(bookTitles.sort().join(", "));
}
booksTitleFinder(books,sorter);