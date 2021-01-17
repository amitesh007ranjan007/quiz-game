import { Fragment, useEffect, useState, memo, useCallback } from 'react';
import axios from 'axios';
import Headbar from '../components/headbar/headbar'
import Timer from '../components/timer/timer';
import QuizQuestion from '../components/quizQuestion/quizQuestion';
import Options from '../components/options/options';

const Game = memo((props) => {

    // const [now, setNow] = useState(100)
    const [ questions, setQuestions ] = useState([]);
    const [totalCount, setTotalCount ] = useState([]);
    const [ currentCount, setCurrentCount ] = useState([]);
    
    
  useEffect(() => {

    axios.get('https://quiz-game-dd442-default-rtdb.firebaseio.com/questions.json')
     .then(res => {
       const arr = [];
       for (let key in res.data) {
         arr.push(res.data[key]) 
       }
       setQuestions(arr);
       setTotalCount(arr.length);
       setCurrentCount(1);
     })
     .catch(err => console.log('error ocurred'))

  }, []);

  const nextQuestion = useCallback(() => {
    if (questions.length > 0) {
      const listOFQuests = [...questions]
      listOFQuests.splice(0, 1);
      setQuestions(listOFQuests);
      setCurrentCount(prev => prev + 1)
    }

  }, [questions]);

    useEffect(() => {

        setTimeout(() => {
            nextQuestion()
        }, 12000)

    }, [nextQuestion])
    console.log('Game rendered')
    let card = <h1>Game Over</h1>
    
    if (questions.length > 0) {
        card = (
            <Fragment>
                <Headbar total={totalCount} current={currentCount} />
                <Timer question={questions[0].quest} />
                <QuizQuestion question={questions[0].quest} />
                <Options choices={questions[0].options} answer={questions[0].ans} />
        </Fragment>
        )
    }

    return card;

});

export default Game;