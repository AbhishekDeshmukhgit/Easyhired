import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import LoginPage from "./pages/login";
import Navigation from "./components/navigation";
import UserNavbar from "./components/navigation/userNavbar";
import UserDetails from "./pages/userDetails";
import SetRole from "./pages/setRole";
import FindJob from "./pages/findJob";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // console.log(isLoggedIn);

  return (
    <BrowserRouter>
      {isLoggedIn ? <UserNavbar /> : <Navigation username="chirag" />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user">
          <Route path="setRole" element={<SetRole />} />
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="/findJob" element={<FindJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
