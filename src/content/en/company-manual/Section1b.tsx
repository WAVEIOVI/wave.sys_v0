import React from 'react';
import { IsoSection, GlassCard, ModernTable, Mermaid, Badge, PremiumCard } from '../../../components/ManualUI';

const Section1: React.FC = () => {
    return (
        <IsoSection>
            <h1 className="text-3xl font-bold mb-6">Section 1: ABOUT OUR COMPANY</h1>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.1 COMPANY PROFILE</h2>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🏢</span> Company Identity
            </h3>

            <ModernTable
                headers={['Attribute', 'Official Corporate Details']}
                columnWidths={['w-1/3', '']}
                rows={[
                    ['Official Name', 'Sécurité Services Plus (SS+)'],
                    ['Legal Status', <span className="italic">SARL (Tunisian Registered Company)</span>],
                    ['Founded', <span className="font-bold text-red-600">2002</span>],
                    ['Experience', '23+ years in fire & workplace safety'],
                    ['Tax ID', <span className="font-mono text-xs opacity-60">0004567B/A/M/000</span>],
                ]}
            />

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📞</span> Core Communications
            </h3>

            <ModernTable
                headers={['Channel', 'Access Point']}
                columnWidths={['w-1/3', '']}
                rows={[
                    ['Website', 'www.ssplus.tn'],
                    ['Sfax HQ', '+216 74 45 30 27'],
                    ['Tunis Branch', <span className="font-medium text-red-600">+216 XX XX XX XX</span>],
                ]}
            />

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📍</span> Strategic Locations
            </h3>

            <GlassCard className="mb-8 p-0">
                <Mermaid chart={`
          graph LR
          %% Theme Variables
          %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ffffff', 'primaryTextColor': '#1f2937', 'primaryBorderColor': '#e5e7eb', 'lineColor': '#ef4444', 'secondaryColor': '#fef2f2', 'tertiaryColor': '#ffffff' }}}%%
          subgraph SfaxHub ["📍 SFAX HQ"]
          direction TB
          S1["🏢 Corporate Office"]
          S2["✨ Showroom"]
          S3["🔧 Main Workshop"]
          S4["📦 Primary Warehouse"]
          S1 --- S2 --- S3 --- S4
          end
          subgraph TunisHub ["📍 TUNIS BRANCH"]
          direction TB
          T1["🏢 Branch Office"]
          T2["🔧 Technical Workshop"]
          T3["📦 Strategic Stock"]
          T1 --- T2 --- T3
          end
          SfaxHub ===|Nationwide Logistics| TunisHub
          classDef default font-family:Inter,font-weight:500;
          classDef hub fill:#fcfcfc,stroke:#ef4444,stroke-width:2px,color:#991b1b;
          class SfaxHub,TunisHub hub;
        `} />
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="glass-card border-l-4 border-l-red-600 p-6">
                    <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                        <span>📍</span> SFAX MAIN HUB
                    </h4>
                    <p className="text-[10px] opacity-50 mb-4 italic">Route de Gabès Km 3.5, Sfax</p>
                    <ul className="space-y-3 text-sm font-medium list-none p-0 m-0">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Corporate Office</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Product Showroom</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Main Workshop & Warehouse</li>
                        <li className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 font-bold text-green-600 dark:text-green-400 flex items-center gap-2 leading-none uppercase text-[10px] tracking-widest">
                            <span>✓</span> Full Services Available
                        </li>
                    </ul>
                </div>
                <div className="glass-card border-l-4 border-l-slate-400 p-6">
                    <h4 className="font-black uppercase tracking-widest text-xs mb-3 flex items-center gap-2 opacity-60">
                        <span>📍</span> TUNIS BRANCH
                    </h4>
                    <p className="text-[10px] opacity-50 mb-4 italic">Raoud, Tunis</p>
                    <ul className="space-y-3 text-sm font-medium list-none p-0 m-0 opacity-60">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Branch Office</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Secondary Workshop</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Strategic Warehouse</li>
                        <li className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 font-bold text-green-600 dark:text-green-400 flex items-center gap-2 leading-none uppercase text-[10px] tracking-widest opacity-100">
                            <span>✓</span> Full Services Available
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.2 WHAT WE DO</h2>

            <GlassCard className="!bg-red-500/10 dark:!bg-red-500/5 !border-red-500/20 mb-8">
                <p className="text-lg font-medium leading-relaxed italic opacity-90 text-center">
                    "Sécurité Services Plus is Tunisia's trusted partner for comprehensive fire safety equipment and workplace safety solutions. We serve businesses of all sizes across Tunisia with quality products, professional installation, and reliable maintenance services."
                </p>
            </GlassCard>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🔥</span> A. FIRE SAFETY EQUIPMENT & SERVICES
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <GlassCard>
                    <h4 className="text-red-500 font-extrabold text-xs uppercase tracking-[0.2em] mb-4">Fire Extinguisher Services</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="text-[10px] font-bold uppercase opacity-50 mb-2">Sales & Installation</p>
                            <ul className="space-y-2 text-sm font-medium">
                                <li className="flex items-start gap-2"><span className="text-red-500 text-xs">●</span> All types: Powder, CO2, Foam, Water, Clean Agent</li>
                                <li className="flex items-start gap-2"><span className="text-red-500 text-xs">●</span> Certification of installation provided</li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                            <p className="text-[10px] font-bold uppercase opacity-50 mb-2">Inspection & Maintenance</p>
                            <ul className="space-y-2 text-sm font-medium opacity-80">
                                <li className="flex items-start gap-2"><span>▪</span> Annual/Semi-annual programs</li>
                                <li className="flex items-start gap-2"><span>▪</span> Hydrostatic testing & Refilling</li>
                            </ul>
                        </div>
                    </div>
                </GlassCard>
                <GlassCard className="border-l-4 border-l-red-500/20">
                    <h4 className="text-red-500 font-extrabold text-xs uppercase tracking-[0.2em] mb-4">Hydraulics & Detection</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li className="flex items-start gap-3">
                            <span className="p-1 bg-red-100 dark:bg-red-950 rounded italic text-[10px]">REELS</span>
                            <span>Fire Hose Reel Systems (Sales/Install/Pressure Testing)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="p-1 bg-red-100 dark:bg-red-950 rounded italic text-[10px]">ALARM</span>
                            <span>Detection Systems & Smoke Detectors (Testing/Maintenance)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="p-1 bg-red-100 dark:bg-red-950 rounded italic text-[10px]">OTHER</span>
                            <span>Cabinets, Emergency Lighting, Fire-rated Doors</span>
                        </li>
                    </ul>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🦺</span> B. PERSONAL PROTECTIVE EQUIPMENT (PPE)
            </h3>

            <ModernTable
                headers={['Category', 'Product Solutions']}
                columnWidths={['w-1/3', '']}
                rows={[
                    [<div className="font-bold flex items-center gap-2"><span>👷</span> Head Protection</div>, 'Safety helmets, hard hats, bump caps, accessories'],
                    [<div className="font-bold flex items-center gap-2"><span>👓</span> Eye & Face</div>, 'Safety glasses, goggles, face shields, welding helmets'],
                    [<div className="font-bold flex items-center gap-2"><span>🧤</span> Hand Protection</div>, 'Work gloves (chemical, cut, heat-resistant)'],
                    [<div className="font-bold flex items-center gap-2"><span>😷</span> Respiratory</div>, 'Dust masks, respirators, filter cartridges'],
                    [<div className="font-bold flex items-center gap-2"><span>👂</span> Hearing</div>, 'Earplugs, earmuffs, communication headsets'],
                    [<div className="font-bold flex items-center gap-2"><span>🪂</span> Fall Protection</div>, 'Safety harnesses, lanyards, fall arrest systems'],
                    [<div className="font-bold flex items-center gap-2"><span>👢</span> Foot Protection</div>, 'Safety boots/shoes (chemical & slip-resistant)'],
                ]}
            />

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>👔</span> C. WORKWEAR & UNIFORMS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <GlassCard>
                    <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Industrial</p>
                    <ul className="text-xs space-y-2 opacity-80 list-none p-0 m-0 font-medium">
                        <li>▪ Coveralls (FR/Standard)</li>
                        <li>▪ High-visibility (ISO 20471)</li>
                        <li>▪ Specialized (Nomex)</li>
                    </ul>
                </GlassCard>
                <GlassCard>
                    <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Branding</p>
                    <ul className="text-xs space-y-2 opacity-80 list-none p-0 m-0 font-medium">
                        <li>▪ Logo Embroidery</li>
                        <li>▪ Screen Printing</li>
                        <li>▪ Heat Transfer</li>
                    </ul>
                </GlassCard>
                <GlassCard>
                    <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Sectors</p>
                    <ul className="text-xs space-y-2 opacity-80 list-none p-0 m-0 font-medium">
                        <li>🛢️ Oil & Gas | 🏗️ Construction</li>
                        <li>🏭 Factories | 🏥 Healthcare</li>
                        <li>🏨 Hospitality | 🍽️ Food</li>
                    </ul>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.3 OUR SERVICE COMMITMENT</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <GlassCard>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600">⚙️</span>
                        <h4 className="font-black text-xs uppercase tracking-widest text-red-500">Quality</h4>
                    </div>
                    <ul className="space-y-3 text-xs font-medium opacity-80">
                        <li className="flex gap-2"><span>✓</span> Certified Technicians</li>
                        <li className="flex gap-2"><span>✓</span> Safety Standard Adherence</li>
                        <li className="flex gap-2"><span>✓</span> ISO-Level Expertise</li>
                    </ul>
                </GlassCard>
                <GlassCard>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600">⚡</span>
                        <h4 className="font-black text-xs uppercase tracking-widest text-red-500">Response</h4>
                    </div>
                    <ul className="space-y-3 text-xs font-medium opacity-80">
                        <li className="flex gap-2"><span>✓</span> 4h Inquiry Response</li>
                        <li className="flex gap-2"><span>✓</span> 24h Emergency Response</li>
                        <li className="flex gap-2"><span>✓</span> Next-day Quotations</li>
                    </ul>
                </GlassCard>
                <GlassCard>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600">🤝</span>
                        <h4 className="font-black text-xs uppercase tracking-widest text-red-500">Reliability</h4>
                    </div>
                    <ul className="space-y-3 text-xs font-medium opacity-80">
                        <li className="flex gap-2"><span>✓</span> Deadlines Honored</li>
                        <li className="flex gap-2"><span>✓</span> 06-Month Work Warranty</li>
                        <li className="flex gap-2"><span>✓</span> Proactive Updates</li>
                    </ul>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.4 OUR COVERAGE & FACILITIES</h2>

            <PremiumCard className="!p-0 mb-10 border-red-500/20 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 md:p-12 space-y-6">
                        <h3 className="font-black text-3xl tracking-tighter uppercase text-red-500 mb-2">🌍 Nationwide Coverage</h3>
                        <div className="glass-card !bg-white/10 !border-white/10 !shadow-none p-6">
                            <p className="text-sm font-medium leading-relaxed italic opacity-90">"From Bizerte to Tataouine, SS+ ensures fire safety compliance anywhere in Tunisia."</p>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                            <span className="text-2xl">💰</span>
                            <div>
                                <p className="font-black text-[10px] uppercase tracking-widest text-red-500">FREE MOBILIZATION</p>
                                <p className="text-[10px] opacity-70">Within 120km of Sfax or Tunis hubs</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black/20 p-8 flex items-center justify-center border-l border-white/10 backdrop-blur-sm">
                        <Mermaid chart={`
              %%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '14px', 'primaryColor': '#ffffff', 'primaryTextColor': '#1f2937', 'primaryBorderColor': '#e5e7eb', 'lineColor': '#ef4444' }}}%%
              flowchart TD
              Root["TUNISIA"]:::root
              Root --- Hubs{"Dual Hub Strategy"}
              Hubs --> Sfax["SFAX HQ"]:::active
              Hubs --> Tunis["TUNIS Branch"]:::active
              Sfax --- South["South & Interior"]:::area
              Tunis --- North["North & Sahel"]:::area
              classDef root fill:#ef4444,color:#fff,stroke:#991b1b,rx:15,ry:15
              classDef active fill:#1e293b,color:#fff,stroke:#000,rx:10,ry:10
              classDef area fill:#f8fafc,color:#475569,stroke:#cbd5e1,rx:5,ry:5
            `} />
                    </div>
                </div>
            </PremiumCard>

            <h3 className="text-xl font-bold mb-4">🏭 Facility Capabilities</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlassCard>
                    <p className="text-xs font-black uppercase tracking-widest text-red-500 mb-4 border-b border-gray-100 dark:border-white/5 pb-2">SFAX MAIN FACILITY</p>
                    <ModernTable
                        headers={[]}
                        className="!m-0 !border-0"
                        rows={[
                            [<span className="font-bold">🏢 Showroom</span>, 'Full product display & PPE fitting'],
                            [<span className="font-bold">🔧 Workshop</span>, 'Extinguisher refilling & quality testing'],
                            [<span className="font-bold">📦 Warehouse</span>, 'Primary logistics & inventory'],
                        ]}
                    />
                </GlassCard>
                <GlassCard>
                    <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-4 border-b border-gray-100 dark:border-white/5 pb-2">TUNIS BRANCH FACILITY</p>
                    <ModernTable
                        headers={[]}
                        className="!m-0 !border-0 opacity-70"
                        rows={[
                            [<span className="font-bold">🔧 Workshop</span>, 'Maintenance & technical repairs'],
                            [<span className="font-bold">📦 Warehouse</span>, 'Strategic stock & local delivery'],
                        ]}
                    />
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.5 ORGANIZATION STRUCTURE</h2>

            <h3 className="text-xl font-bold mb-4">👥 Management Team</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <GlassCard className="border-t-4 border-t-red-600 p-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h5 className="text-xl font-black tracking-tight mb-1">Karim BEN SALEM</h5>
                            <Badge color="red">Manager</Badge>
                        </div>
                        <div className="text-[9px] opacity-40 font-mono tracking-tighter">REF: SSP-M01</div>
                    </div>
                    <div className="space-y-3 mb-6 text-sm">
                        <div className="flex items-center gap-3 opacity-80"><span className="w-4 text-center">📞</span> +216 29 308 108</div>
                        <div className="flex items-center gap-3 opacity-80"><span className="w-4 text-center">📧</span> direction@ssplus.tn</div>
                    </div>
                    <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                        <p className="text-[9px] font-bold uppercase opacity-40 mb-3 tracking-widest">Core Responsibilities</p>
                        <ul className="text-[11px] space-y-2 list-none p-0 m-0 opacity-70 font-medium">
                            <li className="flex gap-2"><span>▪</span> Overall corporate strategy & vision</li>
                            <li className="flex gap-2"><span>▪</span> Final authority on high-value decisions</li>
                            <li className="flex gap-2"><span>▪</span> Key stakeholder & legal representative</li>
                        </ul>
                    </div>
                </GlassCard>
                <GlassCard className="border-t-4 border-t-red-600 p-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h5 className="text-xl font-black tracking-tight mb-1">Najla BEN SALEM</h5>
                            <Badge color="red">Co-Manager</Badge>
                        </div>
                        <div className="text-[9px] opacity-40 font-mono tracking-tighter">REF: SSP-M02</div>
                    </div>
                    <div className="space-y-3 mb-6 text-sm">
                        <div className="flex items-center gap-3 opacity-80"><span className="w-4 text-center">📞</span> +216 28 615 020</div>
                        <div className="flex items-center gap-3 opacity-80"><span className="w-4 text-center">📧</span> sales@ssplus.tn</div>
                    </div>
                    <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                        <p className="text-[9px] font-bold uppercase opacity-40 mb-3 tracking-widest">Core Responsibilities</p>
                        <ul className="text-[11px] space-y-2 list-none p-0 m-0 opacity-70 font-medium">
                            <li className="flex gap-2"><span>▪</span> Sales & commercial development</li>
                            <li className="flex gap-2"><span>▪</span> Strategic purchasing & imports</li>
                            <li className="flex gap-2 font-bold text-red-600 uppercase tracking-tighter">🔸 Unlimited Transaction Authority</li>
                        </ul>
                    </div>
                </GlassCard>
            </div>

            <h3 className="text-xl font-bold mb-4">📊 Organizational Hierarchy</h3>

            <GlassCard className="mb-10 overflow-hidden !p-0">
                <div className="p-4 bg-gray-50/50 dark:bg-white/5 border-b border-gray-100 dark:border-white/5 flex justify-between items-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Visual Structure</p>
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    </div>
                </div>
                <div className="p-6 md:p-12 overflow-x-auto">
                    <Mermaid chart={`
            %%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '14px', 'primaryColor': '#ffffff', 'primaryTextColor': '#1f2937', 'primaryBorderColor': '#e5e7eb', 'lineColor': '#ef4444', 'secondaryColor': '#fef2f2', 'tertiaryColor': '#ffffff' }}}%%
            flowchart LR
            KBS["Karim BEN SALEM<br/>Manager"]:::manager
            NBS["Najla BEN SALEM<br/>Co-Manager & Sales"]:::manager
            subgraph Leadership ["EXECUTIVE BOARD"]
            KBS --- NBS
            end
            subgraph Departments ["CORE DEPARTMENTS"]
            MC["Mohamed CHRAITI<br/>Operations Resp."]:::responsible
            NS["Sales Team<br/>Najla/Reps"]:::responsible
            AL["M. Ali LENDA<br/>Admin & Finance"]:::responsible
            HD["Hela DAOUD<br/>Collections"]:::responsible
            end
            NBS --> MC
            NBS --> NS
            NBS --> AL
            NBS --> HD
            subgraph Ops ["FIELD OPERATIONS"]
            direction TB
            TLA["Team A Leader"]:::team
            TLB["Team B Leader"]:::team
            WR["Workshop Resp."]:::team
            TECH["Technical Teams"]:::operative
            MC --> TLA
            MC --> TLB
            MC --> WR
            MC --> TECH
            end
            classDef manager fill:#1a365d,color:#fff,stroke:#000,stroke-width:3px,rx:12,ry:12
            classDef responsible fill:#ef4444,color:#fff,stroke:#991b1b,rx:10,ry:10,stroke-width:2px
            classDef team fill:#475569,color:#fff,stroke:#1e293b,rx:8,ry:8
            classDef operative fill:#f8fafc,color:#1e293b,stroke:#cbd5e1,rx:5,ry:5
            class Leadership,Departments fill:none,stroke-dasharray:5;
          `} />
                </div>
            </GlassCard>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.6 KEY CONTACTS</h2>

            <ModernTable
                headers={['Department', 'Contact Person', 'Direct Communication']}
                columnWidths={['w-1/3', '', '']}
                rows={[
                    [<span className="font-bold">Operations (Sfax)</span>, 'Mohamed CHRAITI', <span className="font-mono text-xs">+216 29 308 933</span>],
                    [<span className="font-bold">Sales (Tunis)</span>, 'Kais KHAIRALLAH', <span className="font-mono text-xs">+216 98 796 368</span>],
                    [<span className="font-bold">Admin & Finance</span>, 'M. Ali LENDA', <span className="font-mono text-xs">+216 27 888 784</span>],
                    [<span className="font-bold">Collections</span>, 'Hela DAOUD', <span className="font-mono text-xs">+216 22 039 026</span>],
                ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="markdown-card-danger shadow-xl border-red-500/20 relative overflow-hidden group p-6">
                    <div className="absolute -right-8 -bottom-8 text-7xl opacity-5 group-hover:scale-110 transition-transform duration-500">🚨</div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 text-red-600">
                        <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span> 24/7 EMERGENCY
                    </h5>
                    <div className="space-y-2 relative z-10">
                        <p className="text-3xl font-black tracking-tighter text-red-600">+216 XX XX XX XX</p>
                        <p className="text-[10px] font-bold opacity-60 italic tracking-wide">priority-support@ssplus.tn</p>
                    </div>
                </div>
                <GlassCard className="shadow-xl border-blue-500/20 relative overflow-hidden group p-6">
                    <div className="absolute -right-8 -bottom-8 text-7xl opacity-5 group-hover:scale-110 transition-transform duration-500">💻</div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 text-blue-600">
                        CUSTOMER PORTAL
                    </h5>
                    <div className="space-y-4 relative z-10">
                        <p className="text-lg font-black tracking-tight leading-none">WAVE PLUS v2.0</p>
                        <div className="bg-blue-500/5 p-3 rounded-lg border border-blue-500/10 text-[10px] font-mono break-all opacity-80">
                            https://www.ssplus.tn/waveplus
                        </div>
                    </div>
                </GlassCard>
            </div>
        </IsoSection>
    );
};

export default Section1;
