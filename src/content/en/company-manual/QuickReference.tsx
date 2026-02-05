import React from 'react';
import { IsoSection, ModernTable } from '../../../components/ManualUI';

const QuickReference: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
    return (
        <IsoSection>
            <h2 className="text-2xl font-bold mb-4">🎯 QUICK REFERENCE</h2>

            <ModernTable
                headers={['Contact Type', 'Corporate Details']}
                columnWidths={['w-1/3', '']}
                rows={[
                    ['📧 General Email', <span className="text-red-600 dark:text-red-400 font-medium">contact@ssplus.tn</span>],
                    ['☎️ Main Phone', '+216 74 45 30 27'],
                    ['🌐 Website', <span className="italic underline opacity-80">www.ssplus.tn</span>],
                    ['💻 Customer Portal', <span className="font-mono text-xs">www.ssplus.tn/waveplus</span>],
                    [<span className="font-bold text-red-600">🚨 Emergency (MSA)</span>, <span className="font-black text-red-600 animate-pulse">+216 XX XX XX XX</span>],
                ]}
            />
        </IsoSection>
    );
};

export default QuickReference;
