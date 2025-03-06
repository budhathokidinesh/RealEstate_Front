import "./App.css";
import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/hero/Hero";
import Companies from "@/components/companies/Companies";
import Residencies from "@/components/Residencies/Residencies";
import Value from "@/components/Value/Value";

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
      <Value />
    </div>
  );
}

export default App;
