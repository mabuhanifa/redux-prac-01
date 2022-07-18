import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/actions/counterActions';

function App() {
  const dispatch = useDispatch();
  const count  = useSelector((state)=> state.count)
  return (
    <div >
      <h1>Count: {count} </h1>
      <button onClick={()=>dispatch(increment())}>Increase</button>
      <button onClick={()=>dispatch(decrement())}>Decrease</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
     
    </div>
  );
}

export default App;
