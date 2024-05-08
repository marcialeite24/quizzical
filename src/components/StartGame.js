export default function StartGame(props) {
    return (
        <div>
            <h1>Quizzical</h1>
            <p>Answer all the questions and have fun! To start press the button.</p>
            <button onClick={props.start}>Start Quiz</button>
        </div>
    )
}