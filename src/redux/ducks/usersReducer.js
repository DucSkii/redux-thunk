import axios from 'axios'

const fetchUserRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  }
}

const fetchedUsers = users => {
  return {
    type: "FETCHED_USERS",
    payload: users,
  }
}

const handleError = error => {
  return {
    type: "HANDLE_ERROR",
    payload: error,
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const userData = res.data
        dispatch(fetchedUsers(userData))
      })
      .catch(err => {
        const errMessage = err.message
        dispatch(handleError(errMessage))
      })
  }
}

const initialState = {
  users: [],
  isLoaded: false,
  error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_ERROR":
      return {
        ...state,
        isLoaded: false,
        error: action.payload
      }
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        isLoaded: false,
      }
    case "FETCHED_USERS":
      return {
        ...state,
        users: action.payload,
        isLoaded: true,
      }
    default:
      return state
  }
}