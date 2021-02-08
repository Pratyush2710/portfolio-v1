import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import "./css/main.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import { Route, Switch } from "react-router-dom";
import Pages from "./pages";
import Blog from "./pages/blog";
import Error from "./pages/404";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Pages />
        </Route>
        <Route path="/blogs" component={Blog} />
        <Route path="" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
