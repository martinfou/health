<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <v-row>
      <v-col cols="6">
        <BarChart :chartdata="chartdata" :options="options" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BarChart from '@/components/BarChart.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    BarChart
  },
  data: () => ({
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        },
        {
          labeld: 'Data Two',
          backgroundColor: 'blue',
          data: [10, 30]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  })
}
</script>
