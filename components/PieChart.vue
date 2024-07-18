<template>
  <div class="flex items-center justify-center relative">
    <canvas ref="canvas" :width="width" :height="height" class="aspect-square"></canvas>

    <div
      class="w-[480px] h-[480px] rounded-full aspect-square bg-[rgb(244,244,244)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-[24px] items-center justify-center"
    >
      <p class="text-[#9EA1B0] font-[Manrope] font-medium text-[20px] leading-[16px] text-center">
        Общая сумма
      </p>

      <p class="text-[#031138] font-[Manrope] text-[56px] leading-[32px] text-center">
        1 200 350 ₽
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PieChart",
  data() {
    return {
      chartData: [58, 0.5, 25, 0.5, 17, 0.5],
      chartLabels: ["акции", "фьючерсы", "валюта"],
      chartColors: ["#0D4AF1", "#fff", "#EC4899", "#fff", "#1DCCAC", "#fff"],
      width: 600,
      height: 600,
    };
  },
  mounted() {
    this.outerRadius = Math.min(this.width, this.height) / 2; // Outer radius equals half of the canvas size
    this.innerRadius = this.outerRadius * 0.8; // Inner radius is 60% of the outer radius
    this.drawChart();
  },
  methods: {
    drawChart() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      const totalValue = this.chartData.reduce((acc, val) => acc + val, 0);
      const centerX = this.width / 2;
      const centerY = this.height / 2;

      let startAngle = -Math.PI / 2; // Starting from top (12 o'clock position)

      this.chartData.forEach((value, index) => {
        const sliceAngle = (2 * Math.PI * value) / totalValue;
        const endAngle = startAngle + sliceAngle;

        // Draw outer slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, this.outerRadius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = this.chartColors[index];
        ctx.fill();

        // Draw inner slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, this.innerRadius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = "#ffffff"; // Inner circle color
        ctx.fill();

        // Updating startAngle for the next slice
        startAngle = endAngle;
      });
    },
  },
};
</script>
