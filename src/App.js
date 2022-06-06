import './App.css';
import CommentSection from './components/CommentSection';
import DUMMY_DATA from "./assets/data.json"


function App() {



  return (
    <CommentSection data={DUMMY_DATA}/>
  );
}

export default App;
