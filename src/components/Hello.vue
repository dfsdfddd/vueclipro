<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-head></v-head>
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
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
import head from './header/header.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'v-head': head
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.router-link-active
  color: red;
.bottoms
  border: 1px solid #023985
  ul.choice
    display: flex
    text-align center
    margin-bottom: 20px
    border-bottom: 1px solid #7e8c8d
    -webkit-box-shadow: 0 0 5px gray
    -moz-box-shadow: 0 0 5px gray
    box-shadow: 0 0 5px gray
    li
      flex 1
      height: 40px
      line-height:40px


</style>
