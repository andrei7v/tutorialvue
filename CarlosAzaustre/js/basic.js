const app = new Vue({
  el:'#app',
  template: '#ejemplo',
  data:{
    cursos:[
      { name: "Fundamentos de React", url: 'http://cursos.carlosazaustre.es/p/react-js' },
      { name: "Redux con React", url: 'http://cursos.carlosazaustre.es/p/curso-profesional-de-redux-y-react' },
      { name: "React Native", url: 'http://cursos.carlosazaustre.es/p/react-native' },
    ],
    mostrar: true,
    mensaje : "Hola Vue.js",
    imagen: "https://yomotherboard.com/wp-content/uploads/2015/02/laravel.png"
  },
  methods:{
    toggleMostrar: function(){
      this.mostrar = !this.mostrar
    }
  }
})
