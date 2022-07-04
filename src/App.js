import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Scheda from './components/Scheda';
import Sidebar from './components/Sidebar';
import ScanQR from './components/scanQR'


function App() {
  return (
    <div className="App h-100">
      <div className='container-fluid g-0 h-100'>
        <div className='row g-0 h-100'>
          <Sidebar />



          <div className='col-11'>
            <NavBar className='row' />

            <Routes className="row">
              <Route path="/scheda" element={<Scheda />} />
              <Route path="/scanQR" element={<ScanQR />} />
            </Routes>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
