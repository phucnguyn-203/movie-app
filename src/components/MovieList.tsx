"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import MovieItem from "./MovieItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MovieListProps {
    title: string;
    mediaType: string;
    data: (IMovie | ITvShow)[];
}

export default function MovieList({ title, mediaType, data }: MovieListProps) {
    const sliderSettings = {
        speed: 500,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <React.Fragment>
            <div className="flex justify-between items-center">
                <h1 className="text-white text-[25px] my-[25px] font-bold">{`${title}`}</h1>
                <Link href="/" className="no-underline text-primary">
                    View More
                </Link>
            </div>

            <Slider {...sliderSettings}>
                {data.map((item) => (
                    <MovieItem
                        data={item}
                        mediaType={mediaType}
                        key={item.id}
                    />
                ))}
            </Slider>
        </React.Fragment>
    );
}
