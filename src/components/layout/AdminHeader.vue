<template>
    <div class="admin-container">
        <div class="admin-logo">
            开发流程管理系统
        </div>
        <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4"><a href="javascript:;" target="_blank">仪表盘</a></el-menu-item>
        </el-menu>
    </div>
</template>

<style>
.admin-container::after {
    content: '';
    display: block;
    clear: both;
}
.admin-logo {
    float: left;
    height: 60px;
    line-height: 60px;
    color: #909399;
    font-size: 20px;
    margin-right: 20px;
}
.el-menu-demo {
    float: left;
}
.el-header {
    height: 61px;
    border-bottom: solid 1px #e6e6e6;
}
</style>
