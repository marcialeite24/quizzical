import React from 'react'

export default function Questions(props) {
    const [questions, setQuestions] = React.useState([])
    const [selected, setSelected] = React.useState({})
    
    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=${props.category}&difficulty=${props.difficulty}&type=multiple`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const encodedQuestions = data.results.map((question) => ({
              ...question,
              question: decodeEntities(question.question),
              correct_answer: decodeEntities(question.correct_answer),
              incorrect_answers: question.incorrect_answers.map(decodeEntities),
            }));
            console.log(encodedQuestions)
            const shuffledQuestions = encodedQuestions.map(shuffleAnswers);
            setQuestions(shuffledQuestions);            
        })
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
    }, [props.category, props.difficulty])

    const decodeEntities = (encodedString) => {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = encodedString;
        return textArea.value;
    }

    const shuffleAnswers = (question) => {
        const answers = [question.correct_answer, ...question.incorrect_answers];
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        return { ...question, answers }
    }

    function handleClick(questionId, answerId) {
        setSelected(prevSelected => ({
            ...prevSelected,
            [questionId]: answerId
        }));
    }

    return (
        <div className='questions-screen'>     
            <h1>Quizzical</h1> 
            <br></br>
            {questions.map((question, questionIndex) => (
                <div key={questionIndex} className="questions">
                    <p>{question.question}</p>
                    <div className="options">
                        {question.answers.map((answer, answerIndex) => (                            
                            <button 
                                key={answerIndex} 
                                className={selected[questionIndex] === answerIndex ? 'blue' : ''} 
                                onClick={() => handleClick(questionIndex, answerIndex)}
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                    <hr/>
                </div>
            ))}
            <button className='check-answers'>Check answers</button>
        </div>
    )
}