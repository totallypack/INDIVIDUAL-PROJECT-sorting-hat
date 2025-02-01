import { card } from "../components/card.js";
import { enterInfo } from "../components/form.js";
import { studentList } from "../data/reference.js";
import { renderToDom } from "../utils/renderToDom.js";



const startApp = () => {
  // PUT ALL CARDS ON THE DOM
  renderCards(studentList)

  // SELECT THE CARD DIV
  document.querySelector('#cards').addEventListener('click', toggleCart);
}
startApp();
