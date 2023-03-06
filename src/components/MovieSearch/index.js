import React, { useState } from "react";
import movies from "../../movies.json";

const MovieSearch = ({ movie, setMovie, submitMovieHandler }) => {
    const [suggestions, setSuggestions] = useState([]);

    const onSuggestionHandler = (value) => {
        setMovie(value);
        setSuggestions(null);
    };

    const onChangeHandler = (value) => {
        let matches = [];
        if (value.length > 0) {
            matches = movies.movies.filter((movie_name) => {
                const regex = new RegExp(`${movie}`, "gi");
                return movie_name.title.match(regex);
            });
        }

        if (matches.length > 10) matches = matches.slice(0, 8);

        setSuggestions(matches);
        setMovie(value);
    };

    return (
        <div className="relative flex flex-col gap-4 items-center justify-center py-4">
            <input
                type="text"
                className="text-lg rounded-md border-2 px-4 py-2"
                placeholder="Select a Movie"
                onChange={(e) => onChangeHandler(e.target.value)}
                value={movie}
                onBlur={() => {
                    setTimeout(() => {
                        setSuggestions(null);
                    }, 200);
                }}
            />
            <button
                onClick={() => submitMovieHandler()}
                className="bg-gray-600 rounded-md text-white px-4 py-2"
            >
                Get Data and Recommendations
            </button>
            {suggestions && (
                <div className="absolute z-10 top-16 w-1/4 bg-black rounded-md border-4">
                    {suggestions.map((suggestion, key) => {
                        return (
                            <div
                                className="bg-white color-black border-2 rounded-sm p-[8px] text-center hover:bg-gray-200"
                                onClick={() =>
                                    onSuggestionHandler(suggestion.title)
                                }
                                key={key}
                            >
                                {suggestion.title}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MovieSearch;
