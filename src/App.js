import './App.scss';
import Header from './container/Header/Header'
import About from './container/About/About'
import Navbar from './Navbar/Navbar';
import { Route , Routes } from 'react-router-dom'
import Work from './container/Work/Work.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={[<Header />, <Work />] }/>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
