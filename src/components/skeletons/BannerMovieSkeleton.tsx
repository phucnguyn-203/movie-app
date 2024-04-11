export default function BannerMovieSkeleton() {
    return (
        <div className="relative flex items-center justify-center lg:block lg:pt-[50%] bg-top bg-no-repeat bg-cover z-10 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black/50">
            <div className="container lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-white flex flex-col gap-y-5 lg:flex-row lg:justify-between my-[80px] lg:my-0 items-center z-10">
                <div className="w-[250px] h-[360px] bg-gray-400 rounded-lg"></div>
                <div className="flex-1 lg:ml-[100px]">
                    <h1 className="text-[40px] font-bold mb-5 text-center lg:text-left bg-gray-400 h-12 rounded-md"></h1>
                    <p className="leading-6 bg-gray-400 h-6 rounded-md"></p>
                    <p className="text-lg mt-5 bg-gray-400 h-6 w-48 rounded-md"></p>
                    <div className="flex gap-5 flex-wrap my-8">
                        <div className="border-1 border-solid border-gray-400 rounded-full p-[10px] bg-gray-400 w-32 h-14"></div>
                        <div className="border-1 border-solid border-gray-400 rounded-full p-[10px] bg-gray-400 w-32 h-14"></div>
                        <div className="border-1 border-solid border-gray-400 rounded-full p-[10px] bg-gray-400 w-32 h-14"></div>
                    </div>
                    <div className="flex gap-5 flex-wrap">
                        <div className="btn-primary px-14 py-5 font-bold bg-gray-400 rounded-md"></div>
                        <div className="btn-primary px-14 py-5 font-bold bg-gray-400 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
