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
			<div class="d-flex align-items-center me-5">
				<!-- Icon -->
				<a class="text-reset me-3" href="#">
					<i class="fas fa-shopping-cart"></i>
				</a>
				<div class="d-flex align-items-center">
					<router-link to="/connection">
						<button type="button" class="btn btn-light px-3 me-2" data-mdb-ripple-color="dark">Login
						</button>
					</router-link>
					<router-link to="/inscribtion">
						<button type="button" class="btn btn-primary me-3 inscribe">
							Inscription
						</button>
					</router-link>
				</div>
				<!-- Avatar -->
				<!--				<div class="dropdown">
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
									<ul
										class="dropdown-menu dropdown-menu-end "
										aria-labelledby="navbarDropdownMenuAvatar"
										style="flex-direction: column;"
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
									</ul>
								</div>-->
			</div>
			<!-- Right elements -->
		</div>
		<!-- Container wrapper -->
	</nav>
	<!-- Navbar -->
	<router-view/>
</template>

<script setup></script>


<style scoped>
.align-items-center {
	margin-right: 2rem;
}

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


.span2 li {
	padding: 10px 30px;
}




.inscribe {
	background: #50a8c5;
	border: #50a8c5;
}


.span3 li {
	padding: 10px 15px;
}


@media (max-width: 1157px) {


	.span2 li {
		padding: 10px 20px;
		font-size: 16px;
	}

	.span2 li a {
		font-size: 15px;
	}

}
@media (max-width: 800px) {

	.span2 li {
		padding: 10px 20px;
		font-size: 16px;
	}

	.span2 li a {
		font-size: 15px;
	}
}
</style>
