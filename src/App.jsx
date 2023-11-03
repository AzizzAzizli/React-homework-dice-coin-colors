import './App.css';
import { Coin } from './Tasks/Coin';
import { ColorCardTask } from './Tasks/ColorCardTask';
import { Dice } from './Tasks/Dice';

function App() {
  return (
    <div>
    <Dice/>
  <hr />
  <Coin/>
  <hr />
  <ColorCardTask/>
    </div>

  );
}

export default App;
