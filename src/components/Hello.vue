<template>
  <div class="hello">
    <v-head :seller = "seller"></v-head>
    <div class="bottoms">
      <ul class="choice">
        <li>
          <router-link to="/goods">goods</router-link>
        </li>
        <li>
          <router-link to="/ratings">ratings</router-link>
        </li>
        <li>
          <router-link to="/seller">seller</router-link>
        </li>
      </ul>
    </div>
    <router-view :seller = "seller" keep-alive></router-view>
    <v-food :food="selectedFood" ref="food"></v-food>
  </div>

</template>

<script>
  /* eslint-disable */
import { Event } from '../common/js/commonVue';
import head from './header/header.vue';
import food from './food/food.vue';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      seller:{},
      selectedFood:{}
    }
  },
  mounted(){
    this.$nextTick(function(){
        this.creatSellerP()
    });

    Event.$on('food-msg',function(msg){
        console.log('init')
      this.selectedFood = msg;
      this.$refs.food.show();

    }.bind(this));
  },
  methods: {
    creatSellerP(){
        this.$http.get('/api/seller').then((response)=>{
            response = response.body;
            this.seller = response.data
        })
    },
    flagshow(){
      this.$refs.food.show()
    }
  },

  components: {
    'v-head': head,
    'v-food': food
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.router-link-active
  color: red;
.bottoms
  border-top: 1px solid #023985
  ul.choice
    display: flex
    text-align center
    -webkit-box-shadow: 0 0 5px gray
    -moz-box-shadow: 0 0 5px gray
    box-shadow: 0 0 5px gray
    li
      flex 1
      height: 40px
      line-height:40px


</style>
