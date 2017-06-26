<template>
  <div class="shopcart-wrapper">
    <div class="shopcart-left">
      <div class="shopcount">{{ totalPrice}}</div>
      <div class="paysec"></div>
      <div class="peisongfei"></div>
    </div>
    <div class="shopcart-right">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /*eslint-disable*/
export default{
    props:{
      selectFoods: {
        type: Array,
        default() {
          return [
            {
              price: 10,
              count: 1
            }
          ];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    computed:{

      totalPrice(){
        let total = 0;
        console.log(this.selectFoods)
        this.selectFoods.forEach( (good) => {
          total += good.count*good.price;
        })
        return total
      },
      totalCount() {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },

    }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopcart-wrapper
  position: fixed;
  bottom:0
  left 0
  width:100%
  height:50px
</style>
