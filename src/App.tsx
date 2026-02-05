import { useState, useEffect } from 'react';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import DocumentView from './components/DocumentView';
import SearchBar from './components/SearchBar';
import { Language, translations } from './i18n/translations';

function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentDocId, setCurrentDocId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'fr', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    // Close sidebar on resize if screen becomes larger
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    setShowLanguageMenu(false);
  };

  const handleNavigate = (view: string, docId?: string) => {
    setCurrentView(view === 'document' && docId ? docId : view);
    setCurrentDocId(docId || null);
    // Close sidebar on navigation on mobile
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <div className={`relative flex flex-col lg:flex-row h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar - hidden on mobile by default, shown when sidebarOpen is true */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 transform 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        z-30 lg:z-0 w-80 lg:w-80 lg:flex
      `}>
        <Sidebar
          currentView={currentView}
          onNavigate={handleNavigate}
          isDark={isDark}
          language={language}
          t={t}
          isMobile={true}
        />
      </div>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-10`}>
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Mobile menu button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex-1 max-w-3xl">
              <SearchBar onNavigate={handleNavigate} isDark={isDark} language={language} t={t} />
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className={`p-2 sm:p-3 rounded-lg border transition-colors flex items-center gap-1 sm:gap-2 ${isDark
                      ? 'border-gray-700 hover:bg-gray-700 text-gray-300'
                      : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                    }`}
                  title="Change language"
                >
                  <Languages size={18} />
                  <span className="text-xs sm:text-sm font-medium uppercase hidden sm:inline">{language}</span>
                </button>

                {showLanguageMenu && (
                  <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-full mt-2 rounded-lg border shadow-lg overflow-hidden min-w-[120px] ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    }`}>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`w-full px-4 py-2 text-left transition-colors ${language === 'en'
                          ? isDark ? 'bg-red-900/30 text-red-400' : 'bg-red-50 text-red-600'
                          : isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageChange('fr')}
                      className={`w-full px-4 py-2 text-left transition-colors ${language === 'fr'
                          ? isDark ? 'bg-red-900/30 text-red-400' : 'bg-red-50 text-red-600'
                          : isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      Français
                    </button>
                    <button
                      onClick={() => handleLanguageChange('ar')}
                      className={`w-full px-4 py-2 text-left transition-colors ${language === 'ar'
                          ? isDark ? 'bg-red-900/30 text-red-400' : 'bg-red-50 text-red-600'
                          : isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      العربية
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={toggleTheme}
                className={`p-2 sm:p-3 rounded-lg border transition-colors ${isDark
                    ? 'border-gray-700 hover:bg-gray-700 text-gray-300'
                    : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                  }`}
                title={isDark ? t.lightMode : t.darkMode}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {currentView === 'home' ? (
            <HomePage onNavigate={handleNavigate} isDark={isDark} language={language} t={t} />
          ) : currentDocId ? (
            <DocumentView docId={currentDocId} isDark={isDark} onNavigate={handleNavigate} language={language} t={t} />
          ) : (
            <div className="text-center py-12">
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{t.selectDocument}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
