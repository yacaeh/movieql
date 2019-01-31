import {
    people,
    getById,
    getMovies,
    getMovieById
} from "./db"

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => getById(id),
        movies: () => getMovies(),
        movie: (_, {id}) => getMovieById(id)
    }
};

export default resolvers;