// Identitas
const formIdentitas = document.getElementById("form-identitas");
const displayIdentitas = document.querySelector(".identity-display");
const todoContainer = document.querySelector(".container");

formIdentitas.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("input-nama").value;
  const nim = document.getElementById("input-nim").value;
  const kelas = document.getElementById("input-kelas").value;
  const tanggal = document.getElementById("input-tanggal").value;

  document.getElementById("nama").textContent = nama;
  document.getElementById("nim").textContent = nim;
  document.getElementById("kelas").textContent = kelas;
  document.getElementById("tanggal").textContent = new Date(tanggal).toLocaleDateString("id-ID", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });

  formIdentitas.parentElement.style.display = "none";
  displayIdentitas.style.display = "block";
  todoContainer.style.display = "block";
});

// To-Do List
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";
});
