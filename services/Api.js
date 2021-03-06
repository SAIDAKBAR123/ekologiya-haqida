
function execute (promise) {
  return new Promise((resolve, reject) => {
    promise.then(res => resolve(res.data))
      .catch(err => {
        if (err) {
          if (err.response) {
            // eslint-disable-next-line eqeqeq
            if (err.response.status == 404) {
            }
            reject((err.response))
          }
          reject(new Error(err))
        }
        reject(new Error('Check your request, and server'))
      })
  })
}

() => {
  return axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
      Authorization: ' '
    }
  })
}
