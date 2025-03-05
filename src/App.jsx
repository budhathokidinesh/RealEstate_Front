import "./App.css";
import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/hero/Hero";
import Companies from "@/components/companies/Companies";
import Residencies from "@/components/Residencies/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
