
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen pt-40 md:pt-60 flex flex-col justify-start items-start px-8 md:px-20 overflow-hidden bg-background relative">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 max-w-5xl mb-20"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-xs font-bold mb-6 tracking-widest uppercase">
                    TIXX Agency
                </span>
                <h1 className="text-6xl md:text-[7rem] font-bold leading-[0.9] tracking-tight text-black mb-8">
                    Creative Minds, <br />
                    <span className="relative z-10 inline-block">
                        <span className="relative z-10">Automated System.</span>
                        <span className="absolute bottom-2 left-0 right-0 h-4 md:h-8 bg-accent/60 -z-0"></span>
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl leading-relaxed mb-12">
                    개발자, 파티 디렉터, 브랜드 마케터가 만드는 <br className="hidden md:block" />
                    올인원 마케팅 솔루션.
                </p>

                <div className="flex gap-4">
                    <Link to="/service" className="group px-8 py-4 bg-black text-white font-bold rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        서비스 둘러보기
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/contact" className="px-8 py-4 bg-white text-black border border-gray-200 font-bold rounded-full hover:bg-gray-50 transition-all hover:-translate-y-1">
                        문의하기
                    </Link>
                </div>
            </motion.div>

            {/* Agency Preview Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="z-10 w-full max-w-6xl mt-48 mb-32"
            >
                <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
                    <div>
                        <span className="text-accent font-bold tracking-widest text-sm uppercase">Who We Are</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">TIXX Agency</h2>
                    </div>
                    <Link to="/agency" className="text-sm font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-400 transition-colors">
                        더 보기
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { role: 'Developers', desc: '자체 앱 및 자동화 솔루션 개발' },
                        { role: 'Vibe Directors', desc: '파티 및 이벤트 기획/운영 전문가' },
                        { role: 'Marketers', desc: '데이터 기반의 브랜드 전략 기획' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold mb-2">{item.role}</h3>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Service Preview Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="z-10 w-full max-w-6xl mb-48"
            >
                <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
                    <div>
                        <span className="text-accent font-bold tracking-widest text-sm uppercase">What We Do</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">Our Services</h2>
                    </div>
                    <Link to="/service" className="text-sm font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-400 transition-colors">
                        더 보기
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link to="/service" className="group relative overflow-hidden bg-black rounded-3xl p-10 h-80 flex flex-col justify-end text-white hover:scale-[1.02] transition-transform duration-300">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/30 transition-colors" />
                        <h3 className="text-3xl font-bold mb-2 z-10">Online</h3>
                        <p className="text-gray-300 z-10 w-3/4">인플루언서 에이전시 프로그램 & 기술 통합 솔루션.</p>
                        <ArrowRight className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <Link to="/service" className="group relative overflow-hidden bg-white border border-gray-200 rounded-3xl p-10 h-80 flex flex-col justify-end text-black hover:scale-[1.02] transition-transform duration-300 shadow-sm hover:shadow-xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-3xl font-bold mb-2 z-10">Offline</h3>
                        <p className="text-gray-500 z-10 w-3/4">브랜드 팝업 및 파티 공간 디렉팅.</p>
                        <ArrowRight className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
