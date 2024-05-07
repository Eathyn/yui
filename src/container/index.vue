<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/container/components/Sidebar.vue'
import Header from '@/container/components/Header.vue'

defineOptions({
  name: 'Container',
})

const isCollapse = ref(false)
</script>

<template>
  <el-container>
    <el-aside width="auto">
      <Sidebar :is-collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <Header v-model:isCollapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  height: 60px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>