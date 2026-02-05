import React from 'react';
import { IsoSection, GlassCard, ModernTable, Mermaid, PremiumCard } from '../../../components/ManualUI';

const Section3: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
    return (
        <IsoSection>
            <h1 className="text-3xl font-bold mb-6">Section 3: OUR SERVICE STANDARDS</h1>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">3.1 CUSTOMER SERVICE COMMITMENTS</h2>

            <PremiumCard className={`mb-8 border-slate-800 ${isDark ? '!bg-slate-950/50' : '!bg-slate-900'}`} isDark={isDark}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div><p className="text-2xl mb-1">🤝</p><p className={`text-[9px] font-black uppercase tracking-widest text-white ${isDark ? 'opacity-60' : 'opacity-90'}`}>Respect</p></div>
                    <div><p className="text-2xl mb-1">⚡</p><p className={`text-[9px] font-black uppercase tracking-widest text-white ${isDark ? 'opacity-60' : 'opacity-90'}`}>Speed</p></div>
                    <div><p className="text-2xl mb-1">🎓</p><p className={`text-[9px] font-black uppercase tracking-widest text-white ${isDark ? 'opacity-60' : 'opacity-90'}`}>Expertise</p></div>
                    <div><p className="text-2xl mb-1">💎</p><p className={`text-[9px] font-black uppercase tracking-widest text-white ${isDark ? 'opacity-60' : 'opacity-90'}`}>Transparency</p></div>
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
                    [<span className="font-bold italic">Complaint Acknowledgment</span>, '⏱️ 4 Hours', 'Management'],
                ]}
            />

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">3.3 TECHNICAL SERVICE STANDARDS</h2>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🔧</span> Fire Extinguisher Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <GlassCard className="border-l-4 border-l-red-600 p-6">
                    <h4 className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-4">Annual Inspection Standards</h4>
                    <ul className="space-y-3 text-sm font-medium">
                        <li className="flex items-start gap-2"><span className="text-red-500">✓</span> Visual inspection of all components</li>
                        <li className="flex items-start gap-2"><span className="text-red-500">✓</span> Pressure gauge check & adjustment</li>
                        <li className="flex items-start gap-2"><span className="text-red-500">✓</span> Weight verification (CO2 units)</li>
                        <li className="flex items-start gap-2"><span className="text-red-500">✓</span> Hose & nozzle inspection</li>
                        <li className="flex items-start gap-2"><span className="text-red-500">✓</span> New inspection tag & documentation</li>
                        <li className="flex items-start gap-2"><span className="text-red-500">✓</span> Compliance certificate issued</li>
                    </ul>
                </GlassCard>

                <GlassCard className="p-6">
                    <h4 className="font-black text-[10px] uppercase tracking-widest mb-4 opacity-60">Complete Maintenance</h4>
                    <ul className="space-y-3 text-sm font-medium opacity-80">
                        <li className="flex items-start gap-2"><span>•</span> Discharge & refill to specification</li>
                        <li className="flex items-start gap-2"><span>•</span> Internal inspection (5-year interval)</li>
                        <li className="flex items-start gap-2"><span>•</span> Hydrostatic testing when required</li>
                        <li className="flex items-start gap-2"><span>•</span> Valve & seal replacement</li>
                        <li className="flex items-start gap-2"><span>•</span> Parts replacement as needed</li>
                        <li className="flex items-start gap-2"><span>•</span> Re-certification & new tag</li>
                    </ul>
                </GlassCard>
            </div>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🔍</span> Quality Control Process
            </h3>

            <GlassCard className="mb-8 p-0 overflow-hidden">
                <div className="bg-blue-500/5 p-4 border-b border-white/5 flex justify-between items-center">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Service Workflow</p>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                        <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                    </div>
                </div>
                <div className="p-8">
                    <Mermaid chart={`
            %%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '12px', 'primaryColor': '#ffffff', 'primaryTextColor': '#1f2937', 'primaryBorderColor': '#e5e7eb', 'lineColor': '#3b82f6', 'secondaryColor': '#eff6ff', 'tertiaryColor': '#ffffff' }}}%%
            flowchart LR
            A["Service Request"]:::step --> B["Schedule & Dispatch"]:::step
            B --> C["On-Site Service"]:::step
            C --> D["Quality Check"]:::step
            D --> E{"Pass?"}:::choice
            E -- Yes --> F["Documentation"]:::success
            E -- No --> C
            F --> G["Client Sign-off"]:::success
            classDef step fill:#fff,stroke:#e5e7eb,color:#374151,rx:5,ry:5
            classDef choice fill:#eff6ff,stroke:#bfdbfe,color:#1e40af,rx:10,ry:10
            classDef success fill:#f0fdf4,stroke:#bbf7d0,color:#166534
          `} />
                </div>
            </GlassCard>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📋</span> Documentation Standards
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <GlassCard className="p-6 text-center">
                    <div className="text-3xl mb-3">📄</div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Before Service</h5>
                    <ul className="text-xs space-y-1 opacity-70">
                        <li>Work order</li>
                        <li>Equipment inventory</li>
                        <li>Safety assessment</li>
                    </ul>
                </GlassCard>
                <GlassCard className="p-6 text-center border-blue-500/20">
                    <div className="text-3xl mb-3">✍️</div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest mb-2 text-blue-600">During Service</h5>
                    <ul className="text-xs space-y-1 opacity-70">
                        <li>Service checklist</li>
                        <li>Parts replaced log</li>
                        <li>Test results</li>
                    </ul>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                    <div className="text-3xl mb-3">✅</div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">After Service</h5>
                    <ul className="text-xs space-y-1 opacity-70">
                        <li>Inspection certificate</li>
                        <li>New equipment tags</li>
                        <li>Client sign-off</li>
                    </ul>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">3.4 QUALITY GUARANTEES & WARRANTIES</h2>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🛡️</span> Service Work Warranty
            </h3>

            <GlassCard className="!bg-green-500/5 border-green-500/20 mb-8 p-6">
                <div className="flex items-start gap-4">
                    <div className="text-4xl">✅</div>
                    <div className="flex-1">
                        <h4 className="text-green-600 font-black text-sm uppercase tracking-widest mb-3">06-Month Workmanship Guarantee</h4>
                        <p className="text-sm font-medium mb-4 opacity-90">
                            All service work performed by SS+ technicians is covered by our 6-month workmanship guarantee. If any issue arises due to our work, we will correct it at no additional charge.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-green-200 dark:border-green-900">
                            <div>
                                <p className="text-[10px] font-black uppercase opacity-60 mb-2">Covered Issues</p>
                                <ul className="text-xs space-y-1 opacity-80">
                                    <li>• Installation defects</li>
                                    <li>• Incorrect maintenance</li>
                                    <li>• Faulty repairs</li>
                                    <li>• Parts installed incorrectly</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase opacity-60 mb-2">Not Covered</p>
                                <ul className="text-xs space-y-1 opacity-80">
                                    <li>• Customer damage or misuse</li>
                                    <li>• Normal wear & tear</li>
                                    <li>• Manufacturer defects (see product warranty)</li>
                                    <li>• Acts of nature or vandalism</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </GlassCard>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📦</span> Product Warranties
            </h3>

            <ModernTable
                headers={['Product Category', 'Warranty Period', 'Warranty Provider']}
                rows={[
                    [<span className="font-bold">Fire Extinguishers</span>, '1-5 years', 'Manufacturer (varies)'],
                    [<span className="font-bold">Fire Alarm Systems</span>, '1-2 years', 'Manufacturer'],
                    [<span className="font-bold">PPE Products</span>, '30-90 days', 'Manufacturer (defects only)'],
                    [<span className="font-bold">Custom Workwear</span>, '30 days', 'Manufacturing defects only'],
                    [<span className="font-bold">Signage</span>, '1 year', 'SS+ (material/workmanship)'],
                ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <GlassCard className="p-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-blue-600">How to Claim Warranty</h4>
                    <ol className="space-y-3 text-sm font-medium list-decimal pl-5">
                        <li>Contact your sales representative or customer service</li>
                        <li>Provide proof of purchase (invoice number)</li>
                        <li>Describe the issue and provide photos if possible</li>
                        <li>SS+ will inspect and determine warranty coverage</li>
                        <li>If approved: repair, replacement, or credit issued</li>
                    </ol>
                    <p className="text-xs italic opacity-60 mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                        Response within 48 hours for warranty claims
                    </p>
                </GlassCard>

                <GlassCard className="p-6 border-l-4 border-l-orange-500">
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-orange-600">Important Notes</h4>
                    <ul className="space-y-3 text-sm font-medium">
                        <li className="flex items-start gap-2"><span className="text-orange-500">⚠️</span> Keep your purchase documentation</li>
                        <li className="flex items-start gap-2"><span className="text-orange-500">⚠️</span> Report defects immediately</li>
                        <li className="flex items-start gap-2"><span className="text-orange-500">⚠️</span> Don't attempt DIY repairs during warranty</li>
                        <li className="flex items-start gap-2"><span className="text-orange-500">⚠️</span> Warranty void if misused or modified</li>
                    </ul>
                </GlassCard>
            </div>

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
            R["Complaint Recorded"]:::step --> I["Investigation"]:::step
            I --> S["Solution Proposed"]:::step
            S --> C{"Decision?"}:::choice
            C -- Accepted --> F["Documentation"]:::success
            C -- Rejected --> E["Management Review"]:::failure
            E --> S
            classDef step fill:#fff,stroke:#e5e7eb,color:#374151,rx:5,ry:5
            classDef choice fill:#fef2f2,stroke:#fecaca,color:#991b1b,rx:10,ry:10
            classDef success fill:#f0fdf4,stroke:#bbf7d0,color:#166534
            classDef failure fill:#fff1f2,stroke:#fecdd3,color:#9f1239
          `} />
                </div>
            </GlassCard>

            <h3 className="text-xl font-bold mb-4">Resolution Timeframes</h3>

            <ModernTable
                headers={['Complaint Type', 'Acknowledgment', 'Resolution Target']}
                rows={[
                    [<span className="font-bold">Service Quality</span>, '4 hours', '48 hours'],
                    [<span className="font-bold">Product Defect</span>, '4 hours', '72 hours'],
                    [<span className="font-bold">Billing Issue</span>, '4 hours', '5 business days'],
                    [<span className="font-bold text-red-600">Urgent/Safety</span>, <span className="font-bold text-red-600">Immediate</span>, <span className="font-bold text-red-600">24 hours</span>],
                ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50/50 dark:bg-green-950/20 backdrop-blur-md rounded-2xl border border-green-200/50 dark:border-green-900/50 p-6 border-green-500/20">
                    <h4 className="text-[10px] font-black uppercase mb-3 opacity-60 tracking-widest">Technician Error</h4>
                    <p className="text-sm font-bold opacity-90 leading-tight">Immediate FREE rework scheduled within 48h</p>
                    <p className="text-xs italic opacity-60 mt-3">No questions asked - we fix it right</p>
                </div>
                <div className="bg-red-50/50 dark:bg-red-950/20 backdrop-blur-md rounded-2xl border border-red-200/50 dark:border-red-900/50 p-6 border-red-500/20">
                    <h4 className="text-[10px] font-black uppercase mb-3 opacity-60 tracking-widest">Product Defect</h4>
                    <p className="text-sm font-bold opacity-90 leading-tight">Replacement or Credit Note issued within 72h</p>
                    <p className="text-xs italic opacity-60 mt-3">After verification of genuine defect</p>
                </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Our Commitment</h3>

            <PremiumCard className={`border-slate-800 p-8 text-center ${isDark ? '!bg-slate-950/60' : '!bg-slate-900'}`} isDark={isDark}>
                <p className="text-lg font-black italic mb-2 tracking-tight text-white">
                    "Every complaint is an opportunity to prove our commitment to service excellence."
                </p>
                <p className={`text-[10px] uppercase tracking-[0.2em] text-white ${isDark ? 'opacity-40' : 'opacity-60'}`}>SS+ Management Team</p>
            </PremiumCard>
        </IsoSection>
    );
};

export default Section3;
