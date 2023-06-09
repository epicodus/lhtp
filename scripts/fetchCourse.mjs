// script to go through YAML *course* layout file and call fetchSection for each section/week

import path from "path";
import { readYamlFile } from "./utils.mjs";
import { fetchSection } from "./fetchSection.mjs";
import { fetchFile } from "./fetchGithubContent.mjs";
import { fetchLayoutFile } from "./fetchGithubContent.mjs";
import { generateCourseSidebar } from "./generateSidebar.mjs";
import { fetchImages } from "./fetchGithubContent.mjs";
import { titleToId } from "./utils.mjs";
import config from "./config.mjs";

// the below assumes layout files for course and all sections in the course are in the same repo and directory
export async function fetchCourse({ repo, directory, filename }) {
  const docsCoursePath = path.join(config.local_docs_path, titleToId(repo));
  const courseLayoutPath = await fetchLayoutFile({ repo, directory, filename });
  const { title, homepage, show_weeks_and_days, sections } = await readYamlFile(courseLayoutPath);

  const sectionDirectories = [];
  for (const layoutFile of sections) {
    const sectionLayoutFilePath = await fetchLayoutFile({ repo, directory, filename: layoutFile });
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

  if (config.fetch_images) {
    fetchImages({ repo });
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
