<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import mHeader from './components/mHeader/mHeader'
import Tab from './components/tab/tab'
export default {
  name: 'App',
  components: {
    mHeader,
    Tab
  }
}
</script>

<style>
</style>
