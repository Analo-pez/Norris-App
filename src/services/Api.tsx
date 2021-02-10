
export const getDataFromApi = () => {
    return fetch(`https://api.chucknorris.io/jokes/categories`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
};




 export const getJokeCategory = (category:string) => {
    return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
};

