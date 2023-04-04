// script to go through YAML *track* layout file and call fetchLessons for each section

// Usage:
// Update REMOTE_TRACK_LAYOUT_REPO, REMOTE_TRACK_LAYOUT_DIRECTORY, TRACK_LAYOUT_FILENAME constants
// These should point to the Github repo / directory / filename of the layout file for the track to fetch
// The other constants can likely be left as-is

const REMOTE_TRACK_LAYOUT_REPO = 'testing';
const REMOTE_TRACK_LAYOUT_DIRECTORY = 'layouts';
const TRACK_LAYOUT_FILENAME = 'intro-track-layout.yaml';

const LOCAL_DOCS_PATH = '../docs'; // path to docusaurus docs directory (likely '../docs')
const SCRATCH_DIRECTORY_PATH = './tmp'; // any directory that can be safely deleted

// ************************************************************

import path from "path";
import { confirmAction, clearDirectories, readYamlFile } from "./utils.js";
import { fetchSection } from "./fetchSection.js";
import { fetchFile } from "./fetchGithubContent.js";
import { generateSiteSidebar } from "./generateSidebar.js";

async function fetchTrack() {
  const trackLayoutPath = await fetchLayoutFile(TRACK_LAYOUT_FILENAME);
  const { sections } = await readYamlFile(trackLayoutPath);

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

  generateSiteSidebar({ sectionDirectories });

  // download a test homepage, for testing purposes only
  fetchFile({ repo: 'testing', filename: 'welcome.md', outDir: LOCAL_DOCS_PATH });
}

async function fetchLayoutFile(filename) {
  await fetchFile({
    repo: REMOTE_TRACK_LAYOUT_REPO,
    directory: REMOTE_TRACK_LAYOUT_DIRECTORY,
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
    fetchTrack();
  } else {
    console.log('Canceled!');
  }
}

if (process.cwd().split('/').pop() === 'scripts') {
  confirmFetch();
} else {
  console.log('Please run from the scripts directory');
}
