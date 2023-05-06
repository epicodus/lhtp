import path from "path";
import { readYamlFile } from "./utils.mjs";
import "dotenv/config";

export async function loadConfig() {
  const root_path = process.cwd();
  const config = await readYamlFile(path.join(root_path, 'config.yaml'));

  const fetch_images = config.fetch_images;
  const local_docs_path = path.join(root_path, config.docusaurus_docs_dir);
  const local_static_assets_path = path.join(root_path, config.docusaurus_static_assets_dir);
  const scratch_directory_path = path.join(root_path, config.scratch_dir);
  const repo_images_path = config.images_input_dir;
  const local_images_path = path.join(local_static_assets_path, config.images_output_dir);
  const curriculum_layout_file = config.curriculum_layout;

  const org = process.env.ORG;

  return {
    fetch_images,
    root_path,
    org,
    local_docs_path,
    local_static_assets_path,
    scratch_directory_path,
    repo_images_path,
    local_images_path,
    curriculum_layout_file
  };
}

const config = await loadConfig();
export default config;
