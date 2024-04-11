export default function Loading() {
    return (
        <div className=" container content mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-400 h-72 rounded-lg animate-pulse"
                    ></div>
                ))}
            </div>
        </div>
    );
}
