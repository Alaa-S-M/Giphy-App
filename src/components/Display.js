
function Display(props) {

    const gifs = props.gifs;
    return (
        <div className='grid-container'>

            { !!gifs && gifs.map((gif) => {
                return(
                    <img 
                        key={gif.id}
                        src={gif.src}
                        alt={gif.alt}
                    />
                );
            })}

        </div>
    );
}

export default Display;