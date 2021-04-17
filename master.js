new Vue({
  el: '#vue-app',
  data:{
    name: 'Chijioke',
    job: 'Developer',
    website: 'https://www.google.com',
    websiteTag: '<a href="https://www.google.com">My website</a>',
    age: 30,
    x: 0,
    y: 0,
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    },

    addAge: function(increment){
      this.age += increment
    },
    subtractAge: function(decrement){
      this.age -= decrement
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clicker: function(){
      alert("I have been clicked");
    }
  }
})