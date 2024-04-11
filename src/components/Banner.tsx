import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "@/api/axios";

interface DataResponse extends BaseResponse {
    results: IMovie[];
}

const getData = React.cache(async () => {
    try {
        const response: DataResponse = await axios.get("/trending/movie/day");
        return response;
    } catch (error) {
        throw error;
    }
});

export default async function Banner() {
    const response: DataResponse = await getData();
    const randomIndex: number = Math.floor(
        Math.random() * response.results.length
    );
    const movie: IMovie = response.results[randomIndex];

    return (
        <div
            style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}${movie?.backdrop_path})`,
            }}
            className="relative lg:pt-[50%] flex items-center justify-center bg-top bg-no-repeat bg-cover z-10 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black/50"
        >
            <div className="container lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-white flex flex-col-reverse lg:flex-row lg:justify-between my-[80px] lg:my-0 items-center z-10">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-[30px] my-[15px] font-bold text-center lg:text-left">
                        {movie?.title}
                    </h1>
                    <p className="text-center lg:text-left">
                        {movie?.overview}
                    </p>
                    <div className="mt-5 flex justify-center gap-5 lg:justify-normal">
                        <Link
                            href="/"
                            className="btn-primary px-5 py-[15px] font-bold"
                        >
                            Watch Now
                        </Link>
                        <Link
                            href="/"
                            className="btn-primary px-5 py-[15px] font-bold"
                        >
                            View Info
                        </Link>
                    </div>
                </div>
                <div className="w-[250px] h-[360px]">
                    <Image
                        priority
                        src={`${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}${movie?.poster_path}`}
                        alt="poster"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
