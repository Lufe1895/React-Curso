const getImagen = async() => {
    try {
        const apiKey = 'AAKz6iv4NfGcTxKgZV3OymEHsMJdaZBS';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await res.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch(error) {
        console.log(error);
    }
}

getImagen();

// const apiKey = 'AAKz6iv4NfGcTxKgZV3OymEHsMJdaZBS';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion
// .then(res => res.json())
//     .then(({ data }) => {
//         // console.log(data.images.original.url);
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
// .catch(console.warn);