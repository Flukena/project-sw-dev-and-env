<template>
    <div>
      <h1>View All Coins</h1>
      <input class="form-control" type="text" v-model="search" placeholder="Search" />             
      <table class="ui celled compact table">
      <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
        </tr>
      </thead>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </table>
    <!-- <table id="tasks" class="ui celled compact table">
      <thead>
        <tr>
            <th>วัน/เดือน/ปี</th>
            <th>ล่าสุด</th>
            <th>ราคาเปิด</th>
            <th>สูงสุด</th>
            <th>ต่ำสุด</th>
            <th>ปริมาณ</th>
            <th>เปลี่ยน</th>
        </tr>
      </thead>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </table> -->
    <table v-if="resources.length" class="ui celled compact table">
                <thead>
                    <tr>
                        <th>Resource</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,i) in resources" :key="i">
                        <td><a v-bind:href="item.uri" target="_blank">{{item.title}}</a></td>
                    </tr>
                </tbody>
    </table>
    <h2>Coment</h2>
    </div>
</template>

<script>
// import { api } from '../helpers/Helpers';
// import { createChart } from 'lightweight-charts';
export default {
name: 'viewcoin',
  data() {
    return {
      search:'',
      resources:[
            {title:"ABE Attendance",uri:"aaaa.com",category:"a",icon:null},
            {title:"Accounting Services",uri:"aaaa.com",category:"a",icon:null},
            {title:"Administration",uri:"aaaa.com",category:"a",icon:null},
            {title:"Advanced Student Lookup",uri:"bbbb.com",category:"b",icon:null},
            {title:"Art & Sciences",uri:"bbbb.com",category:"b",icon:null},
            {title:"Auxiliares Services",uri:"bbbb.com",category:"b",icon:null},
            {title:"Basic Skills",uri:"cccc.com",category:"c",icon:null},
            {title:"Board of Trustees",uri:"dddd.com",category:"d",icon:null}
        ]
    };
  },
computed: {
    result(){
      if(this.search){
      return this.resources.filter((item)=>{
        return this.search.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }else{
        return this.resources;
      }
    }
  }
}
</script>

<style>

</style>