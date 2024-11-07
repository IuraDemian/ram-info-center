<template>
  <div v-if="ramData" class="ram-detail-page">
    <Navigation/>
    <div class="image-container" @click="fullScreen">
      <img :src="ramData.imageUrl" :alt="ramData.model"/>
    </div>

    <h2 class="memory-title title">{{ ramData.model }}</h2>
    <div class="memory-details">
      <h3 class="subtitle">Деталі:</h3>
      <ul>
        <li>Тип пам'яті: {{ ramData.memoryType }}</li>
        <li>Обсяг: {{ ramData.capacity }}</li>
        <li>Частота: {{ ramData.frequency }}</li>
        <li>Пропускна здатність: {{ ramData.bandwidth }}</li>
        <li>Напруга: {{ ramData.voltage }}</li>
      </ul>
    </div>
    
  </div>
  <div v-else class="ram-detail-page">
    <p>Дані про обрану планку оперативної пам'яті не знайдені.</p>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { fetchRamData } from '@/data/firebaseDataService';

export default 
{
  name: 'RamDetail',
  components: 
  {
    Navigation,
  },

  data() 
  {
    return {
      ramData: [],
    };
  },

  async created() 
  {
    const ramId = this.$route.params.id;
    const allRamData = await fetchRamData();
    this.ramData = allRamData.find(ram => ram.id === ramId);
    if (!this.ramData) 
    {
      console.error("Дані про пам'ять не знайдені.");   
    }
  },
};
</script>