<template>
	<!--	<nav class="float-start">
			<ul>
		  <span class="span1 mt-2">
			<img src="../assets/Images/logo.png" alt width="100" height="50"/>
		  </span>
				<span class="span2 mt-3">
	<li>
	  <router-link to="/home">Acceuil</router-link>
	</li>
	<li>
	  <router-link to="/contact">Contact</router-link>
	</li>
	<li>
	  <router-link to="/produit">Produit</router-link>
	</li>
	<li>
	  <router-link to="/about">Autre</router-link>
	</li>
	</span>
				<span class="span3 float-md-start">
					<li>
					  <router-link to="/connection">
						  <button type="button" class=" btn connect mt-2">Connection</button>
					  </router-link>
					</li>

					<li>
					  <router-link to="/inscribtion">
						  <button type="button" class=" btn inscribe mt-2">Inscription</button>
					  </router-link>
					</li>
				</span>
			</ul>
			<router-view/>
		</nav>-->


	<!-- Navbar -->
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<!-- Container wrapper -->
		<div class="container-fluid">
			<!-- Toggle button -->
			<button
				class="navbar-toggler"
				type="button"
				data-mdb-toggle="collapse"
				data-mdb-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i class="fas fa-bars"></i>
			</button>

			<!-- Collapsible wrapper -->
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<!-- Navbar brand -->
				<a class="navbar-brand mt-2 mt-lg-0" href="#">
					<img
						src="../assets/Images/logo1.png"
						height="50"
						alt="MDB Logo"
						loading="lazy"
					/>
				</a>
				<!-- Left links -->
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<!--						<a class="nav-link" href="#">Dashboard</a>-->
						<router-link to="/home" class="nav-link">Acceuil</router-link>
					</li>
					<li class="nav-item">
						<!--						<a class="nav-link" href="#">Team</a>-->
						<router-link to="/contact" class="nav-link">Contact</router-link>
					</li>
					<li class="nav-item">
						<!--						<a class="nav-link" href="#">Projects</a>-->
						<router-link to="/produit" class="nav-link">Produit</router-link>
					</li>
					<li class="nav-item">
						<!--						<a class="nav-link" href="#">Projects</a>-->
						<router-link to="/about" class="nav-link">Autre</router-link>
					</li>
				</ul>
				<!-- Left links -->
			</div>
			<!-- Collapsible wrapper -->

			<!-- Right elements -->
			<div class="d-flex align-items-center">
				<!-- Icon -->
				<a class="text-reset me-3" href="#">
					<i class="fas fa-shopping-cart"></i>
				</a>

				<!-- Notifications -->
				<div class="dropdown">
					<a
						class="text-reset me-3 dropdown-toggle hidden-arrow"
						href="#"
						id="navbarDropdownMenuLink"
						role="button"
						data-mdb-toggle="dropdown"
						aria-expanded="false"
					>
						<i class="fas fa-bell"></i>
						<span class="badge rounded-pill badge-notification bg-danger">1</span>
					</a>
					<!--					<ul
											class="dropdown-menu dropdown-menu-end"
											aria-labelledby="navbarDropdownMenuLink"
										>
											<li>
												<a class="dropdown-item" href="#">Some news</a>
											</li>
											<li>
												<a class="dropdown-item" href="#">Another news</a>
											</li>
											<li>
												<a class="dropdown-item" href="#">Something else here</a>
											</li>
										</ul>-->
				</div>
				<!-- Avatar -->
				<div class="dropdown">
					<a
						class="dropdown-toggle d-flex align-items-center hidden-arrow"
						href="#"
						id="navbarDropdownMenuAvatar"
						role="button"
						data-mdb-toggle="dropdown"
						aria-expanded="false"
					>
						<img
							src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
							class="rounded-circle"
							height="25"
							alt="Black and White Portrait of a Man"
							loading="lazy"
						/>
					</a>
					<!--					<ul
											class="dropdown-menu dropdown-menu-end"
											aria-labelledby="navbarDropdownMenuAvatar"
										>
											<li>
												<a class="dropdown-item" href="#">My profile</a>
											</li>
											<li>
												<a class="dropdown-item" href="#">Settings</a>
											</li>
											<li>
												<a class="dropdown-item" href="#">Logout</a>
											</li>
										</ul>-->
				</div>
			</div>
			<!-- Right elements -->
		</div>
		<!-- Container wrapper -->
	</nav>
	<!-- Navbar -->
	<router-view/>

</template>

<script setup>
</script>

<style scoped>
li {
	list-style: none;
}

nav {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 5rem;
	/*box-shadow: 0px 0.5px 25px -12px #777373;*/
}

nav ul {
	display: flex;
	justify-content: space-between;
}

.span2 {
	display: flex;
	margin-left: 10rem
}

.span2 li {
	padding: 10px 30px;
}

.span3 {
	display: flex;
	margin-right: 5rem;
}

.connect, .inscribe {
	border: 0;
	width: 8rem;
	height: 2.5rem;
	margin-top: -1rem;
	border-radius: 5px;
	background: #50a8c5;
	font-weight: bold;
	color: #f3f3f3;
	box-shadow: 0px 0px 24px -12px #444444;

}

.inscribe {
	border: 2px solid #50a8c5;
	background: transparent;
	color: #50a8c5;
}

.connect:hover {
	border: 1px solid #50a8c5;
	background: transparent;
	color: #50a8c5;
	transition: .8s;

}

.inscribe:hover {
	border: 0;
	background: #50a8c5;
	color: #fff;
	transition: .8s;
}

.span3 li {
	padding: 10px 15px;
}

@media (max-width: 926px) {
	.span2 {
		margin-left: 1rem;
	}

	.connect, .inscribe {
		margin-left: 2rem;
	}
}

@media (max-width: 1157px) {
	.span2 {
		margin-left: 1.5rem;
	}

	.span2 li {
		padding: 10px 20px;
		font-size: 16px;
	}

	.span2 li a {
		/*padding: 10px -8px;*/
		font-size: 15px;
	}

	.span3 {
		margin-left: 1.5rem;
	}

	.connect, .inscribe {
		width: 6rem;
		height: 2.5rem;
		font-size: 14px;
	}
}

@media (max-width: 800px) {
	.span2 {
		margin-left: 1.5rem;
	}

	.span2 li {
		padding: 10px 20px;
		font-size: 16px;
	}

	.span2 li a {
		/*padding: 10px -8px;*/
		font-size: 15px;
	}

	.span3 {
		margin-left: -1rem;
	}

	.connect, .inscribe {
		width: 6rem;
		height: 2.5rem;
		font-size: 14px;
		margin-left: 1rem;
	}

	.inscribe {
		margin-left: -1rem
	}
}
</style>