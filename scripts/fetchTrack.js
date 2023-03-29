// script to go through YAML *track* layout file and call fetchLessons for each section

// update usage instructions!
// also refactor to extract duplicative fetchGithubFile calls
// set LOCAL_DOCS_PATH to the path of the docs output directory
// set INPUT_LAYOUTS_PATH to the path of the directory containing the section layout files
// set TRACK_LAYOUT_PATH to the path of the track layout file

const LOCAL_DOCS_PATH = '../docs';
const LOCAL_LAYOUTS_PATH = './layouts';
const REMOTE_TRACK_LAYOUT_REPO = 'testing';
const REMOTE_TRACK_LAYOUT_DIRECTORY = 'layouts';
const TRACK_LAYOUT_FILENAME = 'intro-track-layout.yaml';

import path from "path";
import inquirer from 'inquirer';
import { eraseDirectory, createDirectory, readYamlFile } from "./utils.js";
import { fetchSection } from "./fetchSection.js";
import { fetchGithubFile } from "./fetchGithubContent.js";

async function fetchTrack() {
  await fetchGithubFile({
    repo: REMOTE_TRACK_LAYOUT_REPO,
    directory: REMOTE_TRACK_LAYOUT_DIRECTORY,
    filename: TRACK_LAYOUT_FILENAME,
    outDir: LOCAL_LAYOUTS_PATH
  });
  const { sections } = await readYamlFile(path.join(LOCAL_LAYOUTS_PATH, TRACK_LAYOUT_FILENAME));
  for (const layoutFile of sections) {
    await fetchGithubFile({
      repo: REMOTE_TRACK_LAYOUT_REPO,
      directory: REMOTE_TRACK_LAYOUT_DIRECTORY,
      filename: layoutFile,
      outDir: LOCAL_LAYOUTS_PATH
    });
    fetchSection({  
      sectionLayoutFilePath: path.join(LOCAL_LAYOUTS_PATH, layoutFile),
      docsPath: LOCAL_DOCS_PATH
    });
  }
}

function confirmFetch() {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmation',
      message: `Delete the ${LOCAL_DOCS_PATH} and ${LOCAL_LAYOUTS_PATH} directories and refetch all content from GitHub?`,
      default: false,
    }
  ])
  .then(answers => {
    if (answers.confirmation) {
      eraseDirectory(LOCAL_DOCS_PATH);
      eraseDirectory(LOCAL_LAYOUTS_PATH);
      createDirectory(LOCAL_DOCS_PATH);
      createDirectory(LOCAL_LAYOUTS_PATH);
      fetchTrack();
    } else {
      console.log('Canceled!');
    }
  })  
}

confirmFetch();
