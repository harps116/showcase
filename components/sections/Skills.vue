<template>
  <div>
    <div class="row">
      <div class="col-lg-5 col-xs-12">
        <apexchart type="pie" :options="skillsPie.chartOptions" :series="skillsPie.series"></apexchart>
      </div>
      <div class="col-lg-5 col-xs-12">
        <apexchart
          type="donut"
          :options="attributesPie.chartOptions"
          :series="attributesPie.series"
        ></apexchart>
      </div>
      <p
        class="text-center"
      >* note that these values are based on my own perception and the results of a number self-accessment exercises.</p>
    </div>
  </div>
</template>

<script>
import SectionContainer from "~/components/containers/Section";
function getResponsiveConfig() {
  return [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: "bottom"
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  ];
}
export default {
  props: {
    skills: Array
  },
  components: {
    SectionContainer
  },
  data: function() {
    return {
      skillsPie: {
        chartOptions: {
          labels: ["JavaScript", "CSS", "HTML", "Python", "PHP", "MySQl"],
          responsive: getResponsiveConfig()
        },
        series: [40, 17.5, 17.5, 5, 10, 10]
      },
      attributesPie: {
        chartOptions: {
          labels: [
            "Easy Going",
            "Enthusiastic",
            "Deep Thinker",
            "Curious",
            "Competent",
            "Creative"
          ],
          responsive: getResponsiveConfig()
        },
        series: [20, 20, 20, 20, 20, 20]
      },
      knowledgeBar: {
        chartOptions: {
          xaxis: {
            categories: [2016, 2017, 2018, 2019]
          }
        },
        series: [
          {
            name: "Books Read",
            data: [3, 5, 10, 5]
          },
          {
            name: "Courses Completed",
            data: [3, 4, 4, 2]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
</style>
