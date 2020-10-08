import axios from 'axios'

axios.defaults.headers.common['Accept'] = 'application/json';

const adapter = axios.create({
  baseURL: 'http://localhost:3000'
});

const backend = {
  task: {
    index: () => adapter.get('/tasks'),
    create: (params) => adapter.post('/tasks', params),
    update: (params) => adapter.patch(`/tasks/${params.id}`, params),
    delete: (id) => adapter.delete(`/tasks/${id}`),
  },
};

export { backend }
