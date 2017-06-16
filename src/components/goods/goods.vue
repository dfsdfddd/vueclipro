<template>
  <div class="goods">
    <div class="goodsLeft">
      <ul>
        <li v-for="item in goods">

            <span>{{item.name}}</span>

        </li>
      </ul>
    </div>
    <div class="goodsRight"></div>
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
      display: table
      li
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
  .goodsRight
    flex:1


</style>
