
import { useDispatch, useSelector } from "react-redux"
import { counterSelector } from "./redux/store/counter-selector"
import { setCounter } from "./redux/store/counter.action"
const App = ()=> {
  const dispatch = useDispatch()
  const counter = useSelector()
  return (
    <div>
      
    </div>
  )
}

export default App