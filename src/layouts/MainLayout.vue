<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="bg-primary text-center"
      bordered
    >
      <q-toolbar>
        <q-toolbar-title class="text-uppercase">
          Todo app
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <div class="bg-grey-1 q-px-md">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
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
