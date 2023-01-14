

<script setup>
import { Doughnut, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement,ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { reactive, ref } from 'vue'
import { onMounted, watchEffect } from '@vue/runtime-core';
import {request} from '../../../Api/api'
import {stringToArrayConverter, stringToArrayConverterForSingleString} from '../../../Utilities/util.js'

ChartJS.register(Title, Tooltip,ArcElement, Legend, BarElement, CategoryScale, LinearScale)

const loaded = ref(false)

let chartData = reactive({
    labels: [],
    datasets:  [{
      backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
      data: []
    }]
})

const chartOptions = reactive({
    responsive: true
})

watchEffect(()=>{
    console.log(chartData.labels)
})


onMounted( async () => {
    const recievedData = await  request.get('http://185.106.240.170:4050/sbcTest/test/graphAPITest.jsp?dataType=outgoing&getServiceData=true')
    if(recievedData){

        chartData.labels = stringToArrayConverter(recievedData.serviceName)
        chartData.datasets[0].data = stringToArrayConverterForSingleString(recievedData.usage)

        loaded.value = true
    }

})

</script>
<template>
    <div class="chart__wrapper">
        <h2>Class Of Service Wise Usage</h2>
        <div class="chart__box">
            <Doughnut  id="chart-id" :data="chartData" :options="chartOptions" v-if="loaded"/>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.chart__wrapper{
    width: 100%;
    h2{
        font-size: 22px;
    }
    .chart__box{
        max-width: 400px;
        margin: 0 auto
    }

}
</style>