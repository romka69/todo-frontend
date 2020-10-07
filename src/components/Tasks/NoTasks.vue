<template>
    <q-banner class="bg-grey-3">
        <template v-slot:avatar>
            <q-icon :name="icon" color="primary" size="md" />
        </template>
        <slot />
    </q-banner>
</template>

<script>
export default {
  name: "NoTasks",

  props: {
    icon: {
      type: String,
      default: "eva-checkmark-outline"
    }
  }
};
</script>
