<template>
  <div class="q-py-md row flex-center">
    {{ ad }}
  </div>
</template>

<script>
export default {
  props: ['id'],
  mounted() {
    this.$store.dispatch('GET_MARKET')
    this.$store.dispatch('GET_CHOCO', this.id)
  },
  computed: {
    ad () {
      return this.$store.getters.CHOCO
    }
  }
}
</script>

<style scoped>
.choco{
  padding: 20px;
}
</style>
