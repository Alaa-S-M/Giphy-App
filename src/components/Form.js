
function Form() {

    function handleSubmit(e) {
        e.preventDefault();

        let query = e.target['search_text'].value;
        console.log(query);
        let url = `https://api.giphy.com/v1/gifs/search?api_key=s94Y5aXMRGvgV909X5F0RCggf5xpzkMB&q=${query}&limit=25&offset=0&rating=g&lang=en`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' name='search_text' placeholder='search giphy for...' />
            </div>
            <button type='submit'> Search </button>
        </form>
    );
}

export default Form;