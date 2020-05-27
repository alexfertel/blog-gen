const fs = require('fs');
const path = require('path');

const postFolder = '../_posts';

// Frontmatter Creator
fs.readdir(postFolder, (err, files) => {
  files.forEach(f => {
    if (f === path.basename(__filename)) return;

    fs.readFile(path.join(postFolder, f), 'utf-8', (_, data) => {
      // New frontmatter data
      const frontmatter = {
        title: 'Title goes here',
        id: 'Id goes here',
        url: path.join('./_posts', f),
      };

      // Trim current frontmatter
      let newData = `\n\n${data}`;
      const fmEnd = data.lastIndexOf('---');
      if (fmEnd !== -1) {
        newData = data.slice(fmEnd + 5);
      }

      const newFileContent = `---\n${Object.entries(frontmatter)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n')}\n---${newData}`;
      fs.writeFile(path.join(postFolder, f), newFileContent, () => null);
    });
  });
});
