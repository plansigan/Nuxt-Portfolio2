<template>
  <div>
    <bar-chart :width="500" :height="500" v-if="showBar" :data="barData" :options="options" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showBar: false,
      barData:{
        labels: ['NodeJS', 'VueJS', 'Firebase', 'Bootstrap', 'SCSS', 'UX/UI Design'],
        datasets: [{
            label: 'Skill Chart %',
            data: [30, 60, 20, 50, 30, 50],
            
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
      options:{
        legends:{
          labels:{
            fontColor:"white",
            fontSize:18
          }
        }
      }
    }
  },
  mounted () {
    this.showBar = true // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
  },  
  asyncData () {
    const barData =  this.barData// some data
    const options = this.options // some options
    return { barData, options }
  }
}
</script>