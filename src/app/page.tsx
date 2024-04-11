import React from "react";
import Banner from "@/components/Banner";
import MovieListWrapper from "@/components/MovieListWrapper";
import {
    BannerSkeleton,
    MovieListWrapperSkeleton,
} from "@/components/skeletons";

export default function Home() {
    return (
        <React.Fragment>
            <React.Suspense fallback={<BannerSkeleton />}>
                <Banner />
            </React.Suspense>
            <div className="container mt-7 mx-auto my-0 ">
                <React.Suspense fallback={<MovieListWrapperSkeleton />}>
                    <MovieListWrapper />
                </React.Suspense>
            </div>
        </React.Fragment>
    );
}
