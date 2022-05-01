import { mount,shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

import TaskForm from "@/views/Tasks.vue";
describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    
    const wrapper = mount(TaskForm, {
      data: {
        tasks: ["sadas"]
      }
    });
    expect(wrapper.text()).toContain(`You don't have any record!.`);
  });
});