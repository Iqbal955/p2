const list = document.querySelectorAll(".student-item");

const page = document.querySelector(".page");
const maxprPage = 10;


//show page function

    function showPage (list, page) {
  
        const startIndex = (page * 9) - 9;
        const endIndex = page * 9;
  
          for(i=0;i<list.length; i++) {
    
            if(i >= startIndex && i <= endIndex) {
      
               list[i].style.display = "";
      
    }
   
        else{
   

      
      list[i].style.display = "none";
      
    }
  }
  
 
  
}




function appendPageLinks (list) {
  
  
  const pageNumbers = Math.ceil(page.length/maxprPage); //Dividing the page.length with the max amount items pr page
  const div = document.createElement("div"); //creating the div element 
  const ul = document.createElement("ul"); //creating the ul element
  div.className = "pagination"; //assign className to the div
  div.appendChild(ul); //append the ul to the div

  
  
  
  for (i=0; i< list.length; i++) { //loop through all page elemnts 
    
   
          const li = document.createElement("li"); //create every li element
          const a = document.createElement("a"); //create an a tag element
                li.appendChild(a); //append a to li
                ul.appendChild(li); //append li to ul
                div.append(ul); //append to ul
                a.textContent = i; //setting the text content of a to the i'th number
                a.href = "#";
                          
   
                a.addEventListener("click", (e) => { 
    
                     var pagination = document.querySelector("pagination a"); //targetting the a of pagination class
                         for(let i = 0; i<pagination.length; i++) {
              
              
                              pagination[i].className = ""; //setting the pagination empty(`why?)
              
              
            }
            
   e.target.classList.add("active"); //so the button that has been clicken, the active class has been                                                      added, and the active class has been added, so it will display
            
   showPage(list, e.target.innerHTML); //not sure whats happening here
    
          })



}
 
  page.append(div);
  } 
    
showPage(list, 1); //so I call the showpage, to display the first page
appendPageLinks(list); // whats happening here?
