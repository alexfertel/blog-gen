import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getNextPostSlug(id) {
  const nextSlug = `seminar-${id + 1}`;
  if (fs.existsSync(join(postsDirectory, `${nextSlug}.md`))) return nextSlug;
  return null;
}

export function getPreviousPostSlug(id) {
  const prevSlug = `seminar-${id - 1}`;
  if (fs.existsSync(join(postsDirectory, `${prevSlug}.md`))) return prevSlug;
  return null;
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const fullPath = join(postsDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug,
    content,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();

  const posts = slugs
    .map(slug => getPostBySlug(slug))
    // sort posts by id in ascending order
    .sort((post1, post2) => (post1.id < post2.id ? '-1' : '1'));

  return posts;
}
