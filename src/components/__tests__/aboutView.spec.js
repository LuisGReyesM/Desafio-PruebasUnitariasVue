import {describe,test,expect} from "vitest"; // Hay que agregar referencia para que funcione vitest
import {mount} from "@vue/test-utils"; // Esto tambien se agrega con Vite
import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
 
describe("AboutView", () => {
  test("Probando la existencia del componente o vista AboutView", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/about",
          name: "AboutView",
          component: AboutView,
        },
      ],
    });
 
    router.push("/about");
    await router.isReady();
 
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });
 
    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});