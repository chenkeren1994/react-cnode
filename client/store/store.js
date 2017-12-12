/**
 * Created by seal on 12/10/17.
 */
import AppStateClass from './app-state'

export const AppState = AppStateClass
export default {
  AppState,
}
export const createStoreMap = () => {
  return {
    appState: new AppState(),
  }
}
