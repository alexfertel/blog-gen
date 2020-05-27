const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsFolder = '../_posts';

const removeFrontmatter = fContent => {
  return matter(fContent).content;
};

// Frontmatter Creator
fs.readdir(postsFolder, (err, files) => {
  if (err) throw err;

  files.forEach(fName => {
    if (fName === path.basename(__filename)) return;

    fs.readFile(path.join(postsFolder, fName), 'utf-8', (error, data) => {
      if (error) throw error;

      // New frontmatter data
      const frontmatter = {
        title: 'Title goes here',
        id: fName,
        description: 'Description goes here',
        url: 'URL goes here',
      };

      // Remove current frontmatter from data
      const newData = removeFrontmatter(data);

      const newFileContent = `---\n${Object.entries(frontmatter).reduce(
        (acc, [k, v]) => `${acc}${k}: ${v}\n`,
        ''
      )}---\n${newData}`;
      fs.writeFile(path.join(postsFolder, fName), newFileContent, wErr => {
        if (wErr) throw wErr;
        console.log(`Created frontmatter for ${fName}`);
      });
    });
  });
});
