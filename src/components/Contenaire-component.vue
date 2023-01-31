<template>
	<div class="lst-sport card border border-0  bg-light">
		<ul class="float-start">
			<li>
			<div class="card">
				<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
					<img src="@/assets/Images/Sucrerrie.jpg" width="450" class="img-fluid"/>
					<a href="#!">
						<div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
					</a>
				</div>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint
						occaecat cupidatat non proident.</p>
					<a href="#!" class="btn btn-primary">Button</a>
				</div>
			</div>
			</li>
			<li>
				<div class="card">
					<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
						<img src="@/assets/Images/Sucrerrie.jpg" width="450" class="img-fluid"/>
						<a href="#!">
							<div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
						</a>
					</div>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu
							fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident.</p>
						<a href="#!" class="btn btn-primary">Button</a>
					</div>
				</div>
			</li>
			<li>
				<div class="card">
					<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
						<img src="@/assets/Images/Sucrerrie.jpg" width="450"  class="img-fluid"/>
						<a href="#!">
							<div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
						</a>
					</div>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu
							fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident.</p>
						<a href="#!" class="btn btn-primary">Button</a>
					</div>
				</div>
			</li>
<!--			<li>
				<div class="card">
					<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
						<img src="@/assets/Images/Boisson.jpg" width="338" height="231"  class="img-fluid"/>
						<a href="#!">
							<div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
						</a>
					</div>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu
							fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident.</p>
						<a href="#!" class="btn btn-primary">Button</a>
					</div>
				</div>
			</li>-->
		</ul>
	</div>

</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Prosto+One&family=Rubik+Bubbles&display=swap');

.lst-sport {
	position: relative;
	top: 1rem;
	left: -5rem;
	border: 0px;
}


/*.lst-sport ul li p {
	font-size: 20px;
	width: 300px;
	height: 134px;
}*/



.lst-sport ul li {
	margin-left: 60px;
	list-style: none;
}

.lst-sport ul li:hover {
	margin-top: -1rem;
	transition-delay: 0.2s;
	transition-duration: 0.6s;
}

.lst-sport ul {
	display: flex;
	margin-top: 60px;
	margin-left: 0;
}
/*
@media (max-width: 1300px) {
	.lst-sport ul li img {
		width: 250px;
		height: 231px;
	}

	.lst-sport ul {
		margin-left: 3rem;
	}

	.lst-sport ul li {
		width: 280px;

	}

	.lst-sport ul li p {
		font-size: 16px;
		width: 250px;
		height: 134px;
	}

	.lst-sport ul li h3 {
		font-size: 34px;
	}
}

@media (max-width: 1156px) {
	.lst-sport ul {
		margin-left: -1rem;
	}
}

@media (max-width: 1060px) {
	.lst-sport ul {
		margin-left: -3rem;
	}

	.lst-sport ul li{
		margin-left: 20px;
	}
}
@media (max-width: 930px) {
	.lst-sport ul li img {
		width: 220px;
		height: 200px;
	}

	.lst-sport ul {
		margin-left: 1rem;
	}

	.lst-sport ul li {
		width: 250px;

	}

	.lst-sport ul li p {
		font-size: 12px;
		width: 210px;
		height: 100px;
	}

	.lst-sport ul li h3 {
		font-size: 32px;
	}
}*/
</style>