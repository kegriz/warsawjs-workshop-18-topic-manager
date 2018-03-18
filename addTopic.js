// console.log("aaaa")

const qs = (element) => document.querySelector(element);
const qsa = (elements) => document.querySelectorAll(elements);

const addButton = qs(".JS-addTopic")

let data = [];
let topicId = 0;
let content = "";

addButton.addEventListener("click", function() {
    data[topicId] = qs(".JS-topicName").value
    topicId ++;
    content = "";
    printColumns()
  }, false);

function printColumns() {
  data.forEach((n, i) => {
    content += '<li class="column">'+data[i]+'</li>';
  });
  qs(".JS-topics").innerHTML = content;
}
