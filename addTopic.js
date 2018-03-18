const qs = (element) => document.querySelector(element);
const qsa = (elements) => document.querySelectorAll(elements);

const addButton = qs(".JS-addTopic")
const element = qs(".JS-topics")

const showModalButton = qs('.JS-addTopicButton')
showModalButton.addEventListener("click", function() {
  qs('.newTopicModal').classList.add("newTopicModal--active")
})

let data = [];
let topicId = 0;
let content = "";

addButton.addEventListener("click", function() {
    if(qs( ".JS-topicName").value != "" ) {
      data[topicId] = qs(".JS-topicName").value
      topicId ++;
      content = "";
      qs(".JS-topicName").value = "";
      qs('.newTopicModal').classList.remove("newTopicModal--active")
      printColumns()
    }
  }, false);

function printColumns() {
  data.forEach((n, i) => {
    content +=
    `<div class="column is-3">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    "${ data[i] }"
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    Opis tematu...
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Zagłosuj</a>
                <a href="#" class="card-footer-item">Chcę być trenerem</a>
            </footer>
        </div>
    </div>`
    // ciekawy myk zamiast innerHTML ale ponoć nie wszędzie działa
    // element.insertAdjacentHTML('beforeend', text);
  });
  qs(".JS-topics").innerHTML = content;
}
