export default function Difficulty(props) {
    return (
        <div className="difficulty-level">
            <legend className="difficulty-label">Difficulty Level: </legend>
            <input 
                type="radio"
                id="easy"
                name="difficulty"
                value="easy"
                checked={props.data === "easy"}
                onChange={props.handleChange}
            />
            <label htmlFor="easy">Easy</label>
            
            <input 
                type="radio"
                id="medium"
                name="difficulty"
                value="medium"
                checked={props.data === "medium"}
                onChange={props.handleChange}
            />
            <label htmlFor="medium">Medium</label>
                            
            <input 
                type="radio"
                id="hard"
                name="difficulty"
                value="hard"
                checked={props.data === "hard"}
                onChange={props.handleChange}
            />
            <label htmlFor="hard">Hard</label>
        </div>        
    )
}