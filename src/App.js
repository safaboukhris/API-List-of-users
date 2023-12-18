import './App.css';
import {motion} from 'framer-motion';
import { BsStars } from "react-icons/bs";
import ListOfUsers from './ListOfUsers';

function App() {
  return (
    <div className="App">
        <motion.h1 whileHover={{scale:1.7}}><BsStars />  LIST-OF-USERS...  <BsStars /></motion.h1>
        <ListOfUsers/>
    </div>
  );
}

export default App;
