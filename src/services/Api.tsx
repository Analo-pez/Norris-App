
const getDataFromApi = () => {
    return fetch(`https://api.chucknorris.io/jokes/categories`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
};

export default getDataFromApi;