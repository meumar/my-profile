<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">My profile</el-menu-item>

      <el-submenu index="2">
        <template #title>About me</template>
        <el-menu-item index="2-1">Personal </el-menu-item>
        <el-menu-item index="2-2">Education</el-menu-item>
        <el-menu-item index="2-3">Work</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style>
</style>