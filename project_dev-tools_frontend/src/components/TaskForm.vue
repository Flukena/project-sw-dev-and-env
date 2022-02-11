<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar icon"></i>Date
      </div>
      <input type="text" placeholder="Enter Date..." v-model="task.task1" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="bitcoin icon"></i> Symbol
      </div>
      <input type="text" placeholder="Enter Symbol" v-model="task.task2" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="arrow alternate circle left icon"></i> Entry
      </div>
      <input type="text" placeholder="Enter Entry" v-model="task.task3" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="dollar sign icon"></i> Profit/Loss
      </div>
      <input type="text" placeholder="Enter Profit/Loss" v-model="task.task4" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
   <i class="book icon"></i> Note
      </div>
      <input type="text" placeholder="Enter Note" v-model="task.task5" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>
<script>
export default {
  name: 'task-form',
  props: {
    task: {
      type: Object,
      required: false,
      default: () => {
        return {
          task1: '',
          task2: '',
          task3: '',
          task4: '',
          task5: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.task.task1 === '' || this.task.task2 === '' || this.task.task3 === '' || this.task.task4 === '' || this.task.task5 === '') {
        this.errorsPresent = true;
      } else {
        //  $emit() function that allows you to pass custom events up the component tree.
        this.$emit('createOrUpdate', this.task);
      }
    }
  }
};
</script>
<style scoped>
.error {
  color: red;
}
</style>