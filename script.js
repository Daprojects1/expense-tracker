let itemName = document.querySelector("#userExpense");
let date = document.querySelector("#userdate");
let amount = document.querySelector("#new-numb");
let mainBtn = document.querySelector(".mainbtn")
let firstTRow = document.querySelector(".none")
let table = document.querySelector("table")
const tbod = document.querySelector(".tbod")
const noExpense = document.querySelector(".noexp")

// adding the different input types into an array to iterate over it in main func
let newRow = [itemName, date, amount];

let reset = ()=> {
  itemName.value= "";
  date.value="";
  amount.value="";
}

const checkIfExpense = () => {
  if (document.querySelectorAll(".newTrow").length >= 1) {
    noExpense.classList.add("none")
  } else {
    noExpense.classList.remove("none")
  }
}


let mainFunc = (arr) => {
  console.log(arr)
  //  checks value length to see whether to run function.
  if (itemName.value.length > 0 && date.value.length > 0 && amount.value.length > 0){
    let newTrow = document.createElement("tr")
    newTrow.classList.add("newTrow")
    //  function below iterates through each input type.
    arr.forEach((item)=>{
    // creates a table data cell for each and appends it to created table row above.
      let newTdc = document.createElement("td")
      newTrow.appendChild(newTdc)
    // adds text content to each data cell
      newTdc.textContent= item.value;
    //  last row adds a £ sign and so this conditional statemnt does a check. Also adds button to this last element. 
      if (item === arr[2]){
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
            checkIfExpense()
        })
        // appending to table
        table.appendChild(newTrow)
   }
    })
  }
}


const addExpense = (e)=> {
    // removing initial message
  e.preventDefault();
  // function that creates new elements.  
  mainFunc(newRow);
  checkIfExpense()
    //  values reset after function is run.
    reset();
}

mainBtn.addEventListener("click", addExpense)

