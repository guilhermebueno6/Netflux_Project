// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {
        // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      // isAdmin: true,
      // isLoggedIn: true,
      // // avatar: 'thor.png' -> this one uses the image
      // avatar: null
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],
    videoTitle: "video title goes here",
    videoDescription: "vid Desc goes here",
    videoSource: "",

    showDetails: false
  },

  created: function(){
    //vue instance is ready tog o, mostly ~ add some live data to the VM
    console.log('created lefecycle hook fired, go get user data')
    this.fetchUsers();
  },

  methods: {
    logInOut() {
      //test login / logout UI -> button should change color
      //eventually we'll use routing and a login component
      console.log('do login / logout on Click');

      //? : is a ternary statement (shorthand for if / else
      //evaluate the expressiom; if its true use the value to the left of the colon.
      //if its false, use the value to the right
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    setUserPrefs() {
      console.log('set user Preferences via routing and probably a component');

    },
//this is ES6 data destructuring - pull the keys and values you need, not the whole object
    loadMovie({name, description, vidsource}) {
      console.log('show movie details');

      this.videoTitle = name;
      this.videoDescription = description;
      this.videoSource = vidsource;

      this.showDetails = true;
    },

    fetchUsers(){
      //get our user data here and push it back  into the VM
      console.log('fetch user data here');
      //push our user into the VW

      const url = './includes/index.php?user=true';
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.user[0];
      })
      .catch((err) => console.log(err))
    }

  }
});
