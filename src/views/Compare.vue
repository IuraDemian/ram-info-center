<template>

  <div class="compare-page">
    <Navigation />
    <h1 class="title has-text-centered">Порівняння RAM планок</h1>

    <div class="select-boxes">
      <div>
        <label for="ram1">Оберіть першу планку:</label>
        <select v-model="selectedRam1" @change="setRam('ram1')">
          <option disabled value="">Оберіть RAM</option>
          <option v-for="ram in ramOptions" :key="ram.id" :value="ram.id">{{ ram.brand }} {{ ram.model }}</option>
        </select>
      </div>

      <div>
        <label for="ram2">Оберіть другу планку:</label>
        <select v-model="selectedRam2" @change="setRam('ram2')">
          <option disabled value="">Оберіть RAM</option>
          <option v-for="ram in ramOptions" :key="ram.id" :value="ram.id">{{ ram.brand }} {{ ram.model }}</option>
        </select>
      </div>
    </div>

    <div class="columns is-centered">
      
      <div class="column is-half ram-column" v-if="ram1">
        <h2 class="title is-4">{{ ram1.model }}</h2>
        <p class="brand">{{ ram1.brand }}</p>
        <img :src="ram1.imageUrl" :alt="ram1.model" class="ram-image" />

        <ul>
          <li :class="compareClass('memoryType')">Тип пам'яті: {{ ram1.memoryType }}</li>
          <li :class="compareClass('capacity')">Обсяг: {{ ram1.capacity }} ГБ</li>
          <li :class="compareClass('frequency')">Частота: {{ ram1.frequency }} МГц</li>
          <li :class="compareClass('bandwidth')">Пропускна здатність: {{ ram1.bandwidth }} ГБ/с</li>
          <li :class="compareClass('voltage')">Напруга: {{ ram1.voltage }} В</li>
        </ul>
      </div>

      
      <div class="column is-half ram-column" v-if="ram2">
        <h2 class="title is-4">{{ ram2.model }}</h2>
        <p class="brand">{{ ram2.brand }}</p>
        <img :src="ram2.imageUrl" :alt="ram2.model" class="ram-image" />

        <ul>
          <li :class="compareClass('memoryType', true)">Тип пам'яті: {{ ram2.memoryType }}</li>
          <li :class="compareClass('capacity', true)">Обсяг: {{ ram2.capacity }} ГБ</li>
          <li :class="compareClass('frequency', true)">Частота: {{ ram2.frequency }} МГц</li>
          <li :class="compareClass('bandwidth', true)">Пропускна здатність: {{ ram2.bandwidth }} ГБ/с</li>
          <li :class="compareClass('voltage', true)">Напруга: {{ ram2.voltage }} В</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { fetchRamData } from '@/data/firebaseDataService';

export default 
{
  name: 'Compare',
  components: 
  {
    Navigation,
  },

  data() 
  {
    return {
      ramData: [],
      ramOptions: [],
      selectedRam1: '',
      selectedRam2: '', 
      ram1: null,
      ram2: null, 
    };
  },

  async created() 
  {
    this.ramData = await fetchRamData();
    this.ramOptions = this.ramData;
  },

  methods: 
  {
    setRam(target) 
    {
      if (target === 'ram1') 
      {
        this.ram1 = this.ramOptions.find(ram => ram.id === this.selectedRam1);
      }
      else if (target === 'ram2') 
      {
        this.ram2 = this.ramOptions.find(ram => ram.id === this.selectedRam2);
      }
    },
  
    compareClass(field, isRam2 = false) 
    {
      if (!this.ram1 || !this.ram2) return '';

      const value1 = parseFloat(this.ram1[field]);
      const value2 = parseFloat(this.ram2[field]);

      if (isNaN(value1) || isNaN(value2)) return 'equal';
      if (value1 === value2) return 'equal';
      if ((isRam2 && value2 > value1) || (!isRam2 && value1 > value2)) 
      {
        return 'better';
      }
      return 'worse';
    },
  },
};
</script>

<style scoped>
.compare-page 
{
  text-align: center;
}

.select-boxes 
{
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.ram-column 
{
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
}

.ram-image 
{
  width: 400px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.brand 
{
  font-size: 1.2em;
  color: #666;
}

.better 
{
  color: green;
}

.worse 
{
  color: red;
}

.equal 
{
  color: blue;
}
</style>