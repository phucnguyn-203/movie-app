import React from "react";
import axios from "@/api/axios";
import MovieList from "./MovieList";

const getData = React.cache(async () => {
    try {
        return await Promise.all([
            axios.get("trending/movie/day"),
            axios.get("movie/popular"),
            axios.get("movie/top_rated"),
            axios.get("trending/tv/day"),
            axios.get("tv/popular"),
            axios.get("tv/top_rated"),
        ]);
    } catch (error) {
        throw error;
    }
});

export default async function MovieListWrapper() {
    const response: any = await getData();

    return (
        <React.Fragment>
            <MovieList
                title="Movie Trending"
                mediaType="movie"
                data={response[0].results}
            />
            <MovieList
                title="Movie Popular"
                mediaType="movie"
                data={response[1].results}
            />
            <MovieList
                title="Movie Top Rated"
                mediaType="movie"
                data={response[2].results}
            />
            <MovieList
                title="TV Trending"
                mediaType="tv"
                data={response[3].results}
            />
            <MovieList
                title="TV Popular"
                mediaType="tv"
                data={response[4].results}
            />
            <MovieList
                title="TV Top Rated"
                mediaType="tv"
                data={response[5].results}
            />
        </React.Fragment>
    );
}
