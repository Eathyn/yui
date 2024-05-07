<script setup lang="ts">
import { Connection, Message, Setting } from '@element-plus/icons-vue'

defineProps<{
  isCollapse: boolean
}>()
</script>

<template>
  <el-menu
    :collapse="isCollapse"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon>
        <Connection />
      </el-icon>
      <span>Navigator One</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <Setting />
      </el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <Message />
      </el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>