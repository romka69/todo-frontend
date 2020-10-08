<template>
  <q-banner
    inline-actions
    :class="bgColor"
    class="list-header text-center text-white"
  >
    <span class="text-subtitle1">
      <slot />
    </span>
  </q-banner>
</template>

<script>
export default {
  name: "Header",

  props: {
    bgColor: {
      type: String,
      default: "bg-primary"
    }
  }
};
</script>

<style lang="scss">
  .list-header {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
</style>
