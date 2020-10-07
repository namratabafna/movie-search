<template>
  <div id="app" class="container">    
    <section>      

        <b-modal v-model="isOpen" has-modal-card>
            <form action="">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">{{movie.Title}}</p>
                    <button
                            type="button"
                            class="delete"
                            @click="isOpen = false"/>
                </header>
                <section class="modal-card-body">
                    <p class="title is-4">{{movie.Plot}}</p>
                    <br/>
                    <p class="subtitle is-6">Actors - {{movie.Actors}}</p>
                    <br/>
                    <p class="subtitle is-6">Released - {{movie.Released}}</p>
                    <p>Rated - {{ movie.Rated }} </p>
                    <br>
                    <p>Location - {{ movie.Country }}</p>
                    <br/>
                    <p>Language - {{ movie.Language }}</p>
                    <br/>
                    <small>Rating - {{movie.imdbRating}}</small>                        
                </section>                
            </div>
        </form>
        </b-modal>
    </section>

</div>

</template>
<script>
import { getMovieDetails } from '../hooks/movie-api';
  export default {
    name: 'Details',   
    props:  
    {
      isModalActive: {
        type: Boolean,
        default: false
      },
      imdbID: {
        type: String,
        default: ""        
      }
    },
    async mounted() {        
      let res = await getMovieDetails(this.imdbID);
      this.movie = res;
      this.isOpen = this.isModalActive;
    },    
    data() {
      return {                
        movie: {},
        isOpen: false
      }
    }
  }
</script>
