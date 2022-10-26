import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPress }) {

  return (
    <Pressable 
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 12,
    marginVertical: 3
  },
  pressed: {
    opacity: 0.75
  }
})