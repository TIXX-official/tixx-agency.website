import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, MapPin, CheckCircle, Filter, LucideIcon } from 'lucide-react';

interface ServiceTabProps {
    active: boolean;
    onClick: () => void;
    icon: LucideIcon;
    label: string;
}

const ServiceTab = ({ active, onClick, icon: Icon, label }: ServiceTabProps) => (
    <button
        onClick={onClick}
        className={`flex-1 py-6 text-center text-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 relative ${active ? 'text-black' : 'text-gray-400 hover:text-gray-600'
            }`}
    >
        <Icon size={24} />
        {label}
        {active && (
            <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
            />
        )}
    </button>
);

const Service = () => {
    const [activeTab, setActiveTab] = useState('online');

    return (
        <div className="min-h-screen pt-24 pb-20 bg-background">
            <div className="max-w-7xl mx-auto px-8 md:px-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Our Services</h1>
                    <p className="text-xl text-gray-500">온라인 인플루언서 마케팅부터 오프라인 공간 디렉팅까지,<br />경계 없는 크리에이티브를 제공합니다.</p>
                </div>

                {/* Custom Tab Navigation */}
                <div className="flex border-b border-gray-100 mb-16">
                    <ServiceTab
                        active={activeTab === 'online'}
                        onClick={() => setActiveTab('online')}
                        icon={Globe}
                        label="ONLINE : Influencer Agency"
                    />
                    <ServiceTab
                        active={activeTab === 'offline'}
                        onClick={() => setActiveTab('offline')}
                        icon={MapPin}
                        label="OFFLINE : Space Directing"
                    />
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {activeTab === 'online' ? (
                        <>
                            <div className="order-2 lg:order-1">
                                <span className="text-accent font-bold tracking-widest text-sm mb-4 block uppercase p-1 px-3 bg-black w-fit rounded">Tech Integration</span>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Influencer Agency Program</h2>
                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                    자체 보유한 인플루언서 DB를 통해 브랜드 핏에 맞는 최적의 인플루언서를 매칭합니다.
                                    수작업으로 이루어지던 섭외 과정을 자동화하여 마케팅 효율을 극대화하세요.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        { title: "Smart Filtering", desc: "금액, 연령, 팔로워 성비, 카테고리별 정밀 타겟 검색" },
                                        { title: "Batch Messaging", desc: "제안서 대량 발송 및 수신 확인 트래킹 시스템" },
                                        { title: "Digital Contract", desc: "앱 내 전자 서명을 통한 안전하고 간편한 계약 체결" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="mt-1 min-w-[24px]">
                                                <CheckCircle className="text-black" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                                <p className="text-gray-500">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="order-1 lg:order-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl relative overflow-hidden h-[600px] flex flex-col">
                                {/* Dashboard Mockup */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-accent"></div>
                                <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                                    <div className="font-bold text-lg">TIXX Influencer Hub</div>
                                    <div className="bg-black text-white text-xs px-3 py-1 rounded-full">Admin View</div>
                                </div>
                                <div className="flex gap-2 mb-4 overflow-x-auto">
                                    {["Fashion", "Beauty", "Lifestyle", "Tech"].map(tag => (
                                        <span key={tag} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 whitespace-nowrap">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                                            <div className="flex-1">
                                                <div className="w-24 h-4 bg-gray-100 rounded mb-2"></div>
                                                <div className="w-16 h-3 bg-gray-50 rounded"></div>
                                            </div>
                                            <button className="px-4 py-2 bg-black text-white text-xs rounded-lg font-bold">Select</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Offline Content */}
                            <div className="order-2 lg:order-1">
                                <span className="text-accent font-bold tracking-widest text-sm mb-4 block uppercase p-1 px-3 bg-black w-fit rounded">Space Experience</span>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Pop-up & Party Directing</h2>
                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                    브랜드의 아이덴티티를 오프라인 공간에 완벽하게 구현합니다.
                                    장소 섭외부터 공간 연출, 운영, 그리고 데이터 리포트까지 원스톱으로 제공합니다.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        { title: "Venue Filter System", desc: "지역, 수용인원, 무드별 최적의 베뉴 즉시 매칭" },
                                        { title: "Fast Process", desc: "복잡한 대관, 계약 절차 간소화 및 표준 계약 시스템" },
                                        { title: "Total Directing", desc: "기획-디자인-운영-리포트까지 전담 PM 배정" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="mt-1 min-w-[24px]">
                                                <CheckCircle className="text-black" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                                <p className="text-gray-500">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="order-1 lg:order-2 bg-white rounded-3xl p-0 border border-gray-100 shadow-xl relative overflow-hidden h-[600px]">
                                {/* Map/Venue Mockup */}
                                <div className="absolute inset-0 bg-gray-100 opacity-50 bg-[radial-gradient(#ddd_1px,transparent_1px)] [background-size:20px_20px]"></div>

                                {[1, 2, 3].map(i => (
                                    <div key={i} className="absolute p-2 bg-white rounded-lg shadow-lg flex items-center gap-2 transform hover:scale-110 transition-transform cursor-pointer group"
                                        style={{ top: `${20 + i * 25}%`, left: `${30 + (i % 2) * 30}%` }}>
                                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-accent">
                                            <MapPin size={16} fill="#f2f762" />
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                                            Capacity: 200+
                                        </div>
                                    </div>
                                ))}

                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <Search className="text-gray-400" size={20} />
                                        <input type="text" placeholder="Gangnam, Lounge Bar, 100 people" className="bg-transparent w-full outline-none text-sm font-medium" disabled />
                                        <div className="p-2 bg-accent rounded-lg">
                                            <Filter size={16} className="text-black" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Service;
