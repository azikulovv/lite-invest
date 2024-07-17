<script setup lang="ts">
interface Props {
  title: string;
  info: { name: string; price: string }[];
}

defineProps<Props>();
</script>

<template>
  <div class="border-2 border-[#F4F4F4] rounded-[16px] p-[20px] bg-[#FBFBFB]">
    <h3 class="font-[Manrope] text-[24px] leading-[24px] text-black -tracking-[2%] font-normal">
      {{ title }}
    </h3>

    <div class="divide my-[12px] bg-[#F4F4F4] h-[1px] w-full"></div>

    <div class="flex flex-col gap-y-[20px]">
      <div v-for="(item, key) in info" :key="key" class="flex items-center justify-between">
        <span
          class="font-[Manrope] text-[20px] leading-[20px] text-black -tracking-[2%] font-normal"
        >
          {{ item.name }}
        </span>

        <span
          class="font-[Manrope] text-[20px] leading-[20px] text-black -tracking-[2%] font-medium"
        >
          {{ item.price }}
        </span>
      </div>
    </div>
  </div>
</template>
