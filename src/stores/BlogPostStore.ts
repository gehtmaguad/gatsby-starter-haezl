import { observable, action } from "mobx"
import CONFIG from "../config"

export class BlogPostStore {
  @observable postsToShow: number = CONFIG.countOfInitiallyShownPosts

  @action
  add() {
    this.postsToShow += CONFIG.countOfPostsDynamicallyAdded
  }
}

const blogPostStore = new BlogPostStore()
export default blogPostStore
