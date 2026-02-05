import React from 'react';
import { IsoSection, GlassCard, ModernTable, PremiumCard } from '../../../components/ManualUI';

const Section4: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
    return (
        <IsoSection>
            <h1 className="text-3xl font-bold mb-6">Section 4: KEY BUSINESS RULES</h1>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">4.1 PRICING GUIDELINES</h2>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>💰</span> Pricing Philosophy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                <GlassCard className="flex flex-col items-center text-center p-6">
                    <span className="text-3xl mb-4">⚖️</span>
                    <p className="font-black text-[10px] uppercase tracking-widest text-red-600 mb-2">Fair Value</p>
                    <p className="text-[11px] opacity-60 italic">Quality-based competitive pricing</p>
                </GlassCard>
                <GlassCard className="flex flex-col items-center text-center p-6">
                    <span className="text-3xl mb-4">🎯</span>
                    <p className="font-black text-[10px] uppercase tracking-widest text-slate-600 mb-2">Consistency</p>
                    <p className="text-[11px] opacity-60 italic">Fixed rates for all standard clients</p>
                </GlassCard>
                <GlassCard className="flex flex-col items-center text-center p-6">
                    <span className="text-3xl mb-4">🔍</span>
                    <p className="font-black text-[10px] uppercase tracking-widest text-blue-600 mb-2">Transparency</p>
                    <p className="text-[11px] opacity-60 italic">Detailed quotes, no hidden fees</p>
                </GlassCard>
                <GlassCard className="flex flex-col items-center text-center p-6">
                    <span className="text-3xl mb-4">🤝</span>
                    <p className="font-black text-[10px] uppercase tracking-widest text-emerald-600 mb-2">Flexibility</p>
                    <p className="text-[11px] opacity-60 italic">Volume & loyalty-based structures</p>
                </GlassCard>
            </div>

            <GlassCard className="border-l-4 border-l-red-600 mb-10 p-6">
                <h4 className="text-xs font-black uppercase tracking-widest mb-4 opacity-70">Pricing Structure by Division</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <p className="text-[10px] font-black text-red-600 uppercase mb-2">🔥 Fire Systems</p>
                        <p className="text-[11px] opacity-60 italic leading-tight">Unit-based pricing for inspections. Spares quoted at Cost + 35% margin.</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-blue-600 uppercase mb-2">🦺 PPE & Safety</p>
                        <p className="text-[11px] opacity-60 italic leading-tight">Tiered volume discounts (Tier 1-4). Market-driven competitive rates.</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-600 uppercase mb-2">👕 Workwear</p>
                        <p className="text-[11px] opacity-60 italic leading-tight">Base garment price + setup fee + unit branding charge.</p>
                    </div>
                </div>
            </GlassCard>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">4.2 DISCOUNT AUTHORITY</h2>

            <ModernTable
                headers={['Level', 'Max Discount', 'Required Justification']}
                rows={[
                    [<span className="font-bold">Sales Representatives</span>, '✓ Up to 15%', 'Volume or Competitive match'],
                    [<span className="font-bold">Sales Responsible</span>, '✓ Up to 20%', 'Strategic account or Annual contract'],
                    [<span className="font-bold text-red-600">Executive Board</span>, <span className="font-black text-red-600">Above 20%</span>, <span className="italic">Written Business Case required</span>],
                ]}
            />

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">4.3 PAYMENT & CREDIT POLICY</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <GlassCard className="shadow-xl border-blue-500/10 p-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> Standard Payment Terms
                    </h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-100 dark:border-white/5 pb-2">
                            <span className="text-xs font-bold">New Customers</span>
                            <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 text-[9px] font-black uppercase rounded">COD / 50% DEP</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-100 dark:border-white/5 pb-2">
                            <span className="text-xs font-bold">Established</span>
                            <span className="px-2 py-0.5 bg-slate-500/10 text-slate-600 text-[9px] font-black uppercase rounded">NET 30 DAYS</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold">Strategic / Contract</span>
                            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 text-[9px] font-black uppercase rounded">NET 60-90 DAYS</span>
                        </div>
                    </div>
                </GlassCard>
                <div className="bg-red-50/50 dark:bg-red-950/20 backdrop-blur-md rounded-2xl border border-red-200/50 dark:border-red-900/50 p-6 shadow-xl !border-red-500/20">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> 50% Mandatory Deposit
                    </h4>
                    <ul className="text-[11px] space-y-2 list-none p-0 m-0 opacity-80 italic font-medium">
                        <li>▪ Custom Branded Items (Workwear/Signs)</li>
                        <li>▪ Equipment orders exceeding 10,000 TND</li>
                        <li>▪ Non-stock special procurements</li>
                        <li>▪ First-time orders for new entities</li>
                    </ul>
                </div>
            </div>

            <PremiumCard className="border-slate-800 !bg-slate-950/40 p-8">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-6 text-slate-400">Arrears Escalation Protocol</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 border border-white/5 rounded-lg text-center">
                        <p className="text-[9px] font-bold opacity-40 uppercase mb-1">D+5 Overdue</p>
                        <p className="text-xs font-black">Friendly Reminder</p>
                    </div>
                    <div className="p-3 border border-white/5 rounded-lg text-center">
                        <p className="text-[9px] font-bold opacity-40 uppercase mb-1">D+20 Overdue</p>
                        <p className="text-xs font-black text-orange-500">Formal Notice</p>
                    </div>
                    <div className="p-3 border border-red-500/20 rounded-lg text-center bg-red-500/5">
                        <p className="text-[9px] font-bold text-red-500 uppercase mb-1">D+45 Overdue</p>
                        <p className="text-xs font-black text-red-600">Service Hold</p>
                    </div>
                    <div className="p-3 border border-red-600 rounded-lg text-center bg-red-600 text-white shadow-lg">
                        <p className="text-[9px] font-bold uppercase mb-1 opacity-70">D+90 Overdue</p>
                        <p className="text-xs font-black">Legal Action</p>
                    </div>
                </div>
            </PremiumCard>

            <h3 className="text-xl font-bold mt-12 mb-4">📞 Payment Collection Process</h3>

            <ModernTable
                headers={['Timeline', 'Collection Action', 'Responsible Party']}
                columnWidths={['w-1/4', '', '']}
                rows={[
                    [<span className="font-bold">5 days before due date</span>, '✉️ Friendly reminder email/SMS', 'Admin (automated)'],
                    [<span className="font-bold">On due date</span>, '✉️ Confirmation email "payment due today"', 'Admin'],
                    [<span className="font-bold text-blue-500">Day 10 overdue</span>, '📞 Polite phone call + email reminder', 'Collection Responsible'],
                    [<span className="font-bold text-orange-600">Day 20 overdue</span>, '📧 Formal reminder email + call', 'Collection Resp. / Sales team'],
                    [<span className="font-bold text-red-500">Day 35 overdue</span>, '☎️ Escalation call from Sales Responsible', 'Sales Resp. + Collection Resp.'],
                    [<span className="font-bold text-red-600">Day 45 overdue</span>, '⚠️ Final notice (service suspension warning)', 'Sales Resp. + Manager'],
                    [<span className="font-black text-red-700">Day 60 overdue</span>, '🔒 Account on hold (no new services/orders)', 'Manager / Co-Manager'],
                    [<span className="font-black text-red-800">Day 90 overdue</span>, '⚖️ Legal action consideration', 'Manager / Co-Manager'],
                ]}
            />

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h4 className="font-bold mb-4 ml-2">Collection Strategies:</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <GlassCard className="p-6">
                    <p className="text-[10px] font-black opacity-30 uppercase mb-3 italic">Days 1 - 30: Early Stage</p>
                    <p className="text-sm font-medium opacity-80 mb-0">Friendly reminders | Assume good intent | Check for invoice issues</p>
                </GlassCard>
                <div className="bg-orange-50/50 dark:bg-orange-950/20 backdrop-blur-md rounded-2xl border border-orange-200/50 dark:border-orange-900/50 p-6">
                    <p className="text-[10px] font-black uppercase mb-3 italic opacity-70">Days 31 - 60: Escalation</p>
                    <p className="text-sm font-black opacity-90 mb-0">Formal tone | Hold new orders | Negotiate payment plans</p>
                </div>
                <div className="bg-red-50/50 dark:bg-red-950/20 backdrop-blur-md rounded-2xl border border-red-200/50 dark:border-red-900/50 p-6">
                    <p className="text-[10px] font-black uppercase mb-3 italic opacity-70">Days 61+: Serious Risk</p>
                    <p className="text-sm font-black text-red-700 dark:text-red-400 mb-0">Account HOLD | Legal action | Write-off evaluation</p>
                </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h3 className="text-xl font-bold mb-4">📝 Payment Plans</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <GlassCard className="p-6">
                    <p className="text-[10px] font-black opacity-40 uppercase mb-3 pr-2 border-b border-gray-200 dark:border-gray-700 pb-2 tracking-widest">✅ CRITERIA</p>
                    <ul className="text-xs space-y-2 list-none p-0 m-0 italic font-medium opacity-60">
                        <li className="flex items-center gap-2"><span>▪</span> Temporary financial difficulties</li>
                        <li className="flex items-center gap-2"><span>▪</span> Amounts exceeding 5,000 TND</li>
                        <li className="flex items-center gap-2"><span>▪</span> Positive historical payment record</li>
                        <li className="flex items-center gap-2"><span>▪</span> Transparent client communication</li>
                    </ul>
                </GlassCard>
                <GlassCard className="border-l-4 border-l-red-600 p-6">
                    <p className="text-[10px] font-black text-red-600 uppercase mb-3 pr-2 border-b border-red-100 dark:border-red-900/30 pb-2 tracking-widest">🛡️ REQUIREMENTS</p>
                    <ul className="text-xs space-y-2 list-none p-0 m-0 font-bold opacity-80">
                        <li className="flex items-center gap-2"><span className="text-red-500">✓</span> Formally Signed Agreement</li>
                        <li className="flex items-center gap-2"><span className="text-red-500">✓</span> Executive Manager Approval</li>
                        <li className="flex items-center gap-2"><span className="text-red-500">✓</span> No New Credit until paid</li>
                        <li className="flex items-center gap-2"><span className="text-red-500">✓</span> maximum 3-Month Plan</li>
                    </ul>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h3 className="text-xl font-bold mb-4">⚠️ Late Payment Consequences</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50/50 dark:bg-red-950/20 backdrop-blur-md rounded-2xl border border-red-200/50 dark:border-red-900/50 p-6">
                    <p className="text-[10px] font-black uppercase mb-3 pr-2 border-b border-red-200 dark:border-red-800 pb-2 opacity-70 tracking-widest text-red-600">💰 FINANCIAL PENALTIES</p>
                    <ul className="space-y-3 text-sm list-none p-0 m-0 italic opacity-80">
                        <li className="flex items-center gap-2"><span>▪</span> 1% Monthly late fee on balance</li>
                        <li className="flex items-center gap-2"><span>▪</span> Reimbursement of legal admin fees</li>
                        <li className="flex items-center gap-2"><span>▪</span> Interest applied as per Tunisian Law</li>
                    </ul>
                </div>
                <GlassCard className="p-6">
                    <p className="text-[10px] font-black opacity-40 uppercase mb-3 pr-2 border-b border-gray-200 dark:border-gray-700 pb-2 tracking-widest">🔒 OPERATIONAL IMPACT</p>
                    <ul className="space-y-3 text-sm list-none p-0 m-0 italic opacity-80">
                        <li className="flex items-center gap-2"><span>▪</span> Order suspension (&gt; 30d overdue)</li>
                        <li className="flex items-center gap-2"><span>▪</span> No MSA renewal (&gt; 45d overdue)</li>
                        <li className="flex items-center gap-2"><span>▪</span> Revocation of "Preferred Client" status</li>
                    </ul>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">4.4 TRAVEL FEES POLICY</h2>

            <ModernTable
                headers={['Distance (from Sfax/Tunis)', 'Standard Fee', 'Exemptions']}
                rows={[
                    [<span className="font-bold">0 - 120 km</span>, <span className="text-green-600 font-bold">FREE</span>, 'Standard Service'],
                    [<span className="font-bold">121 - 250 km</span>, '150 TND', 'Waived for Orders > 10k'],
                    [<span className="font-bold text-red-600">Over 250 km</span>, 'Custom Quote', 'Contract Customers'],
                ]}
            />

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">4.5 WARRANTY & RETURNS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <GlassCard className="!bg-emerald-500/5 border-emerald-500/20 p-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-4">🏠 Service Warranty</p>
                    <p className="text-xs font-bold mb-2">06-Month Workmanship Guarantee</p>
                    <p className="text-[11px] opacity-60 italic">Automatic FREE rework if reported within 7 days of service completion.</p>
                </GlassCard>
                <GlassCard className="!bg-blue-500/5 border-blue-500/20 p-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4">📦 Product Returns</p>
                    <p className="text-xs font-bold mb-2">7-Day Return Policy</p>
                    <p className="text-[11px] opacity-60 italic">Applicable only for unopened standard stock in original packaging.</p>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">4.6 RISK MANAGEMENT (THE "NO" LIST)</h2>

            <div className={`rounded-2xl border p-8 shadow-2xl ${isDark ? 'bg-red-950/20 border-red-500/30' : 'bg-red-950 border-red-800'}`}>
                <h4 className="text-xs font-black uppercase tracking-widest text-red-500 mb-6 flex items-center justify-between">
                    <span>🚩 CRITICAL RED FLAGS</span>
                    <span className="px-2 py-0.5 bg-red-500 text-white text-[9px] font-black rounded">DECISION: DECLINE</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex gap-3">
                        <span className="text-red-500">✗</span>
                        <p className="text-[11px] font-bold text-white">Unethical Or Illegal Requests</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-red-500">✗</span>
                        <p className="text-[11px] font-bold text-white">Inadequate Safety Provisions</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-red-500">✗</span>
                        <p className="text-[11px] font-bold text-white">History Of Bad Debt/Non-Payment</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-red-500">✗</span>
                        <p className="text-[11px] font-bold text-white">Requests To Bypass Compliance</p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <p className="text-center text-[10px] font-black opacity-30 italic uppercase tracking-tighter">"We value safety and integrity over any contract value."</p>
            </div>
        </IsoSection>
    );
};

export default Section4;
