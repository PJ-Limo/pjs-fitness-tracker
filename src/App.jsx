import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginRegister from './pages/LoginRegister/LoginRegister';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {

  return (
      <div>
        <Header />

        <div>
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginRegister />} />
              <Route path="/home" element={<Home />} />
          </Routes>
          </BrowserRouter> 

        </div>

      </div>
  );
};

export default App;
