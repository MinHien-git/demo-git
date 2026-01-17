import "./App.css";
import Bill from "./components/Bill/Bill.components";
import Header from "./components/Header/Header.components";
import SelectTip from "./components/SelectTip/SelectTip.components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container bg-white padding-4">
        {/* Bill */}
        <Bill />
        {/* Select tip */}
        <SelectTip />
        {/* Number of people */}
        {/* Result */}
      </main>
    </div>
  );
}

export default App;
