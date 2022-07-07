import request from '../request.js';

export function getRankList(rankType, current_page) {
  return request('/web/live/rank/list', {
    params: {
      type: rankType,
      current_page,
      per_page: 100,
    },
  })
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
