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
      let ch = newTdc.appendChild(document.createTextNode(item.value))
      newTrow.appendChild(ch)
    })
    table.appendChild(newTrow)
}

mainBtn.addEventListener("click", addExpense)

