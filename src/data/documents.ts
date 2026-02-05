import { Language } from '../i18n/translations';
import { documentsI18n, layersI18n } from '../i18n/documents-i18n';

export interface Section {
  id: string;
  title: string;
  content?: string;
}

export interface Document {
  id: string;
  title: string;
  purpose: string;
  pageCount: string;
  sections: Section[];
}

export interface Layer {
  id: string;
  title: string;
  description: string;
  documents: Document[];
}

const documentIds = [
  'company-manual',
  'sales-customer',
  'service-delivery',
  'products-inventory',
  'people-admin',
  'handbook',
  'money-finance'
];

export function getCompanyData(language: Language): Layer[] {
  return [
    {
      id: 'foundation',
      title: layersI18n.foundation[language].title,
      description: layersI18n.foundation[language].description,
      documents: [
        {
          id: 'company-manual',
          title: documentsI18n['company-manual'][language].title,
          purpose: documentsI18n['company-manual'][language].purpose,
          pageCount: '20–30 pages',
          sections: documentsI18n['company-manual'][language].sections
        }
      ]
    },
    {
      id: 'operational-playbooks',
      title: layersI18n['operational-playbooks'][language].title,
      description: layersI18n['operational-playbooks'][language].description,
      documents: [
        {
          id: 'sales-customer',
          title: documentsI18n['sales-customer'][language].title,
          purpose: documentsI18n['sales-customer'][language].purpose,
          pageCount: '15–20 pages',
          sections: documentsI18n['sales-customer'][language].sections
        },
        {
          id: 'service-delivery',
          title: documentsI18n['service-delivery'][language].title,
          purpose: documentsI18n['service-delivery'][language].purpose,
          pageCount: '30–40 pages',
          sections: documentsI18n['service-delivery'][language].sections
        },
        {
          id: 'products-inventory',
          title: documentsI18n['products-inventory'][language].title,
          purpose: documentsI18n['products-inventory'][language].purpose,
          pageCount: '15–20 pages',
          sections: documentsI18n['products-inventory'][language].sections
        },
        {
          id: 'people-admin',
          title: documentsI18n['people-admin'][language].title,
          purpose: documentsI18n['people-admin'][language].purpose,
          pageCount: '20–25 pages',
          sections: documentsI18n['people-admin'][language].sections
        },
        {
          id: 'handbook',
          title: documentsI18n['handbook'][language].title,
          purpose: documentsI18n['handbook'][language].purpose,
          pageCount: '15–20 pages',
          sections: documentsI18n['handbook'][language].sections
        },
        {
          id: 'money-finance',
          title: documentsI18n['money-finance'][language].title,
          purpose: documentsI18n['money-finance'][language].purpose,
          pageCount: '15–20 pages',
          sections: documentsI18n['money-finance'][language].sections
        }
      ]
    }
  ];
}

export const companyData = getCompanyData('en');
