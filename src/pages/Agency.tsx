import { motion } from 'framer-motion';
import { Code, Sparkles, TrendingUp, Smartphone, Database, Zap, LucideIcon } from 'lucide-react';
import ConnectCarousel from '../components/ConnectCarousel';

interface TeamCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string[];
    delay: number;
}

const TeamCard = ({ icon: Icon, title, description, details, delay }: TeamCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
        <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6 text-black shadow-lg shadow-accent/20">
            <Icon size={28} />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
        <p className="text-gray-600 mb-6 font-medium leading-relaxed">
            {description}
        </p>
        <ul className="space-y-2">
            {details.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Agency = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-background">
            <div className="max-w-7xl mx-auto px-8 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Who We Are</h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        TIXX Connect는 기술과 트렌드, 전략이 만나 탄생한 **올인원 마케팅 솔루션**입니다.<br />
                        단순한 대행사를 넘어, 자체 보유한 플랫폼 데이터를 기반으로 가장 확실한 성과를 만듭니다.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    <TeamCard
                        icon={Code}
                        title="Developers"
                        description="TIXX 앱 개발 및 자동화 솔루션 구축."
                        details={["React, Next.js, React Native", "AWS Infra Structure", "Data Analysis"]}
                        delay={0.1}
                    />
                    <TeamCard
                        icon={Sparkles}
                        title="Vibe Directors"
                        description="파티 및 이벤트 기획/운영 전문가."
                        details={["Space Directing", "On-site Operation", "Artist Booking"]}
                        delay={0.2}
                    />
                    <TeamCard
                        icon={TrendingUp}
                        title="Marketers"
                        description="브랜드 실무 경험이 풍부한 기획자."
                        details={["Performance Marketing", "Brand Consulting", "Content Creation"]}
                        delay={0.3}
                    />
                </div>

                {/* References Section */}
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <span className="text-accent font-bold tracking-widest text-sm uppercase">References</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">Our Works</h2>
                    </div>
                    <div className="w-full">
                        <ConnectCarousel />
                    </div>
                </div>

                {/* Synergy Section */}
                <div className="bg-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fdfef0] rounded-l-full opacity-50 pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                                Synergy with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">TIXX App Platform</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                4만 명 이상의 활성 유저를 보유한 TIXX 앱의 빅데이터는 <br />
                                타겟팅의 정확도를 획기적으로 높여줍니다.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-2 bg-white rounded-lg shadow-sm text-accent bg-black">
                                        <Database size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-black">Real User Data</h4>
                                        <p className="text-gray-500 text-sm">실제 오프라인 활동 데이터를 기반으로 한 진성 유저 타겟팅</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-2 bg-white rounded-lg shadow-sm text-accent bg-black">
                                        <Smartphone size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-black">One-Stop Entry</h4>
                                        <p className="text-gray-500 text-sm">QR 입장을 통한 방문자 데이터 수집 및 리타겟팅 활용</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Mockup for Data */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="glass-panel p-6 rounded-2xl bg-white shadow-2xl border border-gray-100"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="font-bold text-lg">User Activity Analysis</div>
                                    <div className="text-xs text-gray-400">Live Data</div>
                                </div>
                                <div className="flex gap-2 items-end h-32 mb-4 px-2">
                                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                            className="flex-1 bg-black rounded-t-sm opacity-80"
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-between text-xs text-gray-400 border-t pt-4 border-gray-100">
                                    <span>Mon</span><span>Sun</span>
                                </div>
                            </motion.div>
                            <div className="absolute -bottom-6 -right-6 bg-accent text-black font-bold px-6 py-4 rounded-xl shadow-lg flex items-center gap-2">
                                <Zap size={20} fill="black" />
                                <span>+240% Growth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agency;
