// creates _category_.json file in the section's output directory

import { writeFileSync } from 'fs';
import path from 'path';

export function generateCategoryFile({ section, order, outDir }) {
  const categoryJsonPath = path.join(outDir, '_category_.json');
  const categoryJson = {
    position: order,
    label: section
  };

  writeFileSync(categoryJsonPath, JSON.stringify(categoryJson, null, 2));
};
