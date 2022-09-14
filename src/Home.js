import React from "react";
import { FaBars } from "react-icons/fa";
import { GlobalContext } from "./context";

const Home = () => {
  const { openSideBar, openModal } = GlobalContext();
  // console.log(data);
  return (
    <main>
      <button onClick={openSideBar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
