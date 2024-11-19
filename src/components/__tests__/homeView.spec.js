import {describe,test,expect} from "vitest"; // Hay que agregar referencia para que funcione vitest
import {mount} from "@vue/test-utils"; // Esto tambien se agrega con Vite
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
 
describe("HomeView", () => {
  test("Probando la existencia del componente o vista HomeView", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          name: "Home",
          component: HomeView,
        },
      ],
    });
 
    router.push("/");
    await router.isReady();
 
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    });
 
    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});