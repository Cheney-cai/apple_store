import myRequest from '..'

export function getHomeRecommendListData() {
  return myRequest.get({
    url: '/topgrossingapplications/limit=10/json',
  })
}

export function getHomeAppListData() {
  return myRequest.get({
    url: '/topfreeapplications/limit=10/json',
  })
}
