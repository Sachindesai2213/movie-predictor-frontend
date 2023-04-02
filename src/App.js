import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieCast from "./components/MovieCast";
import MovieDetails from "./components/MovieDetails";
import MovieSearch from "./components/MovieSearch";
import Recommendations from "./components/Recommendations";
import { api } from "./utils/api";

function App() {
    const [movie, setMovie] = useState("");
    const [selectedMovie, setSelectedMovie] = useState({});
    const [movieVideo, setMovieVideo] = useState({});
    const [movieCast, setMovieCast] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log("Exceuted");
    }, [selectedMovie]);

    const submitMovieHandler = async () => {
        setIsLoading(true)
        let data = {
            movie_name: movie,
            number_of_recommendations: 10,
        };
        const response = await api.BACKEND.POST(data);
        if (response?.data?.recommendations && response?.data?.input_movie) {
            setRecommendations(response.data.recommendations);
            setSelectedMovie(response.data.input_movie);
            const video_response = await api.TMDB.VIDEOS.GET({
                movie_id: response?.data?.input_movie.movie_id,
            });
            const cast_response = await api.TMDB.CAST.GET({
                movie_id: response?.data?.input_movie.movie_id,
            });
            setMovieVideo(video_response.data.results[0]);
            setMovieCast(cast_response.data.cast.slice(0, 8));
        }
        setIsLoading(false)
    };

    return (
        <div className="bg-gray-200">
            <Header />
            <MovieSearch
                setMovie={setMovie}
                submitMovieHandler={submitMovieHandler}
                movie={movie}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
            <MovieDetails movie={selectedMovie} video={movieVideo} />
            <MovieCast cast={movieCast} />
            <Recommendations recommendations={recommendations} />
        </div>
    );
}

export default App;
