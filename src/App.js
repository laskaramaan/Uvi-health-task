import './App.css';
import './index.css';
import Home from '../src/pages/Home'
import Condition from './components/Condition';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full'>
      <Home/>
      <Condition/>
      <Footer/>
    </div>
  );
}

export default App;
