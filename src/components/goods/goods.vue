<template>
  <div class="goods">
    <div class="goodsLeft">
      <ul>
        <li v-for="item in goods">
            <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="goodsRight">
      <div v-for="item in goods">
        <h3>{{item.name}}</h3>
        <ul >
          <li v-for="food in item.foods">
            <img v-bind:src="food.image" alt="item.name">
            <div>
              <p v-text="food.name"></p>
              <p v-text="food.description"></p>
              <div>
                <span >月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
              </div>
              <p v-text="food.price"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
/* eslint-disable*/
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.createview();
    });


  },
  methods: {
    createview: function () {
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        this.goods= response.data;
        console.log(response)
      })
    }
  }

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.goods
  display: flex
  .goodsLeft
    flex: 0 0 80px
    height: 100%
    background-color: gainsboro
    ul
      li
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        display: table
        span
          display: table-cell;
          width: 56px;
          vertical-align: middle;
          position: relative;
          font-size: 12px;
  .goodsRight
    flex:1
    h3
      background-color: gainsboro;
    li
      clear: both
      overflow: hidden
      img
        float: left
        width: 120px
        height: 120px
      div
        float: left
        display: block


</style>
