<template>
  <q-scroll-area style="height: 90vh; width: 100%;">
    <div class="q-py-md row flex-center">
      <q-card class="my-card col-xs-12 col-sm-6 col-md-3"
              v-for="choco in mark"
              :key="choco.id"
              v-if="!isLoading"
      >
        <q-parallax :src="choco.url" :height="150"/>

        <q-card-section class="hover-card">
          <div class="text-subtitle2">{{ choco.title }}</div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat color="primary" :to="'/choco/' + choco.id">Open</q-btn>
        </q-card-actions>
      </q-card>
      <q-circular-progress
          v-else
          indeterminate
          size="50px"
          color="primary"
          class="q-ma-md"
      />
    </div>
  </q-scroll-area>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false
    }
  },
  mounted() {
    this.isLoading = true
    this.$store.dispatch('GET_MARKET')
    setTimeout(() => { this.isLoading = false }, 500)
  },
  computed: {
    mark() {
      return this.$store.getters.MARKET
    }
  }
}
</script>
<style scoped>
.my-card{
  width: 70%;
  max-width: 350px;
  transition: transform 0.3s;
}
.my-card:hover{
  transform: scale(0.98);
}
.row{
  gap: 20px;
}
</style>
