import { useState, useEffect } from 'react';
import _ from 'lodash';

const lcs = (string, pattern) => {
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

const cascadeSort = (post1, post2) => {
  if (post1.titleMatchedLen !== post2.titleMatchedLen) return Math.sign(post2.titleMatchedLen - post1.titleMatchedLen);
  if (post1.descMatchedLen !== post2.descMatchedLen) return Math.sign(post2.descMatchedLen - post1.descMatchedLen);
  if (post1.contentMatchedLen !== post2.contentMatchedLen)
    return Math.sign(post2.contentMatchedLen - post1.contentMatchedLen);
  return 0;
};

const useFilter = posts => {
  const [filter, setFilter] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const debouncedFilter = _.debounce(
      () =>
        setFilteredPosts(
          posts
            .map(post => ({
              ...post,
              titleMatchedLen: lcs(post.title, filter),
              descMatchedLen: lcs(post.description, filter),
              contentMatchedLen: lcs(post.content, filter),
            }))
            .filter(
              ({ titleMatchedLen, descMatchedLen, contentMatchedLen }) =>
                Math.max(titleMatchedLen, descMatchedLen, contentMatchedLen) >= Math.round(filter.length / 2)
            )
            .sort(cascadeSort)
        ),
      250
    );

    if (filter) debouncedFilter();
    return () => debouncedFilter.cancel?.();
  }, [posts, filter]);

  return [filteredPosts, setFilter];
};

export default useFilter;
