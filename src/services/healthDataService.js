import axios from 'axios'

export const healthDataService = {
  getGlucose: () => axios.get('/api/health/glucose'),
  getBP: () => axios.get('/api/health/bp'),
  addGlucose: (value, time) => axios.post('/api/health/glucose', { value, time }),
  addBP: (systolic, diastolic, time) => axios.post('/api/health/bp', { systolic, diastolic, time }),
}
