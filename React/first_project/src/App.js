import "./App.css";
import Button from "./components/Button/Button";

function App() {
  function handleClick() {
    alert("Button clicked!");
  }
  return (
    <div className="app">
      <div className="card">
        <img src="./logo.svg" alt="React Logo" />
        <h1>Order Summary</h1>
        <p>You can now listen to millions of songs audiobooks, and o</p>
        <div className="plan-details">
          <img src="./icon-music.svg" alt="Music Icon" />
          <div>
            <p>Annual Plan</p>
            <strong>$59.99/year</strong>
          </div>
          <a href="#change">Change</a>
        </div>
        <div className="btn-container">
          <Button buttonText="Proceed to Payment" onClick={handleClick} />
          <Button
            className={"border-0"}
            buttonText="Cancel Order"
            onClick={handleClick}
          />
          {/* <button>Proceed to Payment</button>
          <button className="cancel-button">Cancel Order</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
