import { useState } from 'react';
import _ from 'lodash';
import ascend from 'ramda/src/ascend';
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

const props = ['title', 'description', 'content'].map(property => `${property}MatchedLength`);
const sorters = props.map(property => compose(descend, prop)(property));
const waterfallSorter = sortWith(sorters);

const useFilter = posts => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const filter = _.debounce(keyWords => {
    const lcs = lcsCreator(keyWords);
    const pipeline = compose(setFilteredPosts, waterfallSorter);
    
    pipeline(
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
  }, 250);

  return [filteredPosts, filter];
};

export default useFilter;
