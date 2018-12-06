new Vue({
  el:'#app',
  data:{
     signIn: {
       email    : '',
       password : ''
     },
     signup:{
       name       :'',
       email      :'',
       password   :''
     },
     itemadd:{
       title    :'',
       price    :'',
       stock    :'',
       category :''
     },
     update:{
       id       :"",
       title    :'',
       price    :'',
       stock    :'',
       category :''
     },
     updating :false,
     islogin  :false,
     allitem  :[]
   },
   created:function(){
     this.getallitem()
   },
  mounted:function(){
     M.AutoInit()
   },
  methods:{
    userSignIn:function(){
      let self = this
       axios({
         method : "POST",
         url    : "http://localhost:3000/users/userlog",
         data   : {
           email    :this.signIn.email,
           password :this.signIn.password
         }
       })
       .then(function(logginguser){
         console.log(self.allitem)
         self.signup.email     = ''
         self.signup.password  = ''
         localStorage.setItem('token',logginguser.data.token)
         self.checkLogin()
       })
       .catch(function(err){
         console.log(err.message)
       })
    },
    checkLogin:function(){
        if(localStorage.getItem("token")){
          this.islogin=true
        }else{
          this.islogin=false
        }
        return this.islogin
    },
    signupfunc:function(){
      let self=this
      axios({
        method  : "POST",
        url     : "http://localhost:3000/users/register",
        data    : {
          name      : this.signup.name,
          email     : this.signup.email,
          password  : this.signup.password
        }
      })
      .then(function(usercreated){
        this.signup.name      = ''
        this.signup.email     = ''
        this.signup.password  = ''
      })
      .catch(function(err){
        console.log(err)
      })
    },
    signout:function(){
      localStorage.clear()
      window.history.go(0)
      this.checkLogin()
    },
    getallitem:function(){
      let self=this
      axios({
        method    : "GET",
        url       : "http://localhost:3000/items/"
      })
      .then(function(items){
        self.allitem=items.data.data
      })
    },
    additem:function(){
      let self=this
      axios({
        method  : "POST",
        url     : "http://localhost:3000/items/",
        data    : {
          title     : this.itemadd.title,
          price     : this.itemadd.price,
          stock     : this.itemadd.stock,
          tags      : this.itemadd.category
        }
      })
      .then(function(){
        self.getallitem()
        self.itemadd.title = ''
        self.itemadd.price = ''
        self.itemadd.stock = ''
        self.itemadd.category = ''
      })
    },
    deleteitem:function(id){
      let self=this
      axios({
        method  :"DELETE",
        url     :`http://localhost:3000/items/${id}`
      })
      .then(function(){
        self.getallitem()
      })
    },
    findone:function(id){
      this.updating=true
      let self=this
      axios({
        method    : "GET",
        url       : `http://localhost:3000/items/${id}`
      })
      .then(function(item){
        self.update.id       =item.data.data._id,
        self.update.title    =item.data.data.title,
        self.update.price    =item.data.data.price,
        self.update.stock    =item.data.data.stock,
        self.update.category =item.data.data.tags
      })
    },
    itemupdating:function(){
      let self = this
      this.updating=false
      console.log('berhasilllll ')
      axios({
        method  :'PUT',
        url     :`http://localhost:3000/items/edit/${this.update.id}`,
        data    :{
          _id   : self.update.id       ,
          title : self.update.title   ,
          price : self.update.price    ,
          stock : self.update.stock    ,
          tags  : self.update.category
        }
      })
      .then(function(){

      })
    }

  }
})
