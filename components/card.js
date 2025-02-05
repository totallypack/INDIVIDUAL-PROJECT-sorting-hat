export const cards = (object) => {
  return `
  <div class="card" data-id="${object.id}">
    <img src="${object.img}" class="card-img">
    <div class="card-img-overlay">
      <h5 class="card-title">${object.title}</h5>
      <p class="card-text">${object.name}</p>
    </div>
  </div>
  `
}
