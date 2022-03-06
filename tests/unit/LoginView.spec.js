import { shallowMount } from "@vue/test-utils";
import LoginView from "@/views/LoginView.vue";

describe("LoginView.vue", () => {
  it("1.  render page when input wrong account", async() => {
    const wrapper = shallowMount(LoginView);

    await wrapper.get(".email").setValue("wrong account")
    await wrapper.get("form").trigger("submit")

    expect(wrapper.find('.alert-danger').exists()).toBe(true)
    expect(wrapper.find(".alert-danger").text()).toContain('login failed');
  });


  it("2. render page when input correct account", async() => {
    const wrapper = shallowMount(LoginView, {
      props: {logedIn (flg) {
        this.logedInFlg = flg
      } },
    });

    await wrapper.get(".email").setValue("bao")
    await wrapper.get("form").trigger("submit")

    expect(wrapper.find('.alert-danger').exists()).toBe(false)
  });


  
});
