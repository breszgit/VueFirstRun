<template>
  <div>
      <h1>Movie: {{MovieName}}</h1>
      <label>No: {{No}}</label>
  </div>
</template>

<script>
export default {
    data(){
        return{
            MovieName:"",
            No:0
        }
    },
    mounted(){
        this.MovieName = this.$route.params.Name;
        this.No = this.$route.params.Number;
    }
}
</script>

<style>

</style>