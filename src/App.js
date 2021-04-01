import './App.css';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Courses />
    </div>
  );
}

export default App;
