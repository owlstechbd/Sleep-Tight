const mainMenu = `
        		    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
			<div class="container">
				<!-- Logo on the left -->
				<a class="navbar-brand" href="index.html">
					<img src="images/logo.svg" alt="Logo">
				</a>

				<!-- Mobile toggle button -->
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
					<i class="fas fa-bars"></i>
				</button>

				<!-- Navbar content -->
				<div class="collapse navbar-collapse" id="navbarContent">
					<!-- Menu items aligned right -->
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" href="index.html">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="about-us.html">About Us</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="service.html">Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="pest-library.html">Pest Library</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="commercial.html">Commercial</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="location.html">Locations</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="blog-single.html">Blog</a>
						</li>
						<li class="nav-item">
							<a href="contact.html" class="phone-link">
								Get a Free Estimate
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

`
document.getElementById('main-menu').innerHTML = mainMenu