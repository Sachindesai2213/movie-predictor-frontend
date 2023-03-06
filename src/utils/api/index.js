import { backend_endpoint, tmdb_endpoint } from "./endpoints";

export const api = {
    BACKEND: {
        POST: async (payload) => await backend_endpoint.post("/recommend-movies", payload)
    },
    TMDB: {
        VIDEOS: {
            GET: (payload) => tmdb_endpoint.get(`/movie/${payload.movie_id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        },
        CAST: {
            GET: (payload) => tmdb_endpoint.get(`/movie/${payload.movie_id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        },
        MOVIE: {
            GET: (payload) => tmdb_endpoint.get(`/movie/${payload.movie_id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        }
    }
}