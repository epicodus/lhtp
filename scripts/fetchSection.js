// script to go through YAML layout file for a section, fetch content from GitHub, write to appropriate directories

import path from "path";
import lodash from "lodash";
import { createDirectory, readYamlFile } from "./utils.js";
import { createCategoryFile } from "./generateCategoryFile.js";
import { fetchDocusaurusDocs } from "./fetchGithubContent.js";
import { generateFrontMatter } from "./generateFrontMatter.js";

export async function fetchSection({ sectionLayoutFilePath, docsPath }) {
  const { section, order, directory, repo, lessons } = await readYamlFile(sectionLayoutFilePath);
  const outDir = path.join(docsPath, directory);

  // console.log(`Fetching section ${sectionLayoutFilePath}...`)
  createDirectory(outDir);
  createCategoryFile({ section, order, outDir });
  fetchLessons({ repo, directory, outDir, lessons });
}

async function fetchLessons({ repo, directory, outDir, lessons }) {
  lessons.forEach((lesson, i) => { 
    lesson.repo = lesson.repo || repo; 
    lesson.directory = lesson.directory || directory;
    lesson.number = i;
    lesson.isFirst = i === 0;
    lesson.isLast = i === lessons.length - 1;
    lesson.frontMatter = generateFrontMatter(lesson);
  });
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
