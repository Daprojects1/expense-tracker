let itemName = document.querySelector("#userExpense");
let date = document.querySelector("#userdate");
let amount = document.querySelector("#new-numb");
let mainBtn = document.querySelector(".mainbtn")
let firstTRow = document.querySelector(".none")
let table = document.querySelector("table")

// adding the different input types into an array to iterate over it in main func
let newRow = [itemName, date, amount];


const addExpense = (e)=> {
    // removing initial message
    e.preventDefault();
    firstTRow.remove();
    // checks value length to see whether to run function.
      if (itemName.value.length > 0 && date.value.length > 0 && amount.value.length > 0){
        let newTrow = document.createElement("tr")
        //  function below iterates through each input type.
        newRow.forEach((item)=>{
        // creates a table data cell for each and appends it to created table row above.
          let newTdc = document.createElement("td")
          newTrow.appendChild(newTdc)
        // adds text content to each data cell
          newTdc.textContent= item.value;
        //  last row adds a £ sign and so this conditional statemnt does a check. Also adds button to this last element. 
          if (item === newRow[2]){
              newTdc.classList.add("relative");
            newTdc.textContent = "£"+ " "+item.value
            let newbtn = document.createElement("button")
            // adding css styles and text content for button. 
            newbtn.classList.add("color")
            newbtn.classList.add("newBtn")
            newbtn.textContent= "X";
            newTdc.appendChild(newbtn)
            // button delete function
            newbtn.addEventListener("click", (e)=> {
                 e.preventDefault();  
                newTrow.remove();
            })
            // appending to table
            table.appendChild(newTrow)
       }
        })
      }
    //  values reset after function is run.
      itemName.value= "";
      date.value="";
      amount.value="";
}

mainBtn.addEventListener("click", addExpense)

