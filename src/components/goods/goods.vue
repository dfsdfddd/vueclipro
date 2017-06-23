<template>
  <div class="goods">
    <div class="goodsLeft" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods"  v-bind:class="{'current': currentIndex === index}" @click="selectMenu(index,$event)">
            <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="goodsRight" id="wrapper" ref="foodsWrapper">
       <ul>
          <li v-for="(item,index) in goods" class="food-list-hook">
            <h3>{{item.name}}</h3>
            <ul >
              <li v-for="food in item.foods">
                <div class="imags">
                  <img alt="item.name"><!--v-bind:src="food.image"-->
                </div>
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
          </li>
        </ul>
    </div>
   <!-- <shopcart></shopcart>-->
  </div>
</template>
<script type="text/ecmascript-6">
/* eslint-disable*/
/**
 * $nextTick(callback) 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
 * 获取后操作dom 和 调用关于dom的方法
 *
 * 计算属性 计算出来的值 缓存在内存中  要返回的东西用计算属性  设置的东西也用计算属性
 */

import BSscroll from 'better-scroll';
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: {},
      listHeight:[],
      scrollY:0
    }
  },
  mounted() {

      this.createview();


  },
  computed: {
    currentIndex() {

      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        console.log(this.scrollY)
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
          console.log(i)
        }
      }
      return 0;
    }
  },
  methods: {
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      console.log(event._constructed)
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 1000);
    },
    createview: function () {
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        this.goods= response.data;
        this.$nextTick(() => {
          this._initScroll();
          this._calculateHeight();
          console.log(this.scrollY)
        });
      })
    },
    _initScroll:function () {
      this.menuScroll = new BSscroll(this.$refs.menuWrapper,{
        click: true
      });

      this.scrolll = new BSscroll(this.$refs.foodsWrapper,{
        probeType: 3
      });

      this.scrolll.on('scroll', (pos) => {
        console.log(pos.x + '~' + pos.y)

      });
    },
    _calculateHeight:function(){
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let height = 0;
      this.listHeight.push(height);
      for (var i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);

      }

    }

  }

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.goods
  display: flex
  position:absolute
  top:120px
  bottom:50px
  width:100%
  overflow:hidden
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
        &.current
          background red
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
      .imags img
        float: left
        width: 90px
        height: 90px
      div
        float: left


</style>
