import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Homepage from "./components/Homepage";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Homepage />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
