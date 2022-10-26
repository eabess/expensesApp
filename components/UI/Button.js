import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../constants/styles";

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable 
        onPress={onPress} 
        style={({pressed}) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.buttonFlat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.textFlat]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    // marginHorizontal: 30,
    // marginVertical: 20,
    padding: 4,
    backgroundColor: GlobalColors.color.primary500,
    borderRadius: 4
  },
  buttonFlat: {
    backgroundColor: 'transparent'
  },
  textFlat: {
    color: GlobalColors.color.primary200
  },
  buttonText: {
    color: 'white',
    // fontSize: 24,
    textAlign: 'center',
    // paddingVertical: 3,
    // paddingHorizontal: 15
    // width: 130,
    // paddingVertical: 5,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalColors.color.primary100,
    borderRadius: 4
  }
})