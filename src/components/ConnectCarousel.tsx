import { motion } from 'framer-motion';

const references = [
    {
        id: 1,
        type: 'video',
        src: '/assets/archive/dirtixx-poster.mp4',
        title: 'DIRTIXX',
        category: 'Club Party',
        year: '2024',
        client: 'Dirty Rose Club'
    },
    {
        id: 2,
        type: 'video',
        src: '/assets/archive/nastixx-poster.mp4',
        title: 'NASTIXX',
        category: 'Brand Party',
        year: '2024',
        client: 'Jägermeister'
    },
    {
        id: 3,
        type: 'video',
        src: '/assets/archive/pgmntixx-poster.mp4',
        title: 'PGMNTIXX',
        category: 'Exhibition Party',
        year: '2023',
        client: 'Pigment Public'
    },
    {
        id: 4,
        type: 'image',
        src: '/assets/archive/getixx-poster.jpg',
        title: 'GETIXX',
        category: 'Lounge Party',
        year: '2024',
        client: 'Get All Right'
    }
];

const ConnectCarousel = () => {
    return (
        <div className="w-full">
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    height: 8px;
                }
                .hide-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 4px;
                }
                .hide-scrollbar::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 4px;
                }
                .hide-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
            <div className="overflow-x-auto hide-scrollbar pb-8 px-8 md:px-20 -mx-8 md:-mx-20">
                <div className="flex gap-6 md:gap-10 w-max pr-8 md:pr-20">
                    {references.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative min-w-[280px] w-[280px] md:min-w-[400px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg"
                        >
                            {item.type === 'video' ? (
                                <video
                                    src={item.src}
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-1 block">
                                        {item.client}
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{item.title}</h3>
                                    <div className="flex gap-3 text-gray-300 text-xs md:text-sm font-medium">
                                        <span>{item.category}</span>
                                        <span>•</span>
                                        <span>{item.year}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConnectCarousel;
