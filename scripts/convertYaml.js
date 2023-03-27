// this doesn't work yet
import jsYaml from 'js-yaml';
import fs from 'fs';

const yamlString = fs.readFileSync('layout-git.yaml', 'utf8');
const data = jsYaml.load(yamlString);

const convertData = (data) => {
  const result = {
    lessons: [],
  };

  data.forEach((dayData) => {
    dayData.lessons.forEach((lessonData) => {
      const lesson = {
        title: lessonData[':title'],
        filename: lessonData[':filename'],
        day: dayData[':day'],
        type: 'lesson',
      };

      if (lessonData[':repo']) {
        lesson.repo = lessonData[':repo'];
      }
      
      if (lessonData[':directory']) {
        lesson.directory = lessonData[':directory'];
      }

      result.lessons.push(lesson);
    });
  });

  return result;
};

const convertedData = convertData(data);
console.log(convertedData);
