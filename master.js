new Vue({
  el: '#vue-app',
  data:{
    name: 'Chijioke',
    job: 'Developer',
    website: 'https://www.google.com',
    websiteTag: '<a href="https://www.google.com">My website</a>',
    age: 30,
    ages: '',
    x: 0,
    y: 0,
    a: 2,
    b: 4,
    available: false,
    nearby: false
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
    },
    logName: function(){
      console.log("my name")
    },
    logAge: function(){
      console.log("my age")
    }
  },
  computed: {
    addToA: function(){
      return this.age + this.a;
    },
    addToB: function(){
      return this.age + this.b;
    }
  }
})