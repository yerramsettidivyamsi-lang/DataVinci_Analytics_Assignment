import "./App.css"
import { useContext } from "react";
import MainSection from "./components/mainSection";
import Navbar from "./components/navbar";
import SideBar from "./components/sideBar";
import { AppContext} from "./AppContext/appContext";


function App() {  
    const {isOpen, toogleIsOpen} = useContext(AppContext)
  return(
      <div className="main_app_bg_container">
        <Navbar/>
        <SideBar isOpen = {isOpen} toogleIsOpen = {toogleIsOpen} />
        <MainSection/>
      </div>
  )
   
}

export default App;