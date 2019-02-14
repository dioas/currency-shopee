import { mount } from '@vue/test-utils'
import Home from '@/App.vue'
import Main from '@/components/AddButton'
import store from '@/store.js'

test('renders correctly', () => {
  const wrapper = mount(Home)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
test('renders correctly', () => {
  const wrapper = mount(Main)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Main)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
const wrapper = mount(Main)
wrapper.find('button').trigger('click')

test('renders correctly', () => {
  const wrapper = mount(store)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(store)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

test('renders correctly', () => {
  const wrapper = mount(Main)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Main)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
