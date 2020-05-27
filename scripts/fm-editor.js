const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsFolder = '../_posts';

const checkIfErrored = err => {
  if (err) throw err;
};

const frontMatterFormat = {
  title: 'Title goes here',
  id: 'Id goes here',
  description: 'Description goes here',
  lang: 'Language goes here',
  url: 'URL goes here',
};

fs.readdir(postsFolder, (dirReadingError, files) => {
  checkIfErrored(dirReadingError);

  files.forEach(filename => {
    if (filename !== path.basename(__filename)) {
      fs.readFile(path.join(postsFolder, filename), 'utf-8', (fileReadingError, data) => {
        checkIfErrored(fileReadingError);

        const newFrontMatterData = {
          ...frontMatterFormat,
          id: filename,
        };

        const frontMatter = Object.entries(newFrontMatterData).reduce((acc, [k, v]) => `${acc}${k}: ${v}\n`, '');

        const fileBody = matter(data).content;
        const newFileContent = `---\n${frontMatter}---\n${fileBody}`;

        fs.writeFile(path.join(postsFolder, filename), newFileContent, checkIfErrored);
      });
    }
  });
});
