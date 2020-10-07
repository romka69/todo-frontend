<template>
  <div>
    <Header
      bgColor="bg-green-4"
    >
      Completed
    </Header>

    <q-list separator bordered>
      <Task
        v-for="(task) in tasks"
        :key="task.id"
        :task="task"
        @delete-task="deleteTask"
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

  methods: {
    deleteTask(task) {
      this.$emit("delete-task", task);
    }
  },

  components: {
    Task,
    Header,
  }
};
</script>
