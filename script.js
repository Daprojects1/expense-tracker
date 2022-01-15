let itemName = document.querySelector("#userExpense");
let date = document.querySelector("#userdate");
let amount = document.querySelector("#new-numb");
let mainBtn = document.querySelector(".mainbtn")
let firstTRow = document.querySelector(".none")
let table = document.querySelector("table")

let newRow = [itemName, date, amount];

const addExpense = (e)=> {
    e.preventDefault();
    firstTRow.remove();
    let newTrow = document.createElement("tr")
    newRow.forEach((item)=>{
      let newTdc = document.createElement("td")
      newTrow.appendChild(newTdc)
      newTdc.innerHTML= item.value;
      if (item === newRow[2]){
        newTdc.innerHTML = "£"+ " "+item.value
        let newbtn = document.createElement("button")
        newbtn.classList.add("color")
        newbtn.innerHTML= "X";
        newTdc.appendChild(newbtn)
   }
      table.appendChild(newTrow)
    })
}

mainBtn.addEventListener("click", addExpense)

