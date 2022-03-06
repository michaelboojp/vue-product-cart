import { shallowMount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";

describe("ProductCard.vue", () => {
  // 1. render product name
  it("1. renders product name", () => {
    const product = {
      id: 1,
      name: "Raddishes",
      icon: "raddish",
      price: { USD: 3.26, NOK: 17.43 },
      type: "vegetable",
    };
    const wrapper = shallowMount(ProductCard, {
      props: { product },
    });
    expect(wrapper.find(".card-title").text()).toContain(product.name);
  });

  // 2. render product name
  it("2. renders product type", () => {
    const product = {
      id: 1,
      name: "Raddishes",
      icon: "raddish",
      price: { USD: 3.26, NOK: 17.43 },
      type: "vegetable",
    };
    const wrapper = shallowMount(ProductCard, {
      props: { product },
    });
    expect(wrapper.find(".product-type").text()).toContain(product.type);
  });

  // 3. render product price
  it("2. renders product price", () => {
    const product = {
      id: 1,
      name: "Raddishes",
      icon: "raddish",
      price: { USD: 3.26, NOK: 17.43 },
      type: "vegetable",
    };
    const wrapper = shallowMount(ProductCard, {
      props: { product },
    });
    expect(wrapper.find(".product-price").text()).toContain(
      "$" + product.price.USD
    );
  });
});
