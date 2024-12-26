import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text";
import { useTheme } from "@react-navigation/native";

type ButtonProps = {
  onPress: () => void;
  title?: string;
};

const Button = ({ onPress, title }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: colors.primary,
          borderBottomColor: colors.border,
          borderBottomWidth: 4,
        },
        styles.button,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "hsla(0,0%,4%,.29)",
    textShadowOffset: { width: 1, height: 1 },
  },
});

export default Button;
