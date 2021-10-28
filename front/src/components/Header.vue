<template>
  <header class="header-site">
      <div class="logo">
          <img src="../assets/logo_1.png" alt="logo">
      </div>

      <nav class="router">
          <router-link to="/">Home</router-link>
          <router-link to="/profil">Profil</router-link>
      </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-site {
  width: 100vw;
  display: flex;
  box-shadow: 0 0.25rem 1rem #08073585;
  align-items: center;
  justify-content: space-between;
}

.logo{
    margin:1em;
}

.logo img{
    max-width: 200px;
}

.router{
    margin: 1em;
}

nav a{
    color: #FC7445;
    margin-right: 1em;
}

</style>
