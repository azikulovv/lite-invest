<template>
  <div class="flex items-center justify-center relative">
    <canvas ref="canvas" :width="width" :height="height" class="aspect-square"></canvas>

    <div
      class="w-[480px] h-[480px] rounded-full aspect-square bg-[rgb(244,244,244)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-[24px] items-center justify-center"
    >
      <p class="text-[#9EA1B0] font-[Manrope] font-medium text-[20px] leading-[16px] text-center">
        {{ title }}
      </p>

      <p class="text-[#031138] font-[Manrope] text-[56px] leading-[32px] text-center">
        {{ amount }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, type PropType } from "vue";

export default defineComponent({
  name: "PieChart",
  props: {
    chart: {
      required: true,
      type: Object as PropType<{
        data: number[];
        colors: string[];
      }>,
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 600,
    },
    title: {
      type: String,
      default: "title",
    },
    amount: {
      type: String,
      default: "amount",
    },
  },
  setup(props) {
    const canvas = ref<HTMLCanvasElement | null>(null);

    const outerRadius = Math.min(props.width, props.height) / 2;
    const innerRadius = outerRadius * 0.8;

    const drawChart = () => {
      if (!canvas.value) return;
      const ctx = canvas.value.getContext("2d");
      if (!ctx) return;

      const totalValue = props.chart.data.reduce((acc, val) => acc + val, 0);
      const centerX = props.width / 2;
      const centerY = props.height / 2;

      let startAngle = -Math.PI / 2; // Starting from top (12 o'clock position)

      props.chart.data.forEach((value, index) => {
        const sliceAngle = (2 * Math.PI * value) / totalValue;
        const endAngle = startAngle + sliceAngle;

        // Draw outer slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = props.chart.colors[index];
        ctx.fill();

        // Draw inner slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, innerRadius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = "#ffffff"; // Inner circle color
        ctx.fill();

        // Updating startAngle for the next slice
        startAngle = endAngle;
      });
    };

    onMounted(() => {
      drawChart();
    });

    return {
      canvas,
    };
  },
});
</script>
