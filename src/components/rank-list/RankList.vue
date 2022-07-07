<template>
  <el-card>
    <template #header>
      <RankType />
    </template>
    <el-scrollbar max-height="calc(100vh - 140px)">
      <RankItem class="rank-item" v-for="item in state.itemList" :key="item" :item="item" @click="selectItem(item)" />
    </el-scrollbar>
  </el-card>
</template>

<script setup>
import { getRankList } from '../../api';

const state = reactive({
  itemList: [],
});
const selectItem = (item) => {
  console.log('item clicked', item);
};
onMounted(() => {
  getRankList(1, 1).then((response) => {
    state.itemList = response.data.data;
  });
});
</script>

<style scoped>
.rank-item {
  margin-top: 5px;
  cursor: pointer;
}
</style>
