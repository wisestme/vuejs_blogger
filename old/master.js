// create vue instance (it controls part or whole of our app)

new Vue({
  el: '#vue-app',
  data: {
    name: 'wisestMe',
    job: 'Developer',
    website: 'https://google.com',
    websiteTag: '<a href="https://google.com">No.1 search engine</a>',
    age: 25,
    x: 0,
    y: 0,
    spanName: '',
    spanAge: '',
    a: 0,
    c: 0
  },
  methods: {
    greet: function(time) {
      return 'Hellooo, Good ' + time + ' ' + this.name;
    },

    add: function(inc) {
      this.age += inc;
    },

    subtract: function(dec) {
      this.age -= dec;
    },

    updateCoordinates: function(event){
      this.x=event.offsetX;
      this.y = event.offsetY
    },

    clickAction: function () {
      alert("Going to google");
    },

    logName(e) {
      if(e.keyCode === 9) return
      console.log("You entered your name");
   },
   logAge(e) {
       if(e.keyCode === 9) return
       console.log("You entered your age");
   },

    logName: function() {
      console.log("You entered your name");
    },

    // logAge: function() {
    //   console.log("You entered your age");
    // },

    // addToA: function(){
    //   console.log('addToA');
    //   return this.a + this.age;
    // },

    // addToC: function(){
    //   console.log('addToB');
    //   return this.c + this.age;
    //}
  },

  computed: {
    addToA: function(){
      console.log('addToA');
      return this.a + this.age;
    },

    addToC: function(){
      console.log('addToB');
      return this.c + this.age;
  }
}
});