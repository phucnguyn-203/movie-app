import React from "react";
import axios from "@/api/axios";
import Link from "next/link";
import Image from "next/image";

interface Props {
    id: number;
    mediaType: string;
}

const getData = React.cache(async (id: number, mediaType: string) => {
    try {
        return await axios.get(`${mediaType}/${id}`);
    } catch (error) {
        throw error;
    }
});

export default async function BannerMovieDetails({ id, mediaType }: Props) {
    const response: any = await getData(id, mediaType);
    return (
        <div
            className="relative flex items-center justify-center lg:block lg:pt-[50%] bg-top bg-no-repeat bg-cover z-10 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black/50"
            style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}${response.backdrop_path})`,
            }}
        >
            <div className="container lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-white flex flex-col gap-y-5 lg:flex-row lg:justify-between my-[80px] lg:my-0 items-center z-10">
                <div className="w-[250px] h-[360px]">
                    <Image
                        priority
                        src={`${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}${response.poster_path}`}
                        alt="poster"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="flex-1 lg:ml-[100px]">
                    <h1 className="text-[40px] font-bold mb-5 text-center lg:text-left">
                        {response.title || response.name}
                    </h1>
                    <p className="leading-6">{response.overview}</p>
                    <p className="text-lg mt-5">
                        {response.release_date
                            ? `Release date: ${response.release_date}`
                            : `Last episode: ${response.last_air_date}`}
                    </p>
                    <div className="flex gap-5 flex-wrap my-8">
                        {response.genres.map((item: any) => (
                            <div
                                key={item.id}
                                className="border-2 border-solid border-primary rounded-full p-[10px]"
                            >
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-5 flex-wrap">
                        <Link
                            href={
                                mediaType === "movie"
                                    ? `/watch/${mediaType}/${id}`
                                    : `/watch/${mediaType}/${id}/season/1/esp/1`
                            }
                            className="btn-primary px-5 py-[15px] font-bold"
                        >
                            Watch Now
                        </Link>
                        <button className="btn-primary px-5 py-[15px] font-bold">
                            Add to favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
