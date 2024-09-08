import { createBrowserRouter } from 'react-router-dom'
import UseEffect from '../components/UseEffect.jsx'
import UseState from '../components/UseState.jsx'
import UseContext from '../components/UseContext.jsx'
import UseRef from '../components/UseRef.jsx'
import UseReducer from '../components/UseReducer.jsx'
import UseMemo from '../components/UseMemo.jsx'
import UseCallback from '../components/UseCallback.jsx'
import UseTransition from '../components/UseTransition.jsx'
import UseDeferredValue from '../components/UseDeferredValue.jsx'
import UseId from '../components/UseId.jsx'
import CustomHook from '../components/CustomHook.jsx'
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
