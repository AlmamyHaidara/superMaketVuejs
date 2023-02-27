
<template>
  <div class="log">
    <button class="fa-xmarkbtn" @click="closer()">
      <i class="fa-solid fa-xmark" id="close"></i>
    </button>
<!--    <router-link to="/home" class="nav-link">Acceuil</router-link>-->
    <div class="login">
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
        <button >Click moi</button>
        <button type="submit" class="btn btn-primary btn-block"  >Sign in</button>
      </form>
    </div>
  </div>
	<router-view/>

</template>

<script>
export default {
  name: "ConnectionViews",
  data() {
    return {
        close:true,
    }
  },
	methods: {
		closer(){
			console.log(this.close)
			this.close = false;
			if (!this.close){
				console.log(document.querySelector(".login").parentNode.style.display = "none")
				console.log(this.close)
			}
		},Afficher(){console.log('Bonjour');}
	}
  
}
</script>

<style scoped>
:root {
  --color1: #50a8c5;
  --color2: #50a8c5;
}
.log {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  /*z-index: 2000;*/
  position: absolute;
  top: 0;
  /*opacity: 0.5;*/
}

.login {
  width: 50rem;
  height: 40rem;
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
  margin-top: 8rem;
  margin-left: 13rem;
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
  margin-left: 6rem;
}
.btn {
  margin-left: 15rem;
  width: 20rem;
  background: rgba(80, 168, 197, 0.98);
}

.eye {
  position: absolute;
  right: 35rem;
  top: 24.6rem;
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
  top: 5.5rem;
  left: 74.5%;
  cursor: pointer;
  background: transparent;
  border: 0;
}
</style>

