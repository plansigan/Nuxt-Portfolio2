<template>
  <div>
    <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#section-about" class="navigation__link"><span>01</span>About Paolo</a></li>
                    <li class="navigation__item"><a href="#section-projects" class="navigation__link"><span>02</span>Projects</a></li>
                    <li class="navigation__item"><a href="#section-skills" class="navigation__link"><span>03</span>Skills</a></li>
                    </ul>
            </nav>
        </div>
    <header class="header">
      <div class="bg-video bg-video__header">
        <video class="bg-video__content" autoplay muted loop preload="auto">
          <source src="https://nuxt-portfolio-e5e32.firebaseapp.com/videos/video2.mp4" type="video/mp4">
          Your Browser is not supported!
        </video>
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
            <span class="heading-primary--main">UX/UI</span>
            <span class="heading-primary--sub">Full Stack Web Developer</span>
        </h1>

        <a href="#section-tours" class="btn draw-border">Contact me</a>
      </div>
    </header>
    <main>
      <section class="section-about" id="section-about">
        <div class="u-center-text text-white">
          <h1 class="heading-secondary mb-5 mt-3">
              ABOUT PAOLO
            </h1>
            <b-row>
              <b-col><h3 class="heading-3rd">My Career began at Ortigas creating and designing robust applications and now I work as a freelancer.</h3></b-col>
            </b-row>
            <b-row>
              <b-col class="heading-3rd--container"><h3 class="heading-3rd heading-3rd--underline">I wonder what's next...</h3></b-col>
            </b-row>
        </div>
        <b-container>
          <div class="u-center-text">
            <b-row class="text-white">
              <b-col sm="12" lg="4">
                <div class="about about-1">
                  <p>
                    Born in Valenzuela, Philippines and graduated at Asia Pacific College in Bachelor's Degree of Information Technology.
                  </p>
                </div>
              </b-col>
              <b-col sm="12" lg="4">
                <div class="about about-2">
                  <p>
                    Usually attends conventions but nowadays prefers drinking with friends and colleague.
                  </p>
                </div>
              </b-col>
              <b-col sm="12" lg="4">
                <div class="about about-3">
                  <p>
                    Travels to Japan to have a vacation. 
                    The country is so peaceful and I plan to work there in the near future.
                  </p>
                </div>
              </b-col>
            </b-row>

            <b-row>
              <b-col class="btn-projects">
                <a href="#section-projects" class="btn draw-border"><i class="fas fa-sort-down" style="padding-right:2%;position:relative;top:-3px"></i>Projects done</a>
              </b-col>
            </b-row>
           </div>
        </b-container>
            
      </section>
      <section class="section-projects" id="section-projects">
        <div class="section-projects__inner">
          <div class="u-center-text text-white container">
            <h1 class="mb-4">PROJECTS</h1>
            <p>I've built and handled 7 projects from small to large scale websites in the past 4 years of my career. And most of them are created in Javascript! </p>
            <p>Most of the projects created can only be access through the client's IP using VPN. but here's my github page for my other works.</p>
            <a href="https://github.com/plansigan" target="__blank" class="btn draw-border-dark mt-5">GITHUB</a>

            <p class="mt-5 mb-5">Calcmenu Web is by far the largest website I've ever handled because it involves calculations,printing,displays a lot of data, and many more!</p>
            <b-img src="/img/projects/calcmenu.jpg" fluid alt="Responsive image"></b-img>
            <p>(of course the image is edited. but that's the sample interface)</p>
          </div>
          
        </div>
      </section>
      <section class="section-skills text-white" id="section-skills">
        <div class="bg-video">
          <video class="bg-video__content" autoplay muted loop preload="auto">
            <source src="https://nuxt-portfolio-e5e32.firebaseapp.com/videos/video1.mp4" type="video/mp4">
            Your Browser is not supported!
          </video>
        </div>
        <div class="u-center-text mb-5 container">
          <h1 class="mb-4">SKILLS</h1>
          <p>Javascript developer that can also design. I like creating websites and also designing them as if I'm the client and emits what's hot and what's not.</p>
          <p>My current toolset in creating these websites are VueJS,Bootstrap,NodeJS,Firebase,ChartJS</p>
        </div>

        <b-container>
          <div class="pie-chart mt-5">
            <h3>SKILL DISTRIBUTION</h3>
            <hr>
            <chart></chart>
          </div>
        </b-container>

      </section>
    </main>

    <footer class="footer">
        <b-row>
          <b-col class="u-center-text mt-5">
            <h2>Thanks!</h2>
            <p>Want to chat about something?</p>
            <a href="#section-tours" class="btn draw-border">Contact me</a>
            <div class="social m-3">
              <i class="icofont-twitter social-icons"></i>
              <i class="icofont-instagram social-icons"></i>
              <i class="icofont-github social-icons"></i>
              <i class="icofont-google-plus social-icons"></i>
            </div>
            <p class="copyright mt-4">Created using nuxtJS by Paolo Lansigan</p>
          </b-col>
        </b-row>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import chart from '~/components/chart/chart.vue'


export default {
  components: {
    Logo,
    chart
  }
}
</script>
