<template>
  <q-page class="q-pa-lg">
    <NoTasks
      icon="eva-checkmark-outline"
    >
      No tasks for to do!
    </NoTasks>
  </q-page>
</template>

<script>
import NoTasks from "components/Tasks/NoTasks"

export default {
  name: 'PageIndex',
  
  components: {
    NoTasks
  }
}
</script>
