<template>
  <AddUsers/>
  <NewUsers/>

</template>

<script>
import AddUsers from './components/AddUsers.vue';
import NewUsers from './components/NewUsers.vue';

export default {
  name: 'App',
  components: {
    AddUsers,
    NewUsers
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
