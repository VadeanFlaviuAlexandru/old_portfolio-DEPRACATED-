import './App.scss';
import Header from './container/Header/Header'
import About from './container/About/About'
import Navbar from './Navbar/Navbar';
import { Route , Routes } from 'react-router-dom'
import Work from './container/Work/Work.jsx'
import { Contact } from './container/Contact/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={[<Header />, <Work />, <Contact/> ] }/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
