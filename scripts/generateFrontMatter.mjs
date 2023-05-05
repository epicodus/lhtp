import matter from 'gray-matter';
import { titleToId } from './utils.mjs';

export function generateFrontMatter(lesson) {
  const { ORG } = process.env;
  const { title, number, day, numberDay, type, isFirst, isLast, show_weeks_and_days, repo, directory, filename } = lesson;
  const id = titleToId(title);
  const updatedTitle = show_weeks_and_days ? `${numberDay}. ${title}` : `${number + 1}. ${title}`;

  const frontMatter = {
    title: updatedTitle,
    id,
    slug: id,
    hide_table_of_contents: true,
    sidebar_position: number + 1,
    day,
    type,
    url: `https://github.com/${ORG}/${repo}/blob/main/${directory}/${filename}`
  }
  if (isFirst) frontMatter.paginationPrev = null;
  if (isLast) frontMatter.paginationNext = null;

  const frontMatterYaml = matter.stringify('', frontMatter).trim() + '\n\n';
  return frontMatterYaml;
};
