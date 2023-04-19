// script to go through YAML layout file for a section/week, fetch content from GitHub, write to appropriate directories

import path from "path";
import lodash from "lodash";
import { createDirectory } from "./utils.mjs";
import { generateCategoryFile } from "./generateCategoryFile.mjs";
import { fetchDocusaurusDocs } from "./fetchGithubContent.mjs";
import { generateFrontMatter } from "./generateFrontMatter.mjs";
import { generateSectionSidebar } from "./generateSidebar.mjs";

export async function fetchSection({ sectionLayout, docsPath }) {
  const { section, order, directory, repo, lessons } = sectionLayout;
  const outDir = path.join(docsPath, directory);

  // console.log(`Fetching section ${sectionLayoutFilePath}...`)
  const updatedLessons = addLessonMetadata({ lessons, repo, directory });
  createDirectory(outDir);
  fetchLessons({ repo, directory, outDir, lessons: updatedLessons });
  generateCategoryFile({ section, order, outDir });
  generateSectionSidebar({ title: section, number: order, outDir, lessons: updatedLessons });
}

const addLessonMetadata = ({ lessons, repo, directory }) => {
  const dayCount = { "weekend": 0, "monday": 0, "tuesday": 0, "wednesday": 0, "thursday": 0, "friday": 0 };
  return lessons.map((lesson, i) => ({
    ...lesson,
    repo: lesson.repo || repo,
    directory: lesson.directory || directory,
    number: i,
    isFirst: i === 0,
    isLast: i === lessons.length - 1,
    frontMatter: generateFrontMatter({
      ...lesson,
      number: i,
      numberDay: nextNumber(dayCount, lesson.day)
    })
  }));
}

const nextNumber = (dayCount, day) => {
  dayCount[day]++
  return dayCount[day];
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
