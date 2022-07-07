<template>
  <el-radio-group v-model="selectedRankType" class="ml-4">
    <el-radio-button
      v-for="rankType in Object.keys(RankTypeList)"
      :key="rankType"
      :label="RankTypeList[rankType].value"
      size="large"
    >
      {{ RankTypeList[rankType].display }}
    </el-radio-button>
  </el-radio-group>
</template>

<script setup>
class RankType {
  constructor(display, value) {
    this.display = display;
    this.value = value;
  }
}

const RankTypeList = {
  week: new RankType('周收益', 1),
  week_ratio: new RankType('周收益率', 2),
  month: new RankType('月收益', 3),
  month_ratio: new RankType('月收益率', 4),
  total: new RankType('总收益', 5),
  total_ratio: new RankType('总收益率', 6),
  total_asset: new RankType('资产', 7),
};
const selectedRankType = ref(RankTypeList.week);
const emits = defineEmits(['rankTypeChanged']);
watch(selectedRankType, (newVal, oldVal) => emits('rankTypeChanged', newVal.value), { immediate: false });
</script>

<style scoped></style>
