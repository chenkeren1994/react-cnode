/**
 * Created by seal on 12/10/17.
 */
import AppState from './app-state'
import TopicStore from './topic-store'

export { AppState, TopicStore }

export default {
  AppState,
  TopicStore,
}
export const createStoreMap = () => {
  return {
    appState: new AppState(),
    topicStore: new TopicStore()
  }
}
