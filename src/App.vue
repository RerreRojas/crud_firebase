<template>
  <AddUsers/>
  <ListUsers/>

</template>

<script>
import AddUsers from './components/AddUsers.vue';
import ListUsers from './components/ListUsers.vue';

export default {
  name: 'App',
  components: {
    AddUsers,
    ListUsers,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
