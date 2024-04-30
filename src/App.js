
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setUser } from "./redux/store/user/user.action"
import { userSelector } from "./redux/store/user/user-selector"

const App = ()=> {
  useEffect(()=> {
    const getDataUser = async()=> {
      const request = await fetch('https://jsonplaceholder.typicode.com/users')
      const response = await request.json()
      dispatch(setUser(response))
    }
    getDataUser()
  }, [])

  const dispatch = useDispatch()
  const data = useSelector(userSelector)
  return (
    <div>
      {data.map((data)=> {
        return <h1>{data.name}</h1>
      })}
    </div>
  )
}

export default App