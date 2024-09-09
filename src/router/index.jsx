import { createBrowserRouter } from 'react-router-dom'
import UseEffect from '../components/useEffectPage/UseEffect.jsx'
import UseState from '../components/useStatePage/UseState.jsx'
import UseContext from '../components/useContextPage/UseContext.jsx'
import UseRef from '../components/useRefPage/UseRef.jsx'
import UseReducer from '../components/useReducerPage/UseReducer.jsx'
import UseMemo from '../components/useMemoPage/UseMemo.jsx'
import UseCallback from '../components/useCallbackPage/UseCallback.jsx'
import UseTransition from '../components/useTransitionPage/UseTransition.jsx'
import UseDeferredValue from '../components/useDeferredValuePage/UseDeferredValue.jsx'
import UseId from '../components/useIdPage/UseId.jsx'
import CustomHook from '../components/customHookPage/CustomHook.jsx'
import App from '../App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/UseState',
    element: <UseState />
  },
  {
    path: '/UseReducer',
    element: <UseReducer />
  },
  {
    path: '/UseEffect',
    element: <UseEffect />
  },
  {
    path: '/UseContext',
    element: <UseContext />
  },
  {
    path: '/UseRef',
    element: <UseRef />
  },
  {
    path: '/UseMemo',
    element: <UseMemo />
  },
  {
    path: '/UseCallback',
    element: <UseCallback />
  },
  {
    path: '/UseTransition',
    element: <UseTransition />
  },
  {
    path: '/UseDeferredValue',
    element: <UseDeferredValue />
  },
  {
    path: '/UseId',
    element: <UseId />
  },
  {
    path: '/CustomHook',
    element: <CustomHook />
  }
])

export default router
