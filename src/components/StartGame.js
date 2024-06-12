import Category from './Category'
import Difficulty from './Difficulty'

export default function StartGame(props) {
    return (
        <div>
            <h1 className='title'>Quizzical</h1>
            <p className='subtitle'>Answer all the questions and have fun!</p>
            <form onSubmit={props.handleSubmit} className='quiz-definitions'>
                <fieldset>
                    <legend>Select the category and the difficulty level</legend>
                    <Category data={props.formData.category} handleChange={props.handleChange}/>
                    <Difficulty data={props.formData.difficulty} handleChange={props.handleChange}/>
                    <br></br>
                    <label className={props.definitions ? 'notSelected' : 'selected'}>You need to select the category and the difficulty level!</label>
                </fieldset>
                <button type="button" className="start-btn" onClick={props.start}>Start Quiz</button>
            </form>            
        </div>
    )
}