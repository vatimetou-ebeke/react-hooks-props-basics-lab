import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city}>
      </Home>
      <About bio={user.bio} link={user.links.github}></About>
      <Links Linkedin={user.links.Linkedin} Github={user.links.github}
      ></Links>
    </div>
  );
}

export default App;
