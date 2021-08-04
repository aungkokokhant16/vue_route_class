<template>
  <div v-if="job">
    <h1>Job Detail {{job.title}}</h1>
    <p>Job Detail {{job.detail}}</p>
  </div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     id:this.$route.params.id//index.js htae ka job Detail ko pyan phan yin thone tr
  //   }
  // }
  props:['id'],
  data(){
    return{
      job:null
    }
  },
  mounted(){
        fetch('http://localhost:3000/jobs/'+this.id)
        .then(((response)=>{
            return response.json()
        }))
        .then((data)=>{
            this.job=data
        })
        .catch((err)=>{
            console.log(err.message());
        })
    }
}
</script>

<style>

</style>