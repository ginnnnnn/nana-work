import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectCreate from "./pages/project-create/ProjectCreate";
import ProjectsPreview from "./pages/projects-preview/ProjectsPreview";
import Auth from "./pages/auth/Auth";
import NavBar from "./components/nav-bar/NavBar";

// import { useAuth } from "./AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/auth/sign-in" component={Auth} />
          <Route path="/project/create" component={ProjectCreate} />
          <Route path="/" exact component={ProjectsPreview} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
