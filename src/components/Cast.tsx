import Image from "next/image";

interface CastProps {
    profile_path: string;
    original_name: string;
    character: string;
}
export default function Cast({
    profile_path,
    original_name,
    character,
}: CastProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-black mb-6">
            <div className="h-[336px]">
                <Image
                    priority
                    src={`${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT}${profile_path}`}
                    alt={original_name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full transition-all ease-linear duration-300 overflow-hidden"
                />
            </div>
            <p className="text-[15px] text-white p-[10px] text-center transition-all ease-linear duration-300 max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {original_name}
            </p>
            <p className="text-[15px] text-yellow-400 p-[10px] text-center transition-all ease-linear duration-300 max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {character}
            </p>
        </div>
    );
}
