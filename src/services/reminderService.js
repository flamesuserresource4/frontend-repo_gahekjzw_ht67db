import axios from 'axios'

export const reminderService = {
  list: () => axios.get('/api/reminders'),
  add: (name, time) => axios.post('/api/reminders', { name, time }),
  remove: (id) => axios.delete(`/api/reminders/${id}`),
  toggle: (id) => axios.post(`/api/reminders/${id}/toggle`),
}
