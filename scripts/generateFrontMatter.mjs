import matter from 'gray-matter';
import { titleToId } from './utils.mjs';

export function generateFrontMatter(lesson, show_weeks_and_days) {
  const { title, number, day, numberDay, type, isFirst, isLast } = lesson;
  const id = titleToId(title);
  const updatedTitle = show_weeks_and_days ? `${numberDay}. ${title}` : `${number + 1}. ${title}`;

  const frontMatter = {
    title: updatedTitle,
    id,
    slug: id,
    hide_table_of_contents: true,
    sidebar_position: number + 1,
    day,
    type
  }
  if (isFirst) frontMatter.paginationPrev = null;
  if (isLast) frontMatter.paginationNext = null;

  const frontMatterYaml = matter.stringify('', frontMatter).trim() + '\n\n';
  return frontMatterYaml;
};
