import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import format from 'rehype-format';
import html from 'rehype-stringify';
import math from 'remark-math';
import highlight from '@mapbox/rehype-prism';

export default async function markdownToHtml(markdownText) {
  const result = await unified()
    .use(markdown)
    .use(math)
    .use(remark2rehype)
    .use(format)
    .use(highlight)
    .use(html)
    .process(markdownText);
  return result.toString();
}
