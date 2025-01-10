import { useSelector, useDispatch } from 'react-redux'
import valor from '../../store/features/counter/CounterSlice.js'

const Counter = () => {
  const valor = useSelector((state) => state.counter.value)
  const isLogged = useSelector((state) => state.counter.isLogged)
  const dispatch = useDispatch()

  return (
    <div>
        <span>{valor}</span>
    </div>
  )
}
export default Counter;