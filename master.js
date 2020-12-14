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
    y: 0
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
      console.log(event);
      this.x=event.offsetX;
      this.y = event.offsetY
    }
  }
});