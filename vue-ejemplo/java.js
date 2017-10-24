/*jshint esversion: 6 */
const Home = { template: '<div class="page"><h1>Home</h1><div class="content"><div></div> Scroll so that this is at the top of the screen.<div></div><router-link to="/foo">Okay click me</router-link><div></div><div></div>hi mom</div></div>' }
const Foo = { template: '<div class="page"><h1>Foo!</h1><p>Okay, now use your browser\'s back button to navigate back to the home page.</p><p>If you had scrolled down previously, you will notice that when you go backwards the scroll position was saved at the top of the page rather than where you clicked the link.</p><h2>How should it work?</h2><p>Remove the transition wrapping &lt;router-view&gt;&lt;/router-view&gt; and try it again.</p><p>You will see that the scroll position is saved exactly where you followed the link</p></div>' }

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 10, y: 10}
    }
  },
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo }
  ]
})

new Vue({
	router,
  el: '#app',
  data: {
    msg: 'Hello World'
  }
})
