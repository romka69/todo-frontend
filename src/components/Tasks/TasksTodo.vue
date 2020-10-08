<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut absolute-top"
  >
    <div>
      <Header bgColor="bg-blue-grey-5">
        Todo
      </Header>

      <q-list
        separator
        bordered
      >
        <Task
          v-for="(task) in tasks"
          :key="task.id"
          :task="task"
          @update-task="updateTask"
          @delete-task="deleteTask"
        />
      </q-list>
    </div>
  </transition>
</template>

<script>
import Header from "components/Tasks/Header"
import Task from "components/Tasks/Task"

export default {
  name: "TasksTodo",

  props: {
    tasks: {
      type: Array,
      default: []
    },
  },

  methods: {
    updateTask(task) {
      this.$emit("update-task", task);
    },
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

