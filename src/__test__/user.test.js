import axios from 'axios'
import { findUser, createUser, BASE_URL } from '../services/api/assistant.api'

jest.mock('axios')

describe('Realizando pruebas de la API', () => {
  describe('Cuando la llamada a la APi es exitosa', () => {
    it('Deberia de retornar los datos del usuario', async () => {
      // dado
      const uid = 'AbcDefGhiJklMnOpqRstUvwXyz'
      const data = {
        uid: 'AbcDefGhiJklMnOpqRstUvwXyz',
        name: 'Test Post',
        email: 'prueba@godigit.com',
        phoneNumber: '+505 88008800',
        industry: 'Industry 1',
        employeeCount: '1000-2000',
      }
      axios.post.mockResolvedValueOnce(data)

      // cuando
      const result = await findUser(uid)

      // entonces
      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/get-user-info`, uid)
      expect(result).toEqual(data)
    })
    it('Deberia de retornar el id del usuario', async () => {
      // dado
      const response = {
        id: '62577633e9fbb2036c5bb3b9',
      }
      const data = {
        uid: 'AbcDefGhiJklMnOpqRstUvwXyz',
        name: 'Test Post',
        email: 'prueba@godigit.com',
        phoneNumber: '+505 88008800',
        industry: 'Industry 1',
        employeeCount: '1000-2000',
      }
      axios.post.mockResolvedValueOnce(response)

      // cuando
      const result = await createUser(data)

      // entonces
      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/user-info`, data)
      expect(result).toEqual(response)
    })
  })
  describe('Cuando la llamada a la API falla', () => {
    it('Deberia de retornar un listado vacio', async () => {
      // dado
      const uid = 'AbcDefGhiJklMnOpqRstUvwXyz'
      const message = 'Network Error'
      axios.post.mockRejectedValueOnce(new Error(message))

      // cuando
      const result = await findUser(uid)

      // entonces
      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/get-user-info`, uid)
      expect(result).toEqual([])
    })
  })
})
