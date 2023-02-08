import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/user/Dashboard";
import Navbar from "./components/Navbar";
import EmailKonfirm from "./helper/EmailKonfirm";
import EmailKadaluarsa from "./helper/EmailKadaluarsa";
import KesalahanUser from "./helper/KesalahanUser";
import EmailKonfirmSuccess from "./helper/EmailKonfirmSuccess";
 
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/emailconfirm">
          <EmailKonfirm/>
        </Route>
        <Route path="/emailkadaluarsa">
          <EmailKadaluarsa/>
        </Route>
        <Route path="/kesalahanuser">
          <KesalahanUser/>
        </Route>
        <Route path="/emailsuccess">
          <EmailKonfirmSuccess/>
        </Route>
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