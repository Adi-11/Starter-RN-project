import React, { useState } from "react";
import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Numbers } from "./Numbers";
import { styles } from "../styles/calculatorStyles";

// pattern for buttons UI
const buttons = [
  ["CLEAR", "DELETE"],
  ["7", "8", "9", "÷"],
  ["4", "5", "6", "x"],
  ["1", "2", "3", "+"],
  [".", "0", "=", "-"],
];

const maxLength: number = 50;

export const CalculatorScreen: React.FC<any> = () => {
  const [output, setOutput] = useState<string>("0");
  // const [expression, setExpression] = useState<string>("");

  // all kind of button press will be handled in this function
  const hanldeCalculations = (value: any): void => {
    // console.log(value);
    if (!isNaN(value) || value === ".") {
      // // TODO
      appendToOutput(value);
    } else {
      switch (value) {
        // clear the output command
        case buttons[0][0]:
          setOutput("0");
          break;

        // backspace command
        case buttons[0][1]:
          if (output.length === 1) {
            setOutput("0");
          } else {
            replaceLastIndex("");
          }
          break;
        // handle '=' equal button
        case buttons[4][2]:
          expressionEvaulation();
          break;

        //if any other button is pressed
        default:
          let strLastChar: any = output.slice(-1);
          if (isNaN(strLastChar)) {
            replaceLastIndex(value);
          } else {
            appendToOutput(value);
          }
          break;
      }
    }
  };

  // function for appending the evaluated expressions back to displayed output
  const appendToOutput = (value: string): void => {
    if (output.length >= maxLength) {
      showToast("Maximum Expression Length of " + maxLength + " is reached.");
    } else {
      if (output !== "0") {
        setOutput(() => output + "" + value + "");
      } else {
        setOutput(value + "");
      }
    }
  };

  // function for handling backspace
  const replaceLastIndex = (value: any) => {
    var tmp: string = output.replace(/.$/, value);
    setOutput(tmp);
  };

  //Evaluation as a Mathematical expression
  const expressionEvaulation = () => {
    try {
      let currentOutput = output;
      if (isNaN(Number(currentOutput))) {
        let finalEvaulation = eval(convertToMATHEXPRESSION(output));
        if (finalEvaulation === Infinity) {
          showToast("Invalid operation, A number cannot be divied by 0");
          setOutput("0");
        } else {
          setOutput("" + finalEvaulation);
        }
      }
    } catch (exception) {
      showToast("Invalid format used.");
    }
  };

  // function will handle replacement of all '÷' and 'x' in their origin form i.e '/' and '*' resp.
  const convertToMATHEXPRESSION = (value: string): string => {
    let tmp1 = value.replace(new RegExp(escapeRegExp(buttons[1][3]), "g"), "/");

    let tmp2 = tmp1.replace(new RegExp(escapeRegExp(buttons[2][3]), "g"), "*");

    return tmp2;
  };

  // taken reference for handleing above function
  const escapeRegExp = (str: string) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };

  //toast notifications for error messages
  const showToast = (value: string) => {
    ToastAndroid.show(value, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.mainConatiner}>
        <View style={styles.placeHolderOutput}>
          <Text style={styles.txtDefault}>{output}</Text>
        </View>
        <View style={[styles.contButtons]}>
          <Numbers onBtnPress={hanldeCalculations} buttons={buttons} />
        </View>
      </View>
    </View>
  );
};
