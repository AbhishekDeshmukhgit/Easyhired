import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import LoginPage from "./pages/login";
// import Navigation from "./components/navigation";
import Navigation from "./components/navigation";
import UserDetails from "./pages/userDetails";
import SetRole from "./pages/setRole";
import FindJob from "./pages/findJob";
import ApplyJob from "./pages/applyJob";
import GiveJob from "./pages/findEmployee";
import Dashboard from "./pages/dashboard";
import AboutUs from "./pages/aboutUs";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <BrowserRouter>
    <Navigation username="chirag" />
      {/* {isLoggedIn ? <UserNavbar username="chirag" /> : <Navigation />} */}
      <Routes>
        <Route path="/" element={isLoggedIn?<SetRole/>:<LoginPage/>} />
        <Route path={isLoggedIn?`/user/setRole` : `/`} element={isLoggedIn? <SetRole/>: <LoginPage />} />
        <Route path="/user">
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="/findJob" element={<FindJob />} />
        <Route path="/givejob" element={<GiveJob /> } />
        <Route path="/jobform" element={<ApplyJob />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
