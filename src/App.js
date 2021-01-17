import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Headbar from './components/headbar/headbar';
import Timer from './components/timer/timer';
import QuizQuestion from './components/quizQuestion/quizQuestion';

function App() {
  return (
    <div className="Centered">
      <Headbar />
      <Timer />
      <QuizQuestion />
    </div>
  );
}

export default App;
