<template>
  <div>
    <Header
      bgColor="bg-green-4"
    >
      Completed
    </Header>

    <q-list separator bordered>
      <Task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
      />
    </q-list>
  </div>
</template>

<script>
import Header from "components/Tasks/Header"
import Task from "components/Tasks/Task"

export default {
  name: "TasksCompleted",

  props: {
    tasks: {
      type: Array,
      default: []
    },
  },

  components: {
    Task,
    Header,
  }
};
</script>
