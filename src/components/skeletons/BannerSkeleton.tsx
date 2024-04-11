export default function BannerSkeleton() {
    return (
        <div className="relative lg:pt-[50%] flex items-center justify-center bg-black bg-top bg-no-repeat bg-cover z-10 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black/50 ">
            <div className="container lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-white flex flex-col-reverse lg:flex-row lg:justify-between my-[80px] lg:my-0 items-center z-10">
                <div className="w-full lg:w-1/2">
                    <div className="animate-pulse">
                        <div className="h-6 bg-gray-400 rounded mb-4"></div>
                        <div className="h-4 bg-gray-400 rounded mb-2"></div>
                        <div className="h-4 bg-gray-400 rounded mb-2"></div>
                        <div className="h-4 bg-gray-400 rounded mb-2"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="h-16 bg-gray-400 rounded w-3/4"></div>
                        <div className="h-8 bg-gray-400 rounded w-1/2 mt-4"></div>
                    </div>
                </div>
                <div className="w-[250px] h-[360px] mb-5">
                    <div className="animate-pulse bg-gray-400 rounded-lg w-full h-full"></div>
                </div>
            </div>
        </div>
    );
}
