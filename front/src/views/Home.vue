<template>
  <div class="homepage">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    title: String
  },
};
</script>


<style scoped>
.homepage {
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
  font-size: 36px;
}
</style>
