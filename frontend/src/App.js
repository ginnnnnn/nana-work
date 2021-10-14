import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectCreate from "./pages/project-create/ProjectCreate";
import ProjectsPreview from "./pages/projects-preview/ProjectsPreview";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ProjectsPreview} />
          <Route path="/project/create" component={ProjectCreate} />
          <Route path="/auth/sign-in" component={Auth} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
