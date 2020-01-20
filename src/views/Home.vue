<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="3">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="80" tile>
              <v-sparkline
                :value="item.spalike.value"
                :gradient="item.spalike.gradient"
                :smooth="item.spalike.radius || false"
                :padding="item.spalike.padding"
                :line-width="item.spalike.width"
                :stroke-linecap="item.spalike.lineCap"
                :gradient-direction="item.spalike.gradientDirection"
                :fill="item.spalike.fill"
                :type="item.spalike.type"
                :auto-line-width="item.spalike.autoLineWidth"
                auto-draw
              ></v-sparkline>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="8">
        <v-card height="405px">
          <v-card-title>
            <v-btn icon>
              <v-icon>mdi-poll</v-icon>
            </v-btn>
            User Visits
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="barType"
              v-on:change="changeBarChart"
              tile
              color="deep-purple accent-3"
              group
            >
              <v-btn value="week">
                Weekly
              </v-btn>

              <v-btn value="month">
                Monthly
              </v-btn>

              <v-btn value="year">
                Yearly
              </v-btn>
            </v-btn-toggle>
          </v-card-title>
          <v-container>
            <column-chart :data="barData"></column-chart>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card height="405px">
          <v-card-title>
            <v-btn icon>
              <v-icon>mdi-chart-pie</v-icon>
            </v-btn>
            User Stats
            <v-spacer></v-spacer>
            <v-switch
              v-model="pieType"
              v-on:change="changePieChart"
              label="Anonymous"
            ></v-switch>
          </v-card-title>
          <pie-chart
            :data="pieChart"
            :colors="['#ef7d0e', '#378d3b', '#e23e3d', '#21b2c6']"
          ></pie-chart>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col col="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Company</th>
                <th class="text-left">Job Title</th>
                <th class="text-left">Email</th>
                <th class="text-left">Phone</th>
                <th class="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in users" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.job }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>
                  <v-btn text icon color="green" @click="viewData(index)">
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                  <v-btn text icon color="red" @click="deleteData(index)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="blue white--text">
          Create contact
        </v-card-title>
        <v-container grid-list-sm>
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  />
                </v-avatar>
                <v-text-field placeholder="Name" v-model="name"></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="mdi-domain"
                placeholder="Company"
                v-model="company"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="Job title"
                v-model="job"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mdi-email"
                placeholder="Email"
                v-model="email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="mdi-phone"
                placeholder="(000) 000 - 0000"
                v-model="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mdi-text"
                placeholder="Notes"
                v-model="notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn bottom color="pink" dark fab fixed right @click="openDialog">
      <v-icon>mdi-account-multiple-plus</v-icon>
    </v-btn>
  </v-container>
</template>
<script>
const gradients = [["#222"]];
export default {
  data: () => ({
    dialog: false,
    show: false,
    gradients,
    pieChart: null,
    items: null,
    users: null,
    barData: null,
    name: "FFFFF",
    company: null,
    email: null,
    job: null,
    phone: null,
    notes: null,
    barType: "week",
    pieType: null
  }),
  methods: {
    viewData(index) {
      // eslint-disable-next-line no-console
      let data = this.users[index];
      this.name = data.name;
      this.job = data.job;
      this.company = data.company;
      this.email = data.email;
      this.phone = data.phone;
      this.notes = data.notes;
      this.dialog = true;
    },
    deleteData(index) {
      this.users.splice(index, 1);
    },
    changeBarChart() {
      this.$http
        .get(process.env.VUE_APP_BASE_URL + "json/" + this.barType + ".json")
        .then(res => {
          this.barData = res.data;
        });
    },
    changePieChart() {
      this.$http
        .get(process.env.VUE_APP_BASE_URL + "json/pie.json")
        .then(res => {
          if (this.pieType) {
            this.pieChart = res.data[0];
          } else {
            this.pieChart = res.data[1];
          }
        });
    },
    openDialog() {
      this.name = null;
      this.job = null;
      this.company = null;
      this.email = null;
      this.phone = null;
      this.notes = null;
      this.dialog = true;
    }
  },
  mounted: function() {
    this.$http
      .get(process.env.VUE_APP_BASE_URL + "json/week.json")
      .then(res => {
        this.barData = res.data;
      });
    this.$http.get(process.env.VUE_APP_BASE_URL + "json/pie.json").then(res => {
      this.pieChart = res.data[1];
    });
    this.$http
      .get(process.env.VUE_APP_BASE_URL + "json/stats.json")
      .then(res => {
        this.items = res.data;
      });
    this.$http
      .get(process.env.VUE_APP_BASE_URL + "json/users.json")
      .then(res => {
        this.users = res.data;
      });
  }
};
</script>
