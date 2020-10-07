import axios from 'axios'

axios.defaults.headers.common['Accept'] = 'application/json';

const adapter = axios.create({
  baseURL: 'http://localhost:3000'
});

const backend = {
  task: {
    index: () => adapter.get('/tasks')
  },
};

export { backend }
