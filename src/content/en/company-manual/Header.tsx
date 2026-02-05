import React from 'react';
import { PremiumCard } from '../../../components/ManualUI';

const Header: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
    return (
        <PremiumCard className="!mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div>
                    <p className="text-red-500 font-extrabold uppercase tracking-[0.3em] text-[10px] mb-3 opacity-90">Official Corporate Documentation</p>
                    <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter leading-none text-white">COMPANY MANUAL</h1>
                    <p className="text-red-500/80 text-sm font-medium tracking-wide">Sécurité Services Plus (SS+)</p>
                </div>
                <div className="flex flex-col justify-end md:items-end">
                    <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-widest font-bold opacity-70">
                        <div className="text-center md:text-right">
                            <p className="mb-1 text-red-500">Version</p>
                            <p className="text-xl font-black text-white">0.5.0</p>
                        </div>
                        <div className="text-center md:text-right border-l border-white/10 pl-8">
                            <p className="mb-1 text-red-500">Last Updated</p>
                            <p className="text-xl font-black text-white">JAN 2026</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-4 text-[11px] font-bold uppercase tracking-widest opacity-80 text-white">
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> OWNER: Karim BEN SALEM</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-slate-500 rounded-full"></span> DEV: WAVE IO</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-green-500 rounded-full"></span> REVIEW: ISO-9001 COMPLIANT</div>
            </div>
        </PremiumCard>
    );
};

export default Header;
