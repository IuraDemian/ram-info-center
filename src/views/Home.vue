<template>
  <div class="home">
    <Navigation />
    <h1 class="title has-text-centered">Інфоцентр Планок оперативної пам’яті</h1>
    <div class="columns is-multiline">
      <div
        class="column is-one-quarter"
        v-for="ram in recentRams"
        :key="ram.id"
        @click="goToRamDetail(ram.id)"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="ram.imageUrl || '/path/to/placeholder.png'" :alt="ram.model" />
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-5">{{ ram.model }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { fetchRamData } from '@/data/firebaseDataService';

export default 
{
  name: 'Home',
  components: 
  {
    Navigation,
  },

  data() 
  {
    return {
      ramData: [], 
      recentRams: [],
    };
  },

  async created() 
  {
    this.ramData = await fetchRamData();
    this.recentRams = this.ramData.slice(-4);
  },

  methods: 
  {
    goToRamDetail(id) 
    {
      this.$router.push({ name: 'RamDetail', params: { id } });
    },
    goToSearch() 
    {
      this.$router.push({ name: 'Search' });
    },
    goToCompare() 
    {
      this.$router.push({ name: 'Compare' });
    },
  },
};
</script>

<style scoped>
.home 
{
  text-align: center;
}
</style>