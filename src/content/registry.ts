import { CompanyManualContent } from './en/company-manual';

export const ReactContentRegistry: Record<string, Record<string, Record<string, React.FC<{ isDark?: boolean }>>>> = {
    'en': {
        'company-manual': CompanyManualContent,
    }
};

export function getReactComponent(language: string, docId: string, sectionId?: string): React.FC<{ isDark?: boolean }> | null {
    const langContent = ReactContentRegistry[language] || ReactContentRegistry['en'];
    if (!langContent) return null;

    const docContent = langContent[docId];
    if (!docContent) return null;

    if (sectionId) {
        return docContent[sectionId] || null;
    }

    // If no sectionId, maybe returns a main component if exists?
    // For now we assume we always have sections for these complex docs.
    return null;
}
