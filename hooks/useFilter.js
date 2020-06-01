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
              matchedTLength: lcs(post.title, filter),
              matchedDLength: lcs(post.description, filter),
              matchedCLength: lcs(post.content, filter),
            }))
            .filter(
              post =>
                Math.max(post.matchedTLength, post.matchedDLength, post.matchedCLength) >= Math.round(filter.length / 2)
            )
            .sort((post1, post2) => {
              if (post1.matchedTLength !== post2.matchedTLength)
                return Math.sign(post2.matchedTLength - post1.matchedTLength);
              if (post1.matchedDLength !== post2.matchedDLength)
                return Math.sign(post2.matchedDLength - post1.matchedDLength);
              if (post1.matchedCLength !== post2.matchedCLength)
                return Math.sign(post2.matchedCLength - post1.matchedCLength);
              return 0;
            })
        ),
      250
    );

    if (filter) debouncedFilter();
    return () => debouncedFilter.cancel?.();
  }, [posts, filter]);

  return [filteredPosts, setFilter];
};

export default useFilter;
