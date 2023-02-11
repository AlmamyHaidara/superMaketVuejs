<template>
	<div>
		<div class="title_bar img-fluid">
			<h1 class="mt-4">FORMULAIRE DE CONNETION</h1>
		</div>
		<div class="input_form">
			<div class="div1 mt-0">
				<label>Firstname <span>*</span></label>
				<input
					class="form-control"
					type="text"
					placeholder="Firstname"
					id="firstname"
				/>
			</div>
			<div class="div2 mt-0">
				<label>Lastname <span>*</span></label>
				<input
					class="form-control"
					type="text"
					placeholder="Lastname"
					id="lastname"
				/>
			</div>
			<div style="display: flex; flex-direction: column">
				<div class="div3 mt-0">
					<label>Email <span>*</span></label>
					<input
						type="email"
						class="form-control email"
						id="exampleFormControlInput1 email"
						placeholder="name@example.com"
					/>
				</div>
				<div class="div4 mt-0">
					<label>Contact Number <span>*</span></label>
					<input
						class="form-control"
						type="text"
						placeholder="Default input"
						aria-label="default input example"
						id="contact"
					/>
				</div>
			</div>
			<div class="div5">
				<label>Address <span>*</span></label>
				<input
					class="form-control"
					type="text"
					placeholder="Default input"
					aria-label="default input example"
					id="address"
				/>
			</div>

			<div class="div7 mt-0">
				<label>Password <span>*</span></label>
				<input
					type="password"
					class="form-control password"
					id="inputPassword password"
				/>
			</div>
		</div>
		<div class="div8 mt-0">
      <span class="span4">
        <!--				<button @click="user()">Save</button>-->
        <input
			class="btn btn-primary btn-lg "
			type="submit"
			value="Save"
			id="btn"
			@click="user()"
		/>
      </span>
		</div>
	</div>
</template>

<script>

export default {
	name: "ConnectionViews",
	data() {
		return {
			pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
			firstname: "",
			lastname: "",
			email: "",
			contact: "",
			address: "",
			password: "",
			list_user: [],
		};
	},
	methods: {
		passwordtest(password) {

				if (password.match(/[0-9]/g) &&
					password.match(/[A-Z]/g) &&
					password.match(/[a-z]/g) &&
					password.match(/[^a-zA-Z\d]/g) &&
					(password.split('')).length >= 8) {
					console.log(true)
				} else {
					alert("Password");
					return false
				}

		},
		numbertest(number) {
			if ((number.split("")).length < 8) {
				alert("Veuillez remplire contentment le champ contact")
				return false;
			}
			console.log(true);
		},
		emailtest(email) {
			if (email.match(this.pattern)) {
				console.log(true)
			} else {
				alert("please your email is notre correctly")
				return false;
			}
		},
		user() {

			this.firstname = document.querySelector("#firstname").value
			console.log(this.firstname)
			this.lastname = document.querySelector("#lastname").value
			this.email = document.querySelector(".email").value
			this.contact = document.querySelector("#contact").value
			this.address = document.querySelector("#address").value
			this.password = document.querySelector(".password").value
			console.log(this.firstname,
				this.lastname,
				this.email,
				this.contact,
				this.address,
				this.password,)
			this.list_user = [
				this.firstname,
				this.lastname,
				this.email,
				this.contact,
				this.address,
				this.password,
			];

			if (
				(this.firstname ||
					this.lastname ||
					this.email ||
					this.contact ||
					this.address ||
					this.password) === ""
			) {

				alert("please fill in the form correctly");
				return false
			} else {
				this.numbertest(this.contact)
				this.passwordtest(this.password)
				this.emailtest(this.email);
			}
		},
	},
};
</script>

<style scoped>
.title_bar {
	width: 50%;
	height: 5rem;
	background: #50a8c5;
	margin-left: 22.5%;
	margin-top: 8rem;
	border-top-right-radius: 5px;
	border-top-left-radius: 5px;
}

h1 {
	color: #f5f5f5;
	font-weight: bold;
	font-size: 25px;
	float: left;
	margin-left: 10rem;
	font-family: sans-serif;
}

.input_form {
	width: 55%;
	height: 70vh;
	margin-left: 20rem;
	margin-top: 1rem;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
}

.div1 input,
.div2 input,
.div3 input,
.div4 input,
.div5 input,
.div6 input,
.div7 input {
	display: flex;
	flex-direction: column;
	width: 18rem;
	height: 2.5rem;
	border: 0;
	border-radius: 5px;
	background: #f3f3f3;
}

.div1 label,
.div2 label,
.div3 label,
.div4 label,
.div5 label,
.div6 label,
.div7 label {
	font-size: 18px;
	font-family: sans-serif;
	font-weight: bold;
	color: #333030;
	padding: 20px 20px 0 10px;
	position: relative;
	bottom: 0.5rem;
}

.div1 label span,
.div2 label span,
.div3 label span,
.div4 label span,
.div5 label span,
.div6 label span,
.div7 label span {
	color: #50a8c5;
}

.div1,
.div2 {
	margin-top: 1rem;
}

.div1,
.div3,
.div4,
.div6,
.div7 {
	margin-left: 3rem;
	padding: 0px 30px 0 50px;
}

.div2,
.div5 {
	margin-left: -23.5rem;
	padding: 0px 30px 0 50px;
}

.div5 {
	margin-top: -5rem;
}

.div3 input,
.div4 input {
	width: 40rem;
}

.div5 {
	grid-area: 4 / 2 / 5 / 3;
	position: relative;
	left: -21.8rem;
	width: 19rem;
	height: 4.5rem;
}

.div7 {
	grid-area: 5 / 1 / 6 / 2;
	position: relative;
	top: -10.5rem;
	left: 22rem;
}
.div2{
	margin-left: -23rem;
}

.div3,
.div4 {
	margin-top: 2rem;
}

.div8 {
	margin-top: -6.5rem;
	margin-left: 48rem;
	width: 22rem;
	height: 2.8rem;
	border: 5px;
}

.span4 input{
	background: #50a8c5;
	color: #fff;
	width: 12.4rem;
	height: 2.8rem;
	border-radius: 5px;
	border: 0;
	font-size: 18px;
	font-weight: bold;
	margin-top: -15rem;
	margin-left: -8.5rem;
	cursor: pointer;
}

.span4 input:hover {
	background: #fff;
	border: 1px solid #50a8c5;
	color: #50a8c5;
	transition: 0.8s;
}

</style>
