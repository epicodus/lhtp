// generate nested Docusaurus sidebar for a section

import { writeFileSync } from 'fs';
import path from 'path';
import lodash from 'lodash';
import matter from 'gray-matter';
import { titleToId } from './utils.mjs';

export function generateSectionSidebar({ title, number, lessons, outDir }) {
  const sidebarPath = path.join(outDir, 'sidebar.js');

  const groupedLessons = Object.values(lodash.groupBy(lessons, lesson => lesson.day));

  const days = groupedLessons.map(lessonGroup => ({
    type: 'category',
    label: lessonGroup[0].day.toUpperCase(),
    items: lessonGroup.map(lesson => `${outDir.split('_').slice(1).join('_')}/${matter(lesson.frontMatter).data.id}`)
  }));

  const sidebar = {
    type: 'category',
    label: `[wk${number}] ${title}`,
    items: days
  }

  const fileContent = `module.exports = ${JSON.stringify(sidebar, null, 2)};`;
  writeFileSync(sidebarPath, fileContent);
}

export function generateSiteSidebar({ title, sectionDirectories }) {
  const sidebarPath = path.join(process.cwd(), 'sidebars.js');
  const requires = sectionDirectories.map(sectionDirectory => `require('./docs/${sectionDirectory}/sidebar.js')`);

  const fileContent = `module.exports = {
  docs: [
    '${titleToId(title)}',
    ${requires.join(',\n    ')}
  ]
};\n`;

  writeFileSync(sidebarPath, fileContent);
}
