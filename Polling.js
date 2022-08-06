const box = document.getElementsByClassName("box");

const getWidth = () => {
  console.log("Fetch!");
  fetch(`http://localhost:3000/getNumber`)
    .then((response) => {
      return response.json();
    })
    .then((d) => {
      box[0].style.width = `${d}px`;
    })
    .catch((e) => {
      console.log(e);
    });
};

// Polling
function shortPolling() {
  getWidth();
}
// setInterval(shortPolling, 3000);

// Long Polling
function longPolling() {
  setTimeout(function () {
    getWidth();
    longPolling();
  }, 3000);
}
longPolling();
