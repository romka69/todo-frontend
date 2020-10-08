<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut absolute-top"
  >
    <q-banner class="bg-grey-4 q-pa-lg">
        <template v-slot:avatar>
            <q-icon
              :name="icon"
              color="primary"
              size="md"
            />
        </template>
        <slot />
    </q-banner>
  </transition>
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
