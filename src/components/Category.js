export default function Category(props) {
    return (
        <div>
            <label htmlFor="category" className="dropdown-category-label">Category: </label>
            <select id="dropdown-category" name="category" value={props.data} onChange={props.handleChange}>
                <option value="">Select a category</option>
                <option value="1">General Knowledge</option>
                <option value="2">Entertainment: Books</option>
                <option value="3">Entertainment: Film</option>
                <option value="4">Entertainment: Music</option>
                <option value="5">Entertainment: Musicals & Theatres</option>
                <option value="6">Entertainment: Television</option>
                <option value="7">Entertainment: Video Games</option>
                <option value="8">Entertainment: Board Games</option>
                <option value="9">Science & Nature</option>
                <option value="10">Science: Computers</option>
                <option value="11">Science: Mathematics</option>
                <option value="12">Mythology</option>
                <option value="13">Sports</option>
                <option value="14">Geography</option>
                <option value="15">History</option>
                <option value="16">Politics</option>
                <option value="17">Art</option>
                <option value="18">Celebrities</option>
                <option value="19">Animals</option>
                <option value="20">Vehicles</option>
                <option value="21">Entertainment: Comics</option>
                <option value="22">Science: Gadgets</option>
                <option value="23">Entertainment: Japanese Anime & Manga</option>
                <option value="24">Entertainment: Cartoon & Animations</option>
            </select>
        </div>        
    )
}