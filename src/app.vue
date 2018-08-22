<template>
    <div id="app">
         <h1><img src="./assets/images/logo.png"></h1>
        <index :data="data" />
    </div>
</template>

<script>
 import index from './root/index.vue';
export default {
    name:'app',
    data(){
        return {
            data:[1,2,3,4,5]
        }
    },
    components:{
        index
    }
}
</script>

<style lang='less' >
html{
    font-size: 10vw;
}
html,body{
    margin: 0;
    padding: 0;
}
 #app{
     h1{
         font-size: 0.5rem;
         color: #0f0;
         text-align: center;
     }
 }
</style>
