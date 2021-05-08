
function Form() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' name='search' placeholder='search giphy for...' />
            </div>
            <button type='submit'> Search </button>
        </form>
    );
}

export default Form;