import {describe,test,expect} from "vitest"; // Hay que agregar referencia para que funcione vitest
import {mount} from "@vue/test-utils"; // Esto tambien se agrega con Vite
import { createRouter, createWebHistory } from "vue-router";
import ContactView from "@/views/ContactView.vue";
 
describe("ContactView", () => {
  test("Probando la existencia del componente o vista ContactView", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/contact",
          name: "contact",
          component: ContactView,
        },
      ],
    });
 
    router.push("/contact");
    await router.isReady();
 
    const wrapper = mount(ContactView, {
      global: {
        plugins: [router],
      },
    });
 
    expect(wrapper.findComponent(ContactView).exists()).toBe(true);  
  });
});