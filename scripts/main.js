import { cards } from "../components/card.js";
import { formHTML } from "../components/form.js";
import { studentList } from "../data/reference.js";
import { houseImg } from "../components/houseimgs.js";
import { renderToDom } from "../utilities/renderToDom.js";
import { hideBtn, showBtn } from "../components/hideshow.js";

const renderCards = (array) => {
  if (array.length > 0) {
    const displayType = array[0].death ? 'Death Eaters' : array[0].house;
    const header = `<h1 class="text-center mb-4">${displayType}</h1>`;
    renderToDom("#header", header);
  } else {
    renderToDom("#header", '');
  }
  
  let content = "";
  array.forEach((object) => {
    content += cards(object);
  })
  renderToDom("#cards", content);
};

// EVENT LISTENERS FOR FILTER BUTTONS
const buttonFilter = (event) => {
  if(event.target.id.includes('gryffindor')) {
    const houses = studentList.filter(object => object.house.toLowerCase() === 'gryffindor');
    renderCards(houses);
  }
  if(event.target.id.includes('hufflepuff')) {
    const houses = studentList.filter(object => object.house.toLowerCase() === 'hufflepuff');
    renderCards(houses);
  }
  if(event.target.id.includes('ravenclaw')) {
    const houses = studentList.filter(object => object.house.toLowerCase() === 'ravenclaw');
    renderCards(houses);
  }
  if(event.target.id.includes('slytherin')) {
    const houses = studentList.filter(object => object.house.toLowerCase() === 'slytherin');
    renderCards(houses);
  }
  if(event.target.id.includes('all')) {
    renderCards(studentList);
  }
};

const armyFilter = (event) => {
  if(event.target.id.includes('phoenix')) {
    const army = studentList.filter(object => object.phoenix);
    renderCards(army);
  }
  if(event.target.id.includes('death')) {
    const army = studentList.filter(object => object.death);
    renderCards(army);
  };
};

// EXPEL STUDENTS FUNCTION
const deleteStudent = (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const id = parseInt(event.target.dataset.studentId);
    const index = studentList.findIndex((object) => object.id === id);
    if (index !== -1) {
      const student = studentList[index];
      student.death = !student.death;

      if (student.death) {
        const deathEaters = studentList.filter(object => object.death);
        renderCards(deathEaters);
      } else {
        const houseMembers = studentList.filter(object => 
          object.house.toLowerCase() === student.house.toLowerCase()
        );
        renderCards(houseMembers)
      }
    }
  }
};

// TOGGLE THE FORM IN
const toggleForm = () => {
  const formDiv = document.querySelector('#form');
  const startButton = document.querySelector('#start');
  
  renderToDom('#form', formHTML);
  formDiv.style.display = 'block';
  startButton.style.display = 'none';
  
  document.querySelector('#infoForm').addEventListener('submit', createStudent);
  document.querySelector('#intro')

  renderToDom('#intro', '')
};

// FORM HANDLER
const createStudent = (e) => {
  e.preventDefault();
  const name = document.querySelector('#studentName').value;
  const title = document.querySelector('#studentTitle').value;
  
  // // RANDOM HOUSE
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];

  // // CREATE NEW STUDENT OBJECT
  const newStudent = {
    id: studentList.length + 1,
    name: name,
    house: randomHouse,
    title: title,
    img: houseImg(randomHouse),
    phoenix: false,
    death: false
  };

  studentList.push(newStudent);
  document.querySelector('#infoForm').reset();
  renderToDom('#cards', '');
  
  // // REVEAL HOUSE
  const reveal = `
    <div id="houseReveal" class="text-center">
      <h2 class="${randomHouse.toLowerCase()}-text">Welcome to ${randomHouse}!</h2>
      <img src="${houseImg(randomHouse)}" class="reveal-img" data-house="${randomHouse.toLowerCase()}" style="cursor: pointer;">
    </div>
  `;
  renderToDom('#welcome', reveal);

  document.querySelector('.reveal-img').addEventListener('click', () => {
    const houses = studentList.filter(object => 
      object.house.toLowerCase() === randomHouse.toLowerCase()
    );
    renderCards(houses);
    document.querySelector('#houseReveal').remove();
    showBtn()
  });
};

// START APP
const startApp = () => {
  hideBtn()
  document.querySelector('#form').style.display = 'none';
  document.querySelector('#armyRow').addEventListener('click', armyFilter);
  document.querySelector('#btnRow').addEventListener('click', buttonFilter);
  document.querySelector('#cards').addEventListener('click', deleteStudent);
  document.querySelector('#form-toggle-btn').addEventListener('click', toggleForm);
}

startApp();
