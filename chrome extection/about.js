let lead = [];
const input = document.getElementById("input-func");
const button = document.getElementById("button-func");
const list = document.getElementById("list-func");

button.addEventListener("click", function () {
  lead.push(input.value);
  console.log(lead);
  input.value = ""
  activation()
});

function activation() {
  let listitem = "";
  for (let i = 0; i < lead.length; i++) {
    listitem += "<li> <a target = '_black' href = '" + lead[i] + "'>" + lead[i] +  "</a></li>"
  }
  list.innerHTML = listitem;
}
  
const o = "gg to you"


const t = 'bla bla bla ' 


console.log(t)