<template>

  <q-input
    outlined
    v-model.trim="taskToSubmit.title"
    :hint="hint"
    @keyup.esc="taskToSubmit.title = ''"
    label="Add New Task"
  >
    <template v-slot:prepend>
      <q-icon name="eva-plus-outline" />
    </template>

    <template v-slot:append>
      <q-icon
        v-if="taskToSubmit.title !== ''"
        name="eva-close-square-outline"
        @click="taskToSubmit.title = ''"
        class="cursor-pointer q-mr-sm"
      />
      <q-btn
        @click="submitTask"
        round
        flat
        icon="eva-paper-plane-outline"
      />
    </template>
  </q-input>
</template>

<script>
import { backend } from "src/api"

export default {
  name: "AddTask",

  data() {
    return {
      hint: "",
      taskToSubmit: {
        title: "",
        completed: false,
      }
    }
  },

  methods: {
    submitTask() {
      if (this.taskToSubmit.title == "") {
        this.hint = "Required";
      } else {
        backend.task.create(this.taskToSubmit)
          .then(response => {
            this.$emit('push-task', response.data);
            this.taskToSubmit.title = "";
            this.hint = "";
          })
          .catch(error => { console.log(error) })
      }
    }
  }
};
</script>
