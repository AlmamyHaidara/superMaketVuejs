<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="bloc-modale" v-if="revele">
    
    <div class="overlay" v-on:click="toggleModale"></div>
    
    <!--    <router-link to="/home" class="nav-link">Acceuil</router-link>-->
    <div class="login modale">
      <button class="fa-xmarkbtn btn-modale" @click="closer()">
        <i class="fa-solid fa-xmark" id="close"></i>
      </button>
      <h2>Se connecter</h2>
      <form>
        <!-- Email input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="form1Example1">Email address</label>
          <span class="d-flex">
            <span class="ico">
              <i class="fa-solid fa-user"></i>
            </span>
            <input type="email" id="email" class="form-control" />
          </span>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4 password">
          <label class="form-label" for="form1Example2">Password</label>
          <span class="d-flex">
            <span class="ico">
              <i class="fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              id="password"
              class="form-control"
              @focusout="passwordtest()"
            />
            <span @click="passwordVisibility(this)">
              <i class="fa-solid fa-eye eye"></i>
            </span>

            <span @click="passwordInvisibility(this)">
              <i class="fa-solid fa-eye-slash eye"></i>
            </span>
          </span>
        </div>

        <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4 rowdiv">
          <div class="col d-flex justify-content-center">
            <!-- Checkbox -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
                checked
              />
              <label class="form-check-label" for="form1Example3">
                Remember me
              </label>
            </div>
          </div>

          <div class="col">
            <!-- Simple link -->
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <!-- Submit button -->
        <button
          type="submit"
          class="btn btn-primary btn-block"
          @click.prevent="data_sender()"
          >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import mitt from "mitt"
export default {
  name: "Modale-component",
  props: ["revele", "toggleModale"],
  data() {
    return {
      close: true,
    };
  },
  methods: {
    closer() {
      console.log(this.close);
      this.close = false;
      if (!this.close) {
        console.log(
          (document.querySelector(".login").parentNode.style.display = "none")
        );
        console.log(this.close);
      }
    },
    passwordVisibility() {
      console.log("ok");
      let pass = document.querySelector("#password");
      let eye = document.querySelector(".fa-eye");
      let eyeslash = document.querySelector(".fa-eye-slash");
      if (pass.getAttribute("type") == "password") {
        pass.setAttribute("type", "text");
        eye.style.display = "none";
        eyeslash.style.display = "block";
      }
    },
    passwordInvisibility() {
      let eye = document.querySelector(".fa-eye");
      let eyeslash = document.querySelector(".fa-eye-slash");
      let pass = document.querySelector("#password");
      if (pass.getAttribute("type") == "text") {
        pass.setAttribute("type", "password");
        eye.style.display = "block";
        eyeslash.style.display = "none";
      }
    },
    data_sender: async () => {
      console.log("ok");
      let pass = document.querySelector("#password").value;
      let email = document.querySelector("#email").value;
      if ((pass || email) === "") {
        console.log("pass1: " + pass);
        console.log("pass1: " + email);
        return false;
      } else {
        console.log("pass: " + pass);
        console.log("pass: " + email);
        let list_data = {
          email: email,
          password: pass,
        };
        let data = await axios.post(
          "http://localhost:3000/connection",
          list_data
        );
        console.log("data ", data.data);
        if (data.data) {
          alert("Connection is Successful");
          this.testing()
          console.log('testing',this.testing());
          
          // document.querySelector(".login").parentNode.style.display = "none";
        }else{
          alert("Votre adresse email ou votre mots de pass est incorrect")
          
        }
      }
    },
    testing: function(){
      mitt().emit("testing","Cool")
    },
    passwordtest() {
      let pass = document.querySelector("#password").value;

      if (
        pass.match(/[0-9]/g) &&
        pass.match(/[A-Z]/g) &&
        pass.match(/[a-z]/g) &&
        pass.match(/[^a-zA-Z\d]/g) &&
        pass.split("").length >= 8
      ) {
        console.log(true);
      } else {
        alert("Password");
        return false;
      }
    },
  },
};
</script>

<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  position: fixed;
  top: 2%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}

.login {
  width: 40rem;
  height: 30rem;
  margin: 5% 25%;
  background: #ffffff;
  position: center;
  border-radius: 10px;
  box-shadow: 0 10px 25px -12px #080909;
}

.login h2 {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  position: relative;
  top: 2rem;
  color: #50a8c5;
}

.form-outline {
  margin-top: 4rem;
  margin-left: 8rem;
  width: 25rem;
  height: 5rem;
}
.form-outline label {
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}
.form-outline input {
  border-radius: 0;
}
.ico {
  padding: 1rem 20px;
  color: #fff;
  font-weight: bold;
  font-size: 8px;
  background: rgba(80, 168, 197, 0.98);
}
.password {
  margin-top: 1.5rem;
}

.rowdiv {
  margin-left: 5rem;
}
.btn {
  margin-left: 10rem;
  width: 20rem;
  background: rgba(80, 168, 197, 0.98);
  border: 0;
}

.eye {
  position: absolute;
  right: 8rem;
  top: 16rem;
  cursor: pointer;
}
.fa-eye-slash {
  display: none;
}
.fa-xmark {
  font-size: 25px;
}
.fa-xmarkbtn {
  position: absolute;
  top: 1rem;
  left: 89%;
  cursor: pointer;
  background: transparent;
  border: 0;
}
</style>
