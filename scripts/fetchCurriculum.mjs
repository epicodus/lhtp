// script to fetch entire curriculum (from multiple GitHub repos)

import fs from 'fs-extra';
import { clearDirectories, readYamlFile } from "./utils.mjs";
import { fetchTrack } from "./fetchTrack.mjs";
import { fetchLayoutFile, fetchStaticPage } from "./fetchGithubContent.mjs";
import config from "./config.mjs";

const tracksToFetch = ['full-time', 'part-time', 'full-time-pre-october', 'part-time-evening', 'workshops'];
// const tracksToFetch = ['full-time-pre-october'];

async function fetchCurriculum() {
  const curriculumLayoutPath = await fetchLayoutFile(config.curriculum_layout_file);
  const { tracks, site_homepage, courses_homepage, student_handbook } = await readYamlFile(curriculumLayoutPath);

  // download site-wide static pages (homepage, courses list, handbook)
  fetchStaticPage(site_homepage);
  fetchStaticPage(courses_homepage);
  fetchStaticPage(student_handbook);

  for (const track of tracks) {
    if (tracksToFetch.includes(track.name)) {
      await fetchTrack({ track });
    }
  }

  // disable sidebar on root (www) site
  fs.writeFileSync(`${config.root_path}/sidebars.js`, `module.exports = {};`);
}

clearDirectories([
  config.scratch_directory_path,
  config.local_docs_path,
  config.local_images_path,
  config.local_tracks_path
]);
fetchCurriculum();
