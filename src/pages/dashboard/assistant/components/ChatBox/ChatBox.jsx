import React, { useEffect, useRef } from 'react'
import { withWebChat } from '@ibm-watson/assistant-web-chat-react'
import styles from '../../Assistant.module.css'

const ChatBox = ({ location, createWebChatInstance, chatConfig }) => {
  // const [instanceBot, setInstanceBot] = useState(null)
  const chatRef = useRef(null)

  useEffect(() => {
    function onWebChatLoad(instance) {
      // setInstanceBot(instance)
      instance.updateCSSVariables({
        $focus: '#009877',
        '$interactive-01': '#009877',
        '$interactive-02': '#009877',
      })
      instance
        .render()
        .then(function () {
          console.log('It worked!')
        })
        .catch(function (e) {
          console.error(e)
        })

      instance.updateHomeScreenConfig({
        is_on: true,
        greeting: 'Welcome! Please ask us a question about the home screen.',
        starters: {
          is_on: true,
          buttons: [
            {
              label: 'Turn home screen off',
            },
            {
              label: 'Add conversation starters',
            },
            {
              label: 'Add custom content',
            },
          ],
        },
      })
    }
    const watsonAssistantChatOptions = {
      integrationID: import.meta.env.VITE_INTEGRATION_ID,
      region: import.meta.env.VITE_REGION,
      serviceInstanceID: import.meta.env.VITE_SERVICE_INSTANCE_ID,
      onLoad: onWebChatLoad,

      // integrationID: chatConfig.integrationId,
      // region: import.meta.env.VITE_REGION,
      // serviceInstanceID: chatConfig.serviceInstanceId,
      // onLoad: onWebChatLoad,
      debug: true,
      element: chatRef.current,
      hideCloseButton: true,
      showLauncher: false,
      openChatByDefault: true,
    }
    console.log('ChatConfig', chatConfig)
    console.log('watsonAssistantChatOptions', watsonAssistantChatOptions)
    createWebChatInstance(watsonAssistantChatOptions)
      .then((instance) => {
        console.log('instance', instance)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className={styles.chatBox}>
      <div
        ref={chatRef}
        style={{
          height: '600px',
          width: '100%',
          boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.07)',
          borderRadius: '20px',
        }}
      >
        {location}
      </div>
    </div>
  )
}
export default withWebChat({ debug: true })(ChatBox) // REVIEW
