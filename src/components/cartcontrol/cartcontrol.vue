<template>
  <div class="cartControl">
    <span @click.stop.prevent="decCart($event)" >-</span>
    <span v-show="food.count>0">{{food.count}}</span>
    <span @click.stop.prevent="addCart($event)">+</span>
  </div>
</template>

<script type="text/ecmascript-6">
/*eslint-disable*/
import Vue from 'vue';
export default{
  props:{
    food:{
      type: Object
    }
  },
  data(){
    return{

    }
  },
  methods: {
    addCart: function (event) {
      /*if (!event._constructed){
        return
      }*/
      console.log(event._constructed)
      console.log(this.food)
      if (!this.food.count){
        Vue.set(this.food, 'count', 1)
      }else {this.food.count++}
      this.$dispatch('test', 1);

    },
    decCart: function(event){
      if (!event._constructed){
        return
      }
      if (this.food.count){
        this.food.count--;
      }
    }
  }
}





</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
