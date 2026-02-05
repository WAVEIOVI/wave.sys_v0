# Content Management Guide

## 📁 Folder Structure

```
public/content/
├── en/           # English content
├── fr/           # French content
└── ar/           # Arabic content
```

Each language folder contains Markdown files named after document IDs:
- `company-manual.md`
- `sales-customer.md`
- `service-delivery.md`
- `products-inventory.md`
- `people-admin.md`
- `money-finance.md`

## ✏️ How to Update Content

### 1. Simple Text Editing

All content is stored in **Markdown (.md) files** in the `public/content/` folder.

To update any document:
1. Navigate to `public/content/{language}/`
2. Open the document file (e.g., `company-manual.md`)
3. Edit the content using any text editor
4. Save the file
5. Refresh your browser — changes appear instantly!

### 2. Markdown Syntax

Markdown is a simple formatting language. Here are the basics:

```markdown
# Main Heading (H1)
## Section Heading (H2)
### Subsection (H3)

**Bold text**
*Italic text*

- Bullet point
- Another bullet
  - Nested bullet

1. Numbered list
2. Second item

[Link text](https://example.com)

---  (Horizontal line)

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### 3. Adding New Documents

To add a new document:

1. **Create the Markdown files** in each language folder:
   - `public/content/en/new-document.md`
   - `public/content/fr/new-document.md`
   - `public/content/ar/new-document.md`

2. **Update the document structure** in `src/i18n/documents-i18n.ts`:
   ```typescript
   'new-document': {
     en: {
       title: 'New Document',
       purpose: 'Document purpose',
       sections: [
         { id: 'section1', title: 'Section Title' }
       ]
     },
     // Add fr and ar translations
   }
   ```

3. **Add to the layer** in `src/data/documents.ts`:
   ```typescript
   {
     id: 'new-document',
     title: documentsI18n['new-document'][language].title,
     purpose: documentsI18n['new-document'][language].purpose,
     pageCount: '10–15 pages',
     sections: documentsI18n['new-document'][language].sections
   }
   ```

### 4. Multilingual Content

The system supports **English (EN)**, **French (FR)**, and **Arabic (AR)**.

- Always create content in all three languages
- If a language file is missing, the system falls back to English
- Arabic automatically displays right-to-left (RTL)

### 5. Best Practices

✅ **DO:**
- Use clear, descriptive headings
- Break content into sections with `##` headings
- Use bullet points and numbered lists for clarity
- Add horizontal lines `---` to separate major sections
- Keep paragraphs short and focused

❌ **DON'T:**
- Use HTML directly (use Markdown instead)
- Create very long files (split into multiple documents if needed)
- Forget to update all language versions

## 🎨 Formatting Tips

### For Professional Documents:

```markdown
# Document Title

## Section 1: Overview

Brief introduction paragraph.

### Key Points
- Point one
- Point two
- Point three

---

## Section 2: Details

More detailed information here.

### Subsection

| Item | Description | Status |
|------|-------------|--------|
| A    | Details     | ✓      |
| B    | More info   | ✓      |

---

**Document Control**
- Last Updated: 2025
- Owner: Department Name
```

## 🚀 Quick Start Examples

### Example 1: Simple Manual Page

```markdown
# Employee Handbook

## Welcome

Welcome to our company! This handbook contains everything you need to know.

## Company Values

We believe in:
- **Integrity**: Doing the right thing
- **Excellence**: Striving for the best
- **Teamwork**: Working together

## Your First Day

1. Arrive at 9:00 AM
2. Check in at reception
3. Meet your team
4. Complete orientation

For questions, contact HR at hr@company.com
```

### Example 2: Procedure Document

```markdown
# Fire Extinguisher Inspection Procedure

## Overview

This procedure outlines the steps for monthly fire extinguisher inspections.

## Equipment Needed

- Inspection checklist
- Tags and seals
- Pressure gauge

## Inspection Steps

### Step 1: Visual Check
Inspect for:
- Physical damage
- Blocked access
- Clear signage

### Step 2: Pressure Test
- Check pressure gauge
- Verify within green zone
- Note any issues

### Step 3: Documentation
Complete the inspection tag with:
- Date
- Inspector name
- Next inspection due

---

**Safety Note**: Always follow manufacturer guidelines.
```

## 💡 Tips for Large Content

For playbooks with extensive content:

1. **Use clear hierarchies**
   ```markdown
   # Main Title
   ## Chapter
   ### Section
   #### Subsection
   ```

2. **Break up text with visuals**
   - Use tables for data
   - Use lists for steps
   - Use horizontal rules for breaks

3. **Add navigation aids**
   ```markdown
   ## Table of Contents
   - [Section 1](#section-1)
   - [Section 2](#section-2)
   ```

## 🔄 Version Control

For tracking changes:
- Add a "Document Control" section at the end
- Include: Last Updated, Owner, Version Number
- Keep track of major changes

```markdown
---

**Document Control**
- Version: 2.1
- Last Updated: January 2025
- Owner: Operations Team
- Next Review: July 2025
```

## 🆘 Troubleshooting

**Problem**: Content not showing
- Check file name matches document ID exactly
- Ensure file is in correct language folder
- Check for Markdown syntax errors

**Problem**: Formatting looks wrong
- Review Markdown syntax
- Check for missing closing tags
- Ensure consistent spacing

**Problem**: Special characters not displaying
- Use UTF-8 encoding
- For Arabic, ensure RTL text is used

## 📞 Need Help?

- Markdown Guide: https://www.markdownguide.org/
- Test Markdown: https://dillinger.io/
- Contact: your-tech-team@company.com
