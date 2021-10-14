import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectCreate from "./pages/project-create/ProjectCreate";
import ProjectsPreview from "./pages/projects-preview/ProjectsPreview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ProjectsPreview} />
          <Route path="/project/create" component={ProjectCreate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
