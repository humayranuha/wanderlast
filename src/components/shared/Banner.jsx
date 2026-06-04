import { Separator } from "@heroui/react";

const Banner = () => {
    return (
        <div className="w-full bg-[url('/assets/banner.png')] bg-cover bg-center text-white flex justify-between flex-col items-center gap-5 min-h-[600px] md:h-150">
            <div className="w-full max-w-7xl mx-auto p-6 md:p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Discover Your <br className="hidden sm:block" /> Next Adventure
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl px-4">
                    Explore breathtaking destinations and create unforgettable memories
                    with our curated travel experiences.
                </p>

                <div className="flex gap-3 sm:gap-5 flex-col sm:flex-row">
                    <button className="uppercase bg-cyan-500 px-4 sm:px-5 py-2 sm:py-3 cursor-pointer hover:bg-cyan-600 transition-colors text-sm sm:text-base">
                        Explore Now
                    </button>

                    <button className="uppercase px-4 sm:px-5 py-2 sm:py-3 bg-white/30 hover:bg-white/40 transition-colors cursor-pointer text-sm sm:text-base">
                        View Destination
                    </button>
                </div>
            </div>

            {/* Bottom Bar - Full Width */}
            <div className="w-full bg-black/50 backdrop-blur-sm md:bg-white/30">
                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-5 items-stretch md:items-center p-4 md:p-0">
                    <div className="px-3 text-center md:text-left">
                        <h3 className="text-sm font-semibold">Location</h3>
                        <p className="text-xs opacity-90">Address, City or Zip</p>
                    </div>

                    <Separator className="hidden md:block" variant="tertiary" orientation="vertical" />
                    <Separator className="md:hidden" variant="tertiary" />

                    <div className="px-3 text-center md:text-left">
                        <h3 className="text-sm font-semibold">Date/Duration</h3>
                        <p className="text-xs opacity-90">Anytime/3 Days</p>
                    </div>

                    <Separator className="hidden md:block" variant="tertiary" orientation="vertical" />
                    <Separator className="md:hidden" variant="tertiary" />

                    <div className="px-3 text-center md:text-left">
                        <h3 className="text-sm font-semibold">Budget</h3>
                        <p className="text-xs opacity-90">$0-$3000</p>
                    </div>

                    <Separator className="hidden md:block" variant="tertiary" orientation="vertical" />
                    <Separator className="md:hidden" variant="tertiary" />

                    <div className="px-3 text-center md:text-left">
                        <h3 className="text-sm font-semibold">People</h3>
                        <p className="text-xs opacity-90">5-10</p>
                    </div>

                    <div className="bg-cyan-500 py-2 px-4 text-center cursor-pointer hover:bg-cyan-600 transition-colors md:ml-auto">
                        <h3 className="text-sm font-semibold">Search</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;