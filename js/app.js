const list = document.querySelector(.student-list);
console.log(list);
const page = document.querySelector(.page);
console.log(page);

const showPage = (list, page) => {
  
 const startIndex = (page * 10) - 10;
 const endIndex = page * 10;
  
 for(i=0;i<list.length; i++) {
    
    if(list[i] >= startIndex && list[i] <= endIndex) {
      
      list[i].style.display = "";
      
    }
  }
  
  
  
  //How would I call to test the function?
  
}
