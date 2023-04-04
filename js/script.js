// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked () {
  
  // User data input
  let farenheit = parseFloat(document.getElementById("farenheit").value)
  //prosses
  let temputure = 5.0 / 9.0 * (farenheit - 32);
  
  // Data given back to user
  document.getElementById('temputure').innerHTML = 'The temputure in celcius is ' + temputure.toFixed(2) + '<sup>°</sup>'
}