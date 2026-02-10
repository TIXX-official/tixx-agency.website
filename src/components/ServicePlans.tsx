import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, BarChart3, Users, Music, Speaker, Sliders, MapPin } from 'lucide-react';

const ServicePlans = () => {
    return (
        <div className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Our Solutions</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">TIXX Connect Plans</h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto px-4">
                        스타트업부터 대기업까지, 브랜드의 규모와 목표에 맞는<br className="hidden md:block" />
                        최적의 마케팅 솔루션을 제안합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* PLAN 01: CONNECT PASS */}
                    <div className="bg-[#f9fafb] rounded-3xl p-6 md:p-12 border border-gray-100 flex flex-col lg:flex-row gap-8 md:gap-12 group hover:border-black/10 transition-colors">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-5xl font-black text-gray-200">01</span>
                                <div>
                                    <h3 className="text-2xl font-bold">CONNECT PASS</h3>
                                    <span className="text-sm font-bold text-gray-400">Web App Subscription</span>
                                </div>
                            </div>
                            <p className="text-lg md:text-xl font-bold mb-4">"마케터가 직접 찾는, 가장 투명하고 스마트한 인플루언서/베뉴 서칭 솔루션"</p>
                            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                틱스 커넥트 웹앱(SaaS)을 이용해 직접 디깅하고 컨택하는 구독형 서비스입니다.<br />
                                <span className="text-sm text-gray-400 mt-2 block">Target: 직접 섭외를 선호하는 인하우스 마케터, 가성비와 속도가 중요한 스타트업.</span>
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Basic (Free)</div>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-gray-600">
                                            <Check size={18} className="text-black shrink-0" /> Blind Search: 무드/팔로워/카테고리
                                        </li>
                                        <li className="flex gap-3 text-sm text-gray-600">
                                            <Check size={18} className="text-black shrink-0" /> Venue Filter: 공간 기본 정보 열람
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-black text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-20 bg-accent blur-3xl opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="text-sm font-bold text-accent mb-4 uppercase tracking-wider">Pro (Paid)</div>
                                    <ul className="space-y-3 relative z-10">
                                        <li className="flex gap-3 text-sm text-gray-300">
                                            <Check size={18} className="text-accent shrink-0" /> ID Unmasking: 실제 계정/데이터 해제
                                        </li>
                                        <li className="flex gap-3 text-sm text-gray-300">
                                            <Check size={18} className="text-accent shrink-0" /> Direct Contact: 다이렉트 제안/채팅
                                        </li>
                                        <li className="flex gap-3 text-sm text-gray-300">
                                            <Check size={18} className="text-accent shrink-0" /> Digital Contract: 전자 계약/정산
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-96 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col relative">
                            {/* Blur UI Simulation */}
                            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                <div className="font-bold text-sm">Search Result</div>
                                <div className="text-xs text-gray-500">Free Tier View</div>
                            </div>
                            <div className="p-4 space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-gray-100 relative overflow-hidden">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full blur-sm"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="w-24 h-4 bg-gray-200 rounded blur-sm"></div>
                                            <div className="w-16 h-3 bg-gray-100 rounded"></div>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[2px]">
                                            <Lock size={16} className="text-gray-400" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto p-4 bg-gray-50 border-t border-gray-100 text-center">
                                <button className="text-xs font-bold bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-full">
                                    Unlock with Pro
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PLAN 02: PERFORMANCE CAMPAIGN */}
                    <div className="bg-black text-white rounded-3xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 md:gap-12 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-50"></div>
                        <div className="flex-1 relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl md:text-5xl font-black text-gray-800">02</span>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold">PERFORMANCE CAMPAIGN</h3>
                                    <span className="text-xs md:text-sm font-bold text-gray-500">Influencer Marketing</span>
                                </div>
                            </div>
                            <p className="text-lg md:text-xl font-bold mb-4">"섭외부터 성과 분석까지, 데이터로 증명하는 인플루언서 마케팅"</p>
                            <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 leading-relaxed">
                                단순 배포가 아닙니다. 틱스 커넥트가 기획, 섭외, 관리, 결과 분석까지 A to Z를 대행합니다.<br />
                                <span className="text-sm text-gray-600 mt-2 block">Target: 제품 런칭, 시즌 이슈 등으로 확실한 바이럴 수치와 성과 리포트가 필요한 기업.</span>
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="bg-gray-800 p-2 rounded-lg h-fit"><Users size={20} className="text-accent" /></div>
                                    <div>
                                        <h4 className="font-bold text-white">Smart Curation & Management</h4>
                                        <p className="text-sm text-gray-500">브랜드 핏 매칭, 가이드라인 배포, 일정/퀄리티 핸들링</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-gray-800 p-2 rounded-lg h-fit"><BarChart3 size={20} className="text-accent" /></div>
                                    <div>
                                        <h4 className="font-bold text-white">Data Report (Core)</h4>
                                        <p className="text-sm text-gray-500">도달(Reach), 반응률, CPM, ROI 분석 및 차기 전략 제안</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Graph Animation UI */}
                        <div className="lg:w-96 bg-gray-900 rounded-2xl border border-gray-800 p-6 relative z-10 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xs font-bold text-gray-400 uppercase">Campaign Performance</span>
                                <span className="text-xs bg-accent text-black px-2 py-1 rounded font-bold">+124%</span>
                            </div>
                            <div className="flex items-end gap-2 h-40 mb-4 px-2">
                                {[30, 45, 35, 60, 55, 75, 90].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                        className="flex-1 bg-gradient-to-t from-gray-800 to-accent/80 rounded-t-sm relative group"
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            {h}k
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex justify-between pt-4 border-t border-gray-800">
                                <div>
                                    <div className="text-[10px] text-gray-500 uppercase">Total Reach</div>
                                    <div className="text-xl font-bold text-white">2.4M</div>
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-500 uppercase">Avg. ER</div>
                                    <div className="text-xl font-bold text-white">5.8%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PLAN 03: VIBE DIRECTING */}
                    <div className="bg-[#f9fafb] rounded-3xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 md:gap-12 group hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                        {/* Hover Video Background Effect (Simulated with scaling image/gradient for now, can be replaced with video) */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700 scale-110 group-hover:scale-100"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>

                        <div className="flex-1 relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl md:text-5xl font-black text-gray-200">03</span>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold">VIBE DIRECTING</h3>
                                    <span className="text-xs md:text-sm font-bold text-gray-400">Offline Event</span>
                                </div>
                            </div>
                            <p className="text-lg md:text-xl font-bold mb-4">"공간, 사운드, 조명. 전문가의 감각으로 설계하는 압도적 현장감"</p>
                            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                                성공적인 팝업과 파티를 위한 오프라인 공간 큐레이션 및 현장 연출 서비스입니다.<br />
                                <span className="text-sm text-gray-400 mt-2 block">Target: 팝업스토어, 브랜드 런칭 파티, 프라이빗 애프터 파티, 기업 행사.</span>
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <MapPin size={24} className="mb-3 text-black" />
                                    <h4 className="font-bold text-sm mb-1">Venue Matching</h4>
                                    <p className="text-xs text-gray-500">목적/예산별 최적의 공간 큐레이션</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <Music size={24} className="mb-3 text-black" />
                                    <h4 className="font-bold text-sm mb-1">Vibe Directing</h4>
                                    <p className="text-xs text-gray-500">DJ 라인업, 플레이리스트 디렉팅</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="mb-3 text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                                    </div>
                                    <h4 className="font-bold text-sm mb-1">Content Production</h4>
                                    <p className="text-xs text-gray-500">사진/영상 촬영 및 2차 활용 콘텐츠 제작</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <Speaker size={24} className="mb-3 text-black" />
                                    <h4 className="font-bold text-sm mb-1">Tech & Operation</h4>
                                    <p className="text-xs text-gray-500">음향/조명, 현장 운영 인력 배치</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PLAN 04: CULTURE SYNC */}
                    <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-6 md:p-12 flex flex-col gap-8 md:gap-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-purple-500 blur-3xl opacity-10 rounded-full"></div>
                        <div className="absolute bottom-0 left-0 p-32 bg-blue-500 blur-3xl opacity-10 rounded-full"></div>

                        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 relative z-10">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-4xl md:text-5xl font-black text-gray-800">04</span>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold">CULTURE SYNC</h3>
                                        <span className="text-xs md:text-sm font-bold text-gray-500">All-in-One Flagship</span>
                                    </div>
                                </div>
                                <p className="text-lg md:text-xl font-bold mb-4">"예산과 규모에 유연한, 온-오프라인 통합 마케팅의 완성"</p>
                                <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
                                    소규모 프라이빗 행사부터 대형 페스티벌까지. 예산에 맞춰 인플루언서와 공간을 1:1 커스텀 설계합니다.<br />
                                    <span className="text-sm text-gray-600 mt-2 block">Target: 예산 효율을 극대화하고 싶은 브랜드 ~ 임팩트가 필요한 대형 프로젝트.</span>
                                </p>
                            </div>

                            {/* Budget Slider UI - Purely visual interaction component */}
                            <BudgetSlider />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-gray-800 relative z-10">
                            {[
                                { title: "Budget-Flexible", desc: "예산 범위 내 최대 효율 설계" },
                                { title: "Customized Influencer", desc: "브랜드 결에 맞는 전문 인플루언서" },
                                { title: "Hybrid Viral Loop", desc: "오프라인 경험의 온라인 실시간 확산" },
                                { title: "Total Care", desc: "기획-운영-리포트 원스톱 솔루션" }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h4 className="font-bold text-accent text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sub-component for Plan 04 Slider
const BudgetSlider = () => {
    const [value, setValue] = useState(50);

    // Calculate properties based on slider value
    const getScaleLabel = () => {
        if (value < 33) return "Small Boutique";
        if (value < 66) return "Standard Pop-up";
        return "Mega Hall";
    };

    const getIconScale = () => 0.8 + (value / 100) * 0.5;

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:w-96 border border-white/10 flex flex-col justify-center">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1 block">Scale Preview</span>
                    <div className="text-2xl font-bold transition-all duration-300 text-white">{getScaleLabel()}</div>
                </div>
                <div className="p-3 bg-white/10 rounded-full">
                    <Sliders size={20} className="text-accent" />
                </div>
            </div>

            <div className="relative h-32 bg-black/50 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-white/5">
                {/* Visual feedback based on slider */}
                <motion.div
                    className="bg-accent rounded-full absolute"
                    animate={{
                        width: value * 2,
                        height: value * 2,
                        opacity: 0.2 + (value / 200)
                    }}
                />
                <motion.div
                    animate={{ scale: getIconScale() }}
                >
                    <Users className="text-white" size={32} />
                </motion.div>
            </div>

            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-bold uppercase">
                <span>Small</span>
                <span>Medium</span>
                <span>Large</span>
            </div>
        </div>
    )
}

export default ServicePlans;
