(function(){"use strict";var e={4139:function(e,a,t){var r=t(3751),s=t(641);const l={id:"app"},n={class:"section"},i={class:"container"};function o(e,a,t,r,o,c){const m=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("section",n,[(0,s.Lk)("div",i,[(0,s.bF)(m)])])])}var c={name:"App"},m=t(6262);const u=(0,m.A)(c,[["render",o]]);var d=u,p=t(5220),v=t(33);const h={class:"home"},y={class:"columns is-multiline"},k=["onClick"],f={class:"card"},g={class:"card-image"},C={class:"image is-4by3"},L=["src","alt"],b={class:"card-content"},_={class:"title is-5"};function w(e,a,t,r,l,n){const i=(0,s.g2)("Navigation");return(0,s.uX)(),(0,s.CE)("div",h,[(0,s.bF)(i),a[0]||(a[0]=(0,s.Lk)("h1",{class:"title has-text-centered"},"Інфоцентр Планок оперативної пам’яті",-1)),(0,s.Lk)("div",y,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.recentRams,(e=>((0,s.uX)(),(0,s.CE)("div",{class:"column is-one-quarter",key:e.id,onClick:a=>n.goToRamDetail(e.id)},[(0,s.Lk)("div",f,[(0,s.Lk)("div",g,[(0,s.Lk)("figure",C,[(0,s.Lk)("img",{src:e.imageUrl,alt:e.model},null,8,L)])]),(0,s.Lk)("div",b,[(0,s.Lk)("p",_,(0,v.v_)(e.model),1)])])],8,k)))),128))])])}t(4114);const D=[{id:1,brand:"Corsair",model:"Vengeance LPX",imageUrl:t(6634),memoryType:"DDR4",capacity:"16GB",frequency:"3200MHz",bandwidth:"25.6GB/s",voltage:"1.35V"},{id:2,brand:"G.Skill",model:"Ripjaws V",imageUrl:t(7217),memoryType:"DDR4",capacity:"32GB",frequency:"3600MHz",bandwidth:"28.8GB/s",voltage:"1.35V"},{id:3,brand:"Kingston",model:"Fury Beast",imageUrl:t(9736),memoryType:"DDR4",capacity:"16GB",frequency:"2666MHz",bandwidth:"21.3GB/s",voltage:"1.2V"},{id:4,brand:"Goodram",model:"IRDM Pro",imageUrl:t(1108),memoryType:"DDR5",capacity:"32GB",frequency:"6000MHz",bandwidth:"48GB/s",voltage:"1.35V"}];var F=D;function R(e,a,t,r,l,n){const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("nav",null,[(0,s.bF)(i,{to:"/"},{default:(0,s.k6)((()=>a[0]||(a[0]=[(0,s.eW)("Головна")]))),_:1}),(0,s.bF)(i,{to:"/search"},{default:(0,s.k6)((()=>a[1]||(a[1]=[(0,s.eW)("Пошук")]))),_:1}),(0,s.bF)(i,{to:"/compare"},{default:(0,s.k6)((()=>a[2]||(a[2]=[(0,s.eW)("Порівняти")]))),_:1})])}var T={name:"Navigation"};const E=(0,m.A)(T,[["render",R],["__scopeId","data-v-56896692"]]);var X=E,B={name:"Home",components:{Navigation:X},data(){return{recentRams:F.slice(-4)}},methods:{goToRamDetail(e){this.$router.push({name:"RamDetail",params:{id:e}})},goToSearch(){this.$router.push({name:"Search"})},goToCompare(){this.$router.push({name:"Compare"})}}};const M=(0,m.A)(B,[["render",w],["__scopeId","data-v-50b6d8aa"]]);var q=M;const O={class:"search-page"},U={class:"filters"},x={key:0,class:"filter-menu"},S={class:"filter-option"},N=["value"],A={class:"filter-option"},I=["value"],V={class:"filter-option"},G=["value"],H={class:"filter-option"},K=["value"],W={class:"search-filters"},j={class:"ram-results"},$=["onClick"],z={class:"card-image"},P={class:"image is-4by3"},Q=["src","alt"],J={class:"card-content"},Y={class:"title is-5"};function Z(e,a,t,l,n,i){const o=(0,s.g2)("Navigation");return(0,s.uX)(),(0,s.CE)("div",O,[(0,s.bF)(o),a[13]||(a[13]=(0,s.Lk)("h1",{class:"title"},"Пошук RAM",-1)),(0,s.Lk)("div",U,[(0,s.Lk)("button",{class:"button is-info",onClick:a[0]||(a[0]=(...e)=>i.toggleFilterMenu&&i.toggleFilterMenu(...e))},[a[8]||(a[8]=(0,s.eW)(" Фільтри ")),(0,s.Lk)("span",{class:(0,v.C4)(["icon",{"is-active":n.filterMenuOpen}])},a[7]||(a[7]=[(0,s.Lk)("i",{class:"fas fa-filter"},null,-1)]),2)]),n.filterMenuOpen?((0,s.uX)(),(0,s.CE)("div",x,[(0,s.Lk)("div",S,[a[9]||(a[9]=(0,s.Lk)("h4",{class:"subtitle is-6"},"Тип пам'яті",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.memoryTypes,(e=>((0,s.uX)(),(0,s.CE)("label",{key:e},[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",value:e,"onUpdate:modelValue":a[1]||(a[1]=e=>n.selectedMemoryTypes=e)},null,8,N),[[r.lH,n.selectedMemoryTypes]]),(0,s.eW)(" "+(0,v.v_)(e)+" ("+(0,v.v_)(i.getCountByMemoryType(e))+") ",1)])))),128))]),(0,s.Lk)("div",A,[a[10]||(a[10]=(0,s.Lk)("h4",{class:"subtitle is-6"},"Обсяг пам'яті",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.memoryCapacities,(e=>((0,s.uX)(),(0,s.CE)("label",{key:e},[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",value:e,"onUpdate:modelValue":a[2]||(a[2]=e=>n.selectedCapacities=e)},null,8,I),[[r.lH,n.selectedCapacities]]),(0,s.eW)(" "+(0,v.v_)(e)+" ГБ ("+(0,v.v_)(i.getCountByCapacity(e))+") ",1)])))),128))]),(0,s.Lk)("div",V,[a[11]||(a[11]=(0,s.Lk)("h4",{class:"subtitle is-6"},"Частота",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.memoryFrequencies,(e=>((0,s.uX)(),(0,s.CE)("label",{key:e},[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",value:e,"onUpdate:modelValue":a[3]||(a[3]=e=>n.selectedFrequencies=e)},null,8,G),[[r.lH,n.selectedFrequencies]]),(0,s.eW)(" "+(0,v.v_)(e)+" МГц ("+(0,v.v_)(i.getCountByFrequency(e))+") ",1)])))),128))]),(0,s.Lk)("div",H,[a[12]||(a[12]=(0,s.Lk)("h4",{class:"subtitle is-6"},"Пропускна здатність",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.memoryBandwidths,(e=>((0,s.uX)(),(0,s.CE)("label",{key:e},[(0,s.bo)((0,s.Lk)("input",{type:"checkbox",value:e,"onUpdate:modelValue":a[4]||(a[4]=e=>n.selectedBandwidths=e)},null,8,K),[[r.lH,n.selectedBandwidths]]),(0,s.eW)(" "+(0,v.v_)(e)+" ГБ/с ("+(0,v.v_)(i.getCountByBandwidth(e))+") ",1)])))),128))])])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",W,[(0,s.bo)((0,s.Lk)("input",{class:"input","onUpdate:modelValue":a[5]||(a[5]=e=>n.searchTerm=e),placeholder:"Введіть фірму або модель"},null,512),[[r.Jo,n.searchTerm]]),(0,s.Lk)("button",{class:"button is-info",onClick:a[6]||(a[6]=(...a)=>e.search&&e.search(...a))},"Пошук")]),(0,s.Lk)("div",j,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.filteredRams,(e=>((0,s.uX)(),(0,s.CE)("div",{class:"ram-card card",key:e.id,onClick:a=>i.goToRamDetail(e.id)},[(0,s.Lk)("div",z,[(0,s.Lk)("figure",P,[(0,s.Lk)("img",{src:e.imageUrl,alt:e.model,class:"ram-icon"},null,8,Q)])]),(0,s.Lk)("div",J,[(0,s.Lk)("h3",Y,(0,v.v_)(e.brand)+" - "+(0,v.v_)(e.model),1)])],8,$)))),128))])])}t(7642),t(8004),t(3853),t(5876),t(2475),t(5024),t(1698),t(8992),t(4520),t(1454);var ee={name:"Search",components:{Navigation:X},data(){return{searchTerm:"",ramData:F,filterMenuOpen:!1,selectedMemoryTypes:[],selectedCapacities:[],selectedFrequencies:[],selectedBandwidths:[]}},computed:{memoryTypes(){return[...new Set(this.ramData.map((e=>e.memoryType)))]},memoryCapacities(){return[...new Set(this.ramData.map((e=>e.capacity)))]},memoryFrequencies(){return[...new Set(this.ramData.map((e=>e.frequency)))]},memoryBandwidths(){return[...new Set(this.ramData.map((e=>e.bandwidth)))]},filteredRams(){return this.ramData.filter((e=>{const a=e.brand.toLowerCase().includes(this.searchTerm.toLowerCase())||e.model.toLowerCase().includes(this.searchTerm.toLowerCase()),t=0===this.selectedMemoryTypes.length||this.selectedMemoryTypes.includes(e.memoryType),r=0===this.selectedCapacities.length||this.selectedCapacities.includes(e.capacity),s=0===this.selectedFrequencies.length||this.selectedFrequencies.includes(e.frequency),l=0===this.selectedBandwidths.length||this.selectedBandwidths.includes(e.bandwidth);return a&&t&&r&&s&&l}))}},methods:{toggleFilterMenu(){this.filterMenuOpen=!this.filterMenuOpen},goToRamDetail(e){this.$router.push({name:"RamDetail",params:{id:e}})},getCountByMemoryType(e){return this.ramData.filter((a=>a.memoryType===e)).length},getCountByCapacity(e){return this.ramData.filter((a=>a.capacity===e)).length},getCountByFrequency(e){return this.ramData.filter((a=>a.frequency===e)).length},getCountByBandwidth(e){return this.ramData.filter((a=>a.bandwidth===e)).length}}};const ae=(0,m.A)(ee,[["render",Z],["__scopeId","data-v-7dde79bc"]]);var te=ae;const re={class:"compare-page"},se={class:"select-boxes"},le=["value"],ne=["value"],ie={class:"columns is-centered"},oe={key:0,class:"column is-half ram-column"},ce={class:"title is-4"},me={class:"brand"},ue=["src","alt"],de={key:1,class:"column is-half ram-column"},pe={class:"title is-4"},ve={class:"brand"},he=["src","alt"];function ye(e,a,t,l,n,i){const o=(0,s.g2)("Navigation");return(0,s.uX)(),(0,s.CE)("div",re,[(0,s.bF)(o),a[8]||(a[8]=(0,s.Lk)("h1",{class:"title has-text-centered"},"Порівняння RAM планок",-1)),(0,s.Lk)("div",se,[(0,s.Lk)("div",null,[a[5]||(a[5]=(0,s.Lk)("label",{for:"ram1"},"Оберіть першу планку:",-1)),(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>n.selectedRam1=e),onChange:a[1]||(a[1]=e=>i.setRam("ram1"))},[a[4]||(a[4]=(0,s.Lk)("option",{disabled:"",value:""},"Оберіть RAM",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.ramOptions,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,v.v_)(e.brand)+" "+(0,v.v_)(e.model),9,le)))),128))],544),[[r.u1,n.selectedRam1]])]),(0,s.Lk)("div",null,[a[7]||(a[7]=(0,s.Lk)("label",{for:"ram2"},"Оберіть другу планку:",-1)),(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>n.selectedRam2=e),onChange:a[3]||(a[3]=e=>i.setRam("ram2"))},[a[6]||(a[6]=(0,s.Lk)("option",{disabled:"",value:""},"Оберіть RAM",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.ramOptions,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,v.v_)(e.brand)+" "+(0,v.v_)(e.model),9,ne)))),128))],544),[[r.u1,n.selectedRam2]])])]),(0,s.Lk)("div",ie,[n.ram1?((0,s.uX)(),(0,s.CE)("div",oe,[(0,s.Lk)("h2",ce,(0,v.v_)(n.ram1.model),1),(0,s.Lk)("p",me,(0,v.v_)(n.ram1.brand),1),(0,s.Lk)("img",{src:n.ram1.imageUrl,alt:n.ram1.model,class:"ram-image"},null,8,ue),(0,s.Lk)("ul",null,[(0,s.Lk)("li",{class:(0,v.C4)(i.compareClass("memoryType"))},"Тип пам'яті: "+(0,v.v_)(n.ram1.memoryType),3),(0,s.Lk)("li",{class:(0,v.C4)(i.compareClass("capacity"))},"Обсяг: "+(0,v.v_)(n.ram1.capacity)+" ГБ",3),(0,s.Lk)("li",{class:(0,v.C4)(i.compareClass("frequency"))},"Частота: "+(0,v.v_)(n.ram1.frequency)+" МГц",3),(0,s.Lk)("li",{class:(0,v.C4)(i.compareClass("bandwidth"))},"Пропускна здатність: "+(0,v.v_)(n.ram1.bandwidth)+" ГБ/с",3),(0,s.Lk)("li",{class:(0,v.C4)(i.compareClass("voltage"))},"Напруга: "+(0,v.v_)(n.ram1.voltage)+" В",3)])])):(0,s.Q3)("",!0),n.ram2?((0,s.uX)(),(0,s.CE)("div",de,[(0,s.Lk)("h2",pe,(0,v.v_)(n.ram2.model),1),(0,s.Lk)("p",ve,(0,v.v_)(n.ram2.brand),1),(0,s.Lk)("img",{src:n.ram2.imageUrl,alt:n.ram2.model,class:"ram-image"},null,8,he),(0,s.Lk)("ul",null,[(0,s.Lk)("li",{class:(0,v.C4)(i.compareClass("memoryType",!0))},"Тип пам'яті: "+(0,v.v_)(n.ram2.memoryType),3),(0,s.Lk)("li",{class:(0,v.C4)(i.compareClass("capacity",!0))},"Обсяг: "+(0,v.v_)(n.ram2.capacity)+" ГБ",3),(0,s.Lk)("li",{class:(0,v.C4)(i.compareClass("frequency",!0))},"Частота: "+(0,v.v_)(n.ram2.frequency)+" МГц",3),(0,s.Lk)("li",{class:(0,v.C4)(i.compareClass("bandwidth",!0))},"Пропускна здатність: "+(0,v.v_)(n.ram2.bandwidth)+" ГБ/с",3),(0,s.Lk)("li",{class:(0,v.C4)(i.compareClass("voltage",!0))},"Напруга: "+(0,v.v_)(n.ram2.voltage)+" В",3)])])):(0,s.Q3)("",!0)])])}t(2577);var ke={name:"Compare",components:{Navigation:X},data(){return{ramOptions:F,selectedRam1:"",selectedRam2:"",ram1:null,ram2:null}},methods:{setRam(e){"ram1"===e?this.ram1=this.ramOptions.find((e=>e.id===this.selectedRam1)):"ram2"===e&&(this.ram2=this.ramOptions.find((e=>e.id===this.selectedRam2)))},compareClass(e,a=!1){if(!this.ram1||!this.ram2)return"";const t=parseFloat(this.ram1[e]),r=parseFloat(this.ram2[e]);return isNaN(t)||isNaN(r)||t===r?"equal":a&&r>t||!a&&t>r?"better":"worse"}}};const fe=(0,m.A)(ke,[["render",ye],["__scopeId","data-v-e4a74c68"]]);var ge=fe;const Ce={class:"ram-detail-page"},Le=["src","alt"],be={class:"memory-title title"},_e={class:"memory-details"},we=["src","alt"];function De(e,a,t,r,l,n){const i=(0,s.g2)("Navigation");return(0,s.uX)(),(0,s.CE)("div",Ce,[(0,s.bF)(i),(0,s.Lk)("div",{class:"image-container",onClick:a[0]||(a[0]=(...e)=>n.fullScreen&&n.fullScreen(...e))},[(0,s.Lk)("img",{src:l.ramData.imageUrl,alt:l.ramData.model},null,8,Le)]),(0,s.Lk)("h2",be,(0,v.v_)(l.ramData.model),1),(0,s.Lk)("div",_e,[a[2]||(a[2]=(0,s.Lk)("h3",{class:"subtitle"},"Деталі:",-1)),(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,"Тип пам'яті: "+(0,v.v_)(l.ramData.memoryType),1),(0,s.Lk)("li",null,"Обсяг: "+(0,v.v_)(l.ramData.capacity),1),(0,s.Lk)("li",null,"Частота: "+(0,v.v_)(l.ramData.frequency),1),(0,s.Lk)("li",null,"Пропускна здатність: "+(0,v.v_)(l.ramData.bandwidth),1),(0,s.Lk)("li",null,"Напруга: "+(0,v.v_)(l.ramData.voltage),1)])]),l.isFullScreen?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"full-screen-image",onClick:a[1]||(a[1]=e=>l.isFullScreen=!1)},[(0,s.Lk)("img",{src:l.ramData.imageUrl,alt:l.ramData.model},null,8,we)])):(0,s.Q3)("",!0)])}var Fe={name:"RamDetail",components:{Navigation:X},data(){return{ramData:{},isFullScreen:!1}},created(){const e=Number(this.$route.params.id);this.ramData=F.find((a=>a.id===e)),console.log("Found RAM data:",this.ramData)},methods:{fullScreen(){this.isFullScreen=!0}}};const Re=(0,m.A)(Fe,[["render",De]]);var Te=Re;const Ee=[{path:"/",name:"Home",component:q},{path:"/search",name:"Search",component:te},{path:"/compare",name:"Compare",component:ge},{path:"/ram/:id",name:"RamDetail",component:Te}],Xe=(0,p.aE)({history:(0,p.LA)("/ram-info-center/"),routes:Ee});var Be=Xe;const Me=(0,r.Ef)(d);Me.use(Be),Me.mount("#app")},6634:function(e,a,t){e.exports=t.p+"img/1.b1a520f9.png"},7217:function(e,a,t){e.exports=t.p+"img/2.2819749e.png"},9736:function(e,a,t){e.exports=t.p+"img/3.7e1ce464.png"},1108:function(e,a,t){e.exports=t.p+"img/4.f5ed4dab.png"}},a={};function t(r){var s=a[r];if(void 0!==s)return s.exports;var l=a[r]={exports:{}};return e[r].call(l.exports,l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(a,r,s,l){if(!r){var n=1/0;for(m=0;m<e.length;m++){r=e[m][0],s=e[m][1],l=e[m][2];for(var i=!0,o=0;o<r.length;o++)(!1&l||n>=l)&&Object.keys(t.O).every((function(e){return t.O[e](r[o])}))?r.splice(o--,1):(i=!1,l<n&&(n=l));if(i){e.splice(m--,1);var c=s();void 0!==c&&(a=c)}}return a}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[r,s,l]}}(),function(){t.d=function(e,a){for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/ram-info-center/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,r){var s,l,n=r[0],i=r[1],o=r[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(o)var m=o(t)}for(a&&a(r);c<n.length;c++)l=n[c],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(m)},r=self["webpackChunkram_info_center"]=self["webpackChunkram_info_center"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(4139)}));r=t.O(r)})();
//# sourceMappingURL=app.2fb48c90.js.map