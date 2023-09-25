import matter from 'gray-matter';
import { titleToId } from './utils.mjs';
import config from './config.mjs';

export function generateFrontMatter(lesson) {
  const { title, number, day, numberDay, type, isFirst, isLast, show_weeks_and_days, repo, directory, filename } = lesson;
  const id = titleToId(title);
  const titleWithNumber = show_weeks_and_days ? `${numberDay}. ${title}` : `${number + 1}. ${title}`;

  const frontMatter = {
    title: config.show_lesson_numbers ? titleWithNumber : title,
    id,
    slug: id,
    hide_table_of_contents: true,
    sidebar_position: number + 1,
    day,
    type,
    url: `https://github.com/${config.org}/${repo}/blob/main/${directory}/${filename}`
  }
  if (isFirst) frontMatter.paginationPrev = null;
  if (isLast) frontMatter.paginationNext = null;

  const frontMatterYaml = matter.stringify('', frontMatter).trim() + '\n\n';
  return frontMatterYaml;
};
