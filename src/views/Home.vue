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
import EventService from '@/services/EventService.js'

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
          borderColor: '#f87979',
          fill: false,
          data: [40, 20]
        },
        {
          label: 'Data Two',
          borderColor: 'blue',
          fill: false,
          data: [10, 30]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  created() {
    EventService.getEvents()
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

}
</script>
