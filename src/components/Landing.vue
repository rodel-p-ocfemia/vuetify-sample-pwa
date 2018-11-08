<template>
 <div id="app">
    <v-app light>
    <v-toolbar fixed flat :class="toolbarcolor">
        <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <main>
      <section>
        <!--<v-parallax src="https://github.com/vwxyzjn/vuetify-parallax-starter2/raw/master/src/assets/background1.jpg" height="380">-->
        <v-parallax :src="require('@/assets/background1.jpg')" height="380">  
          <v-layout column align-center justify-center>
            <h2 class="teal--text text--lighten-2 mb-2">Parallax Template</h2>
            <div class="white--text headline mb-3 text-xs-center">A modern responsive front-end framework based on Material Design</div>
            <v-btn light large class="teal lighten-2 white--text" to="/">Get Started</v-btn>
          </v-layout>
        </v-parallax>

        <div id="content">
          <v-layout row wrap class="my-5" >
            <v-flex xs12 sm4>
              <v-card class="elevation-0">
                <v-card-media height="45px" class="text-xs-center">
                  <v-icon x-large class="brown--text">flash_on</v-icon>
                </v-card-media>
                <v-card-title primary-title>
                  <div class="headline text-xs-center" style="width:100%">Speeds up development</div>
                </v-card-title>
                <v-card-text>
                  We did most of the heavy lifting for you to provide
                  a default stylings that incorporate our custom components.
                  Additionally, we refined animations and transitions to 
                  provide a smoother experience for developers.
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12 sm4>
              <v-card class="elevation-0">
                <v-card-media height="45px" class="text-xs-center">
                  <v-icon x-large class="brown--text">group</v-icon>
                </v-card-media>
                <v-card-title primary-title>
                  <div class="headline text-xs-center" style="width:100%">User Experience Focused</div>
                </v-card-title>
                <v-card-text>
                  By utilizing elements and principles of Material Design, 
                  we were able to create a framework that incorporates components
                  and animations that provide more feedback to users. Additionally,
                  a single underlying responsive system across all platforms allow
                  for a more unified user experience.
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12 sm4>
              <v-card class="elevation-0">
                <v-card-media height="45px" class="text-xs-center">
                  <v-icon x-large class="brown--text">settings</v-icon>
                </v-card-media>
                <v-card-title primary-title>
                  <div class="headline text-xs-center" style="width:100%">Easy to work with</div>
                </v-card-title>
                <v-card-text>
                  We have provided detailed documentation as well as specific code
                  examples to help new users get started. We are also always open 
                  to feedback and can answer any questions a user may have about 
                  Materialize.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </section>

      <section>
        <v-parallax src="https://github.com/vwxyzjn/vuetify-parallax-starter2/raw/master/src/assets/background2.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text text-xs-center">A modern responsive front-end framework based on Material Design</div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <div id="content">
          <v-layout row wrap class="my-5" >
            <v-flex xs12>
              <v-card class="elevation-0">
                <v-card-title primary-title>
                  <div class="headline text-xs-center" style="width:100%">Contact Us</div>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. 
                  Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. 
                  Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere 
                  et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl 
                  maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida 
                  ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in 
                  faucibus orci luctus et ultrices posuere cubilia Curae;
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </section>

      <section>
        <v-parallax src="https://github.com/vwxyzjn/vuetify-parallax-starter2/raw/master/src/assets/background3.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text text-xs-center">A modern responsive front-end framework based on Material Design</div>
          </v-layout>
        </v-parallax>
      </section>


      <div id="footer" class="teal darken-1">
        <v-layout row wrap id="footer-layout" class="my-3">
          <v-flex xs12 sm6>
            <div class="headline white--text ml-3">Company Bio</div>
            <div class="white--text my-3 ml-3">
              We are a team of college students working on this project like 
              it's our full time job. Any amount would help support and continue 
              development on this project and is greatly appreciated.
            </div>
          </v-flex>
          <v-flex xs12 sm3>
            <div class="headline white--text ml-3">Settings</div>
            <div class="white--text my-3 ml-3">
              <a>Link1</a> <br>
              <a>Link2</a> <br>
              <a>Link3</a> <br>
              <a>Link4</a> <br>
            </div>
          </v-flex>
          <v-flex xs12 sm3>
            <div class="headline white--text ml-3">Connect</div>
            <div class="white--text my-3 ml-3">
              <a>Link1</a> <br>
              <a>Link2</a> <br>
              <a>Link3</a> <br>
              <a>Link4</a> <br>
            </div>
          </v-flex>
        </v-layout>
      </div>
      <footer class="teal darken-2">
        <v-layout row wrap style class="my-2" id="footer-layout">
          <v-flex xs12>
            <div class="white--text ml-3">
              Made by <span class="grey--text text--lighten-2">Costa Huang</span>
            </div>
          </v-flex>
        </v-layout>
      </footer>
    </main>
  </v-app>
</div>
</template>
<script>
export default {
     data () {
         return {
             topvar: true,
             toolbarcolor: 'transparent'
         }
     },
     methods: {        
        handleScroll (event) {        
            console.log(window.scrollY)
            if (window.scrollY >= 200)
                this.toolbarcolor = 'teal lighten-2 white--text'
            else
                this.toolbarcolor = 'transparent'
        }
     },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>
<style>
@media (min-width: 800px) {
  .toolbar__title {
    margin-left: 15%;
  }
  #content {
    width: 70%;
    margin: auto;
  }
  #footer-layout {
    width:70%!important;
    margin:auto;
  }
}
#footer-layout {
  width: 100%;
}
#subtitle {
  font-weight: 200!important;
}
#footer {
  overflow: auto;
}
.card {
  background-color: #fafafa!important;
}
footer {
  overflow: auto;
}
a {
  color: #fff;
}
</style>