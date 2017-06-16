<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-head></v-head>
    <div class="bottoms">
      <ul>
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
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.bottoms{
  border: 1px solid #023985;
}
  .liss{
    color: red;
  }
.router-link-active {
  color: red;
}
</style>
