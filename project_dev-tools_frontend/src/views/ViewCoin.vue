<template>
    <div class="all">
      <h1>View All Coins</h1>
      <input class="form-control" type="text" v-model="search" placeholder="Search" />             
      <table v-if="resources.length" class="ui celled compact table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>24h %</th>
                <th>7d %</th>
                <th>Market Cap</th>
                <th>Volume(24h)</th>
                <th>Circulating Supply</th>
            </tr>
        </thead>
            <tr v-for="(item,i) in result" :key="i">
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.day}}</td>
                <td>{{item.day7}}</td>
                <td>{{item.mc}}</td>
                <td>{{item.vol}}</td>
                <td>{{item.cs}}</td>
            </tr>
    </table>
    </div>
</template>

<script>
import { api } from '../helpers/Helpers';
// import { createChart } from 'lightweight-charts';
export default {
name: 'viewcoin',
  data() {
    return {
      search:'',
      resources:[]
    };  
  },
  async mounted() {
    this.resources = await api.getcoin();
    console.log(await api.getcoin())
  },
computed: {
    result(){
      if(this.search){
      return this.resources.filter((item)=>{
        
        return this.search.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
      })
      }else{
        return this.resources;
      }
    }
  },
// mounted () {
//     axios
//       .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => (this.info = response))
//   }
}
</script>

<style>

</style>