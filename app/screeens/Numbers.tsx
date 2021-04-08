import React from "react";
import { Text, View } from "react-native";
import { TouchableComponent } from "../helpers/Touchable";
import { styles } from "../styles/numberButtonStyles";

export const Numbers: React.FC<{
  onBtnPress: (value: any) => void;
  buttons: string[][];
}> = ({ onBtnPress, buttons }) => {
  return (
    <View style={styles.container}>
      {/* <Text>Numbers</Text> */}
      {buttons.map((row: string[], index: number) => (
        <View key={index} style={styles.contRow}>
          {row.map((col: string, index: number) => (
            <TouchableComponent key={index} onPress={() => onBtnPress(col)}>
              <View style={styles.contButton}>
                <Text style={styles.txtDefault}>{col}</Text>
              </View>
            </TouchableComponent>
          ))}
        </View>
      ))}
    </View>
  );
};
