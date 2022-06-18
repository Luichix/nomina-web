export const adapterAssignAssistant = ({
  uid = null,
  assistantName = null,
  busy = null,
  assistantAsigned = null,
  description = null,
  workspaceId = null,
  answers = null,
  language = null,
}) => {
  const variables = {
    assistantAsigned,
    assistantName,
    busy,
    description,
    workspaceId,
    answers,
    language,
    uid,
  }
  console.log('variables', variables)
  const valid = Object.keys(variables).filter((v) => variables[v] !== null)

  if (valid.length !== Object.keys(variables).length) {
    throw new Error('Invalid variables')
  } else {
    return variables
  }
}
