import React from "react";
import Youtube from "react-youtube";

const MovieDetails = ({ movie, cast, video }) => {
    const opts = {
        height: "275",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            fs: 0,
        },
    };

    return (
        <div>
            <div className="flex flex-row items-center justify-center border-black border-2">
                <div className="flex w-1/4">
                    <img
                        src={
                            "https://image.tmdb.org/t/p/original/" +
                            movie.poster_path
                        }
                        alt="Poster"
                        className=""
                    />
                </div>
                <div className="flex flex-col justify-start w-1/4 py-3">
                    <div className="flex justify-center items-center w-full text-xl font-bold">
                        {movie.title}
                    </div>
                    <div className="flex flex-col justify-center items-center text-xl font-bold">
                        <div>{video.type}</div>
                        <Youtube videoId={video.key} opts={opts} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
