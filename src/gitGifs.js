
export async function getGifs(url) {
    return await fetch(url)
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
            return gifs;
        })
        .catch(error => console.error(error));
}
