import angular from 'angular';
import {initialiseAgGridWithAngular1, GridOptions} from 'ag-grid-community';

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

initialiseAgGridWithAngular1(angular);

function createGridOptions(): GridOptions {
  return {
    columnDefs: [
      {headerName: "Make", field: "make", sortingOrder: ['desc', 'asc']},
      {headerName: "Model", field: "model", sortable: false},
      {headerName: "Price", field: "price", comparator: (a, b) => a - b}
    ],
    rowData: [
      {make: "Toyota", model: "Celica", price: 35000},
      {make: "Ford", model: "Mondeo", price: 32000},
      {make: "Porsche", model: "Boxter", price: 72000}
    ],
    enableSorting: true,
    animateRows: true
  }
}

const app = angular.module('app', ['agGrid']);

app.controller("exampleCtrl", function ($scope) {
  $scope.gridOptions = createGridOptions();
});
