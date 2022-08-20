const element = (
  <div className="congratsCardApp-bg-container">
    <h1 className="Congrats-heading">Congratulations</h1>
    <div className="Congrats-card">
      <img
        className="congrats-card-profile-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      ></img>
      <h1 className="congrats-card-profile-name">Kiran V</h1>
      <p className="congrats-card-profile-clg-name">
        Vishnu Institute of computer Education and Technology, Bhimavaram
      </p>
      <img
        className="congrats-card-watch-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      ></img>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
