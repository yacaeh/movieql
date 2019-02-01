import fetch from 'node-fetch';
const API_URL = "https://yts.am/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if(limit>0){
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
}

export const people = [
    {
        id:"0",
        name: "zombie",
        age: 29,
        gender: "male"
    },
    {
        id:"1",
        name: "zombie2",
        age: 329,
        gender: "male"
    },
    {
        id:"2",
        name: "zombie3",
        age: 229,
        gender: "male"
    },
    {
        id:"3",
        name: "zombie4",
        age: 429,
        gender: "male"
    },
    {
        id:"4",
        name: "zombie5",
        age: 219,
        gender: "male"
    },
    {
        id:"5",
        name: "zombie6",
        age: 212,
        gender: "male"
    },
];

export let movies = [
    {
        id:0,
        name:"Movie1",
        score:9
    },
    {
        id:1,
        name:"Movie2",
        score:2
    },
    {
        id:2,
        name:"Movie3",
        score:7
    },
    {
        id:3,
        name:"Movie4",
        score:5
    },
    {
        id:4,
        name:"Movie5",
        score:10
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id) );
    return filteredPeople[0];
}

export const getMovieById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id );
    return filteredMovies[0];
}


// export const getMovies = () => movies;

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(movies.length>cleanMovies.length){
            movies = cleanMovies;
            return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score)=>{
    const newMovie = {
        id:`${movies.length}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}

export const updateMovie = (id,name,score)=>{
    const currentMovie = movies.filter(movie => movie.id ===id);
    currentMovie[0].name = name;
    currentMovie[0].score = score;
    return currentMovie[0];
}