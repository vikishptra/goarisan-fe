import { BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/user/Dashboard";
import Navbar from "./components/Navbar";
import EmailKonfirm from "./helper/EmailKonfirm";
import EmailKadaluarsa from "./helper/EmailKadaluarsa";
import KesalahanUser from "./helper/KesalahanUser";
import EmailKonfirmSuccess from "./helper/EmailKonfirmSuccess";
import NewPassword from "./components/NewPassword";
import TokenKadaluarsa from "./helper/TokenKadaluarsa";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/emailconfirm" element={ <EmailKonfirm/>} />
      <Route path="/emailkadaluarsa" element={<EmailKadaluarsa/>} />
      <Route path="/kesalahanuser" element={ <KesalahanUser/>} />
      <Route path="/emailsuccess" element={ <EmailKonfirmSuccess/>} />
      <Route  path="/tokenkadaluarsa" element={ <TokenKadaluarsa/>} />
      <Route path="/new/password" element={   <NewPassword/>} />
      <Route path="/register" element={   <Register/>} />
      <Route path="/login" element={   <Login/>} />
      <Route path="/dashboard" element={<>
        <Navbar/>
          <Dashboard/>
      
      </>} />


      {/*
        <Route path="">
      
        </Route>
        <Route path="">
          
        </Route>
        <Route >
          
        </Route>
        <Route>
          
        </Route>
        <Route >
        
        </Route>
        <Route >
        
        </Route>
        <Route path="/login">
        
        </Route>
        <Route >
         
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;