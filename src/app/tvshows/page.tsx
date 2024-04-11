import React from "react";
import axios from "@/api/axios";
import MovieItem from "@/components/MovieItem";
import Pagination from "@/components/pagination";

interface DataResponse extends BaseResponse {
    results: (IMovie | ITvShow)[];
}

const getData = React.cache(async (currentPage: number) => {
    try {
        const response: DataResponse = await axios.get("/tv/popular", {
            params: { page: currentPage },
        });
        return response;
    } catch (error) {
        throw error;
    }
});

export default async function Page({
    searchParams,
}: {
    searchParams: { page: number };
}) {
    const currentPage = Number(searchParams?.page) || 1;
    const response: DataResponse = await getData(currentPage);
    const totalPages = response.total_pages;

    return (
        <div className="container content mx-auto">
            <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5">
                {response.results.map((item) => (
                    <MovieItem key={item.id} mediaType="tv" data={item} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
}
