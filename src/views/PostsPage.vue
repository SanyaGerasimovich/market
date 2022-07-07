<template>
  <q-btn flat color="primary" @click="getMarket">Open</q-btn>
  <q-scroll-area style="height: 90vh; width: 100%;">
    <div class="q-py-md row flex-center">
      <q-card class="my-card col-xs-12 col-sm-6 col-md-3"
              v-for="choco of market"
              :key="choco.id"
              v-if="!isPostsLoading"
      >
        <q-parallax :src="choco.url" :height="150"/>

        <q-card-section class="hover-card">
          <div class="text-subtitle2">{{ choco.title }}</div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat color="primary" :to="'/choco' + choco.id">Open</q-btn>
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
import axios from 'axios'
export default {
  data () {
    return {
      market: [],
      isPostsLoading: false,
    }
  },
  methods:  {
    async fetchPosts () {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=15')
        this.market = response.data
      } catch (e) {
        alert('Error')
      } finally {
        this.isPostsLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts();
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
