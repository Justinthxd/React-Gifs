export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=X71XakVq11wZqpkSTnDj0fsVODsaWq5F`;

    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}