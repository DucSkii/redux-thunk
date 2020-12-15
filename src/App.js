import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/ducks/usersReducer'

const App = () => {

  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  console.log('users', users)

  if (!users.isLoaded) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    users.error ?
      <div>ERROR: {users.error}</div>
      :
      <div className="App">
        <ul>
          {users.users.map((user, index) => {
            return (
              <li key={index}>
                Name: {user.username} | Email: {user.email}
              </li>
            )
          })}
        </ul>
      </div>
  )
}

export default App;