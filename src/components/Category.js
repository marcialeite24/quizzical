export default function Category(props) {
    return (
        <div>
            <label htmlFor="category" className="dropdown-category-label">Category: </label>
            <select id="dropdown-category" name="category" value={props.data} onChange={props.handleChange}>
                <option value="">Select a category</option>
                <option value="option-1">General Knowledge</option>
                <option value="option-2">Entertainment: Books</option>
                <option value="option-3">Entertainment: Film</option>
                <option value="option-4">Entertainment: Music</option>
                <option value="option-5">Entertainment: Musicals & Theatres</option>
                <option value="option-6">Entertainment: Television</option>
                <option value="option-7">Entertainment: Video Games</option>
                <option value="option-8">Entertainment: Board Games</option>
                <option value="option-9">Science & Nature</option>
                <option value="option-10">Science: Computers</option>
                <option value="option-11">Science: Mathematics</option>
                <option value="option-12">Mythology</option>
                <option value="option-13">Sports</option>
                <option value="option-14">Geography</option>
                <option value="option-15">History</option>
                <option value="option-16">Politics</option>
                <option value="option-17">Art</option>
                <option value="option-18">Celebrities</option>
                <option value="option-19">Animals</option>
                <option value="option-20">Vehicles</option>
                <option value="option-21">Entertainment: Comics</option>
                <option value="option-22">Science: Gadgets</option>
                <option value="option-23">Entertainment: Japanese Anime & Manga</option>
                <option value="option-24">Entertainment: Cartoon & Animations</option>
            </select>
        </div>        
    )
}