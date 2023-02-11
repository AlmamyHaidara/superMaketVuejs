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
            <input type="email" id="form1Example1" class="form-control" />
          </span>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4 password">
          <label class="form-label" for="form1Example2">Password</label>
          <span class="d-flex">
            <span class="ico">
              <i class="fa-solid fa-lock"></i>
            </span>
            <input type="password" id="form1Example2" class="form-control" />
            <i class="fa-solid fa-eye eye"></i>
            <i class="fa-solid fa-eye-slash eye"></i>
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
        <button type="submit" class="btn btn-primary btn-block">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
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
