<template>
    <div>
      <h1>View All Coins</h1>
      <table id="tasks" class="ui celled compact table">
      <thead>
        <tr>
            <th><i></i>Name</th>
            <th>ตลาดแลกเปลี่ยน</th>
            <th>ล่าสุด</th>
            <th>สูงสุด</th>
            <th>ต่ำสุด</th>
            <th>เปลี่ยน</th>
            <th>ปริมาณ</th>
            <th>เวลา</th>
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
     <table id="tasks" class="ui celled compact table">
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
    </table>
    <h2>Coment</h2>
    </div>
</template>

<script>
// import { api } from '../helpers/Helpers';
export default {
name: 'viewcoin',
  data() {
    return {
      task: ''
    };
  },
//   async mounted() {
//     this.task = await api.gettask(this.$route.params.id);
//   }
}
</script>

<style>

</style>