// create vue instance (it controls part or whole of our app)

new Vue({
  el: '#vue-app',
  data: {
    name: 'wisestMe',
    job: 'Developer',
    website: 'https://google.com',
    websiteTag: '<a href="https://google.com">No.1 search engine</a>',
    age: 25
  },
  methods: {
    greet: function(time) {
      return 'Hellooo, Good ' + time + ' ' + this.name;
    }
  }
});