import React from "react";

const Recommendations = ({ recommendations }) => {
    return (
        <div className="flex overflow-y-hidden overflow-x-scroll p-[20px] mx-[20px]">
            {recommendations.map((recommendation) => (
                <div className="flex flex-col mx-3">
                    <img
                        src={
                            "https://image.tmdb.org/t/p/original/" +
                            recommendation.poster_path
                        }
                        alt="Recommendation Poster"
                        width="300px"
                    />
                    <div className="text-center font-bold">{recommendation.title}</div>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;
