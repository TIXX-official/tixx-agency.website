import { motion } from 'framer-motion';

const partners = [
    "TIMES", "Jagermeister", "BOLERO", "THE HENZ", "FRAME SEOUL", "Orgasm Valley 2",
    "BUBBLE PLAYLIST", "AMBIENCE SEOUL", "PGMNT", "THE CLIFF JEJU", "BEACH CLIFF"
];

const Partners = () => {
    // Duplicate partners to ensure seamless loop
    const extendedPartners = [...partners, ...partners, ...partners];

    return (
        <section className="py-20 md:py-32 border-t border-gray-100 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 md:px-12 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-accent font-bold tracking-widest text-sm uppercase block mb-4">Network</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        Our Partners
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        함께 문화를 만들어가는 파트너들입니다.
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full flex">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {extendedPartners.map((partner, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-4xl font-bold text-gray-300 hover:text-black transition-colors duration-300 uppercase tracking-wider cursor-default"
                        >
                            {partner}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
