import { observable, action } from "mobx"

export class BlogPostStore {
  @observable postsToShow: number = 3

  @action
  add(numberOfPosts: number) {
    this.postsToShow += numberOfPosts
  }

  @action
  subtract(numberOfPosts: number) {
    this.postsToShow -= numberOfPosts
  }
}

const blogPostStore = new BlogPostStore();
export default blogPostStore;