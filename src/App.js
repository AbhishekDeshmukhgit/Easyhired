import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
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
import Dashboardform from "./components/forms/Dashboardform";
import { useAuthContext } from "./hooks/useAuthContext";




function App() {

  const {authIsReady,user}=useAuthContext()
  return (
    <div className="App">
    {authIsReady && (
    <BrowserRouter>
    <Navigation username="abhi" />
      {/* {isLoggedIn ? <UserNavbar username="chirag" /> : <Navigation />} */}
      <Routes>
        <Route path="/" element={!user?<LoginPage/>:<Navigate replace to={"/findJob"}/>} />
        <Route path="/user/setRole" element={user?<SetRole/>:<Navigate replace to={"/"}/>} />
        <Route path="/user">
          <Route path=":userId" element={user?<UserDetails />:<Navigate replace to={"/"}/>} />
        </Route>
        <Route path="/findJob" element={user?<FindJob />:<Navigate replace to={"/"}/>} />
        <Route path="/givejob" element={user?<GiveJob />:<Navigate replace to={"/"}/> } />
        <Route path="/post" element={user?<PostSkills/>:<Navigate replace to={"/"}/> } />
        <Route path="/jobform/:id" element={user?<ApplyJob />:<Navigate replace to={"/"}/>} />
        <Route path="/dashboard" element={user?<Dashboard/>:<Navigate replace to={"/"}/>} />
        <Route path="/aboutus" element={user?<AboutUs />:<Navigate replace to={"/"}/>} />
        <Route path='/findJob/:id' element={user?<Read/> :<Navigate replace to={"/"}/>}/>
        <Route path='/findJob/post/:id' element={user?<Hireread/> :<Navigate replace to={"/"}/>}/>
        <Route path="/hireme/:id" element={user?<HireJob/>:<Navigate replace to={"/"}/>} />
        <Route path="/dashboardform" element={user?<Dashboardform/>:<Navigate replace to={"/"}/>} />

      </Routes>
    </BrowserRouter>
    )}
    </div>
  );
}

export default App;
