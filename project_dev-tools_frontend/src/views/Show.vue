<template>
  <div>
    <h1>Show Record task</h1>
    <flash-message></flash-message>
    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="calendar icon"></i>  Date & TIME
      </div>
      <input type="text" readonly  :value="task.task1"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="bitcoin icon"></i> Symbol
      </div>
      <input type="text" readonly  :value="task.task2"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="arrow alternate circle left icon"></i> Entry
      </div>
      <input type="text" readonly  :value="task.task3"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="dollar sign icon"></i> Profit/Loss
      </div>
      <input type="text" readonly  :value="task.task4"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="book icon"></i> Note
      </div>
      <input type="text" readonly  :value="task.task5"/>
    </div>

    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit task
      </router-link>
    </div>
  </div>
</template>
<script>
import { api } from '../helpers/Helpers';
export default {
  name: 'show',
  data() {
    return {
      task: ''
    };
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
  }
};
</script>
<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>