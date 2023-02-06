import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
 
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/dashboard">
          <Navbar/>
          <Dashboard/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
 
export default App;