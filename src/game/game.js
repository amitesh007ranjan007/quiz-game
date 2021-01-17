import { Fragment, useEffect, useState, memo, useCallback } from 'react';
import axios from 'axios';
import Headbar from '../components/headbar/headbar'
import Timer from '../components/timer/timer';
import QuizQuestion from '../components/quizQuestion/quizQuestion';
import Options from '../components/options/options';

const Game = memo((props) => {

    // const [now, setNow] = useState(100)
    const [ questions, setQuestions ] = useState([]);
    
  useEffect(() => {

    axios.get('https://quiz-game-dd442-default-rtdb.firebaseio.com/questions.json')
     .then(res => {
       const arr = [];
       for (let key in res.data) {
         arr.push(res.data[key])
         
       }
       setQuestions(arr);
     })
     .catch(err => console.log('error ocurred'))

  }, []);

  const nextQuestion = useCallback(() => {
    if (questions.length > 0) {
      const listOFQuests = [...questions]
      listOFQuests.splice(0, 1);
      setQuestions(listOFQuests);
    }

  }, [questions]);

    useEffect(() => {

        setTimeout(() => {
            nextQuestion()
        }, 15000)

    }, [nextQuestion])
    console.log('Game rendered')
    let card = null
    
    if (questions.length > 0) {
        card = (
            <Fragment>
                <Headbar />
                <Timer />
                <QuizQuestion question={questions[0]} />
                <Options />
        </Fragment>
        )
    }

    return card;

});

export default Game;