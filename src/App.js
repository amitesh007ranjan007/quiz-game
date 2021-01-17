import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Headbar from './components/headbar/headbar';
import Timer from './components/timer/timer';
import QuizQuestion from './components/quizQuestion/quizQuestion';
import Options from './components/options/options';

function App() {
  return (
    <div className="Centered">
      <Headbar />
      <Timer />
      <QuizQuestion />
      <Options />
    </div>
  );
}

export default App;
