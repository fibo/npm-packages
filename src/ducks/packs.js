import initialState from '../store/initialState'

const TOGGLE_PACKAGE = 'TOGGLE_PACKAGE'

export default function packages (state = initialState.packs, action) {
  switch (action.type) {
    case TOGGLE_PACKAGE:
      return state.map(({ name, selected }) => {
        if (action.name === name) {
          return { name, selected: !selected }
        } else {
          return { name, selected }
        }
      })

    default: return state
  }
}
