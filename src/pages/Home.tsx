
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConnectCarousel from '../components/ConnectCarousel';
import Partners from '../components/Partners';

const Home = () => {
    return (
        <div className="min-h-screen pt-40 md:pt-60 flex flex-col items-center px-8 md:px-20 overflow-hidden bg-background relative">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 max-w-5xl mb-32 md:mb-40 w-full text-center flex flex-col items-center"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-xs font-bold mb-6 tracking-widest uppercase">
                    TIXX Connect
                </span>
                <h1 className="text-4xl md:text-[7rem] font-bold leading-[1.1] md:leading-[0.9] tracking-tight text-black mb-6 md:mb-8">
                    Creative Minds, <br />
                    <span className="relative z-10 inline-block">
                        <span className="relative z-10">Automated System.</span>
                        <span className="absolute bottom-1 md:bottom-2 left-0 right-0 h-3 md:h-8 bg-accent/60 -z-0"></span>
                    </span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-600 font-medium max-w-2xl leading-relaxed mb-8 md:mb-12">
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

            {/* TIXX Connect Reference Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="z-10 w-full mb-40 select-none"
            >
                <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4 max-w-8xl mx-auto">
                    <div>
                        <span className="text-accent font-bold tracking-widest text-sm uppercase">References</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">TIXX Connect</h2>
                        <p className="text-gray-500 mt-2 max-w-xl">
                            클럽, 라운지 베뉴와의 협업부터 HURRA, 예거마이스터 등 글로벌 브랜드와의 파트너십까지.
                            오프라인 경험을 온라인 데이터로 연결합니다.
                        </p>
                    </div>
                </div>
                <div className="-mx-8 md:-mx-20 px-8 md:px-20">
                    <ConnectCarousel />
                </div>
            </motion.div>

            {/* Agency Preview Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="z-10 w-full max-w-7xl mb-40"
            >
                <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
                    <div>
                        <span className="text-accent font-bold tracking-widest text-sm uppercase">Who We Are</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">The Team</h2>
                    </div>
                    <Link to="/agency" className="text-sm font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-400 transition-colors">
                        더 보기
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            role: 'Developers',
                            desc: '자체 앱 및 자동화 솔루션 개발',
                            details: ['React, Next.js, React Native', 'AWS Infra Structure', 'Data Analysis']
                        },
                        {
                            role: 'Vibe Directors',
                            desc: '파티 및 이벤트 기획/운영 전문가',
                            details: ['Space Directing', 'On-site Operation', 'Artist Booking']
                        },
                        {
                            role: 'Marketers',
                            desc: '데이터 기반의 브랜드 전략 기획',
                            details: ['Performance Marketing', 'Brand Consulting', 'Content Creation']
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                            <h3 className="text-2xl font-bold mb-2">{item.role}</h3>
                            <p className="text-gray-600 font-medium mb-6">{item.desc}</p>
                            <ul className="space-y-2">
                                {item.details.map((detail, i) => (
                                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
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
                className="z-10 w-full max-w-7xl mb-48"
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
                    <Link to="/service" className="group relative overflow-hidden bg-black rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-between text-white hover:scale-[1.01] transition-transform duration-500">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/30 transition-colors" />

                        {/* Content */}
                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs font-bold mb-4">ONLINE</span>
                            <h3 className="text-4xl md:text-5xl font-bold mb-4">Influencer<br />Agency</h3>
                            <p className="text-gray-400 max-w-xs leading-relaxed">
                                자체 인플루언서 DB와 자동화 시스템을 통한 정밀 타겟팅 및 퍼포먼스 마케팅.
                            </p>
                        </div>

                        {/* Visual Placeholder for App */}
                        <div className="relative z-10 mt-auto translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <img src="/assets/archive/tixx-iPhone.png" alt="App Preview" className="w-64 drop-shadow-2xl mx-auto md:mx-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowRight size={20} />
                        </div>
                    </Link>

                    <Link to="/service" className="group relative overflow-hidden bg-gray-50 border border-gray-200 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-between text-black hover:scale-[1.01] transition-transform duration-500 hover:shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 rounded-full border border-black/10 text-xs font-bold mb-4 bg-white">OFFLINE</span>
                            <h3 className="text-4xl md:text-5xl font-bold mb-4">Space<br />Directing</h3>
                            <p className="text-gray-600 max-w-xs leading-relaxed">
                                브랜드 팝업부터 클럽 파티까지. 기획, 공간 연출, 운영, 데이터 분석 리포트 제공.
                            </p>
                        </div>

                        <div className="relative z-10 mt-auto grid grid-cols-2 gap-4">
                            {['Venue Curation', 'Party Planning', 'On-site Ops', 'After Report'].map((tag, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl shadow-sm font-bold text-sm border border-gray-100 text-center">
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                            <ArrowRight size={20} />
                        </div>
                    </Link>
                </div>
            </motion.div>

            {/* Partners Section */}
            <Partners />
        </div>
    );
};

export default Home;
