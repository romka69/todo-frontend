<template>
  <q-item
    v-ripple
    :class="task.completed ? 'bg-green-1' : 'bg-blue-grey-1'"
    clickable
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label>
        {{ task.title }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="eva-calendar-outline" size="xs" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>
            {{ task.created_at | goodDate }}
          </q-item-label>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { date } from "quasar";

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
    },
    created_at: {
      item: String,
      default: ""
    },
  },

  filters: {
    goodDate(value) {
      return date.formatDate(Date.parse(value), "D MMM YY");
    },
  },
};
</script>
