import { Building2, BookOpen, Target, FileText } from 'lucide-react';
import { getCompanyData } from '../data/documents';
import { Language } from '../i18n/translations';

interface HomePageProps {
  onNavigate: (view: string, docId?: string) => void;
  isDark: boolean;
  language: Language;
  t: Record<string, string>;
}

export default function HomePage({ onNavigate, isDark, language, t }: HomePageProps) {
  const companyData = getCompanyData(language);

  return (
    <div className="max-w-6xl mx-auto">
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8`}>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className={`p-3 sm:p-4 rounded-lg ${isDark ? 'bg-red-900/20' : 'bg-red-50'}`}>
            <Building2 className="text-red-600" size={32} />
          </div>
          <div className="text-center sm:text-left">
            <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t.homeTitle}
            </h1>
            <p className={`text-sm sm:text-base lg:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              {t.homeDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6 lg:mb-8">
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border p-4 sm:p-6`}>
          <BookOpen className="text-red-600 mb-3 sm:mb-4" size={28} />
          <h3 className={`font-bold text-base sm:text-lg mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.feature1Title}
          </h3>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.feature1Desc}
          </p>
        </div>

        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border p-4 sm:p-6`}>
          <Target className="text-red-600 mb-3 sm:mb-4" size={28} />
          <h3 className={`font-bold text-base sm:text-lg mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.feature2Title}
          </h3>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.feature2Desc}
          </p>
        </div>

        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border p-4 sm:p-6 sm:col-span-2 lg:col-span-1`}>
          <FileText className="text-red-600 mb-3 sm:mb-4" size={28} />
          <h3 className={`font-bold text-base sm:text-lg mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.feature3Title}
          </h3>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.feature3Desc}
          </p>
        </div>
      </div>

      {companyData.map((layer) => (
        <div key={layer.id} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border p-6 mb-6`}>
          <h2 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {layer.title}
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
            {layer.description}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {layer.documents.map((doc) => (
              <button
                key={doc.id}
                onClick={() => onNavigate('document', doc.id)}
                className={`text-left p-4 rounded-lg border transition-colors ${
                  isDark
                    ? 'border-gray-700 hover:border-red-600 hover:bg-gray-700'
                    : 'border-gray-200 hover:border-red-600 hover:bg-red-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="text-red-600 mt-1" size={20} />
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {doc.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      {doc.purpose}
                    </p>
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {doc.pageCount}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
