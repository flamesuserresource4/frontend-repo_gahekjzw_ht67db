import axios from 'axios'

export const aiInsightService = {
  today: () => axios.get('/api/insights/today'),
  trends: () => axios.get('/api/insights/trends'),
}
