const list = document.querySelectorAll(".student-item");

const page = document.querySelectorAll(".page");
const maxprPage = 10;

const showPage = (list, page) => {
  
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
  
 
  //How would I call to test the function?
  
}




function appendPageLinks (list) {
  
  
  const pageNumbers = page.length/maxprPage; //Dividing the page.length with the max amount items pr page
  const div = document.createElement("div"); //creating the div element 
  const ul = document.createElement("ul"); //creating the ul element
  ul.className = "pagination";

  
  
  
  for (i=0; i< page.length; i++) { //loop through all page elemnts 
            
          const li = document.createElement("li"); //create every li element
          const a = document.createElement("a"); //create an a tag element
          li.appendChild(a); //append li to the a element
          a.textContent = i; //setting the text content of a to the i'th number
          a.href = "#";
          div.appendChild(ul); //append div to li
          
                                 
   
          a.addEventListener("click", (e) => { //add an eventlistner when ever it is pressed
    
          const divLength =  e.target.className = "active"; //target the active class and removing it
          divLength.removeClass;
    
          })
    
    //remainding:
      
// The active class name should be added to the link that was just clicked. The target property of the event object should be useful here. ? 
   //   The function to show a page should be called, passing in as arguments, the global variable for the list items, and the page number that should be shown. The text content of the A element that was just clicked can be helpful here
                             }
  } 
    
showPage(list, 1);
appendPageLinks(list);
  

