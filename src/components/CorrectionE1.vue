<template>
  <div class="conta">
    <img :src="urlImg" alt="Cannot access to resource">
    <label for="">{{ texto }}</label>
  </div>
</template>

<script>
export default {
    props:{
        texto:{
            type:String,
        },
        urlImg:{
            type:String
    }
}

}
</script>

<style>
img{
    width: 200px;
    height: 200px;
}
.conta{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
}
</style>