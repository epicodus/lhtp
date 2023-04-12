// script to go through YAML *course* layout file and call fetchSection for each section/week

// UPDATE THESE VALUES TO POINT TO REPO / DIRECTORY / FILENAME OF COURSE LAYOUT FILE
const REMOTE_COURSE_LAYOUT_REPO = 'testing';
const REMOTE_COURSE_LAYOUT_DIRECTORY = 'layouts';
const COURSE_LAYOUT_FILENAME = 'intro-course-layout.yaml';

// You probably don't need to edit these values
const LOCAL_DOCS_PATH = path.join('..', 'docs'); // path to docusaurus docs directory (likely '../docs')
const SCRATCH_DIRECTORY_PATH = './tmp'; // any directory that can be safely deleted

// **************************************************** //
// User shouldn't need to edit anything below this line //
// **************************************************** //

import path from "path";
import { confirmAction, clearDirectories, readYamlFile } from "./utils.js";
import { fetchSection } from "./fetchSection.js";
import { fetchFile } from "./fetchGithubContent.js";
import { generateSiteSidebar } from "./generateSidebar.js";

async function fetchCourse() {
  const courseLayoutPath = await fetchLayoutFile(COURSE_LAYOUT_FILENAME);
  const { title, homepage, sections } = await readYamlFile(courseLayoutPath);

  const sectionDirectories = [];

  for (const layoutFile of sections) {
    const sectionLayoutFilePath = await fetchLayoutFile(layoutFile);
    const sectionLayout = await readYamlFile(sectionLayoutFilePath);
    sectionDirectories.push(sectionLayout.directory);
    fetchSection({  
      sectionLayout,
      docsPath: LOCAL_DOCS_PATH
    });
  }

  generateSiteSidebar({ title, sectionDirectories });

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

  // download course homepage
  fetchFile({
    repo: homepage.repo || REMOTE_COURSE_LAYOUT_REPO,
    directory: homepage.directory || '',
    filename: homepage.filename,
    outDir: LOCAL_DOCS_PATH
  });
}

async function fetchLayoutFile(filename) {
  await fetchFile({
    repo: REMOTE_COURSE_LAYOUT_REPO,
    directory: REMOTE_COURSE_LAYOUT_DIRECTORY,
    outDir: SCRATCH_DIRECTORY_PATH,
    filename
  });
  return path.join(SCRATCH_DIRECTORY_PATH, filename);
}

async function confirmFetch() {
  const message = `Delete the ${LOCAL_DOCS_PATH} and ${SCRATCH_DIRECTORY_PATH} directories and refetch all content from GitHub?`;
  const confirmed = await confirmAction(message);
  if (confirmed) {
    clearDirectories([LOCAL_DOCS_PATH, SCRATCH_DIRECTORY_PATH]);
    fetchCourse();
  } else {
    console.log('Canceled!');
  }
}

if (process.cwd().replace(/\\/g, '/').split('/').pop() === 'scripts') {
  confirmFetch();
} else {
  console.log('Please run from the scripts directory');
}
