import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Mail } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "connect@tixx.im";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-background flex flex-col justify-center">
            <div className="max-w-4xl mx-auto px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block p-4 rounded-full bg-accent/20 mb-6">
                        <Mail size={40} className="text-black" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">Get in Touch</h1>
                    <p className="text-xl text-gray-500">
                        프로젝트 문의, 제휴 제안 등 언제든 환영합니다.<br />
                        TIXX와 함께 새로운 흐름을 만들어보세요.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl relative overflow-hidden"
                >
                    {/* Decorative blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-left">
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Primary Email</p>
                            <a href={`mailto:${email}`} className="text-3xl md:text-5xl font-bold text-black hover:text-gray-700 transition-colors">
                                {email}
                            </a>
                        </div>

                        <button
                            onClick={handleCopy}
                            className="group flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap"
                        >
                            {copied ? <Check size={20} className="text-accent" /> : <Copy size={20} />}
                            <span>{copied ? "Copied!" : "Copy Address"}</span>
                        </button>
                    </div>


                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
