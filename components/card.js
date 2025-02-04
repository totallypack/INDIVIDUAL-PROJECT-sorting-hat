export const cards = (object) => {
  return `
  <div class="card" data-id="${object.id}">
    <img src="${object.img}" class="card-img">
    <div class="card-img-overlay">
      <h5 class="card-title">${object.name}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small>Last updated 3 mins ago</small></p>
    </div>
  </div>
  `
}
