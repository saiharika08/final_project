<template>

  <div class="home">
  
     <div id="nav">
      <ul class="harika">
      <li class="h"><router-link to="/">Home</router-link> </li>
       <li class="h"><router-link to="/log">Login</router-link>
    </li>
      <li class="h"><router-link to="/reg">Register</router-link></li>
      <li class="h"><router-link to="/about">About</router-link></li>
      </ul>
    </div>
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Welcome to Online Fitness Tracker</div>
          <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
          <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#about">Tell Me More</a>
        </div>
      </div>
    </header>

    <!-- Portfolio Grid -->
    <Portfolio></Portfolio>

    <!-- About -->
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">About Us</h2>
            <h3 class="section-subheading text-muted">Building of Fitness Tracker</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <h4><br>The beginning</h4>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>Jan 23 2020</h4>
                    <h4 class="subheading">Our Beginnings</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">We Started attending the Web Server Programing,and learned about the Visual Studio Code and the GitHub </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h4><br>Step 1</h4>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>Feb 12 2020</h4>
                    <h4 class="subheading">CSS Dropdown menu</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">We had created a dropdown menu by using a basic web page with drop down menu as thought by our Professor</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-image">
                  <h4><br>Step 2</h4>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>Mar 4 2020</h4>
                    <h4 class="subheading">Creating Vue Client</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">With the help of our Professor we have initiated to build a client side User-Interface, which is this</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h4><br>Step 3</h4>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>Mar 11 2020</h4>
                    <h4 class="subheading">Vue Front End</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">Finally I have created a front-end but without a back-end, I will try to work on it during my spring break.<br> Thank you</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h4>Back End
                    <br>Yet
                    <br>To be Done!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->

    <!-- Clients -->


    <!-- Contact -->
    

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; Harika's website 2020</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-inline quicklinks">
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <!-- Portfolio Modals -->

    <!-- Modal 1 -->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fas fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal 2 -->
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">H&S Fitness Tracker</h2>
                  <p class="item-intro text-muted">Keep Track of fitness and share it among Friends</p>
                  <img class="img-fluid d-block mx-auto" src="img/portfolio/02-full.jpg" alt="">
                  <p>Lacking motivation to get back into the gym? Back in the gym already but feel stagnated? Or maybe you’re just looking for new inspiration for a the new year. Whatever your situation, reading words of wisdom from successful people can be super-inspiring.</p>
                  <ul class="list-inline">
                    <li>Date: March 12 2020</li>
                    <li>Project by: Harika Tadi</li>
                    <li>Category: WSP</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fas fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from '../components/Porfolio'

export default {
  name: 'app',
  components: {
    Portfolio
  }
};
</script>
