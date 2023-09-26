// script to fetch entire curriculum (from multiple GitHub repos)

import path from "path";
import { clearDirectories, readYamlFile } from "./utils.mjs";
import { fetchCourse } from "./fetchCourse.mjs";
import { fetchLayoutFile, fetchStaticPage } from "./fetchGithubContent.mjs";
import { generateTopLevelSidebar } from "./generateSidebar.mjs";
import config from "./config.mjs";

async function fetchCurriculum() {
  const curriculumLayoutPath = await fetchLayoutFile(config.curriculum_layout_file);
  const { course_layouts, site_homepage, courses_homepage, student_handbook } = await readYamlFile(curriculumLayoutPath);

  let docsCoursePaths = [];
  for (const { repo, directory, filename } of course_layouts) {
    docsCoursePaths.push(path.join(config.local_docs_path, filename.replace('.yaml', '')));
    await fetchCourse({
      repo,
      directory,
      filename
    });
  }

  generateTopLevelSidebar({ docsCoursePaths });

  // download site-wide static pages (homepage, courses list, handbook)
  fetchStaticPage(site_homepage);
  fetchStaticPage(courses_homepage);
  fetchStaticPage(student_handbook);
}

clearDirectories([
  config.scratch_directory_path,
  config.local_docs_path,
  config.local_images_path
]);
fetchCurriculum();
