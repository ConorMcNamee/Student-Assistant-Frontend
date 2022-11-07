import Assignments from './components/assignment/assignments';
import Sidebar from './components/navbar/Sidebar';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';

import './styles/main.css';

const App = () => {

  return(
    <div className="App">
      <div className="SidebarContainer">
        <Sidebar />
      </div>
      <div className="Content">
      <Routes>
        <Route path='/assignments' element={<Assignments />} />
        <Route element={<NotFound />} />
      </Routes>
      </div>
    </div>


  );
}

export default App;