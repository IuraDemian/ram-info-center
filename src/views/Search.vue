<template>
    <div class="search-page">
      <Navigation />
      <h1 class="title">Пошук RAM</h1>
      
      <div class="filters">
        <button class="button is-info" @click="toggleFilterMenu">
          Фільтри <span class="icon" :class="{'is-active': filterMenuOpen}"><i class="fas fa-filter"></i></span>
        </button>
        <div v-if="filterMenuOpen" class="filter-menu">
          <div class="filter-option">
            <h4 class="subtitle is-6">Тип пам'яті</h4>
            <label v-for="type in memoryTypes" :key="type">
              <input type="checkbox" :value="type" v-model="selectedMemoryTypes" />
              {{ type }} ({{ getCountByMemoryType(type) }})
            </label>
          </div>
  
          <div class="filter-option">
            <h4 class="subtitle is-6">Обсяг пам'яті</h4>
            <label v-for="capacity in memoryCapacities" :key="capacity">
              <input type="checkbox" :value="capacity" v-model="selectedCapacities" />
              {{ capacity }} ГБ ({{ getCountByCapacity(capacity) }})
            </label>
          </div>
  
          <div class="filter-option">
            <h4 class="subtitle is-6">Частота</h4>
            <label v-for="frequency in memoryFrequencies" :key="frequency">
              <input type="checkbox" :value="frequency" v-model="selectedFrequencies" />
              {{ frequency }} МГц ({{ getCountByFrequency(frequency) }})
            </label>
          </div>
  
          <div class="filter-option">
            <h4 class="subtitle is-6">Пропускна здатність</h4>
            <label v-for="bandwidth in memoryBandwidths" :key="bandwidth">
              <input type="checkbox" :value="bandwidth" v-model="selectedBandwidths" />
              {{ bandwidth }} ГБ/с ({{ getCountByBandwidth(bandwidth) }})
            </label>
          </div>
        </div>
      </div>
  
      <div class="search-filters">
        <input class="input" v-model="searchTerm" placeholder="Введіть фірму або модель" />
        <button class="button is-info" @click="search">Пошук</button>
      </div>
      
      <div class="ram-results">
        <div
          class="ram-card card"
          v-for="ram in filteredRams"
          :key="ram.id"
          @click="goToRamDetail(ram.id)"
        >
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="ram.imageUrl" :alt="ram.model" class="ram-icon" />
            </figure>
          </div>
          <div class="card-content">
            <h3 class="title is-5">{{ ram.brand }} - {{ ram.model }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ramData from '@/data/ramData';
  import Navigation from '@/components/Navigation.vue';
  
  export default 
  {
    name: 'Search',
    components: 
    {
      Navigation,
    },
    data() 
    {
      return {
        searchTerm: '',
        ramData: ramData,
        filterMenuOpen: false,
        selectedMemoryTypes: [],
        selectedCapacities: [],
        selectedFrequencies: [],
        selectedBandwidths: [],
      };
    },
    computed: 
    {
      memoryTypes() 
      {
        return [...new Set(this.ramData.map(ram => ram.memoryType))];
      },
      memoryCapacities() 
      {
        return [...new Set(this.ramData.map(ram => ram.capacity))];
      },
      memoryFrequencies() 
      {
        return [...new Set(this.ramData.map(ram => ram.frequency))];
      },
      memoryBandwidths() 
      {
        return [...new Set(this.ramData.map(ram => ram.bandwidth))];
      },
      filteredRams() 
      {
        return this.ramData.filter(ram => 
        {
          const matchesSearchTerm =
            ram.brand.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            ram.model.toLowerCase().includes(this.searchTerm.toLowerCase());
  
          const matchesMemoryType = this.selectedMemoryTypes.length === 0 || this.selectedMemoryTypes.includes(ram.memoryType);
          const matchesCapacity = this.selectedCapacities.length === 0 || this.selectedCapacities.includes(ram.capacity);
          const matchesFrequency = this.selectedFrequencies.length === 0 || this.selectedFrequencies.includes(ram.frequency);
          const matchesBandwidth = this.selectedBandwidths.length === 0 || this.selectedBandwidths.includes(ram.bandwidth);
  
          return matchesSearchTerm && matchesMemoryType && matchesCapacity && matchesFrequency && matchesBandwidth;
        });
      },
    },
    methods: {
      toggleFilterMenu() 
      {
        this.filterMenuOpen = !this.filterMenuOpen;
      },
      goToRamDetail(id) 
      {
        this.$router.push({ name: 'RamDetail', params: { id } });
      },
      getCountByMemoryType(type) 
      {
        return this.ramData.filter(ram => ram.memoryType === type).length;
      },
      getCountByCapacity(capacity) 
      {
        return this.ramData.filter(ram => ram.capacity === capacity).length;
      },
      getCountByFrequency(frequency) 
      {
        return this.ramData.filter(ram => ram.frequency === frequency).length;
      },
      getCountByBandwidth(bandwidth) 
      {
        return this.ramData.filter(ram => ram.bandwidth === bandwidth).length;
      },
    },
  };
  </script>
  
<style scoped>
.search-page 
{
    padding: 20px;
}
  
.filters 
{
    margin-bottom: 20px;
}
  
.filter-menu 
{
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 20px;
}
  
.filter-option 
{
    margin-bottom: 10px;
}
</style>  