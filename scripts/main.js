import { cards } from "../components/card.js";
import { enterInfo } from "../components/form.js";
import { studentList } from "../data/reference.js";
import { renderToDom } from "../utilities/renderToDom.js";

const renderCards = (array) => {
  let content = "";
  array.forEach((object) => {
    content += cards(object);
  })

  renderToDom("#cards", content);
}

const startApp = () => {
  // PUT ALL CARDS ON THE DOM
  renderCards(studentList)

  // SELECT THE CARD DIV
  document.querySelector('#cards');
}
startApp();
