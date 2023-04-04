// script to go through YAML layout file for a section, fetch content from GitHub, write to appropriate directories

import path from "path";
import lodash from "lodash";
import { createDirectory } from "./utils.js";
import { generateCategoryFile } from "./generateCategoryFile.js";
import { fetchDocusaurusDocs } from "./fetchGithubContent.js";
import { generateFrontMatter } from "./generateFrontMatter.js";
import { generateSectionSidebar } from "./generateSidebar.js";

export async function fetchSection({ sectionLayout, docsPath }) {
  const { section, order, directory, repo, lessons } = sectionLayout;
  const outDir = path.join(docsPath, directory);

  // console.log(`Fetching section ${sectionLayoutFilePath}...`)
  const updatedLessons = addLessonMetadata({ lessons, repo, directory });
  createDirectory(outDir);
  fetchLessons({ repo, directory, outDir, lessons: updatedLessons });
  generateCategoryFile({ section, order, outDir });
  generateSectionSidebar({ section, outDir, lessons: updatedLessons });
}

const addLessonMetadata = ({ lessons, repo, directory }) => {
  return lessons.map((lesson, i) => ({
    ...lesson,
    repo: lesson.repo || repo,
    directory: lesson.directory || directory,
    number: i,
    isFirst: i === 0,
    isLast: i === lessons.length - 1,
    frontMatter: generateFrontMatter({ ...lesson, number: i })
  }));
}

async function fetchLessons({ lessons, outDir }) {
  const groupedLessons = Object.values(lodash.groupBy(lessons, lesson => `${lesson.repo}:${lesson.directory}`));
  for (const lessonGroup of groupedLessons) {
    const { repo, directory } = lessonGroup[0];
    const documents = lessonGroup.map(({filename, frontMatter}) => ({ filename, frontMatter }));
    await fetchDocusaurusDocs({
      outDir,
      repo,
      directory,
      documents
    });
  }
}
