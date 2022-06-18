import { useEffect } from 'react'
import PropTypes from 'prop-types'

export const useAsync = (
  asyncFn,
  successFunction,
  returnFunction,
  dependencies
) => {
  useEffect(() => {
    let isActive = true
    asyncFn().then((result) => {
      if (isActive) successFunction(result.data)
    })
    return () => {
      returnFunction && returnFunction()
      isActive = false
    }
  }, dependencies)
}

useAsync.propTypes = {
  asyncFn: PropTypes.func.isRequired,
  successFunction: PropTypes.func.isRequired,
  returnFunction: PropTypes.func,
  dependencies: PropTypes.array,
}
