import './style/App.css';
import Header from './components/Header';
import Swipbuttons from './components/Swipbuttons';
import TinderCards from './components/TinderCard';


function App() {
  return (
    <div className="app">

    { /* Header */ }
     <Header />

    { /* TinderCard */}
    <TinderCards/>

    {/* Swipbuttons */}
    <Swipbuttons />

    </div>
  );
}

export default App;
