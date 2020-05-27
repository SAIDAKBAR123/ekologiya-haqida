
const lang = localStorage.getItem('lang')
export default {
  getPosts: () => execute(API().get(`posts/public?lang=${lang}`)),
  getSinglePost: id => execute(API().get(`posts/public/${id}?lang=${lang}`)),
  getAnnouncements: () => execute(API().get('announcement')),
  getSingleAnnouncement: id => execute(API().get(`announcement/${id}`))

}
