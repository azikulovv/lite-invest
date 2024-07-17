<template>
  <div class="shrink-0 flex flex-col w-[340px] py-[38px] shadow-md h-screen overflow-y-auto">
    <div class="mx-[20px] w-[200px] h-[32px]">
      <NuxtIcon name="logotypes/lite-invest" filled class="grid place-items-center w-full h-full" />
    </div>

    <NuxtLink href="#" class="mx-[20px] mt-[52px] flex items-center gap-x-[8px]">
      <img
        class="rounded-[8px] w-[32px] h-[32px]"
        src="~/assets/images/logotypes/moex.png"
        alt=""
      />
      <span
        class="text-[#FF0002] font-medium text-[20px] font-[Manrope] leading-[20px] -tracking-[4%]"
      >
        Мос. биржа
      </span>
    </NuxtLink>

    <nav class="px-[20px] mt-[24px] flex flex-col gap-y-[8px]">
      <NuxtLink
        href="#"
        class="flex items-center gap-x-[12px] bg-[#031138] rounded-[12px] px-[20px] py-[16px]"
      >
        <NuxtIcon class="w-[24px] h-[24px] text-[#fff]" name="sidebar/trade" />

        <span
          class="text-[#fff] text-[20px] font-[Manrope] font-medium leading-[20px] -tracking-[2%]"
        >
          Моя торговля
        </span>
      </NuxtLink>

      <NuxtLink href="#" class="flex items-center gap-x-[12px] rounded-[12px] px-[20px] py-[16px]">
        <NuxtIcon name="sidebar/folder" class="w-[24px] h-[24px] text-[#9EA1B0]" />

        <span
          class="text-[#9EA1B0] text-[20px] font-[Manrope] font-medium leading-[20px] -tracking-[2%]"
          >Единый счёт</span
        >
      </NuxtLink>

      <NuxtLink href="#" class="flex items-center gap-x-[12px] rounded-[12px] px-[20px] py-[16px]">
        <NuxtIcon name="sidebar/paper" class="w-[24px] h-[24px] text-[#9EA1B0]" />

        <span
          class="text-[#9EA1B0] text-[20px] font-[Manrope] font-medium leading-[20px] -tracking-[2%]"
          >Финансовый результат</span
        >
      </NuxtLink>

      <NuxtLink href="#" class="flex items-center gap-x-[12px] rounded-[12px] px-[20px] py-[16px]">
        <NuxtIcon name="sidebar/pie-chart" class="w-[24px] h-[24px] text-[#9EA1B0]" />

        <span
          class="text-[#9EA1B0] text-[20px] font-[Manrope] font-medium leading-[20px] -tracking-[2%]"
          >Эквити</span
        >
      </NuxtLink>

      <NuxtLink href="#" class="flex items-center gap-x-[12px] rounded-[12px] px-[20px] py-[16px]">
        <NuxtIcon name="sidebar/chart" class="w-[24px] h-[24px] text-[#9EA1B0]" />

        <span
          class="text-[#9EA1B0] text-[20px] font-[Manrope] font-medium leading-[20px] -tracking-[2%]"
          >Статистика</span
        >
      </NuxtLink>

      <NuxtLink href="#" class="flex items-center gap-x-[12px] rounded-[12px] px-[20px] py-[16px]">
        <NuxtIcon name="sidebar/group" class="w-[24px] h-[24px] text-[#9EA1B0]" />

        <span
          class="text-[#9EA1B0] text-[20px] font-[Manrope] font-medium leading-[20px] -tracking-[2%]"
          >Ученики / рефералы</span
        >
      </NuxtLink>

      <NuxtLink href="#" class="flex items-center gap-x-[12px] rounded-[12px] px-[20px] py-[16px]">
        <NuxtIcon name="sidebar/money" class="w-[24px] h-[24px] text-[#9EA1B0]" />

        <span
          class="text-[#9EA1B0] text-[20px] font-[Manrope] font-medium leading-[20px] -tracking-[2%]"
          >Заявки на выплату</span
        >
      </NuxtLink>

      <NuxtLink href="#" class="flex items-center gap-x-[12px] rounded-[12px] px-[20px] py-[16px]">
        <NuxtIcon name="sidebar/column-up" class="w-[24px] h-[24px] text-[#9EA1B0]" />

        <span
          class="text-[#9EA1B0] text-[20px] font-[Manrope] font-medium leading-[20px] -tracking-[2%]"
          >Характеристики акций</span
        >
      </NuxtLink>
    </nav>

    <div class="mt-[16px] w-full h-[1px] bg-[#E5E7ED]"></div>

    <nav class="px-[20px] mt-[16px] flex flex-col gap-y-[8px]">
      <NuxtLink href="#" class="flex items-center gap-x-[12px] rounded-[12px] px-[20px] py-[16px]">
        <NuxtIcon name="sidebar/user-circle" filled class="w-[24px] h-[24px] text-[#9EA1B0]" />

        <span
          class="text-[#9EA1B0] text-[20px] font-[Manrope] font-medium leading-[20px] -tracking-[2%]"
        >
          Аккаунт
        </span>
      </NuxtLink>

      <NuxtLink href="#" class="flex items-center gap-x-[12px] rounded-[12px] px-[20px] py-[16px]">
        <NuxtIcon name="sidebar/book-open" class="w-[24px] h-[24px] text-[#9EA1B0]" />

        <span
          class="text-[#9EA1B0] text-[20px] font-[Manrope] font-medium leading-[20px] -tracking-[2%]"
        >
          Инструкции
        </span>
      </NuxtLink>
    </nav>

    <div class="mt-[32px]"></div>

    <button
      type="button"
      class="mt-auto mb-0 py-[12px] pl-[20px] pr-[12px] flex items-center justify-between w-[calc(100%_-_40px)] mx-[20px] bg-[#F3F4F6] rounded-[12px]"
    >
      <span class="font-medium text-[20px] leading-[20px] -tracking-[2%]">Открыть счет</span>

      <NuxtIcon name="logotypes/binance" class="w-[32px] h-[32px]" filled />
    </button>
  </div>
</template>
