<template>
    <div class="box">
        <h2>这就是一个测试而已啦</h2>
        <ul>
            <li :key="item" v-for="item,index in data">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
  .box{
      h2{
          font-size: 36px;
          color: #f00;
      }
      ul{
          li{
              list-style: none;
              font-size: 26px;
              color: #0f0
          }
      }
  }
</style>
