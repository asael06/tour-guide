export const manageCart = (action, tour, setState) => {
  let tours = JSON.parse(sessionStorage.getItem("toursSelected")) || [];
  if (action === "add") tours.push(tour);
  else tours = tours.filter((item) => item.id !== tour.id);
  setState && setState(tours);
  sessionStorage.setItem("toursSelected", JSON.stringify(tours));
};
