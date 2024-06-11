import React from 'react'

export default function Questions(props) {
    const [questions, setQuestions] = React.useState([])
    const [selected, setSelected] = React.useState({})
    const [checkCorrectAnswers, setCheckCorrectAnswers] = React.useState({})
    const [score, setScore] = React.useState(null)
    const [playAgain, setPlayAgain] = React.useState(false)
    
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

    function handleAnswers() {
        const results = {}
        questions.forEach((question, questionIndex) => {
            const selectedAnswer = question.answers[selected[questionIndex]]
            results[questionIndex] = selectedAnswer === question.correct_answer
        })
        setCheckCorrectAnswers(results)
        const correctCount = Object.values(results).filter(value => value === true).length;
        setScore(correctCount);
        setPlayAgain(true)
    }

    const getButtonClass = (questionIndex, answerIndex, answer) => {
        if (checkCorrectAnswers[questionIndex] !== undefined) {
            if (answer === questions[questionIndex].correct_answer) {
                return 'green'
            }
            if (selected[questionIndex] === answerIndex) {
                return checkCorrectAnswers[questionIndex] ? 'green' : 'red'
            }
        } else if (selected[questionIndex] === answerIndex) {
            return 'blue'
        }
        return ''
    }

    // function endGame() {
    //     if(playAgain) {
    //         setPlayAgain(false)
    //     } else {
    //         setPlayAgain(true)
    //     }
    // }

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
                                className={getButtonClass(questionIndex, answerIndex, answer)}
                                onClick={() => handleClick(questionIndex, answerIndex)}
                                disabled={checkCorrectAnswers[questionIndex] !== undefined}
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                    <hr/>
                </div>
            ))}
            { !playAgain && <button 
                className={`check-answers ${Object.keys(selected).length < 5 ? 'disabled' : ''}`} 
                onClick={() => handleAnswers()}
            >
                Check answers
            </button> }
            { playAgain && <div className='play-again'>
                <span>You scored {score}/5 correct answers</span>
                <button                     
                    // onClick={endGame()}
                >
                    Play again
                </button>
            </div>}
        </div>
    )
}