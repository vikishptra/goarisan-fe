import { BrowserRouter, Route, Routes} from "react-router-dom";
import EmailKonfirm from "./Helper/EmailKonfirm";
import EmailKadaluarsa from "./Helper/EmailKadaluarsa";
import KesalahanUser from "./Helper/KesalahanUser";
import EmailKonfirmSuccess from "./Helper/EmailKonfirmSuccess";
import TokenKadaluarsa from "./Helper/TokenKadaluarsa";
import RegisterUser from "./Pages/RegisterUser/RegisterUser";
import LoginUser from "./Pages/LoginUser/LoginUser";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import NewPasswordUser from "./Pages/UserNewPassword/NewPasswordUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/emailconfirm" element={<EmailKonfirm/>} />
      <Route path="/emailkadaluarsa" element={<EmailKadaluarsa/>} />
      <Route path="/kesalahanuser" element={<KesalahanUser/>} />
      <Route path="/emailsuccess" element={<EmailKonfirmSuccess/>} />
      <Route  path="/tokenkadaluarsa" element={<TokenKadaluarsa/>} />
      <Route path="/new/password" element={<NewPasswordUser/>} />
      <Route path="/register" element={<RegisterUser/>} />
      <Route path="/login" element={<LoginUser/>} />
      <Route path="/dashboard" element={<DashboardHome/>} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;