import React from 'react';
import { IsoSection, GlassCard } from '../../../components/ManualUI';

const TableOfContents: React.FC = () => {
    return (
        <IsoSection>
            <h2 className="text-2xl font-bold mb-4">📑 TABLE OF CONTENTS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <GlassCard className="p-6">
                    <h3 className="text-red-600 text-xs uppercase tracking-widest mb-4">Section 1: ABOUT OUR COMPANY</h3>
                    <ul className="space-y-3 text-sm font-medium opacity-80">
                        <li>1.1 Company Profile</li>
                        <li>1.2 What We Do</li>
                        <li>1.3 Our Service Commitment</li>
                        <li>1.4 Our Coverage & Facilities</li>
                        <li>1.5 Organization Structure</li>
                        <li>1.6 Key Contacts</li>
                    </ul>
                </GlassCard>
                <GlassCard className="p-6 border-l-4 border-l-red-500/50">
                    <h3 className="text-red-600 text-xs uppercase tracking-widest mb-4">Section 2: STRATEGY & DECISIONS</h3>
                    <ul className="space-y-3 text-sm font-medium opacity-80">
                        <li>2.1 Authority Matrix</li>
                        <li>2.2 Financial Approval Limits</li>
                        <li>2.3 Signature Authority</li>
                        <li>2.4 Business Ethics & Conduct</li>
                    </ul>
                </GlassCard>
            </div>
        </IsoSection>
    );
};

export default TableOfContents;
