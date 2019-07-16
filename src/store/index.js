import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    myobjects:[],
    authors:[],
    id:'',
    autohr:'',
    mode:localStorage.mode_show || false,
    show_header: localStorage.show_header || false,
    authorname:localStorage.author || false,
    password:'',
    email:''
  },
  mutations: {
    tran(state,data){
    state.myobjects.push(data);
    },
    tranauthor(state,data){
      state.authors.push(data);
    },
    inputId(state,data){
    state.id=data;
    },
    mode_show(state) {
      state.mode = true
    },
    mode_hidden(state) {
      state.mode = false
    },
    inputname(state,data){
      state.authorname  = data
    }
   ,
    change_show_header(state){
   state.show_header = true
      localStorage.show_header = true
    }
  }
});


export default store
