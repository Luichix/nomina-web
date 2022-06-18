import React, { useEffect } from 'react'
import { withWebChat } from '@ibm-watson/assistant-web-chat-react'

const Chat = ({ location, createWebChatInstance }) => {
  useEffect(() => {
    function onWebChatLoad(instance) {
      instance.updateCSSVariables({
        $focus: '#009877',
        '$interactive-01': '#009877',
        '$interactive-02': '#009877',
        '$hover-primary': '#007e5c',
      })
      instance
        .render()
        .then(function () {
          console.log('It worked!')
        })
        .catch(function (e) {
          console.error(e)
        })
    }
    const watsonAssistantChatOptions = {
      integrationID: import.meta.env.VITE_INTEGRATION_ID,
      region: import.meta.env.VITE_REGION,
      serviceInstanceID: import.meta.env.VITE_SERVICE_INSTANCE_ID,
      onLoad: onWebChatLoad,
      debug: true,
    }

    createWebChatInstance(watsonAssistantChatOptions)
      .then((instance) => {
        console.log('instance', instance)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return <div> {location} </div>
}

export default withWebChat({ debug: true })(Chat)
