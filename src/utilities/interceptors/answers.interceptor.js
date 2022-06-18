export const answerInterceptor = (Answers) => {
  let array = []
  Answers.forEach(({ intent, answer, enable, category }) => {
    array.push({ intent, answer, enable, category })
  })
  return array
}
