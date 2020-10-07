<template>
  <div>
    <q-banner
      inline-actions
      class="bg-blue-grey-4 list-header text-center text-white"
    >
      <span class="text-subtitle1">
        Todo
      </span>
    </q-banner>

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
import Task from "components/Tasks/Task"

export default {
  name: "TasksTodo",

  props: {
    tasks: {
      type: Array,
      default: []
    },
  },

  components: {
    Task,
  }
};
</script>

<style lang="scss">
  .list-header {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
</style>
