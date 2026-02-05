import React from 'react';
import { IsoSection, GlassCard, ModernTable, Mermaid, Badge, PremiumCard } from '../../../components/ManualUI';

const Section1: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
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

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 mt-8">
                <span>📞</span> Core Communications
            </h3>

            <ModernTable
                headers={['Channel', 'Access Point']}
                columnWidths={['w-1/3', '']}
                rows={[
                    ['Website', 'www.ssplus.tn'],
                    ['Email', 'contact@ssplus.tn'],
                    ['Sfax HQ', '+216 74 45 30 27'],
                    ['Tunis Branch', <span className="font-medium text-red-600">+216 XX XX XX XX</span>],
                ]}
            />

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 mt-8">
                <span>📍</span> Strategic Locations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <GlassCard className="border-l-4 border-l-red-600 p-6">
                    <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                        <span>📍</span> SFAX MAIN HUB
                    </h4>
                    <p className="text-[10px] opacity-50 mb-4 italic">Route de Gabès Km 3.5, Sfax</p>
                    <ul className="space-y-3 text-sm font-medium list-none p-0 m-0">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Corporate Office</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Product Showroom</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Main Workshop</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Main Warehouse</li>
                        <li className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 font-bold text-green-600 dark:text-green-400 flex items-center gap-2 leading-none uppercase text-[10px] tracking-widest">
                            <span>✓</span> Full Services Available
                        </li>
                    </ul>
                </GlassCard>
                <GlassCard className="border-l-4 border-l-slate-400 p-6">
                    <h4 className="font-black uppercase tracking-widest text-xs mb-3 flex items-center gap-2 opacity-60">
                        <span>📍</span> TUNIS BRANCH
                    </h4>
                    <p className="text-[10px] opacity-50 mb-4 italic">Raoud, Tunis</p>
                    <ul className="space-y-3 text-sm font-medium list-none p-0 m-0 opacity-60">
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Branch Office</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Secondary Workshop</li>
                        <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Secondary Warehouse</li>
                        <li className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 font-bold text-green-600 dark:text-green-400 flex items-center gap-2 leading-none uppercase text-[10px] tracking-widest opacity-100">
                            <span>✓</span> Full Services Available
                        </li>
                    </ul>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.2 WHAT WE DO</h2>

            <GlassCard className="!bg-red-500/10 dark:!bg-red-500/5 !border-red-500/20 mb-8">
                <p className="text-lg font-medium leading-relaxed italic opacity-90 text-center">
                    "Sécurité Services Plus is Tunisia's trusted partner for comprehensive fire safety equipment and workplace safety solutions. We serve businesses of all sizes across Tunisia with quality products, professional installation, and reliable maintenance services."
                </p>
            </GlassCard>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🔥</span> A. FIRE SAFETY EQUIPMENT & SERVICES
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <GlassCard className="p-6">
                    <h4 className="text-red-500 font-extrabold text-xs uppercase tracking-[0.2em] mb-4">Fire Extinguisher Services</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="text-[10px] font-bold uppercase opacity-50 mb-2">Sales & Installation</p>
                            <ul className="space-y-2 text-sm font-medium">
                                <li className="flex items-start gap-2"><span className="text-red-500 text-xs">●</span> All types: Powder, CO2, Foam, Water, Clean Agent</li>
                                <li className="flex items-start gap-2"><span className="text-red-500 text-xs">●</span> All sizes: 1kg to 50kg+</li>
                                <li className="flex items-start gap-2"><span className="text-red-500 text-xs">●</span> Professional installation with certification</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase opacity-50 mb-2">Inspection & Maintenance</p>
                            <ul className="space-y-2 text-sm font-medium">
                                <li className="flex items-start gap-2"><span className="text-red-500 text-xs">●</span> Annual/Semi-annual/Quarterly programs</li>
                                <li className="flex items-start gap-2"><span className="text-red-500 text-xs">●</span> Complete maintenance & refilling</li>
                                <li className="flex items-start gap-2"><span className="text-red-500 text-xs">●</span> Hydrostatic testing & compliance docs</li>
                            </ul>
                        </div>
                    </div>
                </GlassCard>

                <GlassCard className="p-6">
                    <h4 className="text-blue-600 font-extrabold text-xs uppercase tracking-[0.2em] mb-4">Other Fire Safety</h4>
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="flex items-start gap-2"><span className="text-blue-500 text-xs">●</span> Fire Hose Reel Systems</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 text-xs">●</span> Fire Detection & Alarm Systems</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 text-xs">●</span> Fire Blankets</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 text-xs">●</span> Fire Safety Cabinets</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 text-xs">●</span> Emergency Lighting Systems</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 text-xs">●</span> Fire Safety Signage</li>
                    </ul>
                </GlassCard>
            </div>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🦺</span> B. PERSONAL PROTECTIVE EQUIPMENT (PPE)
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <GlassCard className="p-4 text-center">
                    <div className="text-2xl mb-2">⛑️</div>
                    <p className="text-[10px] font-black uppercase opacity-60">Head Protection</p>
                </GlassCard>
                <GlassCard className="p-4 text-center">
                    <div className="text-2xl mb-2">👓</div>
                    <p className="text-[10px] font-black uppercase opacity-60">Eye & Face</p>
                </GlassCard>
                <GlassCard className="p-4 text-center">
                    <div className="text-2xl mb-2">🧤</div>
                    <p className="text-[10px] font-black uppercase opacity-60">Hand Protection</p>
                </GlassCard>
                <GlassCard className="p-4 text-center">
                    <div className="text-2xl mb-2">😷</div>
                    <p className="text-[10px] font-black uppercase opacity-60">Respiratory</p>
                </GlassCard>
                <GlassCard className="p-4 text-center">
                    <div className="text-2xl mb-2">🎧</div>
                    <p className="text-[10px] font-black uppercase opacity-60">Hearing</p>
                </GlassCard>
                <GlassCard className="p-4 text-center">
                    <div className="text-2xl mb-2">🪂</div>
                    <p className="text-[10px] font-black uppercase opacity-60">Fall Protection</p>
                </GlassCard>
                <GlassCard className="p-4 text-center">
                    <div className="text-2xl mb-2">👢</div>
                    <p className="text-[10px] font-black uppercase opacity-60">Foot Protection</p>
                </GlassCard>
                <GlassCard className="p-4 text-center">
                    <div className="text-2xl mb-2">🩹</div>
                    <p className="text-[10px] font-black uppercase opacity-60">First Aid</p>
                </GlassCard>
            </div>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>👕</span> C. WORKWEAR & UNIFORMS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <GlassCard className="p-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-3 opacity-60">Industrial Workwear</h4>
                    <ul className="space-y-2 text-xs font-medium opacity-80">
                        <li>• Coveralls (standard & FR)</li>
                        <li>• Work shirts & trousers</li>
                        <li>• High-visibility clothing</li>
                        <li>• Specialized protective clothing</li>
                    </ul>
                </GlassCard>
                <GlassCard className="p-6 border-l-4 border-l-blue-500">
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-3 text-blue-600">Custom Branding</h4>
                    <ul className="space-y-2 text-xs font-medium opacity-80">
                        <li>• Logo embroidery</li>
                        <li>• Screen printing</li>
                        <li>• Heat transfer printing</li>
                        <li>• Corporate uniform programs</li>
                    </ul>
                </GlassCard>
                <GlassCard className="p-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-3 opacity-60">Industry-Specific</h4>
                    <ul className="space-y-2 text-xs font-medium opacity-80">
                        <li>• Oil & Gas (FR, Nomex)</li>
                        <li>• Construction</li>
                        <li>• Manufacturing</li>
                        <li>• Food processing & Healthcare</li>
                    </ul>
                </GlassCard>
            </div>

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🪧</span> D. SAFETY SIGNAGE
            </h3>

            <GlassCard className="p-6 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium">
                    <div>• Emergency exit signs</div>
                    <div>• Warning signs</div>
                    <div>• Mandatory signs</div>
                    <div>• Prohibition signs</div>
                    <div>• Fire safety signs</div>
                    <div>• Custom safety signage</div>
                </div>
                <p className="text-[10px] italic opacity-60 mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                    Available in PVC, aluminum, vinyl, photoluminescent materials. All sizes. Professional installation available.
                </p>
            </GlassCard>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.3 OUR SERVICE COMMITMENT</h2>

            <PremiumCard className={`mb-8 border-red-500/30 ${isDark ? '!bg-gradient-to-br from-red-950 to-slate-950' : '!bg-red-900 border-red-800'}`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <div className="text-3xl mb-3">🎓</div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-2">Quality Workmanship</h4>
                        <p className="text-[11px] opacity-70 text-white">Certified technicians, 23 years expertise</p>
                    </div>
                    <div>
                        <div className="text-3xl mb-3">⚡</div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-2">Quick Response</h4>
                        <p className="text-[11px] opacity-70 text-white">4-hour inquiries, 24-hour emergencies</p>
                    </div>
                    <div>
                        <div className="text-3xl mb-3">👔</div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-2">Professional Service</h4>
                        <p className="text-[11px] opacity-70 text-white">Courteous staff, clean equipment</p>
                    </div>
                    <div>
                        <div className="text-3xl mb-3">🛡️</div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-2">Reliability</h4>
                        <p className="text-[11px] opacity-70 text-white">06-month warranty on all work</p>
                    </div>
                </div>
            </PremiumCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <GlassCard className="p-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4">Response Times</h4>
                    <ul className="space-y-3 text-sm font-medium">
                        <li className="flex justify-between"><span>Inquiry Response</span><span className="font-bold">4 hours</span></li>
                        <li className="flex justify-between"><span>Emergency Response</span><span className="font-bold text-red-600">24 hours</span></li>
                        <li className="flex justify-between"><span>Quotations</span><span className="font-bold">Same/Next day</span></li>
                        <li className="flex justify-between"><span>Service Appointments</span><span className="font-bold">Within 7 days</span></li>
                    </ul>
                </GlassCard>
                <GlassCard className="p-6 !bg-green-500/5 border-green-500/20">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-4">What Makes SS+ Different</h4>
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="flex items-start gap-2"><span className="text-green-500">✓</span> 23 Years of Experience</li>
                        <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Certified Technicians</li>
                        <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Dual Locations (Sfax & Tunis)</li>
                        <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Comprehensive Solutions</li>
                        <li className="flex items-start gap-2"><span className="text-green-500">✓</span> 24/7 Emergency Support for MSA customers</li>
                    </ul>
                </GlassCard>
            </div>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.4 OUR COVERAGE & FACILITIES</h2>

            <GlassCard className="mb-8 p-0 overflow-hidden">
                <div className={`${isDark ? 'bg-red-500/5' : 'bg-red-50'} p-4 border-b border-white/5`}>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'opacity-60' : 'text-red-600'}`}>Nationwide Coverage</p>
                </div>
                <div className="p-8">
                    <p className={`text-sm font-medium mb-6 ${isDark ? 'opacity-80' : 'text-slate-700'}`}>
                        With strategic facilities in Sfax and Tunis, we provide comprehensive coverage across Tunisia. Our dual-location strategy ensures faster response times and local service presence.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h5 className="text-[10px] font-black uppercase mb-3 text-red-600">Coverage Areas</h5>
                            <ul className="text-sm space-y-2">
                                <li>• Greater Sfax region</li>
                                <li>• Greater Tunis region</li>
                                <li>• Nationwide service with travel fees beyond 120km</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[10px] font-black uppercase mb-3 opacity-60">Service Availability</h5>
                            <ul className="text-sm space-y-2 opacity-80">
                                <li>• Regular business hours: All services</li>
                                <li>• 24/7 Emergency: MSA customers</li>
                                <li>• Scheduled maintenance: Flexible timing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </GlassCard>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.5 ORGANIZATION STRUCTURE</h2>

            <h3 className="text-xl font-bold mb-6">👥 Executive Leadership</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <GlassCard className="border-t-4 border-t-slate-900 dark:border-t-slate-700 p-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h5 className="text-xl font-black tracking-tight mb-1">Karim BEN SALEM</h5>
                            <Badge color="slate">Manager</Badge>
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
            flowchart TB
            KBS["Karim BEN SALEM<br/>Manager"]:::manager
            NBS["Najla BEN SALEM<br/>Co-Manager & Sales"]:::manager
            KBS --- NBS
            MC["Mohamed CHRAITI<br/>Operations Resp."]:::responsible
            AL["M. Ali LENDA<br/>Admin & Finance"]:::responsible
            HD["Hela DAOUD<br/>Collections"]:::responsible
            KK["Sales Team<br/>(Kais & Reps)"]:::responsible
            NBS --> MC
            NBS --> AL
            NBS --> HD
            NBS --> KK
            TL["Team Leaders"]:::team
            TECH["Technical Teams"]:::operative
            WR["Workshop"]:::operative
            MC --> TL
            MC --> TECH
            MC --> WR
            classDef manager fill:#1a365d,color:#fff,stroke:#000,stroke-width:3px,rx:12,ry:12
            classDef responsible fill:#ef4444,color:#fff,stroke:#991b1b,rx:10,ry:10,stroke-width:2px
            classDef team fill:#475569,color:#fff,stroke:#1e293b,rx:8,ry:8
            classDef operative fill:#f8fafc,color:#1e293b,stroke:#cbd5e1,rx:5,ry:5
          `} />
                </div>
            </GlassCard>

            <hr className="my-8 border-gray-200 dark:border-white/10" />

            <h2 className="text-2xl font-bold mb-4">1.6 KEY CONTACTS</h2>

            <ModernTable
                headers={['Department', 'Contact Person', 'Direct Communication']}
                columnWidths={['w-1/3', '', '']}
                rows={[
                    [<span className="font-bold">Operations</span>, 'Mohamed CHRAITI', <span className="font-mono text-xs">+216 29 308 933</span>],
                    [<span className="font-bold">Sales (Tunis)</span>, 'Kais KHAIRALLAH', <span className="font-mono text-xs">+216 98 796 368</span>],
                    [<span className="font-bold">Admin & Finance</span>, 'M. Ali LENDA', <span className="font-mono text-xs">+216 27 888 784</span>],
                    [<span className="font-bold">Collections</span>, 'Hela DAOUD', <span className="font-mono text-xs">+216 22 039 026</span>],
                ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50/50 dark:bg-red-950/20 backdrop-blur-md rounded-2xl border border-red-200/50 dark:border-red-900/50 p-6 shadow-xl relative overflow-hidden group">
                    <div className="absolute -right-8 -bottom-8 text-7xl opacity-5 group-hover:scale-110 transition-transform duration-500">🚨</div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 text-red-600">
                        <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span> 24/7 EMERGENCY
                    </h5>
                    <div className="space-y-2 relative z-10">
                        <p className="text-3xl font-black tracking-tighter text-red-600">+216 74 45 30 28</p>
                        <p className="text-[10px] font-bold opacity-60 italic tracking-wide">For Master Service Agreement (MSA) Customers</p>
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
