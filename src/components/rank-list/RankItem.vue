<template>
  <el-card>
    <el-descriptions :title="props.item.nick_name" :column="4">
      <template #extra>
        <div>
          <el-button type="primary">屏蔽</el-button>
          <el-button type="primary">关注</el-button>
        </div>
      </template>
      <el-descriptions-item label="总资产">{{ props.item.total }}</el-descriptions-item>
      <el-descriptions-item label="收益">{{ props.item.profit }}</el-descriptions-item>
      <el-descriptions-item label="收益率">{{ props.item.profit_ratio }}</el-descriptions-item>
      <el-descriptions-item label="月收益">{{ props.item.month_profit }}</el-descriptions-item>
      <el-descriptions-item label="月收益率">{{ props.item.month_profit_ratio }} </el-descriptions-item>
      <el-descriptions-item label="周收益">{{ props.item.week_profit }}</el-descriptions-item>
      <el-descriptions-item label="周收益率">{{ props.item.week_profit_ratio }}</el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup>
const props = defineProps({
  item: Object,
  isSubscribed: Boolean,
});
const buttonText = computed(() => (props.isSubscribed ? '取消订阅' : '订阅'));
</script>

<style scoped></style>
