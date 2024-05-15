import React from 'react'

export default function Questions(props) {
    const [questions, setQuestions] = React.useState([])

         
    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setQuestions(data.results);
        })
    }, [])

    return (
        <div>      
            {questions.map((question, index) => (
                <div key={index} className="questions">
                    <p>{question.question}</p>
                    <div className="options">
                        <button>{question.correct_answer}</button>
                        {question.incorrect_answers.map((answer, index) => (
                            <button key={index}>{answer}</button>
                        ))}
                    </div>
                    <hr/>
                </div>
            ))}
        </div>
    )
}