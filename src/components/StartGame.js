import Category from './Category'
import Difficulty from './Difficulty'

export default function StartGame(props) {
    return (
        <div>
            <h1>Quizzical</h1>
            <p>Select the category and the difficulty level, then press the button to start the quiz.</p> 
            <p>Answer all the questions and have fun!</p>
            <form onSubmit={props.handleSubmit}>
                <Category data={props.formData.category} handleChange={props.handleChange}/>
                <Difficulty data={props.formData.difficulty} handleChange={props.handleChange}/>
                <button className="start-btn" onClick={props.start}>Start Quiz</button>
            </form>            
        </div>
    )
}