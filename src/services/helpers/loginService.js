import { useQuery } from '@apollo/client'
import { GET_USER_INFO } from '../graphql/query/user'
import { userInterceptor } from '../../utilities/interceptors/userInterceptor'
import { useDispatch } from 'react-redux'
import { modifyUser } from '../../redux/actions/user.actions'

export const loginService = (user) => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GET_USER_INFO, {
    variables: { uid: user },
  })
  const result = userInterceptor(loading, error, data, user)
  if (result.uid !== '') {
    dispatch(modifyUser(result))
  }
  return result
}
