<template>
<div class="login" @submit.prevent="login">
    {{error}}
     <div id="nav">
      <ul class="harika">
      <li class="h"><router-link to="/">Home</router-link> </li>
       <li class="h"><router-link to="/log">Login</router-link>
    </li>
      <li class="h"><router-link to="/reg">Register</router-link></li>
      <li class="h"><router-link to="/about">About</router-link></li>
      </ul>
    </div>
<section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">LOGIN</h2>
            <h3 class="section-heading text-uppercase">Please ENTER your Login Credentials</h3>
          </div>
        </div>
        <div class="row" align="center">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input class="form-control" type="email" placeholder="Email" required="required" v-model="email">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" type="password" placeholder="Password" required="required" v-model="password">
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                   <button class="hari">
                      Login
                   </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </section>
    </div>
    </template>



<script>
import { Login } from "../models/Users";
import { Admin_Login } from "../models/Users";
export default {
    data(){
      return {
          email: '',
          password: '',
          error: ''
      }
    },
    methods: {
        login(){
            try {
                Login(this.email, this.password);
                this.$router.push('/Dash');
            } catch (error) {
                  this.error = error;
            }
            try {
                Admin_Login(this.email, this.password);
                this.$router.push('/Admin');
            } catch (error) {
                  this.error = error;
            }
        }   
    }
}



</script>

<style>

</style>