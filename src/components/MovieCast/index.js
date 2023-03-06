import React from "react";

const MovieCast = ({ cast }) => {
    return (
        <div className="grid grid-cols-4 gap-2 p-8">
            {cast.map((cast_data) => (
                <div className="bg-gray flex flex-col justify-center items-center">
                    <img
                        src={
                            "https://image.tmdb.org/t/p/original/" +
                            cast_data.profile_path
                        }
                        alt="Cast"
                        width="300px"
                    />
                    <div className="flex text-center font-semibold">{cast_data.name}</div>
                    <div className="flex text-center font-extrabold">{cast_data.character}</div>
                </div>
            ))}
        </div>
    );
};

export default MovieCast;
