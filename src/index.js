import 'babel-polyfill'
import Vue from 'vue/dist/vue.esm.js'
import { Connect } from 'uport-connect'

const uport = new Connect('MyDApp')

new Vue({
  el: '#app',
  data: {
    user: null,
  },
  methods: {
    login: function() {
      var app = this
      uport.requestCredentials().catch((e) => {
        if (e.message === 'Request Cancelled') {
          console.log(e.message)
        } else {
          throw e
        }
      }).then((credentials) => {
        if (credentials != null) {
          app.user = credentials
        }
      })
    },
    logout: function() {
      this.user = null
    },
  },
})
