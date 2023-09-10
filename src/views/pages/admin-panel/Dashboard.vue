<template>
  <div>
    <!-- <vs-popup class="holamundo info-popup" :active.sync="isPopup">
      <div class="pop-up-modal">
        <div class="vx-row">
          <div class="vx-col">
            <h3>{{ $t("product.your_qr_code") }}.</h3>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col flex mx-auto">
            <vs-button
              color="success"
              type="filled"
              class="vs-button-silva m-1 mt-3"
              @click="closeReasonPopup()"
              >{{ $t("Okay") }}</vs-button
            >
          </div>
        </div>
      </div>
    </vs-popup> -->
    <!-- <div class="s__dashboard" :disabled="button_loading" id="page-loading">
      <div class="vx-row">
        <div class="vx-col w-full mb-base">
          <div class="vx-card">
            <div class="dashboard-welcome">
              <h2>{{ $t("dashboard.strings.heading") }}</h2>
              <p>{{ $t("dashboard.strings.dec") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="vx-row">
        <div
          class="vx-col w-full odd-color sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mb-base"
        >
          <div class="vx-row title">
            <div class="vx-col">
              <h3>{{ $t("dashboard.strings.title2") }}</h3>
            </div>
          </div>
          <div class="vx-row dashboard-graph">
            <div
              class="vx-col w-full odd-color sm:full md:w-full lg:w-1/2 xl:w-1/2 mb-base"
            >
              <statistics-card-line
                imageName="statastic-1.png"
                :statistic="parseFloat(statements.balance) | addZeroes"
                :statisticTitle="$t('dashboard.strings.balance')"
                :chartData="subscribersGained.series"
                type="area"
                background="#82E0DD"
              ></statistics-card-line>
            </div>

            <div
              class="vx-col w-full even-color sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mb-base"
            >
              <statistics-card-line
                imageName="statastic-2.png"
                :statistic="parseFloat(statements.overdraftLimit) | addZeroes"
                :statisticTitle="$t('dashboard.strings.overdraft')"
                :chartData="ordersRecevied.series"
                background="#379B98"
                type="area"
              ></statistics-card-line>
            </div>
            <div
              class="vx-col w-full odd-color sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mb-base"
            >
              <statistics-card-line
                imageName="statastic-3.png"
                :statistic="TotalExpense | addZeroes"
                :statisticTitle="$t('dashboard.strings.total_expense')"
                :chartData="subscribersGained.series"
                type="area"
                background="#1E8D9B"
                class="down-arrow"
              ></statistics-card-line>
            </div>
            <div
              class="vx-col w-full even-color sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mb-base"
            >
              <statistics-card-line
                imageName="statastic-4.png"
                :statistic="TotalDeposits | addZeroes"
                :statisticTitle="$t('dashboard.strings.total_deposits')"
                :chartData="ordersRecevied.series"
                background="#334055"
                type="area"
              ></statistics-card-line>
            </div>
          </div>
        </div>
        <div
          v-if="!$store.state.profile.employeeLogin"
          class="vx-col w-full odd-color sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mb-base"
        >
          <div class="vx-row title">
            <div class="vx-col">
              <h3>{{ $t("dashboard.strings.qrcodetitle") }}</h3>
            </div>
          </div>
          <div class="vx-card padding-card-5">
            <vx-tooltip
              class="info-icon"
              :title="$t('dashboard.strings.information')"
              color="information"
              :text="$t('dashboard.strings.tooltip_text')"
              position="left"
            >
              <div class="info-icon"></div>
            </vx-tooltip>

            <div class="qr-card">
              <vs-avatar
                color="primary"
                v-if="businessName"
                :text="businessName.substring(0, 1).toUpperCase()"
              />
              <img
                :src="
                  'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=' +
                    'B:' +
                    userid +
                    '&choe=UTF-8'
                "
                @click="downloadImage()"
                style="cursor: pointer"
                alt="QR code"
              />
              <p class="text-center">{{ capitalize(businessName) }}</p>
            </div>
          </div>
        </div>
        <div
          v-else
          class="vx-col w-full odd-color sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mb-base"
        >
          <div class="vx-row title">
            <div class="vx-col">
              <h3>{{ $t("dashboard.strings.qrcodetitle") }}</h3>
            </div>
          </div>
          <div class="vx-card padding-card-5">
            <vx-tooltip
              class="info-icon"
              :title="$t('dashboard.strings.information')"
              color="information"
              :text="$t('dashboard.strings.tooltip_text')"
              position="left"
            >
              <div class="info-icon"></div>
            </vx-tooltip>

            <div class="qr-card">
              <vs-avatar
                color="primary"
                v-if="employeeName"
                :text="employeeName.substring(0, 1).toUpperCase()"
              />
              <img
                :src="
                  'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=' +
                    'EM:' +
                    userid +
                    '&choe=UTF-8'
                "
                @click="downloadImage()"
                style="cursor: pointer"
                alt="QR code"
              />
              <p class="text-center">{{ employeeName }}</p>
            </div>
          </div>
        </div>
      </div>

      <dashboardtable></dashboardtable>
    </div> -->
  <h1>hello</h1>
  </div>
</template>
​
<script>
// import QrcodeVue from "qrcode.vue";
// import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
// import DashboardTable from "./DashboardTable";
// import axios from "@/axios.js";

// export default {
//   data() {
//     return {
//       employeeName: "",
//       businessName: "",
//       subscribersGained: {},
//       ordersRecevied: {},
//       Conditions: [],
//       statements: {},
//       accoun_no: null,
//       userid: "",
//       TotalExpense: 0,
//       isPopup: false,
//       TotalDeposits: 0,
//       scanUrl:
//         "https://api.test.silvatree.co/account/statement?accountId=54d63335-7a24-4ae7-bbb2-d3755fadb7e2"
//     };
//   },
//   components: {
//     StatisticsCardLine,
//     dashboardtable: DashboardTable,
//     QrcodeVue
//   },
//   mounted() {
//     this.accoun_no = JSON.parse(localStorage.getItem("User_id"));
//     this.userid = this.accoun_no.UserSub;
//     this.GetBusinessTableData();
//     this.GetAccountStatment();
//   },

//   created() {
//     if (
//       localStorage.getItem("ipCountryCode" == "ID") ||
//       localStorage.getItem("ipCountry") == "Indonesia"
//     ) {
//       if (localStorage.getItem("localeIdUser") != null) {
//         this.$store.dispatch(
//           "localisation/newLocale",
//           localStorage.getItem("localeIdUser")
//         );
//         this.$i18n.locale = localStorage.getItem("localeIdUser");
//       } else {
//         this.$store.dispatch("localisation/newLocale", "id");
//         this.$i18n.locale = "id";
//       }
//     }
//   },

//   methods: {
//     closeReasonPopup() {
//       this.isPopup = false;
//     },

//     openConfirmPopup() {
//       this.isPopup = true;
//     },
//     downloadImage() {
//       delete axios.defaults.headers.common["x-auth"];
//       if (!this.$store.state.profile.employeeLogin) {
//         axios
//           .get(
//             "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" +
//               "B:" +
//               this.userid +
//               "&choe=UTF-8",
//             { responseType: "blob" }
//           )
//           .then(response => {
//             var fileurl = window.URL.createObjectURL(new Blob([response.data]));
//             var filelink = document.createElement("a");

//             filelink.href = fileurl;

//             filelink.setAttribute("download", "myqrCode.png");
//             document.body.appendChild(filelink);

//             filelink.click();
//             document.body.removeChild(filelink);
//           });
//       } else {
//         axios
//           .get(
//             "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" +
//               "EM:" +
//               this.userid +
//               "&choe=UTF-8",
//             { responseType: "blob" }
//           )
//           .then(response => {
//             var fileurl = window.URL.createObjectURL(new Blob([response.data]));
//             var filelink = document.createElement("a");

//             filelink.href = fileurl;

//             filelink.setAttribute("download", "myqrCode.png");
//             document.body.appendChild(filelink);

//             filelink.click();
//             document.body.removeChild(filelink);
//           });
//       }
//     },

//     capitalize(value) {
//       return value
//         .toLowerCase()
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
//     },

//     getFirstLetter(data) {
//       if (data) {
//         return data.substring(0, 1).toUpperCase();
//       }
//     },
//     loading() {
//       this.loading(true, "#page-loading");
//     },
//     async GetAccountStatment() {
//       this.button_loader_success(true, "#page-loading");
//       let response = await this.getHTTPGetResponse(
//         "/account/get/" + this.accoun_no.UserSub
//       );
//       if (response) {
//         this.button_loader_success(false, "#page-loading");
//         let data = response;
//         this.statements = data.data[0];
//         console.log("statement", this.statements);
//         this.employeeName = this.statements.name;
//         this.businessName = this.statements.businessName;
//       }
//     },

//     async GetBusinessTableData() {
//       let input = {
//         accountId: this.accoun_no.UserSub
//       };
//       let response = await this.getHTTPGetResponse(
//         "/account/statement?accountId=" + this.accoun_no.UserSub
//       );
//       if (response) {
//         let data = response;
//         this.transactions = data.data;

//         var TotalExpense = 0;
//         var TotalDeposits = 0;
//         for (let e of this.transactions) {
//           if (e.amount < 0) {
//             TotalExpense += parseFloat(e.amount.slice(1));
//           } else {
//             TotalDeposits += parseFloat(e.amount);
//           }
//         }
//         this.TotalExpense = await TotalExpense;
//         this.TotalDeposits = await TotalDeposits;
//       }
//     }
//   }
// };
</script>
