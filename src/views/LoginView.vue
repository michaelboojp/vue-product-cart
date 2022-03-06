<template>
<div v-if="!loginFlag" class="alert alert-danger" role="alert">
  {{ message }}
</div>
  <form @submit.prevent="handleSubmit">
    <h1>{{title}}</h1>
    <input class="email" v-model="email"/>
    <input class="password" v-model="password" />
    <button  type="submit">Log in</button>
  </form>
</template>

<style scoped>
input {
    margin: 10px;
    display: block;
    width: 300px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

button {
    width: 200px;
    margin: 20px;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #198754;
    border-color: #198754;
}
.alert-danger {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
}
.alert {
    position: relative;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
}
</style>

<script>

export default {
  name: 'HomeView',
  data: function () {
    return {
      title: 'Login Form',
      email: 'email',
      password: 'password',
      loginFlag: true,
      message: ''
    }
  },
  props: ['logedIn'],
  methods: {
    handleSubmit () {
      if (this.email === 'bao') {
        this.loginFlag = true
        this.logedIn(true)
      } else {
        this.loginFlag = false
        this.message = 'login failed'
      }
    }
  }
}
</script>
