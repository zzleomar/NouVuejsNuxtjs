<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/component">Component</el-menu-item>
            <el-menu-item index="/newcomponent">NewComponent</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
            },
            methods: {
            handleSelect(key, keyPath) {
                this.$router.push(key) 
            }
            }
    }
</script>

<style scoped>

</style>