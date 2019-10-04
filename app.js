
//delete books
document.addEventListener('DOMContentLoaded',  ()=>{
    const list = document.querySelector('#book-list ul');

    list.addEventListener('click', (e) => {
      if (e.target.className == 'delete') {
          const li = e.target.parentElement;
          list.removeChild(li);
      }
    });
    
    //add Books
    
    const addForm = document.forms['add-book'];
    
    addForm.addEventListener ('submit', (e)=>{
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    
    //create new elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    
    //add content to the new appended children
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;
    
    //Add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    
    //append to DOM
    //arrange chronologically::order matters
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    });
    
    //hideBox
    const hideBox = document.querySelector('#hide');
    
    hideBox.addEventListener('change', (e)=>{
     if (hideBox.checked) {
         list.style.display = "none";
     }
     else {
      list.style.display = "block";
     }
    })
    
    
    //Search box (filterBooks)
    
    const searchBar = document.forms['search-books'].querySelector('input');
    
    searchBar.addEventListener('keyup', (e)=>{
     const term = e.target.value.toLowerCase();
     const books = list.getElementsByTagName('li');
     Array.from(books).forEach(book =>{
         const title = book.firstElementChild.textContent;
         if(title.toLowerCase().indexOf(term)!= -1){
             book.style.display = "block";
         }
         else{
             book.style.display = "none";
         }
     })
    })
})

//a keyup event is when we click a key and release it.