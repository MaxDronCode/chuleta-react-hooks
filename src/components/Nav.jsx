import { Link } from 'react-router-dom'

const border = '1px solid black'

export default function Nav () {
  return (
    <>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button>
          <Link to='/'>Home</Link>
        </button>
        <div style={{ border, borderRadius: '8px', padding: '12px' }}>
          <h2>State Hooks</h2>
          <button>
            <Link to='/UseState'>UseState</Link>
          </button>
          <button>
            <Link to='/UseReducer'>UseReducer</Link>
          </button>
        </div>
        <div style={{ border, borderRadius: '8px', padding: '12px' }}>
          <h2>Effect Hooks</h2>
          <button>
            <Link to='/UseEffect'>UseEffect</Link>
          </button>
        </div>
        <div style={{ border, borderRadius: '8px', padding: '12px' }}>
          <h2>Context Hooks</h2>
          <button>
            <Link to='/UseContext'>UseContext</Link>
          </button>
        </div>
        <div style={{ border, borderRadius: '8px', padding: '12px' }}>
          <h2>Ref Hooks</h2>
          <button>
            <Link to='/UseRef'>UseRef</Link>
          </button>
        </div>
        <div style={{ border, borderRadius: '8px', padding: '12px' }}>
          <h2>Performance Hooks</h2>
          <button>
            <Link to='/UseMemo'>UseMemo</Link>
          </button>
          <button>
            <Link to='/UseCallback'>UseCallback</Link>
          </button>
          <button>
            <Link to='/UseTransition'>UseTransition</Link>
          </button>
          <button>
            <Link to='/UseDeferredValue'>UseDeferredValue</Link>
          </button>
        </div>
        <div style={{ border, borderRadius: '8px', padding: '12px' }}>
          <h2>Other Hooks</h2>
          <button>
            <Link to='/UseId'>UseId</Link>
          </button>
          <button>
            <Link to='/CustomHook'>CustomHook</Link>
          </button>
        </div>
      </div>
    </>
  )
}
