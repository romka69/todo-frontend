<template>
  <q-page class="q-pa-lg">
    <AddTask
      @push-task="pushTask"
      class="row q-mb-lg"
    />

    <NoTasks
      v-if="!tasksTodo.length"
      icon="eva-checkmark-outline"
    >
      No tasks for to do!
    </NoTasks>

    <TasksTodo
      v-if="tasksTodo.length"
      :tasks = "tasksTodo"
    />

    <TasksCompleted
      v-if="tasksCompleted.length"
      :tasks = "tasksCompleted"
      class="q-mt-xl"
    />
  </q-page>
</template>

<script>
import { backend } from "src/api"
import AddTask from "components/Tasks/AddTask"
import NoTasks from "components/Tasks/NoTasks"
import TasksTodo from "components/Tasks/TasksTodo"
import TasksCompleted from "components/Tasks/TasksCompleted"

export default {
  name: 'PageIndex',

  data() {
    return {
      tasksTodo: [],
      tasksCompleted: [],
    }
  },

  created() {
    this.fetchTasks();
  },

  methods: {
    fetchTasks() {
      backend.task.index()
        .then(({ data }) => this.sortingTasks(data))
        .catch(error => console.log(error))
    },

    sortingTasks(tasks) {
      const tasksNotCompleted = [],
            tasksCompleted = [];

      tasks.forEach(task => {
        if (task.completed) {
          tasksCompleted.push(task);
        } else {
          tasksNotCompleted.push(task);
        }
      });

      this.tasksTodo = tasksNotCompleted;
      this.tasksCompleted = tasksCompleted;
    },

    pushTask(task) {
      this.tasksTodo.push(task)
    },
  },
  
  components: {
    NoTasks,
    TasksTodo,
    TasksCompleted,
    AddTask,
  }
}
</script>
