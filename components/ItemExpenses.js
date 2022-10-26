import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { GlobalColors } from "../constants/styles";
import { getFormattedDate } from "../util/date";

function ItemExpenses({ id, description, amount, date }) {
  const navigation = useNavigation();

  function itemPressHandler() {
    navigation.navigate('ManageExpenses', 
      {expenseId: id}
    );
  }

  return (
    <Pressable
      onPress={itemPressHandler}
      style={({pressed}) => pressed && styles.pressed}
    >
      <View style={styles.itemExpenses}>
        <View>
          <Text style={[styles.textBase, styles.textDescription]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amoutContainer}>
          <Text style={styles.textAmount}>${amount.toFixed(2)}</Text> 
        </View>
      </View>
    </Pressable>
  );
}

export default ItemExpenses;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75
  },
  itemExpenses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    // marginHorizontal: 20,
    padding: 10,
    backgroundColor: GlobalColors.color.primary500,
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalColors.color.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4
  },
  textBase: {
    color: GlobalColors.color.primary50,
  },
  textDescription: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  amoutContainer: {
    minWidth: 80,
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6
  },
  textAmount: {
    color: GlobalColors.color.primary500,
    fontSize: 18, 
    fontWeight: 'bold'
  }
});