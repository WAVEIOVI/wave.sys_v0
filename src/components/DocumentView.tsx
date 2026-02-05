import { Download, Printer, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';
import { getCompanyData, Document } from '../data/documents';
import { Language } from '../i18n/translations';
import { loadMarkdownContent } from '../utils/markdown-loader';
import { getReactComponent } from '../content/registry';

interface DocumentViewProps {
  docId: string;
  isDark: boolean;
  onNavigate: (view: string) => void;
  language: Language;
  t: any;
}

export default function DocumentView({ docId, isDark, onNavigate, language, t }: DocumentViewProps) {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [sections, setSections] = useState<{ id: string; content?: string; Component?: React.FC }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const companyData = getCompanyData(language);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);

      const { doc } = findDocument();
      if (doc && doc.id === 'company-manual' && doc.sections && doc.sections.length > 0) {
        const sectionData = await Promise.all(
          doc.sections.map(async (section) => {
            // Check if we have a React component for this section
            const ReactComponent = getReactComponent(language, docId, section.id);
            if (ReactComponent) {
              return { id: section.id, Component: ReactComponent };
            }

            // Fallback to markdown
            const content = await loadMarkdownContent(docId, language, section.id);
            return { id: section.id, content };
          })
        );
        setSections(sectionData);
        setMarkdownContent(sectionData.map(s => s.content || '').join('\n'));
      } else {
        const ReactComponent = getReactComponent(language, docId);
        if (ReactComponent) {
          setSections([{ id: 'main', Component: ReactComponent }]);
        } else {
          const content = await loadMarkdownContent(docId, language);
          setMarkdownContent(content);
          setSections([]);
        }
      }

      setIsLoading(false);
    };
    loadContent();
  }, [docId, language]);

  useEffect(() => {
    if (!isLoading && (markdownContent || sections.length > 0) && (window as any).mermaid) {
      try {
        (window as any).mermaid.run();
      } catch (err) {
        console.error('Mermaid render error:', err);
      }
    }
  }, [markdownContent, sections, isLoading]);

  const findDocument = (): { doc: Document | null; layerTitle: string } => {
    for (const layer of companyData) {
      const doc = layer.documents.find(d => d.id === docId);
      if (doc) return { doc, layerTitle: layer.title };
    }
    return { doc: null, layerTitle: '' };
  };

  const { doc, layerTitle } = findDocument();

  if (!doc) {
    return (
      <div className="text-center py-12">
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{t.documentNotFound}</p>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert('PDF download functionality would be implemented here');
  };

  const proseClass = `prose prose-sm sm:prose-base md:prose-lg max-w-none ${isDark
    ? 'prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-red-400'
    : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-red-600'
    }`;

  return (
    <div className="w-full px-4 sm:px-6 mx-auto max-w-full sm:max-w-5xl">
      <div className={`flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-4 sm:mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        <button onClick={() => onNavigate('home')} className="hover:text-red-600 transition-colors">
          {t.home}
        </button>
        <ChevronRight size={14} className="sm:w-4 sm:h-4" />
        <span className="truncate max-w-[6rem] sm:max-w-none">{layerTitle}</span>
        <ChevronRight size={14} className="sm:w-4 sm:h-4" />
        <span className={`truncate max-w-[8rem] sm:max-w-none ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{doc.title}</span>
      </div>

      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border`}>
        <div className={`p-4 sm:p-6 md:p-8 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0 mb-4">
            <div className="flex-1">
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {doc.title}
              </h1>
              <p className={`text-base sm:text-lg mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {doc.purpose}
              </p>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {t.estimatedLength}: {doc.pageCount}
              </p>
            </div>
            <div className="flex gap-2 sm:ml-4">
              <button
                onClick={handlePrint}
                className={`p-2 sm:p-3 rounded-lg border transition-colors ${isDark
                  ? 'border-gray-700 hover:bg-gray-700 text-gray-300'
                  : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                title={t.print}
                aria-label={t.print}
              >
                <Printer size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleDownload}
                className={`p-2 sm:p-3 rounded-lg border transition-colors ${isDark
                  ? 'border-gray-700 hover:bg-gray-700 text-gray-300'
                  : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                title={t.download}
                aria-label={t.download}
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          {isLoading ? (
            <div className="text-center py-8 sm:py-12">
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Loading content...</p>
            </div>
          ) : sections.length > 0 ? (
            <div className="space-y-0">
              {sections.map((section) => (
                <div key={section.id} id={section.id}>
                  {section.Component ? (
                    <section.Component isDark={isDark} />
                  ) : (
                    <div
                      className={proseClass}
                      dangerouslySetInnerHTML={{ __html: section.content || '' }}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div
              className={proseClass}
              dangerouslySetInnerHTML={{ __html: markdownContent }}
            />
          )}
        </div>


        <div className={`p-4 sm:p-6 md:p-8 border-t ${isDark ? 'border-gray-700 bg-gray-900/30' : 'border-gray-200 bg-gray-50'}`}>
          <h3 className={`font-semibold mb-2 sm:mb-3 text-base sm:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.aboutDocument}
          </h3>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
            {t.aboutDocumentText}
          </p>
        </div>
      </div>
    </div>
  );
}
