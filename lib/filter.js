import descend from 'ramda/src/descend';
import prop from 'ramda/src/prop';
import compose from 'ramda/src/compose';
import sortWith from 'ramda/src/sortWith';

const lcsCreator = pattern => string => {
  const s = string.toLowerCase();
  const p = pattern.toLowerCase();

  const m = s.length;
  const n = p.length;

  const dp = [];
  let result = 0;
  for (let i = 0; i < m + 1; i++) dp.push(Array(n + 1));

  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        result = Math.max(result, dp[i][j]);
      } else dp[i][j] = 0;
    }
  }

  return result;
};

const postProps = ['title', 'description', 'content'].map(property => `${property}MatchedLength`);
const postSorters = postProps.map(property => compose(descend, prop)(property));
const postWaterfallSorter = sortWith(postSorters);

export const filterPosts = (posts, keyWords) => {
  const lcs = lcsCreator(keyWords);

  return postWaterfallSorter(
    posts
      .map(post => ({
        ...post,
        titleMatchedLength: lcs(post.title),
        descriptionMatchedLength: lcs(post.description),
        contentMatchedLength: lcs(post.content),
      }))
      .filter(
        ({ titleMatchedLength, descriptionMatchedLength, contentMatchedLength }) =>
          Math.max(titleMatchedLength, descriptionMatchedLength, contentMatchedLength) >=
          Math.round(keyWords.length / 2)
      )
  );
};

const topicProps = ['name', 'description', 'author'].map(property => `${property}MatchedLength`);
const topicSorters = topicProps.map(property => compose(descend, prop)(property));
const topicWaterfallSorter = sortWith(topicSorters);

export const filterTopics = (topics, keyWords) => {
  const lcs = lcsCreator(keyWords);

  return topicWaterfallSorter(
    topics
      .map(topic => ({
        ...topic,
        nameMatchedLength: lcs(topic.name),
        descriptionMatchedLength: lcs(topic.description),
        authorMatchedLength: lcs(topic.author),
      }))
      .filter(
        ({ nameMatchedLength, descriptionMatchedLength, authorMatchedLength }) =>
          Math.max(nameMatchedLength, descriptionMatchedLength, authorMatchedLength) >= Math.round(keyWords.length / 2)
      )
  );
};
