import axios from 'axios'

import { apiData, API } from '../services/api'

jest.mock('axios')

describe('apiData', () => {
  it('apidata successfully data from an API', async () => {
    const data = {
      uid: 'ytFUp1wfLpMukMJAw4giROyeFxD2',
      name: 'luichix rex',
      email: 'luichix@rex.com',
      phone: '+505 84584479',
      industry: 'Industry 1',
      employee: '50',
      id: 1,
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(apiData('ytFUp1wfLpMukMJAw4giROyeFxD2')).resolves.toEqual(data)
    expect(axios.get).toHaveBeenCalledWith(
      `${API}/users?uid=ytFUp1wfLpMukMJAw4giROyeFxD2`
    )
  })
  it('apidata erroneously data from an API', async () => {
    const errorMessage = 'Network Error'

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    )
    await expect(apiData('ytFUp1wfLpMukMJAw4giROyeFxD2')).rejects.toThrow(
      errorMessage
    )
  })
})
