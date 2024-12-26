import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text as TextNative, TextProps } from "react-native";

const Text = (props: TextProps) => {
  const { colors } = useTheme();
  return (
    <TextNative
      {...props}
      style={[styles.text, { color: colors.text }, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginVertical: 2,
  },
});

export default Text;
