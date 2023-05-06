// script to fetch entire curriculum (from multiple GitHub repos)

import path from "path";
import { clearDirectories, readYamlFile } from "./utils.mjs";
import { fetchCourse } from "./fetchCourse.mjs";
import { fetchFile, fetchLayoutFile } from "./fetchGithubContent.mjs";
import { generateTopLevelSidebar } from "./generateSidebar.mjs";
import { titleToId } from "./utils.mjs";
import config from "./config.mjs";

async function fetchCurriculum() {
  const curriculumLayoutPath = await fetchLayoutFile({
    repo: 'shared-curriculum',
    directory: 'lhtp2',
    filename: 'curriculum-layout.yaml',
  });
  const { courses } = await readYamlFile(curriculumLayoutPath);
  let docsCoursePaths = [];
  for (const course of courses) {
    const repo = course.split('/')[4];
    const directory = course.split('/')[7];
    const filename = course.split('/')[8];
    docsCoursePaths.push(path.join(config.local_docs_path, titleToId(repo)));
    await fetchCourse({
      repo,
      directory,
      filename
    });
  }

  generateTopLevelSidebar({ docsCoursePaths });

  // download site-wide static pages (homepage, courses list, handbook)
  fetchFile({
    repo: 'testing',
    filename: 'site-home.md',
    outDir: config.local_docs_path
  });
  fetchFile({
    repo: 'testing',
    filename: 'courses.md',
    outDir: config.local_docs_path
  });
  fetchFile({
    repo: 'soft-skills-and-job-prep-curriculum',
    directory: 'student-handbook',
    filename: 'student-handbook.md',
    outDir: config.local_docs_path
  });
}

clearDirectories([
  config.scratch_directory_path,
  config.local_docs_path,
  config.local_images_path
]);
fetchCurriculum();
