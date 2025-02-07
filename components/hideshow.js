import { renderToDom } from "../utilities/renderToDom.js";

export const hideBtn = () => {
  renderToDom('#btnRow', '')
  renderToDom('#armyRow', '')
}

export const showBtn = () => {
  const houseButtons = `
    <button id="gryffindor" class="btn">Gryffindor</button>
    <button id="hufflepuff" class="btn">Hufflepuff</button>
    <button id="ravenclaw" class="btn">Ravenclaw</button>
    <button id="slytherin" class="btn">Slytherin</button>
    <button id="all" class="btn">All</button>
  `;
  
  const armyButtons = `
    <button id="death" class="btn">Death Eaters</button>
  `;
  // <button id="phoenix" class="btn">The Order</button>

  renderToDom('#btnRow', houseButtons)
  renderToDom('#armyRow', armyButtons)
}
