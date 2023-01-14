

<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip,PointElement,LineElement, Legend, BarElement, ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { reactive, ref } from 'vue'
import { onMounted, watchEffect } from '@vue/runtime-core';
import { request } from '../../../Api/api'
import { stringToArrayConverter, stringToArrayConverterForSingleString } from '../../../Utilities/util.js'
import Loader from '../../Loader/Loader.vue'

ChartJS.register(Title, Tooltip, ArcElement,PointElement,LineElement, Legend, BarElement, CategoryScale, LinearScale)

const loaded = ref(false)

let chartData = reactive({
  labels: [],
  datasets: [
    {
      label:'ASR',
      backgroundColor: '#f87979',
      data: []
    }, {
      label:'NER',
      backgroundColor: '#0f0',
      data: []
    }
  ]
})

const chartOptions = reactive({
  responsive: true
})

onMounted(async () => {
  const receivedData = await request.get('http://185.106.240.170:4050/sbcTest/test/graphAPITest.jsp?dataType=outgoing&getASRNERData=true')

  if (receivedData) {

    chartData.labels = stringToArrayConverter(receivedData.clientName)
    chartData.datasets[0].data = stringToArrayConverterForSingleString(receivedData.ASR)
    chartData.datasets[1].data = stringToArrayConverterForSingleString(receivedData.NER)

    loaded.value = true
  }

})

</script>
<template>
  <div class="chart__wrapper">
    <h2>ASR/NER Graph</h2>
    <div class="chart__box">
      <Loader v-if="!loaded"/>
      <Line id="chart-id-line" :data="chartData" :options="chartOptions" v-if="loaded" />
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>