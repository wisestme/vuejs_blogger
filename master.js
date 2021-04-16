new Vue({
  el: '#vue-app',
  data:{
    name: 'Chijioke',
    job: 'Developer',
    website: 'https://www.google.com'
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
})