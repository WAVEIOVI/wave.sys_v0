import React from 'react';

export const IsoSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="iso-section">
        {children}
    </div>
);

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string; isDark?: boolean }> = ({ children, className = '', isDark }) => (
    <div className={`glass-card p-6 ${className}`}>
        {children}
    </div>
);

export const PremiumCard: React.FC<{ children: React.ReactNode; className?: string; isDark?: boolean }> = ({ children, className = '', isDark }) => (
    <div className={`markdown-card-premium ${className}`}>
        {children}
    </div>
);

export const ModernTable: React.FC<{
    headers: string[];
    rows: (string | React.ReactNode)[][];
    className?: string;
    columnWidths?: string[];
}> = ({ headers, rows, className = '', columnWidths = [] }) => (
    <div className={`modern-table-container ${className}`}>
        <table className="modern-table">
            <thead>
                <tr>
                    {headers.map((header, i) => (
                        <th key={i} className={columnWidths[i] || ''}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i}>
                        {row.map((cell, j) => (
                            <td key={j}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const Mermaid: React.FC<{ chart: string }> = ({ chart }) => {
    React.useEffect(() => {
        if ((window as any).mermaid) {
            (window as any).mermaid.run();
        }
    }, [chart]);

    return (
        <div className="mermaid">
            {chart}
        </div>
    );
};

export const Badge: React.FC<{ children: React.ReactNode; color?: 'red' | 'blue' | 'green' | 'gray' | 'slate' }> = ({ children, color = 'red' }) => {
    const colors = {
        red: 'bg-red-500/10 text-red-500',
        blue: 'bg-blue-500/10 text-blue-500',
        green: 'bg-green-500/10 text-green-500',
        gray: 'bg-gray-500/10 text-gray-500',
        slate: 'bg-slate-500/10 text-slate-500',
    };
    return (
        <span className={`px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full inline-block ${colors[color]}`}>
            {children}
        </span>
    );
};
