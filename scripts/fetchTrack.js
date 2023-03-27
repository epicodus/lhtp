// script to go through YAML *track* layout file and call fetchLessons for each section
// set OUTPUT_DOCS_PATH to the path of the docs output directory
// set INPUT_LAYOUTS_PATH to the path of the directory containing the section layout files
// set TRACK_LAYOUT_PATH to the path of the track layout file

const OUTPUT_DOCS_PATH = '../docs';
const INPUT_LAYOUTS_PATH = 'layouts';
const TRACK_LAYOUT_PATH = 'layouts/track-layout.yaml';

import path from "path";
import inquirer from 'inquirer';
import { eraseDirectory, createDirectory, readYamlFile } from "./utils.js";
import { fetchSection } from "./fetchSection.js";

async function fetchTrack() {
  const { sections } = await readYamlFile(TRACK_LAYOUT_PATH);
  for (const layoutFile of sections) {
    fetchSection({
      sectionLayoutFilePath: path.join(INPUT_LAYOUTS_PATH, layoutFile),
      docsPath: OUTPUT_DOCS_PATH
    });
  }
}

function confirmFetch() {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmation',
      message: `Delete the ${OUTPUT_DOCS_PATH} directory and refetch all content from GitHub?`,
      default: false,
    }
  ])
  .then(answers => {
    if (answers.confirmation) {
      eraseDirectory(OUTPUT_DOCS_PATH);
      createDirectory(OUTPUT_DOCS_PATH);
      fetchTrack();
    } else {
      console.log('Canceled!');
    }
  })  
}

confirmFetch();
