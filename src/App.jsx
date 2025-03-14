import React from "react";
import { useState } from "react";
import Full from "./components/LandingPage/Full";
function App() {
  const [activePage, setActivePage] = useState(""); 

  return (
    <div className="bg-white ">
      <Full setActive = {setActivePage} />

      
      {activePage === "Login" && <Login />}
    
    </div>
  );
}

export default App;
