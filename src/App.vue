<script setup>
import addInterconnection from './components/addInterconnection.vue';
import GraphWrapper from './components/Graph/GraphWrapper.vue';
</script>

<template>
  <main>
    <div class="page--componets__wrapper">
      <addInterconnection/>
       <GraphWrapper/>
    </div>
  </main>
</template>

<style scoped lang="scss">
main{
  width:100%;
  height: 100vh;
  background:#f5f5f5;
  .page--componets__wrapper{
    max-width: 1200px;
    background: #f5f5f5;
    height: auto;
    padding:17px;
    margin: 0 auto;
    margin-top:100px;
  }

}
</style>
