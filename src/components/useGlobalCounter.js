import createGlobalState from 'react-create-global-state'

// create the global for your hook
const initialState = 1

const [useGlobalCounter, Provider] = createGlobalState(initialState)

// export the provider to link in the application
export const GlobalCounterProvider = Provider

// export the hook
export default useGlobalCounter