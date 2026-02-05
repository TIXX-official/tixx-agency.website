import { useState } from 'react';
import ProgramPreview from '../components/ProgramPreview';
import ServicePlans from '../components/ServicePlans';
import { motion } from 'framer-motion';
import { Globe, MapPin, CheckCircle, LucideIcon } from 'lucide-react';

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
                            <div className="order-1 lg:order-2">
                                <ProgramPreview type="influencer" />
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
                            <div className="order-1 lg:order-2">
                                <ProgramPreview type="venue" />
                            </div>
                        </>
                    )}
                </motion.div>
            </div>

            <ServicePlans />
        </div>
    );
};

export default Service;
