<template>
    <div>
        <h1>{{title}}</h1>
        <el-input placeholder="Please input" v-model="title"></el-input>
    </div>
</template>

<script>
    export default {
        beforeCreate() {
            console.log('beforeCreate',this.title);
        },
        created() {
            console.log('Created', this.title);
            this.title="hello vue!!"
        },
        mounted() {
            console.log('mounted', this.title);
        },
        watch: {
            title(newValue, oldValue) {
                console.log('watch title',{newValue,oldValue});
            }
        },
        destroyed() {
            console.log('destroyed');
        },
        data() {
            return {
                title: 'vacio'
            }
        },
    }
</script>

<style scoped>

</style>