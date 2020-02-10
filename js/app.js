const list = document.querySelectorAll(".student-item");

const page = document.querySelectorAll(".page");

const showPage = (list, page) => {
  
 const startIndex = (page * 9) - 9;
 const endIndex = page * 9;
  
 for(i=0;i<list.length; i++) {
    
    if(i >= 0 && i <= 10) {
      
      list[i].style.display = "";
      
    }
   
    else(i >= startIndex && i <= endIndex) {
      
      list[i].style.display = "";
      
    }
  }
  
 
  //How would I call to test the function?
  
}
showPage(list, 1)
