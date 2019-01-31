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
    const filteredMovies = movies.filter(movie => movie.id === String(id) );
    return filteredMovies[0];
}


export const getMovies = () => movies;

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== String(id));
    if(movies.length>cleanMovies.length){
            movies = cleanMovies;
            return true;
    }else{
        return false;
    }
}