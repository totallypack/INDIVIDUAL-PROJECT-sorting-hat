export const houseImg = (house) => {
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
