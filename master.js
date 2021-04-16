new Vue({
  el: '#vue-app',
  data:{
    name: 'Chijioke',
    job: 'Developer',
    website: 'https://www.google.com',
    websiteTag: '<a href="https://www.google.com">My website</a>'
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
})