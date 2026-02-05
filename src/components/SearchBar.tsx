import { Search, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { getCompanyData, Document } from '../data/documents';
import { Language } from '../i18n/translations';

interface SearchResult {
  docId: string;
  docTitle: string;
  sectionTitle: string;
  layerTitle: string;
}

interface SearchBarProps {
  onNavigate: (view: string, docId?: string) => void;
  isDark: boolean;
  language: Language;
  t: any;
}

export default function SearchBar({ onNavigate, isDark, language, t }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const companyData = getCompanyData(language);
    const searchResults: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    companyData.forEach((layer) => {
      layer.documents.forEach((doc: Document) => {
        if (doc.title.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            docId: doc.id,
            docTitle: doc.title,
            sectionTitle: 'Full Document',
            layerTitle: layer.title
          });
        }

        doc.sections.forEach((section) => {
          if (section.title.toLowerCase().includes(lowerQuery)) {
            searchResults.push({
              docId: doc.id,
              docTitle: doc.title,
              sectionTitle: section.title,
              layerTitle: layer.title
            });
          }
        });
      });
    });

    setResults(searchResults);
    setShowResults(true);
  }, [query, language]);

  const handleResultClick = (docId: string) => {
    onNavigate('document', docId);
    setQuery('');
    setShowResults(false);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-2xl" ref={searchRef}>
      <div className={`flex items-center rounded-lg border ${
        isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
      } px-2 sm:px-3 py-1.5 sm:py-2`}>
        <Search size={18} className={`${language === 'ar' ? 'mr-1' : 'ml-1'} ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
        <input
          type="text"
          placeholder={t.search}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          className={`w-full bg-transparent border-none outline-none px-2 sm:px-3 text-sm sm:text-base ${
            isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
          }`}
        />
        {query && (
          <button 
            onClick={clearSearch}
            className={`${language === 'ar' ? 'ml-1' : 'mr-1'} p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600`}
          >
            <X size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
          </button>
        )}
      </div>

      {showResults && results.length > 0 && (
        <div className={`absolute top-full left-0 right-0 mt-2 rounded-lg border shadow-lg z-50 max-h-60 sm:max-h-96 overflow-y-auto ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className={`p-2 sm:p-3 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {results.length} {results.length === 1 ? t.result : t.results}
            </p>
          </div>
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleResultClick(result.docId)}
              className={`w-full text-left p-2 sm:p-3 border-b last:border-b-0 ${
                isDark
                  ? 'border-gray-700 hover:bg-gray-700'
                  : 'border-gray-100 hover:bg-gray-50'
              }`}
            >
              <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {result.docTitle}
              </div>
              <div className={`text-xs mt-0.5 sm:mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {result.sectionTitle} • {result.layerTitle}
              </div>
            </button>
          ))}
        </div>
      )}

      {showResults && results.length === 0 && query.length >= 2 && (
        <div className={`absolute top-full left-0 right-0 mt-2 rounded-lg border shadow-lg z-50 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className={`px-4 py-6 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.noResults} "{query}"
          </div>
        </div>
      )}
    </div>
  );
}
