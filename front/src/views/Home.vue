<template>
  <div class="homepage">
    <div class="row">
      <img src="../assets/bkg_home.png" class="home__bkg" alt="" />
      <div class="left-side">
        <h2>LA BOX MUSICAL</h2>
        <h1>
          Vous ne saviez pas que ca existait avant qu’on vous le fasse découvir
        </h1>
        <p>
          Chaque mois, recevez une box musicale exclusive, selon vos goûts, pour
          des événements Bordelais.
        </p>
        <div class="cta">
          <a class="btn btn-outline-pink mr-2" href="#">JE ME LANCE</a>
          <a class="btn btn-white" href="#">J'OFFRE UN ABONNEMENT</a>
        </div>
      </div>
      <div class="right-side">
        <img src="../assets/pic1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    title: String,
  },
};
</script>


<style scoped>
.homepage {
  width: 100vw;
  height: calc(100vh - 100px);
}
h1 {
  font-size: 48px;
  font-family: fenwick;
  color: var(--pink);
  margin-bottom: 1em;
  text-transform: uppercase;
}
h2 {
  font-size: 24px;
  margin-bottom: 1em;
  font-family: fenwick;
  color: var(--beige);
  text-transform: uppercase;
}
.homepage .row {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  position: relative;
  margin-top: 10vh;
}

.row .left-side {
  width: 50%;
  text-align: left;
}
.row .right-side {
  width: 50%;
}
.cta {
  margin-top: 3em;
}

.home__bkg {
  position: absolute;
  width: 80%;
  height: 100%;
  object-fit: cover;
  right: -5vw;
}

.right-side img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
  transform: scale(1.3);
}
</style>
