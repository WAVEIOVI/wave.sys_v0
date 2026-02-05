import React from 'react';
import { IsoSection, GlassCard, ModernTable } from '../../../components/ManualUI';

const Section2: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
    return (
        <IsoSection>
            <h1 className="text-3xl font-bold mb-6">Section 2: STRATEGY & DECISIONS</h1>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">2.1 AUTHORITY MATRIX</h2>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🎯</span> Strategic Decisions (Executive Board Only)
            </h3>

            <GlassCard className="mb-8 p-6">
                <p className="text-xs font-black uppercase tracking-widest text-red-500 mb-4 border-b border-gray-100 dark:border-white/5 pb-2">Karim BEN SALEM & Najla BEN SALEM</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-none p-0 m-0 text-sm font-medium opacity-90">
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1 font-bold">✓</span> Corporate strategy & new locations</li>
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1 font-bold">✓</span> Major capital investments {'>'} 10k TND</li>
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1 font-bold">✓</span> Hiring key personnel & setting policies</li>
                    <li className="flex items-start gap-3"><span className="text-red-500 mt-1 font-bold">✓</span> Write-offs {'>'} 2,000 TND</li>
                </ul>
            </GlassCard>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>💼</span> Commercial & Operations Authority
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <GlassCard className="border-l-4 border-l-red-600 p-6">
                    <h4 className="text-red-600 font-black uppercase tracking-widest text-[10px] mb-4">Sales Responsible (UNLIMITED)</h4>
                    <ul className="space-y-2 text-xs font-medium opacity-80">
                        <li>✓ All pricing & discount decisions (up to 20%)</li>
                        <li>✓ Customer credit approval & refunds</li>
                        <li>✓ Supplier negotiations & sourcing</li>
                    </ul>
                </GlassCard>
                <GlassCard className="border-l-4 border-l-slate-400 p-6">
                    <h4 className="font-black uppercase tracking-widest text-[10px] mb-4 opacity-60">Operations Responsible (1k TND)</h4>
                    <ul className="space-y-2 text-xs font-medium opacity-60">
                        <li>✓ Daily scheduling & team allocation</li>
                        <li>✓ Emergency service authorization</li>
                        <li>✓ Minor purchases up to 1,000 TND</li>
                    </ul>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">2.2 FINANCIAL APPROVAL LIMITS</h2>

            <ModernTable
                headers={['Position', 'Purchase Limit', 'Discount Cap']}
                rows={[
                    [<span className="font-bold">Managers</span>, <span className="text-red-600 font-bold">Unlimited</span>, <span className="text-red-600 font-bold">Unlimited</span>],
                    [<span className="font-bold">Sales Resp.</span>, <span className="font-bold">Unlimited</span>, <span className="font-bold">20%</span>],
                    [<span className="font-bold">Operations Resp.</span>, '1,000 TND', 'N/A'],
                    [<span className="font-bold">Team Leaders</span>, '500 TND', 'N/A'],
                    [<span className="font-bold">Sales Reps</span>, 'N/A', <span className="font-bold">15%</span>],
                ]}
            />

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">2.4 BUSINESS ETHICS & CONDUCT</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50/50 dark:bg-red-950/20 backdrop-blur-md rounded-2xl border border-red-200/50 dark:border-red-900/50 p-6 border-red-500/30">
                    <h4 className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-4">Strictly Prohibited</h4>
                    <ul className="space-y-3 text-xs font-bold opacity-80 list-none p-0 m-0">
                        <li className="flex items-start gap-2"><span>✗</span> Bribery or kickbacks in any form</li>
                        <li className="flex items-start gap-2"><span>✗</span> Competing with SS+ during employment</li>
                        <li className="flex items-start gap-2"><span>✗</span> Misuse of client/proprietary data</li>
                    </ul>
                </div>
                <GlassCard className="p-6">
                    <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-4">Gifts Policy</h4>
                    <p className="text-xs opacity-70 italic mb-4">"Business courtesy is acceptable; extravagance is not."</p>
                    <ul className="space-y-2 text-xs font-medium opacity-80 list-none p-0 m-0">
                        <li className="flex items-center gap-2"><span>✅</span> Minor promo items (&lt; 100 TND)</li>
                        <li className="flex items-center gap-2"><span>❌</span> Cash or personal luxury gifts</li>
                    </ul>
                </GlassCard>
            </div>
        </IsoSection>
    );
};

export default Section2;
