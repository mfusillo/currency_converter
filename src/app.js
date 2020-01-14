import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencyRates: null,
      userAmount: null,
      userAmountToEuro: null,
      currencySelected: null,
      convertedValue: null,
      convertedValueToEuro: null,
    },

    mounted(){
      this.fetchCurrency()
    },

    methods: {
      fetchCurrency: function(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(result => this.currencyRates = result.rates)
      },
      convertFromEuro: function(){
        this.convertedValue = (this.userAmount * this.currencySelected.value).toFixed(2)
      },

      convertToEuro: function(){
        this.convertedValueToEuro = (this.userAmountToEuro / this.currencySelected.value).toFixed(2)
      }
    }
  });
});
