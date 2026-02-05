import React from 'react';
import { IsoSection, GlassCard, ModernTable, PremiumCard } from '../../../components/ManualUI';

const Appendix: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
    return (
        <IsoSection>
            <h1 className="text-3xl font-bold mb-6">APPENDIX: QUICK REFERENCE</h1>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">📞 Key Contacts Summary</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                <GlassCard className="flex flex-col items-center text-center p-6 border-red-500/20" isDark={isDark}>
                    <span className="text-3xl mb-4">🆘</span>
                    <p className="font-black text-[10px] uppercase tracking-widest text-red-600 mb-2">Emergency</p>
                    <p className="text-xl font-black underline text-red-600">+216 74 45 30 28</p>
                </GlassCard>
                <GlassCard className="flex flex-col items-center text-center p-6" isDark={isDark}>
                    <span className="text-3xl mb-4">👤</span>
                    <p className="font-black text-[10px] uppercase tracking-widest text-slate-600 mb-2">Management</p>
                    <p className="text-[11px] font-black">Karim BEN SALEM</p>
                    <p className={`text-[9px] ${isDark ? 'opacity-60' : 'text-slate-500'}`}>+216 29 308 108</p>
                </GlassCard>
                <GlassCard className="flex flex-col items-center text-center p-6" isDark={isDark}>
                    <span className="text-3xl mb-4">📈</span>
                    <p className="font-black text-[10px] uppercase tracking-widest text-blue-600 mb-2">Sales</p>
                    <p className="text-[11px] font-black">Najla BEN SALEM</p>
                    <p className={`text-[9px] ${isDark ? 'opacity-60' : 'text-slate-500'}`}>+216 28 615 020</p>
                </GlassCard>
                <GlassCard className="flex flex-col items-center text-center p-6" isDark={isDark}>
                    <span className="text-3xl mb-4">🛠️</span>
                    <p className="font-black text-[10px] uppercase tracking-widest text-slate-600 mb-2">Operations</p>
                    <p className="text-[11px] font-black">M. CHRAITI</p>
                    <p className={`text-[9px] ${isDark ? 'opacity-60' : 'text-slate-500'}`}>+216 29 308 933</p>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">⚡ Quick Decision Guide</h2>

            <ModernTable
                headers={['Decision Required', 'Primary Approver', 'Threshold']}
                rows={[
                    [<span className="font-bold">Discount Level 1</span>, 'Sales Rep', "{ '<' } 15%"],
                    [<span className="font-bold">Discount Level 2</span>, 'Sales Responsible', '15% - 20%'],
                    [<span className="font-bold text-red-600">Executive Approval</span>, <span className="font-black">Manager</span>, '> 20%'],
                    [<span className="font-bold text-blue-600">Operational Spend</span>, 'Operations Resp.', 'Up to 500 TND'],
                ]}
            />

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">🛡️ Our Service Promise</h2>

            <PremiumCard className={`border-slate-800 p-8 text-center relative overflow-hidden ${isDark ? '!bg-slate-950/60' : '!bg-slate-900'}`} isDark={isDark}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-slate-800 to-red-600"></div>
                <p className="text-lg font-black italic mb-2 tracking-tight text-white">"We show up, we follow through, and we fix it right."</p>
                <p className={`text-[10px] uppercase tracking-[0.2em] text-white ${isDark ? 'opacity-40' : 'opacity-60'}`}>The SS+ Quality Seal</p>
            </PremiumCard>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">📝 ACKNOWLEDGMENT</h2>

            <GlassCard className={`p-10 ${isDark ? '!bg-white/5 border-white/10' : '!bg-slate-50 border-slate-200 shadow-inner'}`} isDark={isDark}>
                <p className={`text-sm italic mb-8 ${isDark ? 'opacity-80' : 'text-slate-700'}`}>I acknowledge that I have received, read, and understood the SS+ Company Manual. I commit to upholding these standards in my daily professional conduct.</p>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
                    <div>
                        <p className={`text-[9px] font-black uppercase tracking-widest mb-10 ${isDark ? 'opacity-40' : 'opacity-60 text-slate-900'}`}>Employee Signature</p>
                        <div className={`w-full border-b h-8 ${isDark ? 'border-white/20' : 'border-slate-300'}`}></div>
                        <p className={`text-[10px] mt-2 ${isDark ? 'opacity-60' : 'text-slate-500'}`}>Date: ____/____/202__</p>
                    </div>
                    <div>
                        <p className={`text-[9px] font-black uppercase tracking-widest mb-10 ${isDark ? 'opacity-40' : 'opacity-60 text-slate-900'}`}>Authorized Manager</p>
                        <div className={`w-full border-b h-8 ${isDark ? 'border-white/20' : 'border-slate-300'}`}></div>
                        <p className={`text-[10px] mt-2 ${isDark ? 'opacity-60' : 'text-slate-500'}`}>Date: ____/____/202__</p>
                    </div>
                </div>
            </GlassCard>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">📄 DOCUMENT CONTROL</h2>

            <ModernTable
                headers={['Ver', 'Date', 'Summary of Changes', 'Approver']}
                className="!text-[10px]"
                rows={[
                    ['0.4', 'Nov 2025', 'Visual Identity Refresh & Pricing Definition', 'K. BEN SALEM'],
                    ['0.5', 'Jan 2026', <span className="font-bold">Modernization:</span>, 'Premium Aero Theme & ISO Styling', 'WAVE VI'],
                ]}
            />

            <div className="mt-20 py-10 border-t border-gray-200 dark:border-white/5 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20 mb-2">Sécurité Services Plus — Confidential</p>
                <p className="text-[9px] opacity-40 italic">© 2026 Sécurité Services Plus. All rights reserved. Developed by WAVE VI.</p>
            </div>
        </IsoSection>
    );
};

export default Appendix;
