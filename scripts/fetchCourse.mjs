// script to go through YAML *course* layout file and call fetchSection for each section/week

import path from "path";
import { readYamlFile } from "./utils.mjs";
import { fetchSection } from "./fetchSection.mjs";
import { fetchFile } from "./fetchGithubContent.mjs";
import { generateCourseSidebar } from "./generateSidebar.mjs";
import { fetchImages } from "./fetchGithubContent.mjs";
import { titleToId } from "./utils.mjs";

// the below assumes layout files for course and all sections in the course are in the same repo and directory
export async function fetchCourse({ repo, directory, filename, LOCAL_DOCS_PATH, LOCAL_IMAGES_PATH, REPO_IMAGES_PATH, SCRATCH_DIRECTORY_PATH, FETCH_IMAGES }) {
  const docsCoursePath = path.join(LOCAL_DOCS_PATH, titleToId(repo));
  const courseLayoutPath = await fetchLayoutFile({ repo, directory, filename, SCRATCH_DIRECTORY_PATH });
  const { title, homepage, show_weeks_and_days, sections } = await readYamlFile(courseLayoutPath);

  const sectionDirectories = [];
  for (const layoutFile of sections) {
    const sectionLayoutFilePath = await fetchLayoutFile({ repo, directory, filename: layoutFile, SCRATCH_DIRECTORY_PATH });
    const sectionLayout = await readYamlFile(sectionLayoutFilePath);
    sectionDirectories.push(sectionLayout.directory);
    fetchSection({  
      sectionLayout,
      docsCoursePath,
      show_weeks_and_days
    });
  }

  generateCourseSidebar({
    title,
    docsCoursePath,
    sectionDirectories
  });

  fetchCourseHomepage({
    homepage,
    repo,
    outDir: docsCoursePath
  });

  if (FETCH_IMAGES) {
    fetchCourseImages({
      repo,
      REPO_IMAGES_PATH,
      LOCAL_IMAGES_PATH,
      SCRATCH_DIRECTORY_PATH
    });
  }
}

function fetchCourseHomepage({ homepage, repo, outDir }) {
  fetchFile({
    repo: homepage.repo || repo,
    directory: homepage.directory || '',
    filename: homepage.filename,
    outDir
  });
}

async function fetchLayoutFile({ repo, directory, filename, SCRATCH_DIRECTORY_PATH }) {
  await fetchFile({
    repo,
    directory,
    filename,
    outDir: SCRATCH_DIRECTORY_PATH,
  });
  return path.join(SCRATCH_DIRECTORY_PATH, filename);
}

function fetchCourseImages({ repo, REPO_IMAGES_PATH, LOCAL_IMAGES_PATH, SCRATCH_DIRECTORY_PATH }) {
  fetchImages({
    repo: repo,
    directory: REPO_IMAGES_PATH,
    imagesDir: LOCAL_IMAGES_PATH,
    tmpDir: SCRATCH_DIRECTORY_PATH
  });
}
