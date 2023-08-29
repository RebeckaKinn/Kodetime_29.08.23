//MODEL

let app = document.getElementById("app");

//VIEW

updateView();
function updateView() {
  app.innerHTML = /*HTML*/ `
    <div id="container">
        <div id="mathProblem"></div>
        <button>GET MATH</button>
        <input autofocus type="text" value="">
        <div id="result"></div>
        <div></div>
    </div>
  `;
}

//CONTROLLER