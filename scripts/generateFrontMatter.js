import matter from 'gray-matter';

export function generateFrontMatter(lesson) {
  const { title, number, day, numberDay, type, isFirst, isLast } = lesson;
  const id = title.replace(/[-\s]/g, '_').replace(/[#:;-=?<>(),./]/g, '').toLowerCase();
  const updatedTitle = type === 'lesson' ? `${numberDay}. 📓 ${title}`  : `${numberDay}. ✏️ ${title}`;

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
