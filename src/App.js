import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "./redux/store/user/user-action"
import { useSelector } from "react-redux"
import { userSelect } from "./redux/store/user/user-selector"


const App = ()=> {
  const dispatch = useDispatch()
  useEffect(()=> {
    const getData = async() => {
      const request = await fetch('https://jsonplaceholder.typicode.com/users')
      const response = await request.json()
       dispatch(setUser(response))
    }
    getData()
  },[])
  const data = useSelector(userSelect)
  console.log(data)
  return (
    <div>
    {data.map((data)=> {
      return <h2>{data.id} {data.name} | {data.username} </h2>
    })}

    </div>
  )
}

export default App