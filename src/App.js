import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Game from './game/game';

function App() {
  console.log('App called')

  return (
    <div className="Centered">
      <Game />
    </div>
  );
}

export default App;
