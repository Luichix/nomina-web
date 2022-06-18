import React from 'react'
import PropTypes from 'prop-types'

/**
 * Your custom response component can also make use of the message object if you have set "user_defined" variables.
 */
function ResponseComponent() {
  return <span>Hola</span>
}

ResponseComponent.propTypes = {
  message: PropTypes.object,
}

export default ResponseComponent
