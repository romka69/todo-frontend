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
  </q-page>
</template>

<script>
import NoTasks from "components/Tasks/NoTasks"
import TasksTodo from "components/Tasks/TasksTodo"

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
  
  components: {
    NoTasks,
    TasksTodo,
  }
}
</script>
