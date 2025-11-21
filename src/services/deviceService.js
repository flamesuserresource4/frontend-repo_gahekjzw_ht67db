import axios from 'axios'

export const deviceService = {
  connect: (provider) => axios.post('/api/devices/connect', { provider }),
  toggleAuto: (provider, enabled) => axios.post('/api/devices/auto', { provider, enabled }),
  status: () => axios.get('/api/devices/status'),
}
