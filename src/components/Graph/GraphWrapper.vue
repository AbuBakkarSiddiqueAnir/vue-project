
<script setup>

import columnChart from "./GraphCompoent/columnChart.vue";
import DonutChart from "./GraphCompoent/donutChart.vue";
import LineChart from "./GraphCompoent/lineChart.vue";

</script>
<template>
  <div class="graph-wrapper">

    <article>

      <columnChart />

      <LineChart />

      <DonutChart />

    </article>

  </div>

</template>


<style lang="scss" >
.graph-wrapper {
  padding: 25px;
  margin-top: 30px;
  // background: #fff;
  border-radius: 9px;
}

.chart__wrapper {
  width: 100%;
  box-shadow: 0px 1px 5px -3px rgb(0 0 0 / 49%);
  background: white;
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 30px;

  h2 {
    font-size: 22px;
  }

  .chart__box {
    max-width: 500px;
    margin: 0 auto
  }

}
</style>