import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

export default function RadioButton() {
const [radioButton, setRadioButton] = useState(false);
return (

  <TouchableOpacity onPress={() => setRadioButton(true)}>

      <Ionicons name={ radioButton === true ? "radio-button-on" : "radio-button-off" } size={18} color="green" /> 

  </TouchableOpacity>

)}