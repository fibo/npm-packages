import initialState from '../store/initialState'

export default function packages (state = initialState.packages, action) {
  console.log(state)
  switch (action.type) {
    default: return state
  }
}
