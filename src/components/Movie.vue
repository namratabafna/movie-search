<template>
  <div class="movie">
    <h2>{{ movie.Title }}</h2>
    <div>
      <img width="200" :alt="altText" :src="movie.Poster" />
    </div>
    <p>{{ movie.Year }}</p>
    <button class="button active is-small"
                @click="isCardModalActive = !isCardModalActive">
                Movie Details
    </button>
    <Details v-if="isCardModalActive" :isModalActive ="isCardModalActive" :imdbID="movie.imdbID" />
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api';
  import Details from "./Details.vue";

  export default {
    name: "Movie",
    components: { Details },
    data() {
      return {
        isCardModalActive : false
      }
    },
    props: ['movie'],
    setup({ movie }) {
      const altText = computed(() => `The movie titled: ${movie.Title}`);

      return { altText };
    }
  };
</script>
