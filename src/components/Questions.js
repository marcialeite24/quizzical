import React from 'react'

export default function Questions(props) {
    console.log(props)
    const [questions, setQuestions] = React.useState([])
             
    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=${props.category}&difficulty=${props.difficulty}&type=multiple`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            const encodedQuestions = data.results.map((question) => ({
              ...question,
              question: decodeEntities(question.question),
              correct_answer: decodeEntities(question.correct_answer),
              incorrect_answers: question.incorrect_answers.map(decodeEntities),
            }));
            console.log(encodedQuestions)
            setQuestions(encodedQuestions)
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