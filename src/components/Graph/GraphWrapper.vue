
<script setup>

import columnChart from "./GraphCompoent/columnChart.vue";
import DonutChart from "./GraphCompoent/donutChart.vue";


</script>
<template>
    <div class="graph-wrapper">

        <article>
            <DonutChart/>

        </article>

        <!-- <columnChart/> -->

    </div>
</template>


<style lang="scss" scoped>
.graph-wrapper {
    padding:25px;
    margin-top:30px;
    background: #fff;
    border-radius: 9px;
    box-shadow: 0px 1px 5px -3px rgb(0 0 0 / 49%);
}
</style>