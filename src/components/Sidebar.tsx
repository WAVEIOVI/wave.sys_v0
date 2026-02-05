import { Home, Book, ChevronDown, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { getCompanyData, Layer, Document } from '../data/documents';
import { Language } from '../i18n/translations';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string, docId?: string) => void;
  isDark: boolean;
  language: Language;
  t: {
    appTitle: string;
    appSubtitle: string;
    home: string;
  };
  isMobile?: boolean;
}

export default function Sidebar({ currentView, onNavigate, isDark, language, t, isMobile }: SidebarProps) {
  const companyData = getCompanyData(language);
  const [expandedLayers, setExpandedLayers] = useState<Record<string, boolean>>({
    foundation: true,
    'operational-playbooks': true
  });

  const toggleLayer = (layerId: string) => {
    setExpandedLayers(prev => ({ ...prev, [layerId]: !prev[layerId] }));
  };

  return (
    <aside className={`w-full h-full ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col`}>
      <div className={`p-4 sm:p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <h1 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.appTitle}
        </h1>
        <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {t.appSubtitle}
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 sm:p-4">
        <button
          onClick={() => onNavigate('home')}
          className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg mb-3 sm:mb-4 transition-colors ${
            currentView === 'home'
              ? isDark
                ? 'bg-red-900/30 text-red-400'
                : 'bg-red-50 text-red-600'
              : isDark
              ? 'text-gray-300 hover:bg-gray-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Home size={18} />
          <span className="font-medium text-sm sm:text-base">{t.home}</span>
        </button>

        {companyData.map((layer: Layer) => (
          <div key={layer.id} className="mb-3 sm:mb-4">
            <button
              onClick={() => toggleLayer(layer.id)}
              className={`w-full flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors ${
                isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {expandedLayers[layer.id] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <span className="font-semibold text-xs sm:text-sm flex-1 text-left">{layer.title}</span>
            </button>

            {expandedLayers[layer.id] && (
              <div className="ml-3 sm:ml-4 mt-1 sm:mt-2 space-y-1">
                {layer.documents.map((doc: Document) => (
                  <button
                    key={doc.id}
                    onClick={() => onNavigate('document', doc.id)}
                    className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors text-left ${
                      currentView === doc.id
                        ? isDark
                          ? 'bg-red-900/30 text-red-400'
                          : 'bg-red-50 text-red-600'
                        : isDark
                        ? 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Book size={16} />
                    <span className="text-xs sm:text-sm">{doc.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
