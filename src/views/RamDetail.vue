<template>
  <div class="ram-detail-page">
    <Navigation />
    <div class="image-container" @click="fullScreen">
      <img :src="ramData.imageUrl" :alt="ramData.model" />
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
    <div v-if="isFullScreen" class="full-screen-image" @click="isFullScreen = false">
      <img :src="ramData.imageUrl" :alt="ramData.model" />
    </div>
  </div>
</template>

<script>
import ramData from '@/data/ramData';
import Navigation from '@/components/Navigation.vue';

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
      ramData: {},
      isFullScreen: false,
    };
  },
  created() 
  {
  const ramId = Number(this.$route.params.id);
  this.ramData = ramData.find(ram => ram.id === ramId);
  console.log("Found RAM data:", this.ramData);
  },
  methods: 
  {
    fullScreen() 
    {
      this.isFullScreen = true;
    },
  },
};
</script>