// script to fetch entire curriculum (from multiple GitHub repos)

// UPDATE THESE VALUES IF NEEDED
const CURRICULUM_LAYOUT_PATH = 'curriculum-layout.yaml';
const FETCH_IMAGES = false; // set to false if you don't want to download images

// You probably don't need to edit these.
// Local paths are relative to project root if run via package.json npm script.
const ROOT_PATH = process.cwd();
const REPO_IMAGES_PATH = 'images'; // path to images GitHub repo images directory
const LOCAL_DOCS_PATH = path.join(ROOT_PATH, 'docs'); // path to docusaurus docs directory (likely 'docs')
const LOCAL_STATIC_ASSETS_PATH = path.join(ROOT_PATH, 'static'); // path to docusaurus static assets dir (likely 'static')
const LOCAL_IMAGES_PATH = path.join(LOCAL_STATIC_ASSETS_PATH, 'images'); // path to docusaurus static images dir (likely 'static/images')
const SCRATCH_DIRECTORY_PATH = path.join(ROOT_PATH, 'tmp'); // any directory that can be safely deleted

// **************************************************** //
// User shouldn't need to edit anything below this line //
// **************************************************** //

import path from "path";
import { clearDirectories, readYamlFile } from "./utils.mjs";
import { fetchCourse } from "./fetchCourse.mjs";
import { fetchFile } from "./fetchGithubContent.mjs";
import { generateTopLevelSidebar } from "./generateSidebar.mjs";
import { titleToId } from "./utils.mjs";

async function fetchCurriculum() {
  const { courses } = await readYamlFile(CURRICULUM_LAYOUT_PATH);
  let docsCoursePaths = [];
  for (const course of courses) {
    const repo = course.split('/')[4];
    const directory = course.split('/')[7];
    const filename = course.split('/')[8];
    docsCoursePaths.push(path.join(LOCAL_DOCS_PATH, titleToId(repo)));
    await fetchCourse({
      repo,
      directory,
      filename,
      LOCAL_DOCS_PATH,
      LOCAL_IMAGES_PATH,
      REPO_IMAGES_PATH,
      SCRATCH_DIRECTORY_PATH,
      FETCH_IMAGES,
    });
  }

  generateTopLevelSidebar({ docsCoursePaths });

  // download site-wide static pages (homepage, courses list, handbook)
  fetchFile({
    repo: 'testing',
    filename: 'site-home.md',
    outDir: LOCAL_DOCS_PATH
  });
  fetchFile({
    repo: 'testing',
    filename: 'courses.md',
    outDir: LOCAL_DOCS_PATH
  });
  fetchFile({
    repo: 'soft-skills-and-job-prep-curriculum',
    directory: 'student-handbook',
    filename: 'student-handbook.md',
    outDir: LOCAL_DOCS_PATH
  });
}

clearDirectories([SCRATCH_DIRECTORY_PATH, LOCAL_DOCS_PATH, LOCAL_IMAGES_PATH]);
fetchCurriculum();
