import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
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
import PostSkills from "./pages/postskills";
import Read from "./components/read/Read";
import Hireread from "./components/hireread/Hireread";
import HireJob from "./pages/hirejob";


function App() {

  return (
    <BrowserRouter>
    <Navigation username="chirag" />
      {/* {isLoggedIn ? <UserNavbar username="chirag" /> : <Navigation />} */}
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/user/setRole" element={<SetRole/>} />
        <Route path="/user">
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="/findJob" element={<FindJob />} />
        <Route path="/givejob" element={<GiveJob /> } />
        <Route path="/post" element={<PostSkills/> } />
        <Route path="/jobform/:id" element={<ApplyJob />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/findJob/:id' element={<Read/> }/>
        <Route path='/findJob/post/:id' element={<Hireread/> }/>
        <Route path="/hireme/:id" element={<HireJob/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
