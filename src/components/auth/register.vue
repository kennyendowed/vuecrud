<template>
      <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Register</h2>
          <p>Create an account.</p>
        </div>

        <div class="row" data-aos="fade-in">

          <div class="col-lg-6 d-flex align-items-stretch">
          <img src="/assets/img/register.png" alt="Login" >

          </div>

          <div class="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form class="php-email-form">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
               <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">Password</label>
                <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
                <div class="form-group col-md-6">
                <label for="name">Password</label>
                <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              </div>
               <div class="mb-3 " >
                    <div class='clearfix my-4'>
       
        <div class="float-right">
            <router-link  :to="{ name: 'Login' }" ><i class="bx bx-user"></i> <span>Already have an account?</span></router-link>
        </div>
    </div>
          
     
         </div>
              <div class="text-center"><button class="btn btn-info">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->
</template>

<script>
export default {
    name: 'Register'
}
</script>