<template>
  <div class="head">
    <p>this is header</p>
    <p>{{ seller.name }}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  /*eslint-disable*/
export default{
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.head
  width 100%
  height: 80px
  line-height: 80px
  display: table
  border:1px solid #42b983
  text-align: center
  -webkit-box-shadow: 0 3px 5px #888
  -moz-box-shadow: 0 3px 5px #888
  box-shadow: 0 3px 5px #888
  p
    display: table-cell

</style>
