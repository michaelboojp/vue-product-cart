<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">

      <router-link v-if="!logedInFlg" to="/" class="top-bar-link">
        <span>Log In</span>
      </router-link>
      <router-link v-if="logedInFlg" to="/home" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link v-if="logedInFlg" to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>

    </nav>
    <a @click="toggSideBar()" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantaty}})</span>
    </a>
  </header>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
  <router-view :inventory="inventory" :addToCart="addToCart"  :logedIn="logedIn" />
  <SidebarComponent
    v-if="showSideBar"
    :toggle="toggSideBar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue'
import food from './food.json'

export default {
  components: {
    SidebarComponent
  },
  data () {
    return {
      showSideBar: false,
      inventory: food,
      logedInFlg: false,
      cart: {}
    }
  },
  computed: {
    totalQuantaty () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }

  },
  methods: {
    addToCart (name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
    },
    toggSideBar () {
      this.showSideBar = !this.showSideBar
    },
    removeItem (name) {
      delete this.cart[name]
    },
    logedIn (flg) {
      this.logedInFlg = flg
    }
  }
}
</script>
