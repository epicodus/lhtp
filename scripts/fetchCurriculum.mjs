// script to fetch entire curriculum (from multiple GitHub repos)

import { clearDirectories, readYamlFile } from "./utils.mjs";
import { fetchTrack } from "./fetchTrack.mjs";
import { fetchLayoutFile, fetchStaticPage } from "./fetchGithubContent.mjs";
import config from "./config.mjs";

async function fetchCurriculum() {
  const curriculumLayoutPath = await fetchLayoutFile(config.curriculum_layout_file);
  const { tracks, site_homepage, courses_homepage, student_handbook } = await readYamlFile(curriculumLayoutPath);

  // download site-wide static pages (homepage, courses list, handbook)
  fetchStaticPage(site_homepage);
  fetchStaticPage(courses_homepage);
  fetchStaticPage(student_handbook);

  for (const track of tracks) {
    await fetchTrack({ track });
  }
}

clearDirectories([
  config.scratch_directory_path,
  config.local_docs_path,
  config.local_images_path
]);
fetchCurriculum();
