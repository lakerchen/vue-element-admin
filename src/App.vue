<template>
  <div id="app">
    <el-container>
      <el-header>
        <AdminHeader/>
      </el-header>
    <el-container>
      <el-aside width="200px">
        <AdminSider/>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>版权所有 © 深圳老板不喝咖啡有限公司</el-footer>
      </el-container>
    </el-container>
  </el-container>
  </div>
</template>

<script>
  import AdminHeader from './components/layout/AdminHeader.vue';
  import AdminSider from './components/layout/AdminSider.vue';
export default {
  components: {
    AdminHeader,
    AdminSider,
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-footer {
    height: 60px;
    color: #909399;
    font-size: 14px;
}
</style>
