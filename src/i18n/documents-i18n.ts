import { Language } from './translations';

export interface DocumentI18n {
  title: string;
  purpose: string;
  sections: { id: string; title: string }[];
}

export interface LayerI18n {
  title: string;
  description: string;
}

export const layersI18n: Record<string, Record<Language, LayerI18n>> = {
  foundation: {
    en: {
      title: 'LAYER 01: COMPANY FOUNDATION',
      description: 'Single source of truth for company identity and operations'
    },
    fr: {
      title: 'COUCHE 01: FONDATION DE L\'ENTREPRISE',
      description: 'Source unique de vérité pour l\'identité et les opérations de l\'entreprise'
    },
    ar: {
      title: 'الطبقة 01: أساس الشركة',
      description: 'المصدر الوحيد للحقيقة لهوية الشركة وعملياتها'
    }
  },
  'operational-playbooks': {
    en: {
      title: 'LAYER 02: OPERATIONAL PLAYBOOKS',
      description: 'Comprehensive guides for day-to-day business operations'
    },
    fr: {
      title: 'COUCHE 02: GUIDES OPÉRATIONNELS',
      description: 'Guides complets pour les opérations quotidiennes'
    },
    ar: {
      title: 'الطبقة 02: أدلة العمليات',
      description: 'أدلة شاملة للعمليات اليومية'
    }
  }
};

