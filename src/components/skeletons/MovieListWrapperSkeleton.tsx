import React from "react";

function MovieListSkeleton() {
    return (
        <div className="space-y-8 my-[25px]">
            <div className="flex justify-between items-center">
                <div className="bg-gray-400 h-6 w-1/4 animate-pulse"></div>
                <div className="bg-gray-400 h-6 w-1/4 animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-400 h-72 rounded-lg animate-pulse"
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default function MovieListWrapperSkeleton() {
    return (
        <React.Fragment>
            <MovieListSkeleton />
            <MovieListSkeleton />
            <MovieListSkeleton />
            <MovieListSkeleton />
            <MovieListSkeleton />
            <MovieListSkeleton />
        </React.Fragment>
    );
}
