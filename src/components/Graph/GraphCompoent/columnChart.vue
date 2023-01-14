

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { reactive, ref } from 'vue'
import { watchEffect } from '@vue/runtime-core'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const loaded = ref(false)

const chartData = reactive({
    labels: ['India','USA','Canada','Bhutan','Bangladesh'],
    datasets: [{ data: [1200,900,750,600,120] }]
})

const chartOptions = reactive({
    responsive: true
})

watchEffect(()=>{
    console.log(chartData   )
})






</script>
<template>

    <div class="chart__wrapper">
    <h2>Top Country Based On Country</h2>
    <div class="chart__box">
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>