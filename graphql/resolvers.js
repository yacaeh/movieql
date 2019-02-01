import {
    people,
    getById,
    getMovies,
    getMovieById,
    addMovie,
    deleteMovie,
    updateMovie
} from "./db"

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => getById(id),
        movies: (_,{limit,rating}) => getMovies(limit,rating),
        movie: (_, {id}) => getMovieById(id)
    },
    Mutation:{
        // addMovie: (_,{name,score})=> addMovie(name, score),
        // deleteMovie:(_,{id})=> deleteMovie(id),
        // updateMovie:(_,{id,name,score})=>updateMovie(id,name,score)
    }
};

export default resolvers;