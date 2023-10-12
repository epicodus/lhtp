// script to fetch entire curriculum (from multiple GitHub repos)

import fs from 'fs-extra';
import { clearDirectories, readYamlFile } from "./utils.mjs";
import { fetchTrack } from "./fetchTrack.mjs";
import { fetchLayoutFile, fetchFile } from "./fetchGithubContent.mjs";
import config from "./config.mjs";

// const tracksToFetch = ['full-time', 'part-time', 'full-time-pre-october', 'part-time-evening', 'workshops'];
const tracksToFetch = ['full-time', 'part-time', 'full-time-pre-october', 'part-time-evening'];

async function fetchCurriculum() {
  const curriculumLayoutPath = await fetchLayoutFile({ repo: config.shared_files_repo, filename: config.curriculum_layout_file });
  const { tracks } = await readYamlFile(curriculumLayoutPath);

  for (const track of tracks) {
    if (tracksToFetch.includes(track.name)) {
      await fetchTrack({ track });
    }
  }

  // fetch files for root (www) site 
  fetchFile({ repo: config.shared_files_repo, directory: 'root', filename: 'docusaurus.config.js', outDir: config.root_path });
  fetchFile({ repo: config.shared_files_repo, directory: 'root', filename: 'site-home.md', outDir: config.local_docs_path });
  fetchFile({ repo: config.shared_files_repo, filename: 'tracks.md', outDir: config.local_docs_path });
  fetchFile({ repo: config.student_handbook_repo, filename: 'student-handbook.md', outDir: config.local_docs_path });  
  fs.writeFileSync(`${config.root_path}/sidebars.js`, `module.exports = {};`); // disable sidebar
}

clearDirectories([
  config.scratch_directory_path,
  config.local_docs_path,
  config.local_images_path,
  config.local_tracks_path
]);
fetchCurriculum();
