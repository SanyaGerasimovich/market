<template>
  <div class="q-py-md row flex-center" v-if="currentChoco !== null">
    {{ currentChoco.title }}

    <h2>Длина заголовка: {{ getChocoListLength }}</h2>
  </div>

  <button @click="lessTitleLength()">Уменьшить длину заголовка</button>

  <h5>{{ choco.title }}</h5>
</template>

<script>
import axios from "axios";

export default {
  props: ['id'],
  data() {
    return {
      currentChoco: null,
    }
  },
  mounted() {
    this.$store.dispatch('GET_MARKET')
    this.$store.dispatch('GET_CHOCO', this.id)
    this.$store.dispatch('fetchChocoById', this.id)
    // this.$store.getters.getChocoById(this.id)
    //     .then((response) => {
    //       this.currentChoco = response.data;
    //       console.log(this.currentChoco);
    //     }).catch((error) => {
    //   console.error(error);
    // })
  },
  computed: {
    getChocoListLength() {
      return this.currentChoco.title.length > 10 ? 'Большой': 'Маленький';
    },
    calculateTotalPrice() {
    },
    choco() {
      return this.$store.getters.getChoco;
    }
  },
  methods: {
    lessTitleLength() {
      this.currentChoco.title = "Lalalala";
    }
  }
}
</script>

<style scoped>
.choco{
  padding: 20px;
}
</style>
