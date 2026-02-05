import { marked } from 'marked';
import { Language } from '../i18n/translations';

export async function loadMarkdownContent(docId: string, language: Language, sectionId?: string): Promise<string> {
  try {
    const path = sectionId
      ? `/content/${language}/${docId}/${sectionId}.md`
      : `/content/${language}/${docId}.md`;

    let response = await fetch(path);

    if (!response.ok) {
      console.warn(`Content not found: ${path}, falling back to English`);
      const fallbackPath = sectionId
        ? `/content/en/${docId}/${sectionId}.md`
        : `/content/en/${docId}.md`;
      response = await fetch(fallbackPath);

      if (!response.ok) {
        return sectionId ? '' : '<p>Content not available</p>';
      }
    }

    const text = await response.text();
    return marked(text) as string;
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return '<p>Error loading content</p>';
  }
}
