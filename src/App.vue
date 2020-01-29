<template>
    
  <div id="app">
              <div id="nav">
        <router-link to="/">Home</router-link> |
        <!-- <router-link to="/About">About</router-link> | -->
        <router-link to="/CV">My Journey</router-link> |
        <router-link to="/Portfolio">Portfolio</router-link>
      </div>
      
      <router-view/>
    <vue-particles
     color="#42b983"
        :particleOpacity="0.8"
        :particlesNumber="75"
        shapeType="circle"
        :particleSize="2"
        linesColor="#dddddd"
        :linesWidth="0.2"
        :lineLinked="true"
        :lineOpacity="0.2"
        :linesDistance="170"
        :moveSpeed="0.9"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push">
 </vue-particles>
  </div>  
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#particles-js {
position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; background-color: #22282e;
}

#nav {
  padding: 30px;
  font-size: 1.5rem;
}

#nav a {
    transition: 0.5s;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a:hover {
  
  color: #42b983a5;
}

#nav a.router-link-exact-active {
  
  color: #42b983;
  text-decoration: underline;
}

body{
  background-color:#343d46
}

h2{
  font-size: 2em;
}


</style>
