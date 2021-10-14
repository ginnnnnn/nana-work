import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectCreate from "./pages/project-create/ProjectCreate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/project/create" component={ProjectCreate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
