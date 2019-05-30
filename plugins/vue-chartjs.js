import Vue from 'vue';
import {Pie, Doughnut} from 'vue-chartjs';
Vue.component('bar-chart', {
extends: Doughnut,
props: ['data','width','height'],
mounted() {
this.renderChart(this.data,{
    maintainAspectRatio:false,
    legend:{
        labels:{
            fontColor:"white",
            fontSize:18
        }
    }
});
}
});