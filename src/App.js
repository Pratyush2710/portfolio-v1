import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import "./css/main.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Jobs from "./components/Jobs";
function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Services />
        <Jobs />
      </Layout>
    </div>
  );
}

export default App;
