import { memo } from 'react';

const quizQuestion = memo((props) => {

    console.log('quizQuestion called')
    return <h3 style={{textAlign: 'center', margin: '20px 0px'}}>{props.question}</h3>
});


export default quizQuestion;