<template>
  <q-page class="q-pt-lg">
    <div class="absolute full-height full-width column">
      <template v-if="tasksDownloaded">
        <AddTask
          @push-task="pushTask"
          class="row q-mb-sm"
        />

        <q-scroll-area class="q-scroll-area-tasks">
          <div class="relative-position">
            <NoTasks
              v-if="!tasksTodo.length"
              icon="eva-checkmark-outline"
            >
              No tasks for to do!
            </NoTasks>

            <TasksTodo
              v-if="tasksTodo.length"
              :tasks = "tasksTodo"
              @update-task="updateTask"
              @delete-task="deleteTask"
            />

            <TasksCompleted
              v-if="tasksCompleted.length"
              :tasks = "tasksCompleted"
              @update-task="updateTask"
              @delete-task="deleteTask"
              class="q-mb-xl"
            />
          </div>
        </q-scroll-area>
      </template>

      <template v-else>
        <div class="absolute-center">
          <q-spinner-puff color="primary" size="4em" />
        </div>
      </template>
    </div>
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
      tasksDownloaded: false,
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
        .then(({ data }) => {
          this.sortingTasks(data);
          this.tasksDownloaded = true;
        })
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
      this.tasksTodo.push(task);
    },

    updateTask(task) {
      if (task.completed) {
        this.searchAndDelete(this.tasksTodo, task)
        this.tasksCompleted.push(task);
      } else {
        this.searchAndDelete(this.tasksCompleted, task)
        this.tasksTodo.push(task);
      }
    },

    deleteTask(task) {
      const tasks = task.completed ? this.tasksCompleted : this.tasksTodo;
      this.searchAndDelete(tasks, task)
    },

    searchAndDelete(scope, itemToDel) {
      scope.forEach(item => {
        if (item.id == itemToDel.id) {
          this.$delete(scope, scope.indexOf(item));
          return;
        }
      })
    }
  },
  
  components: {
    NoTasks,
    TasksTodo,
    TasksCompleted,
    AddTask,
  }
}
</script>

<style lang="scss">
  .q-scroll-area-tasks {
    display: flex;
    flex-grow: 1;
  }
</style>
