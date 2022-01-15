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
        // adds 
          newTdc.textContent= item.value;
          if (item === newRow[2]){
              newTdc.classList.add("relative");
            newTdc.textContent = "£"+ " "+item.value
            let newbtn = document.createElement("button")
            newbtn.classList.add("color")
            newbtn.classList.add("newBtn")
            newbtn.textContent= "X";
            newTdc.appendChild(newbtn)
            newbtn.addEventListener("click", (e)=> {
                 e.preventDefault();  
                newTrow.remove();
            })
            table.appendChild(newTrow)
       }
        })
      }
      itemName.value= "";
      date.value="";
      amount.value="";
}

mainBtn.addEventListener("click", addExpense)

