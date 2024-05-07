<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'

const isCollapse = defineModel('isCollapse', {
  required: true,
})

function toggleIcon() {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <span @click="toggleIcon">
    <el-icon v-show="isCollapse" :size="20">
      <Expand />
    </el-icon>
    <el-icon v-show="!isCollapse" :size="20">
      <Fold />
    </el-icon>
  </span>
</template>
