<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white text-center">
      <q-toolbar>
        <q-toolbar-title class="text-uppercase">
          Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style lang="scss">
  .q-page-container {
    max-width: 740px;
    margin: auto;
  }
</style>
