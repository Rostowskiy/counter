// Конфигурация и состояние счетчика
const MIN_COUNT = 0;
const MAX_COUNT = 10;
let count = 0; // Текущее значеине счетчика
//Восстанавливаем старые значения из памяти браузера
const saved = localStorage.getItem("count");
if (saved !== null) {
  count = Number(saved);
}
//Находим элементы в DOM
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resBtn = document.getElementById("res");
//Отображаем текущее состояние и сохраняем
function render() {
  countEl.innerText = count; // показываем актуальное значение счетчика
  if (count === 0) {
    document.body.style.backgroundColor = "red";
  } else if (count <= 4) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "green";
  }
  localStorage.setItem("count", count); //сохранить значение в память браузера
}

// обработчик увеличения счетчика
incBtn.addEventListener("click", function () {
  if (count < MAX_COUNT) {
    count++;
  }

  render();
});

//Обработчик уменьшения счетчика
decBtn.addEventListener("click", function () {
  if (count > MIN_COUNT) {
    count--;
  }
  render();
});

//Обработчик сброса
resBtn.addEventListener("click", function () {
  count = 0;
  render();
});
//Первый рендер при загрузке страницы
render();
