import React from 'react';
import { IsoSection, GlassCard, ModernTable, Mermaid, PremiumCard } from '../../../components/ManualUI';

const Section3: React.FC = () => {
    return (
        <IsoSection>
            <h1 className="text-3xl font-bold mb-6">Section 3: OUR SERVICE STANDARDS</h1>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">3.1 CUSTOMER SERVICE COMMITMENTS</h2>

            <PremiumCard className="!bg-slate-950/50 mb-8 border-slate-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div><p className="text-2xl mb-1">🤝</p><p className="text-[9px] font-black uppercase opacity-60 tracking-widest text-white">Respect</p></div>
                    <div><p className="text-2xl mb-1">⚡</p><p className="text-[9px] font-black uppercase opacity-60 tracking-widest text-white">Speed</p></div>
                    <div><p className="text-2xl mb-1">🎓</p><p className="text-[9px] font-black uppercase opacity-60 tracking-widest text-white">Expertise</p></div>
                    <div><p className="text-2xl mb-1">💎</p><p className="text-[9px] font-black uppercase opacity-60 tracking-widest text-white">Transparency</p></div>
                </div>
            </PremiumCard>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">3.2 RESPONSE TIME STANDARDS</h2>

            <ModernTable
                headers={['Event', 'Target SLA', 'Point of Contact']}
                rows={[
                    [<span className="font-bold italic">Phone Inquiries</span>, '⏱️ < 3 Rings', 'Admin Support'],
                    [<span className="font-bold italic">Email / Web Quote</span>, '⏱️ 4 Hours', 'Sales Specialist'],
                    [<span className="font-bold italic">Emergency Service</span>, <span className="text-red-600 font-black underline">⏱️ {'<'} 24 Hours</span>, 'Operations Resp.'],
                    [<span className="font-bold italic">Complaint Acknowledgment</span>, '⏱️ 4 Hours', 'Management Duo'],
                ]}
            />

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">3.5 COMPLAINT RESOLUTION</h2>

            <GlassCard className="!p-0 overflow-hidden mb-10">
                <div className="bg-red-500/5 p-4 border-b border-white/5 flex justify-between items-center">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Resolution Workflow</p>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-red-400"></div>
                        <div className="w-1 h-1 rounded-full bg-red-400"></div>
                    </div>
                </div>
                <div className="p-8">
                    <Mermaid chart={`
            %%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '12px', 'primaryColor': '#ffffff', 'primaryTextColor': '#1f2937', 'primaryBorderColor': '#e5e7eb', 'lineColor': '#ef4444', 'secondaryColor': '#fef2f2', 'tertiaryColor': '#ffffff' }}}%%
            flowchart LR
            R["Complaint Recorded"]:::step --> I["Incident Investigation"]:::step
            I --> S["Solution Proposed"]:::step
            S --> C{"Decision?"}:::choice
            C -- Accepted --> F["Final Documentation"]:::success
            C -- Rejected --> E["Management Review"]:::failure
            E --> S
            classDef step fill:#fff,stroke:#e5e7eb,color:#374151,rx:5,ry:5
            classDef choice fill:#fef2f2,stroke:#fecaca,color:#991b1b,rx:10,ry:10
            classDef success fill:#f0fdf4,stroke:#bbf7d0,color:#166534
            classDef failure fill:#fff1f2,stroke:#fecdd3,color:#9f1239
          `} />
                </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50/50 dark:bg-green-950/20 backdrop-blur-md rounded-2xl border border-green-200/50 dark:border-green-900/50 p-6 border-green-500/20">
                    <h4 className="text-[10px] font-black uppercase mb-3 opacity-60 tracking-widest">Technician error</h4>
                    <p className="text-sm font-bold opacity-90 leading-tight">Immediate FREE rework scheduled within 48h</p>
                </div>
                <div className="bg-red-50/50 dark:bg-red-950/20 backdrop-blur-md rounded-2xl border border-red-200/50 dark:border-red-900/50 p-6 border-red-500/20">
                    <h4 className="text-[10px] font-black uppercase mb-3 opacity-60 tracking-widest">Product Defect</h4>
                    <p className="text-sm font-bold opacity-90 leading-tight">Replacement or Credit Note issued within 72h</p>
                </div>
            </div>
        </IsoSection>
    );
};

export default Section3;
