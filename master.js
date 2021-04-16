new Vue({
  el: '#vue-app',
  data:{
    name: 'Chijioke',
    job: 'Developer'
  },
  methods:{
    greet: function(){
      return 'Good morning';
    }
  }
})