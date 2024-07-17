<script setup lang="ts">
import vTable from "~/components/vTable.vue";
import Sidebar from "@/components/Sidebar.vue";
import MiniTable from "@/components/MiniTable.vue";
import Navigation from "@/components/Navigation.vue";

const state = reactive({
  sharesInfo: [
    {
      name: "Мирзазада Илаха",
      price: "720 795,05 ₽",
    },
    {
      name: "Евгений Шевченко",
      price: "261 691,87 ₽",
    },
    {
      name: "Анастасия",
      price: "169 226, 81 ₽",
    },
  ],
});
</script>

<template>
  <div class="flex">
    <Sidebar />

    <main class="overflow-y-auto h-screen w-full px-[48px] py-[82px]">
      <h1
        class="font-[Manrope] font-normal text-[48px] text-[#031138] -tracking-[2%] leading-[48px]"
      >
        Моя торговля
      </h1>

      <Navigation />

      <div
        class="mt-[24px] p-[20px] rounded-[24px] bg-white grid grid-cols-3 gap-[20px] shadow-[0_0_40px] shadow-[rgb(0,0,0,0.06)]"
      >
        <MiniTable title="Акции" :info="state.sharesInfo" />

        <MiniTable title="Фьючерсы" :info="state.sharesInfo" />

        <MiniTable title="Валюта" :info="state.sharesInfo" />
      </div>

      <h1
        class="mt-[52px] font-[Manrope] font-normal text-[48px] text-[#031138] -tracking-[2%] leading-[48px]"
      >
        Акции
      </h1>

      <vTable />

      <h1
        class="mt-[52px] font-[Manrope] font-normal text-[48px] text-[#031138] -tracking-[2%] leading-[48px]"
      >
        Фьючерсы
      </h1>

      <vTable />

      <h1
        class="mt-[52px] font-[Manrope] font-normal text-[48px] text-[#031138] -tracking-[2%] leading-[48px]"
      >
        Валюта
      </h1>

      <vTable />
    </main>
  </div>
</template>

<style></style>
