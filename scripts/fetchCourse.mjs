// script to go through YAML *course* layout file and call fetchSection for each section/week

// UPDATE THESE VALUES TO POINT TO REPO / DIRECTORY / FILENAME OF COURSE LAYOUT FILE
const REMOTE_COURSE_LAYOUT_REPO = 'intro-curriculum';
const REMOTE_COURSE_LAYOUT_DIRECTORY = 'layouts-lhtp2';
const REMOTE_COURSE_IMAGES_DIRECTORY = 'images';
const COURSE_LAYOUT_FILENAME = 'intro-course-layout.yaml';
const FETCH_IMAGES = true; // set to false if you don't want to download images

// You probably don't need to edit these values
// These paths are relative to the project root if run via npm / package.json
const LOCAL_DOCS_PATH = path.join(process.cwd(), 'docs'); // path to docusaurus docs directory (likely 'docs')
const LOCAL_STATIC_ASSETS_PATH = path.join(process.cwd(), 'static'); // path to docusaurus static assets dir (likely 'static')
const LOCAL_STATIC_IMAGES_PATH = path.join(LOCAL_STATIC_ASSETS_PATH, 'images'); // path to docusaurus static images dir (likely 'static/images')
const SCRATCH_DIRECTORY_PATH = path.join(process.cwd(), 'tmp'); // any directory that can be safely deleted

// **************************************************** //
// User shouldn't need to edit anything below this line //
// **************************************************** //

import path from "path";
import { clearDirectories, readYamlFile } from "./utils.mjs";
import { fetchSection } from "./fetchSection.mjs";
import { fetchFile } from "./fetchGithubContent.mjs";
import { generateSiteSidebar } from "./generateSidebar.mjs";
import { fetchImages } from "./fetchGithubContent.mjs";

async function fetchCourse() {
  const courseLayoutPath = await fetchLayoutFile(COURSE_LAYOUT_FILENAME);
  const { title, show_weeks_and_days, homepage, sections } = await readYamlFile(courseLayoutPath);

  const sectionDirectories = [];

  for (const layoutFile of sections) {
    const sectionLayoutFilePath = await fetchLayoutFile(layoutFile);
    const sectionLayout = await readYamlFile(sectionLayoutFilePath);
    sectionDirectories.push(sectionLayout.directory);
    fetchSection({  
      sectionLayout,
      docsPath: LOCAL_DOCS_PATH,
      show_weeks_and_days
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

  if (FETCH_IMAGES) {
    fetchImages({
      repo: REMOTE_COURSE_LAYOUT_REPO,
      directory: REMOTE_COURSE_IMAGES_DIRECTORY,
      outDir: LOCAL_STATIC_IMAGES_PATH,
      tmpDir: SCRATCH_DIRECTORY_PATH
    });
  } else {
    console.log('Skipping image fetch step.');
  }
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

clearDirectories([LOCAL_DOCS_PATH, SCRATCH_DIRECTORY_PATH, LOCAL_STATIC_IMAGES_PATH]);
fetchCourse();