export const documentsI18n: Record<string, Record<Language, DocumentI18n>> = {
  'handbook': {
    en: {
      title: 'Handbook',
      purpose: 'Employee handbook with company policies and guidelines',
      sections: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'policies', title: 'Company Policies' },
        { id: 'benefits', title: 'Employee Benefits' },
        { id: 'procedures', title: 'Workplace Procedures' }
      ]
    },
    fr: {
      title: 'Manuel de l\'Employé',
      purpose: 'Manuel de l\'employé avec les politiques et directives de l\'entreprise',
      sections: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'policies', title: 'Politiques de l\'Entreprise' },
        { id: 'benefits', title: 'Avantages Sociaux' },
        { id: 'procedures', title: 'Procédures de Travail' }
      ]
    },
    ar: {
      title: 'دليل الموظف',
      purpose: 'دليل الموظف مع سياسات وإرشادات الشركة',
      sections: [
        { id: 'introduction', title: 'مقدمة' },
        { id: 'policies', title: 'سياسات الشركة' },
        { id: 'benefits', title: 'مزايا الموظفين' },
        { id: 'procedures', title: 'إجراءات مكان العمل' }
      ]
    }
  },
  'company-manual': {
    en: {
      title: 'Company Manual',
      purpose: 'Single source of truth for company identity and operations',
      sections: [
        { id: 'header', title: 'Header' },
        { id: 'quick-reference', title: 'Quick Reference' },
        { id: 'toc', title: 'Table of Contents' },
        { id: 'section-1', title: 'About Our Company' },
        { id: 'section-2', title: 'Decision-Making Authority' },
        { id: 'section-3', title: 'Service Standards' },
        { id: 'section-4', title: 'Key Business Rules' },
        { id: 'appendix', title: 'Appendix' }
      ]
    },
    fr: {
      title: 'Manuel de l\'Entreprise',
      purpose: 'Source unique de vérité pour l\'identité et les opérations de l\'entreprise',
      sections: [
        { id: 'header', title: 'En-tête' },
        { id: 'quick-reference', title: 'Référence Rapide' },
        { id: 'toc', title: 'Table des Matières' },
        { id: 'section-1', title: 'À Propos de Notre Entreprise' },
        { id: 'section-2', title: 'Autorité Décisionnelle' },
        { id: 'section-3', title: 'Normes de Service' },
        { id: 'section-4', title: 'Règles Commerciales Clés' },
        { id: 'appendix', title: 'Annexe' }
      ]
    },
    ar: {
      title: 'دليل الشركة',
      purpose: 'المصدر الوحيد للحقيقة لهوية الشركة وعملياتها',
      sections: [
        { id: 'header', title: 'العنوان' },
        { id: 'quick-reference', title: 'مرجع سريع' },
        { id: 'toc', title: 'جدول المحتويات' },
        { id: 'section-1', title: 'عن شركتنا' },
        { id: 'section-2', title: 'صلاحيات اتخاذ القرار' },
        { id: 'section-3', title: 'معايير الخدمة' },
        { id: 'section-4', title: 'قواعد العمل الرئيسية' },
        { id: 'appendix', title: 'الملحق' }
      ]
    }
  },
  'sales-customer': {
    en: {
      title: 'Sales & Customer Management Playbook',
      purpose: 'Guide for managing customer relationships from lead to ongoing service',
      sections: [
        { id: 'lead-to-sale', title: 'Lead to Sale Process' },
        { id: 'customer-contracts', title: 'Customer Contracts' },
        { id: 'relationship-management', title: 'Relationship Management' },
        { id: 'complaint-handling', title: 'Complaint Handling' }
      ]
    },
    fr: {
      title: 'Guide des Ventes et Gestion Client',
      purpose: 'Guide pour gérer les relations clients du prospect au service continu',
      sections: [
        { id: 'lead-to-sale', title: 'Processus de Prospect à Vente' },
        { id: 'customer-contracts', title: 'Contrats Client' },
        { id: 'relationship-management', title: 'Gestion des Relations' },
        { id: 'complaint-handling', title: 'Traitement des Réclamations' }
      ]
    },
    ar: {
      title: 'دليل المبيعات وإدارة العملاء',
      purpose: 'دليل لإدارة علاقات العملاء من العملاء المحتملين إلى الخدمة المستمرة',
      sections: [
        { id: 'lead-to-sale', title: 'عملية من عميل محتمل إلى بيع' },
        { id: 'customer-contracts', title: 'عقود العملاء' },
        { id: 'relationship-management', title: 'إدارة العلاقات' },
        { id: 'complaint-handling', title: 'معالجة الشكاوى' }
      ]
    }
  },
  'service-delivery': {
    en: {
      title: 'Service Delivery Playbook',
      purpose: 'Comprehensive guide for executing all service operations with quality and safety',
      sections: [
        { id: 'service-planning', title: 'Service Planning & Scheduling' },
        { id: 'fire-extinguisher-inspection', title: 'Fire Extinguisher Services - Inspection' },
        { id: 'fire-extinguisher-maintenance', title: 'Fire Extinguisher Services - Maintenance' },
        { id: 'fire-extinguisher-repair', title: 'Fire Extinguisher Services - Repair' },
        { id: 'emergency-services', title: 'Emergency Services' },
        { id: 'documentation-quality', title: 'Documentation & Quality' }
      ]
    },
    fr: {
      title: 'Guide de Prestation de Services',
      purpose: 'Guide complet pour exécuter toutes les opérations de service avec qualité et sécurité',
      sections: [
        { id: 'service-planning', title: 'Planification et Programmation des Services' },
        { id: 'fire-extinguisher-inspection', title: 'Services d\'Extincteurs - Inspection' },
        { id: 'fire-extinguisher-maintenance', title: 'Services d\'Extincteurs - Maintenance' },
        { id: 'fire-extinguisher-repair', title: 'Services d\'Extincteurs - Réparation' },
        { id: 'emergency-services', title: 'Services d\'Urgence' },
        { id: 'documentation-quality', title: 'Documentation et Qualité' }
      ]
    },
    ar: {
      title: 'دليل تقديم الخدمات',
      purpose: 'دليل شامل لتنفيذ جميع عمليات الخدمة بجودة وسلامة',
      sections: [
        { id: 'service-planning', title: 'تخطيط وجدولة الخدمات' },
        { id: 'fire-extinguisher-inspection', title: 'خدمات طفايات الحريق - الفحص' },
        { id: 'fire-extinguisher-maintenance', title: 'خدمات طفايات الحريق - الصيانة' },
        { id: 'fire-extinguisher-repair', title: 'خدمات طفايات الحريق - الإصلاح' },
        { id: 'emergency-services', title: 'خدمات الطوارئ' },
        { id: 'documentation-quality', title: 'التوثيق والجودة' }
      ]
    }
  },
  'products-inventory': {
    en: {
      title: 'Products & Inventory Playbook',
      purpose: 'Managing product selection, purchasing, storage, and inventory control',
      sections: [
        { id: 'product-categories', title: 'Product Categories' },
        { id: 'purchasing-receiving', title: 'Purchasing & Receiving' },
        { id: 'warehouse-organization', title: 'Warehouse Organization' },
        { id: 'stock-control', title: 'Stock Control' },
        { id: 'supplier-management', title: 'Supplier Management' }
      ]
    },
    fr: {
      title: 'Guide des Produits et Inventaire',
      purpose: 'Gérer la sélection de produits, les achats, le stockage et le contrôle des stocks',
      sections: [
        { id: 'product-categories', title: 'Catégories de Produits' },
        { id: 'purchasing-receiving', title: 'Achats et Réception' },
        { id: 'warehouse-organization', title: 'Organisation de l\'Entrepôt' },
        { id: 'stock-control', title: 'Contrôle des Stocks' },
        { id: 'supplier-management', title: 'Gestion des Fournisseurs' }
      ]
    },
    ar: {
      title: 'دليل المنتجات والمخزون',
      purpose: 'إدارة اختيار المنتجات والشراء والتخزين ومراقبة المخزون',
      sections: [
        { id: 'product-categories', title: 'فئات المنتجات' },
        { id: 'purchasing-receiving', title: 'الشراء والاستلام' },
        { id: 'warehouse-organization', title: 'تنظيم المستودعات' },
        { id: 'stock-control', title: 'مراقبة المخزون' },
        { id: 'supplier-management', title: 'إدارة الموردين' }
      ]
    }
  },
  'people-admin': {
    en: {
      title: 'People & Admin Playbook',
      purpose: 'Guidelines for hiring, developing, and managing team members',
      sections: [
        { id: 'hiring-onboarding', title: 'Hiring & Onboarding' },
        { id: 'training-competency', title: 'Training & Competency' },
        { id: 'performance-management', title: 'Performance Management' },
        { id: 'workplace-rules', title: 'Workplace Rules' }
      ]
    },
    fr: {
      title: 'Guide du Personnel et Administration',
      purpose: 'Lignes directrices pour l\'embauche, le développement et la gestion des membres de l\'équipe',
      sections: [
        { id: 'hiring-onboarding', title: 'Recrutement et Intégration' },
        { id: 'training-competency', title: 'Formation et Compétence' },
        { id: 'performance-management', title: 'Gestion de la Performance' },
        { id: 'workplace-rules', title: 'Règles du Lieu de Travail' }
      ]
    },
    ar: {
      title: 'دليل الموظفين والإدارة',
      purpose: 'إرشادات للتوظيف والتطوير وإدارة أعضاء الفريق',
      sections: [
        { id: 'hiring-onboarding', title: 'التوظيف والتأهيل' },
        { id: 'training-competency', title: 'التدريب والكفاءة' },
        { id: 'performance-management', title: 'إدارة الأداء' },
        { id: 'workplace-rules', title: 'قواعد مكان العمل' }
      ]
    }
  },
  'money-finance': {
    en: {
      title: 'Money & Finance Playbook',
      purpose: 'Financial Management & Control Systems',
      sections: [
        { id: 'financial-structure', title: 'PART A: FINANCIAL STRUCTURE & CONTROLS' },
        { id: 'revenue-invoicing', title: 'PART B: REVENUE & INVOICING' },
        { id: 'payments-collections', title: 'PART C: PAYMENTS & COLLECTIONS' },
        { id: 'expenses-purchases', title: 'PART D: EXPENSES & PURCHASES' },
        { id: 'pricing-margins', title: 'PART E: PRICING & MARGINS' },
        { id: 'credit-management', title: 'PART F: CREDIT MANAGEMENT' },
        { id: 'financial-reporting', title: 'PART G: FINANCIAL REPORTING & KPIs' },
        { id: 'accounting-compliance', title: 'PART H: ACCOUNTING & COMPLIANCE' },
        { id: 'financial-planning', title: 'PART I: FINANCIAL PLANNING' }
      ]
    },
    fr: {
      title: 'Guide de l\'Argent et des Finances',
      purpose: 'Gérer les flux de trésorerie, la facturation, les paiements et les dossiers financiers',
      sections: [
        { id: 'invoicing-collections', title: 'Facturation et Recouvrement' },
        { id: 'spending-payments', title: 'Dépenses et Paiements' },
        { id: 'cash-management', title: 'Gestion de Trésorerie' },
        { id: 'financial-records', title: 'Dossiers Financiers' }
      ]
    },
    ar: {
      title: 'دليل المال والمالية',
      purpose: 'إدارة التدفق النقدي والفوترة والمدفوعات والسجلات المالية',
      sections: [
        { id: 'invoicing-collections', title: 'الفوترة والتحصيل' },
        { id: 'spending-payments', title: 'الإنفاق والمدفوعات' },
        { id: 'cash-management', title: 'إدارة النقد' },
        { id: 'financial-records', title: 'السجلات المالية' }
      ]
    }
  }
};
