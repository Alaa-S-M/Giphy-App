
function Form(props) {

    const setGifs = props.setGifs;

    function handleSubmit(e) {
        e.preventDefault();

        let query = e.target['search_text'].value;
        console.log(query);
        let url = `https://api.giphy.com/v1/gifs/search?api_key=s94Y5aXMRGvgV909X5F0RCggf5xpzkMB&q=${query}&limit=25&offset=0&rating=g&lang=en`;

        getGifs(url);

        e.target.reset();
    }

    function getGifs(url) {

        fetch(url)
            .then(res => res.json())
            .then(data => data.data)
            .then(data => {
                let gifs = [];
                for (let i = 0; i < data.length; i++) {
                    gifs.push({
                        src: data[i].images.downsized.url,
                        alt: data[i].title,
                        id: data[i].id
                    });
                }
                setGifs(gifs);
            })
            .catch(error => console.error(error));
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