<template>
  <q-item
    v-ripple
    :class="task.completed ? 'bg-green-1' : 'bg-blue-grey-1'"
    clickable
  >
    <q-item-section
      @click="updateTask"
      side
      top
    >
      <q-checkbox
        :value="task.completed"
        class="no-pointer-events"
      />
    </q-item-section>

    <q-item-section @click="updateTask">
      <q-item-label class="task-title">
        {{ task.title }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon
            name="eva-calendar-outline"
            size="sm"
            class="q-mr-xs"
          />
        </div>
        <div class="column justify-center">
          <q-item-label
            caption
          >
            {{ task.created_at | goodDate }}
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click="deleteTask"
          flat
          color="red-5"
          icon="eva-trash-2-outline"
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { backend } from "src/api"
import { date } from "quasar";

export default {
  name: "Task",

  props: {
    task: {
      item: Object,
      default: () => ({})
    },
  },

  methods: {
    updateTask() {
      backend.task.update({ 
        id: this.task.id,
        completed: !this.task.completed
      })
        .then(response => {
          this.task.completed = !this.task.completed
          this.$emit("update-task", this.task);
        })
        .catch(error => console.log(error))
    },

    deleteTask() {
      backend.task.delete(this.task.id)
        .then(response => {
          this.$emit("delete-task", this.task);
        })
        .catch(error => console.log(error))
    }
  },

  filters: {
    goodDate(value) {
      return date.formatDate(Date.parse(value), "D MMM YY");
    },
  },
};
</script>

<style lang="scss">
  .task-title {
    word-break: break-word;
  }
</style>