<template>
  <q-item
    v-ripple
    class="bg-blue-grey-1"
    clickable
  >
    <q-item-section>
      <q-item-label>
        {{ task.title }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "Task",

  props: {
    task: {
      item: Object,
      default: () => ({})
    },
    id: {
      item: String,
      default: ""
    },
    completed: {
      item: Boolean,
      default: false
    }
  },
};
</script>
