import { influencersData, venuesData } from '../utils/programMockData';
import { Filter, Search, MapPin, Heart, LayoutGrid, List } from 'lucide-react';

interface ProgramPreviewProps {
    type: 'influencer' | 'venue';
}

const ProgramPreview = ({ type }: ProgramPreviewProps) => {

    const formatFollowers = (count: number) => {
        if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
        if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
        return count.toString();
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
    };

    if (type === 'influencer') {
        return (
            <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden border border-gray-100 shadow-xl h-[600px] flex flex-col font-sans">
                {/* Header Mockup */}
                <div className="bg-white px-6 py-4 border-b border-gray-100 flex justify-between items-center z-10 sticky top-0">
                    <div>
                        <h2 className="text-xl font-bold text-[#1d1d1f]">Influencer Discovery</h2>
                        <p className="text-xs text-gray-500">TIXX Verified Partners</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                            <button className="p-1.5 bg-white rounded shadow-sm">
                                <LayoutGrid size={16} className="text-black" />
                            </button>
                            <button className="p-1.5 text-gray-400">
                                <List size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filter Bar Mockup */}
                <div className="bg-white px-6 py-3 border-b border-gray-100 flex gap-3 overflow-hidden whitespace-nowrap">
                    <div className="flex items-center gap-2 text-gray-500 mr-2 border-r border-gray-200 pr-4">
                        <Filter size={14} className="text-black" />
                        <span className="font-bold text-xs uppercase tracking-wide text-black">Filters</span>
                    </div>
                    {['Fashion', 'Tech', 'Lifestyle'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-medium text-gray-600">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                    <div className="grid grid-cols-2 gap-4">
                        {influencersData.map((influencer) => (
                            <div key={influencer.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-gray-100 group">
                                <div className="aspect-[4/5] bg-gray-200 relative">
                                    <img src={influencer.image} alt={influencer.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-white">
                                        {influencer.category.split(' ')[0]}
                                    </div>
                                    <div className="absolute bottom-2 right-2">
                                        <div className="bg-white/90 p-1.5 rounded-full shadow-sm">
                                            <Heart size={12} className="text-black" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className="font-bold text-sm text-black truncate">{influencer.name}</h3>
                                    <p className="text-[10px] text-gray-400 mb-2">{influencer.handle}</p>
                                    <div className="flex justify-between items-center text-xs bg-gray-50 p-1.5 rounded">
                                        <div className="text-center w-full border-r border-gray-200">
                                            <span className="block font-bold text-black">{formatFollowers(influencer.followerCount)}</span>
                                            <span className="text-[9px] text-gray-400 uppercase">Followers</span>
                                        </div>
                                        <div className="text-center w-full">
                                            <span className="block font-bold text-black">{influencer.engagement}</span>
                                            <span className="text-[9px] text-gray-400 uppercase">Eng.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden border border-gray-100 shadow-xl h-[600px] flex flex-col font-sans">
            {/* Header Mockup */}
            <div className="bg-white px-6 py-4 border-b border-gray-100 flex flex-wrap items-center justify-between z-10 sticky top-0">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold text-black">Venue Search</h2>
                    <div className="h-4 w-px bg-gray-200"></div>
                    <div className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                        <MapPin size={12} className="mr-1" /> Seoul
                    </div>
                </div>
                <div className="bg-black text-white p-1.5 rounded-lg">
                    <Search size={16} />
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Map Side (Left) */}
                <div className="w-1/3 bg-gray-200 relative hidden md:block border-r border-gray-200">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Neighborhood_Map_1002.svg')] bg-cover bg-center grayscale contrast-75 brightness-110"></div>
                    {venuesData.map(venue => (
                        <div key={venue.id} className="absolute transform -translate-x-1/2 -translate-y-full" style={{ top: venue.coordinates.top, left: venue.coordinates.left }}>
                            <div className="bg-black text-white p-1.5 rounded-full shadow-lg">
                                <MapPin size={16} fill="currentColor" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* List Side (Right) */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-hide">
                    <div className="space-y-4">
                        {venuesData.map(venue => (
                            <div key={venue.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row group">
                                <div className="h-32 md:w-32 md:h-auto bg-gray-200 relative shrink-0">
                                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-sm text-black">{venue.name}</h3>
                                            <span className="font-bold text-xs">{formatCurrency(venue.price)}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                            <MapPin size={10} /> {venue.locationKo}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-end mt-3">
                                        <div className="flex gap-2">
                                            <span className="text-[10px] bg-gray-50 px-2 py-0.5 rounded text-gray-600 font-bold">{venue.pyeong}평</span>
                                            <span className="text-[10px] bg-gray-50 px-2 py-0.5 rounded text-gray-600 font-bold">Cap. 100+</span>
                                        </div>
                                        <button className="px-3 py-1.5 bg-black text-white text-[10px] font-bold rounded hover:bg-gray-800 transition-colors">
                                            Select
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramPreview;
