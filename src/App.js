import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.scss"
import Home from './pages/home/Home';

function App() {
  return (
    <div className='App'>
       <BrowserRouter>
        <Routes>
        <Route path="contact" element={<Home />} />
        </Routes>
       </BrowserRouter>
       <Home/>

    </div>
  );
}

export default App;
