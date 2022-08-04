import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Example from './Components/Header/header';
import Main from './Components/Landing';
import {Route,Routes} from 'react-router-dom'
import New from './Components/Mailcomp/New';
function App() {
  return (
    <div >
       <Example />
      <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/new" element={<New/>} />
      </Routes>
    </div>
  );
}

export default App;
