import { cards } from "../components/card.js";
import { formHTML } from "../components/form.js";
import { studentList } from "../data/reference.js";
import { renderToDom } from "../utilities/renderToDom.js";

const renderCards = (array) => {
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
    student.isExpelled = true;
    student.death = true;
  } else {
    student.death = false;
  }
      renderCards(studentList.death);
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
};

// FORM HANDLER
const createStudent = (e) => {
  e.preventDefault();
  const name = document.querySelector('#studentName').value;
  const title = document.querySelector('#studentTitle').value;
  
  // RANDOM HOUSE
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];

  // ASSIGN IMAGES TO HOUSES
  const houseImg = (house) => {
    if (house.toLowerCase() === "gryffindor") {
      return "./assets/images/g.png";
    }
    if (house.toLowerCase() === "hufflepuff") {
      return "./assets/images/h.png";
    }
    if (house.toLowerCase() === "ravenclaw") {
      return "./assets/images/r.png";
    }
    if (house.toLowerCase() === "slytherin") {
      return "./assets/images/s.png";
    }
  };

  // CREATE NEW STUDENT OBJECT
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
  
  // HIDE ALL ELEMENTS
  const elementsToHide = ['#form', '#start', '#btnRow', '#armyRow'];
  elementsToHide.forEach(element => {
    const el = document.querySelector(element);
    if (el) {
      el.style.visibility = 'hidden'
  };
});
  
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
    
    // SHOW ELEMENTS AGAIN
    elementsToHide.forEach(element => {
      const el = document.querySelector(element);
      if (el) {
        el.style.visibility = 'visible';
      }
    });
  });
};

// START APP
const startApp = () => {
  document.querySelector('#btnRow').addEventListener('click', buttonFilter);
  document.querySelector('#cards').addEventListener('click', deleteStudent);
  document.querySelector('#armyRow').addEventListener('click', armyFilter);
  document.querySelector('#form-toggle-btn').addEventListener('click', toggleForm);
  document.querySelector('#form').style.display = 'none';
}
startApp();
