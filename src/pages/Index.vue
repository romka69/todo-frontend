<template>
  <q-page class="q-pa-lg">
    <NoTasks
      v-if="!tasks.length"
      icon="eva-checkmark-outline"
    >
      No tasks for to do!
    </NoTasks>

    <TasksTodo
      v-if="tasks.length"
      :tasks = "tasks"
    />

    <TasksCompleted
      v-if="tasks.length"
      :tasks = "tasks"
      class="q-mt-xl"
    />
  </q-page>
</template>

<script>
import { backend } from "src/api"
import NoTasks from "components/Tasks/NoTasks"
import TasksTodo from "components/Tasks/TasksTodo"
import TasksCompleted from "components/Tasks/TasksCompleted"

export default {
  name: 'PageIndex',

  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Task 1",
          completed: false
        },
        {
          id: 2,
          title: "Task 2",
          completed: false
        },
      ]
    }
  },

  created() {
    this.fetchTasks();
  },

  methods: {
    fetchTasks() {
      backend.task.index()
        .then(({ data }) => this.tasks = data)
        .catch(error => console.log(error))
    }
  },
  
  components: {
    NoTasks,
    TasksTodo,
    TasksCompleted,
  }
}
</script>
