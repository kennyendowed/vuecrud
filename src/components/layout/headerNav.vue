<template>
   <!-- ======= Mobile nav toggle button ======= -->
      <button v-if="$route.meta.header =='header'" type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  
  </div>
</nav>
      <!-- ======= Header ======= -->
      <header id="header" v-if="$route.meta.header =='header'">
        <div class="d-flex flex-column">

          <div class="profile">
            <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">
            <h1 class="text-light"><a href="index.html">Alex Smith</a></h1>
            <div class="social-links mt-3 text-center">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <nav class="nav-menu">
            <ul>

            <router-link class="active" :to="{ name: 'Home' }"><i class="bx bx-home"></i> <span>Home</span></router-link>
              <router-link to="/about"><i class="bx bx-user"></i> <span>About</span></router-link>
              <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#portfolio"><i class="bx bx-book-content"></i> Portfolio</a></li>
              <li><a href="#services"><i class="bx bx-server"></i> Services</a></li>
             <router-link to="/contact"><i class="bx bx-envelope"></i> Contact</router-link>
               <router-link  :to="{ name: 'Login' }"><i class="bx bx-lock"></i> <span>Login</span></router-link>
                 <router-link  :to="{ name: 'Register' }"><i class="bx bx-user"></i> <span>Register</span></router-link>
             

            </ul>
          </nav><!-- .nav-menu -->
          <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

        </div>
      </header><!-- End Header -->
         <!-- ======= Breadcrumbs ======= -->
    <!-- <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Inner Page</h2>
          <ol>
             <router-link :to="{ name: 'Home' }">Home</router-link> |
                 <li>Inner Page</li>
          </ol>
        </div>

      </div>
    </section> -->
    <!-- End Breadcrumbs -->
</template>

<script>
export default {
    name:'HeaderNav'
}
</script>