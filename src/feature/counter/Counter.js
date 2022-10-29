import { useSelector, useDispatch } from "react-redux"
import {increament, decreament} from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
  return (

    <div>
        <p>{count}</p>
     
        <button onClick={()=> dispatch(increament())}>+</button>
        <button onClick={()=> dispatch(decreament())}>-</button>
    </div>
   
  )
}

export default Counter