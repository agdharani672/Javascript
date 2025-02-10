let books=[]
function displayOutput() {
    console.log("function called");
    const listBooksHtml = books.map((book) => `<p>${book.name} - ${book.authorName} - ${book.bookDescription} - ${book.pagesNumber}</p>`);
    console.log("listBooksHtml", listBooksHtml);
    document.getElementById("books").innerHTML = listBooksHtml.join('');  // Join the array into a string
}


function clearInputs(){
    document.getElementById("bookName").value=""
    document.getElementById("authorName").value=""
    document.getElementById("bookDescription").value=""
    document.getElementById("pagesNumber").value=0
}

function addBook(){
    let bookName=document.getElementById("bookName").value
    console.log("bookName",bookName)
    let authorName=document.getElementById("authorName").value
    console.log("authorName",authorName)
    let bookDescription=document.getElementById("bookDescription").value
    console.log("bookDescription",bookDescription)
    let pageNumbers=parseInt(document.getElementById('pagesNumber').value);
    console.log("pageNumbers",pageNumbers)
    if(bookName && authorName && bookDescription && !isNaN(pageNumbers)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pageNumbers
        };
        console.log("book",book)
        books.push(book);
        displayOutput()
        clearInputs()
    }
    else{
        alert("please enter valid book details")
    }

}