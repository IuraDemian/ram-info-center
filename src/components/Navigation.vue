<template>
  <nav>
    <router-link to="/">Головна</router-link>
    <router-link to="/search">Пошук</router-link>
    <router-link to="/compare">Порівняти</router-link>
  </nav>
</template>
  
<script>
export default 
{
  name: 'Navigation',
};
</script>
  
<style scoped>
nav 
{
background-color: #260c61;
padding: 20px;
}
  
nav a 
{
margin: 0 10px;
text-decoration: none;
color: #ffffff;
}
  
nav a:hover 
{
text-decoration: underline;
}
</style>  