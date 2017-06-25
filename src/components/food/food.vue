<template>
<div class="foodWrapper" v-show="foodshow" ref="food">
  <p>foodshow</p>
  <p v-text="food.name"></p>
</div>
</template>

<script type="text/ecmascript-6">
  /*eslint-disable*/
export default{
    props:{
        food:{
            type: Object
        }
    },
    data(){
        return{
          foodshow:false

        }
    },
    mounted(){

    },
  methods:{
        show(){
            this.foodshow=true;
        }

    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
