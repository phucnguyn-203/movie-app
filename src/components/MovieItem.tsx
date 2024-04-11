import Link from "next/link";
import Image from "next/image";

interface MovieItemProps {
    data: IMovie | ITvShow;
    mediaType: string;
}

export default function MovieItem({ data, mediaType }: MovieItemProps) {
    const { id, poster_path } = data;
    const isMovie = isIMovie(data);

    return (
        <Link
            href={`/details/${mediaType}/${id}`}
            className="no-underline block"
        >
            <div className="hover-item overflow-hidden rounded-lg bg-black cursor-pointer mb-6">
                <div className="h-[336px]">
                    <Image
                        priority
                        src={`${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}${poster_path}`}
                        alt={isMovie ? data.title : data.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full transition-all ease-linear duration-300 overflow-hidden"
                    />
                </div>
                <p className="text-[15px] text-white p-[10px] text-center transition-all ease-linear duration-300 max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    {isMovie ? data.title : data.name}
                </p>
            </div>
        </Link>
    );
}

function isIMovie(obj: any): obj is IMovie {
    return "title" in obj;
}
