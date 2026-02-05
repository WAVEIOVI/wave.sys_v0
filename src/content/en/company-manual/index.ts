import Header from './Header';
import QuickReference from './QuickReference';
import TableOfContents from './TableOfContents';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Appendix from './Appendix';

export const CompanyManualContent: Record<string, React.FC<{ isDark?: boolean }>> = {
    'header': Header,
    'quick-reference': QuickReference,
    'toc': TableOfContents,
    'section-1': Section1,
    'section-2': Section2,
    'section-3': Section3,
    'section-4': Section4,
    'appendix': Appendix,
};
