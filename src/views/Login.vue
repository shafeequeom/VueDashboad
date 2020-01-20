<template>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="login()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-snackbar
        v-model="snackbar"
        :bottom="'bottom'"
        :color="color"
        :left="null"
        :multi-line="'multi-line'"
        :right="null"
        :timeout="4000"
        :top="'top'"
        :vertical="'vertical'"
      >
        {{ message }}
        <v-btn
          dark
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-content>
</template>
<script>
export default {
  data(){
    return{
      email: null,
      password: null,
      snackbar: false,
      message: "",
      color: "red"
    }
  },
  methods: {
    login(){
      if (!this.email || !this.password) {
        if (!this.password){
          this.message='Password required. Please password for your email.';
          this.snackbar = true;
        }
        if (!this.email){
          this.message='Email required. Please fill email field';
          this.snackbar = true;
        }

      } else if (!this.validateEmail(this.email)) {
        this.message='Valid email required. Please enter a valid email address';
        this.snackbar = true;
        this.errors.push('');
      }else{
        this.$router.push({ name: "dashboard" });
      }
    },
    validateEmail(email) {
      // eslint-disable-next-line no-useless-escape
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

  }
}
</script>
