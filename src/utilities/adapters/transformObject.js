export const transformObject = (data) => {
  const dataTransform = []
  Object.keys(data).map((key) => {
    Object.keys(data[key]).map((item) => {
      dataTransform.push({
        id: `${key + 1}-${item + 1}`,
        intent: item,
        answer: data[key][item],
        enable: true,
      })
    })
  })
  return dataTransform
}
