import './App.css';
import CommentSection from './components/CommentSection';
import DUMMY_DATA from "./assets/data.json"



function App() {
  const currentUser = DUMMY_DATA.currentUser


  return (
    <CommentSection data={DUMMY_DATA} userMe={currentUser}/>
  );
}

export default App;
