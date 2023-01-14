

<script setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { reactive, ref } from 'vue'
import { onMounted, watchEffect } from '@vue/runtime-core';
import {request} from '../../../Api/api'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const loaded = ref(false)

const chartData = reactive({
    labels: ['India', 'USA', 'Canada', 'Bhutan', 'Bangladesh'],
    datasets: [{ data: [1200, 900, 750, 600, 120] }]
})

const chartOptions = reactive({
    responsive: true
})



onMounted(async () => {
    const recievedData = request.get('http://185.106.240.170:4050/sbcTest/test/graphAPITest.jsp?dataType=outgoing&getServiceData=true')
})

</script>
<template>
    <div>
        <h2>Class Of Service Wise Usage</h2>
        <!-- <Doughnut :data="chartData" :options="chartOptions" /> -->
    </div>
</template>


<style lang="scss" scoped>

</style>