<template>
    <div id="earth" style="width: 100%; height: 600px"></div>
</template>

<script>
  import echarts from 'echarts'
  import '../assets/js/echarts-gl.min'
  import '../assets/js/world'
  export default {
    name: "earth",
    data(){
      return{
        option:{
          backgroundColor: 'rgba(0,0,0,0)',//canvas的背景颜色
          globe: {
            // baseTexture:myChart,
            top: 'middle',
            left: 'center',
            displacementScale: 0,
            environment:'none',
            shading: 'color',
            viewControl: {
              distance:240,
              autoRotate: true
            }
          },
          series:series
        }

      }
    },
    created(){
    },
    mounted(){


      echarts.setOption({
        backgroundColor: 'rgba(3,28,72,0.3)',
        title: {
          show:true
        },
        geo: {
          type: 'map',
          map: 'world',
          left:0,
          top:0,
          right: 0,
          bottom: 0,
          boundingCoords: [[-180, 90], [180, -90]],
          zoom:0,
          roam: false,
          itemStyle: {
            borderColor:'#000d2d',
            normal: {
              areaColor: '#2455ad',
              borderColor:'#000c2d'
            },
            emphasis: {
              areaColor: '#357cf8'
            }
          },
          label:{
            fontSize:24
          }
        },
        series:dser
      });
      echarts.init(document.getElementById("earth")).setOption(this.option, true);
      // // 基于准备好的dom，初始化echarts实例
      // var myChart = echarts.init(document.getElementById('earth'));
      //
      // if (this.option && typeof this.option === "object") {
      //   myChart.setOption(this.option,true);
      // }

    }
  }
</script>

<style scoped>

</style>
