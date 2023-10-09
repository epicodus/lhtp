// script to fetch track (from multiple GitHub repos)

import fs from 'fs-extra';
import path from "path";
import { fetchCourse } from "./fetchCourse.mjs";
import { generateTopLevelSidebar } from "./generateSidebar.mjs";
import config from "./config.mjs";
import { clearDirectories } from "./utils.mjs";

export async function fetchTrack({ track }) {
  const trackDir = path.join(config.root_path, 'tracks', track.name);
  const trackDocsPath = path.join(trackDir, 'docs');
  clearDirectories([trackDir, trackDocsPath]);

  let docsCoursePaths = [];
  for (const { repo, directory, filename, root } of track.course_layouts) {
    docsCoursePaths.push(root ? trackDocsPath : path.join(trackDocsPath, filename.replace('.yaml', '')));
    await fetchCourse({
      trackDocsPath,
      repo,
      directory,
      filename,
      root
    });
  }

  // copy static site-wide pages to trackDocsPath
  if (track.course_layouts.length > 1) {
    fs.copyFileSync(path.join(config.local_docs_path, 'site-home.md'), path.join(trackDocsPath, 'site-home.md'));
  }
  fs.copyFileSync(path.join(config.local_docs_path, 'courses-tracks.md'), path.join(trackDocsPath, 'courses.md'));
  fs.copyFileSync(path.join(config.local_docs_path, 'student-handbook.md'), path.join(trackDocsPath, 'student-handbook.md'));
  fs.copyFileSync(path.join(config.root_path, `${track.name}-docusaurus.config.js`), path.join(trackDir, 'docusaurus.config.js'));
  fs.copyFileSync(path.join(config.root_path, 'package.json'), path.join(trackDir, 'package.json'));
  fs.copyFileSync(path.join(config.root_path, 'package-lock.json'), path.join(trackDir, 'package-lock.json'));
  fs.copySync(path.join(config.root_path, 'src'), path.join(trackDir, 'src'));
  fs.copySync(path.join(config.root_path, 'static'), path.join(trackDir, 'static'));

  generateTopLevelSidebar({ trackDir, docsCoursePaths });
}
