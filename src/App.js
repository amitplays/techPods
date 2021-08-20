import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Slide from 'react-reveal/Slide';
import FirstBlock from './Components/FirstBlock';

function App() {
  

  return (
    <div className="App">
      <Slide bottom>
        <Header />
      </Slide>
      <FirstBlock />
    </div>
  );
}

export default App;
