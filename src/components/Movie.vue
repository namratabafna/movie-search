<template>
  <div class="movie">
    <h2>{{ movie.Title }}</h2>
    <div>
      <img width="200" :alt="movie.Title" :src="movie.Poster" />
    </div>
    <p>{{ movie.Language }}</p>
  </div>
</template>

<script>  

  export default {
    name: "Movie",
    props: ['movie']
  };
</script>
