// script.js

// Simulated database (in reality, this would be your server/database)
let data = [];

// Function to display data in the container
function displayData() {
  const container = document.getElementById('data-container');
  container.innerHTML = '';

  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('data-item');
    div.innerHTML = `
      <p><strong>Nama:</strong> ${item.name}</p>
      <p><strong>NPM:</strong> ${item.npm}</p>
      <p><strong>Kelas:</strong> ${item.kelas}</p>
      <p><strong>Jurusan:</strong> ${item.jurusan}</p>
      <button onclick="editData(${index})">Edit</button>
      <button onclick="deleteData(${index})">Delete</button>
    `;
    container.appendChild(div);
  });
}

// Function to add data
function addData(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const npm = document.getElementById('npm').value;
  const kelas = document.getElementById('kelas').value;
  const jurusan = document.getElementById('jurusan').value;

  if (name && npm && kelas && jurusan) {
    data.push({ name, npm, kelas, jurusan });
    displayData();
    document.getElementById('name').value = '';
    document.getElementById('npm').value = '';
    document.getElementById('kelas').value = '';
    document.getElementById('jurusan').value = '';
  }
}

// Function to edit data
function editData(index) {
  const newName = prompt('Enter new name:');
  const newNpm = prompt('Enter new NPM:');
  const newKelas = prompt('Enter new class:');
  const newJurusan = prompt('Enter new major:');

  if (newName && newNpm && newKelas && newJurusan) {
    data[index].name = newName;
    data[index].npm = newNpm;
    data[index].kelas = newKelas;
    data[index].jurusan = newJurusan;
    displayData();
  }
}

// Function to delete data
function deleteData(index) {
  data.splice(index, 1);
  displayData();
}

// Event listener for form submission
const form = document.getElementById('crud-form');
form.addEventListener('submit', addData);

// Initial display of data
displayData();
