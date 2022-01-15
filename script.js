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
      if (itemName.value.length > 0 && date.value.length > 0 && amount.value.length > 0){
        let newTrow = document.createElement("tr")
        newRow.forEach((item)=>{
          let newTdc = document.createElement("td")
          newTrow.appendChild(newTdc)
          newTdc.innerHTML= item.value;
          if (item === newRow[2]){
              newTdc.classList.add("relative");
            newTdc.innerHTML = "£"+ " "+item.value
            let newbtn = document.createElement("button")
            newbtn.classList.add("color")
            newbtn.classList.add("newBtn")
            newbtn.innerHTML= "X";
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

