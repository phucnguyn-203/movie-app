import React from "react";
import axios from "@/api/axios";
import Cast from "@/components/Cast";
import BannerMovieDetails from "@/components/BannerMovieDetails";
import { BannerMovieSkeleton } from "@/components/skeletons";

const getData = React.cache(async (id: number, mediaType: string) => {
    try {
        return await Promise.all([
            axios.get(`${mediaType}/${id}`),
            axios.get(`${mediaType}/${id}/credits`),
        ]);
    } catch (error) {
        throw error;
    }
});

export default async function Page({
    params,
}: {
    params: { id: number; mediaType: string };
}) {
    const id = params.id;
    const mediaType = params.mediaType;
    const response: any = await getData(id, mediaType);
    return (
        <React.Fragment>
            <React.Suspense fallback={<BannerMovieSkeleton />}>
                <BannerMovieDetails id={id} mediaType={mediaType} />
            </React.Suspense>

            <div className="container mt-7 mx-auto my-0 ">
                <h1 className="text-2xl text-white font-bold mb-8">Cast</h1>
                <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5">
                    {response[1].cast.slice(0, 10).map((item: any) => (
                        <Cast
                            key={item.id}
                            profile_path={item.profile_path}
                            original_name={item.original_name}
                            character={item.character}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}
