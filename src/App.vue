<template>
  <!-- <div id="nav">
    <router-link to="/">elektraatalog</router-link> |
    <router-link to="/catalog">Catalog</router-link>
  </div> -->
  <router-view/>
</template>

<style>

body {
  margin: 0;
  padding: 8px;
  background-color: rgba(31,32,35, 0.98);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #1f2023;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


h2 {
  color: white;
}


p {
  color: white;
  font-size: 14px;
}

.secondary-color {
  color: rgba(255,255,255, 0.5);
}


.price {
  color: #6ed272;
  font-size: 24px;

}

small {
    color: rgba(255,255,255, 0.5);
    font-size: 11px;
}

.orange-bg-color {
  background-color: #f86a3e;
}

.orange-color {
  color: #f86a3e;
}
</style>
