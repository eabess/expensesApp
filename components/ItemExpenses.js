import { Pressable, StyleSheet, Text, View } from "react-native";

import { GlobalColors } from "../constants/styles";

function ItemExpenses({ description, amount, date }) {
  return (
    <Pressable>
      <View style={styles.itemExpenses}>
        <View>
          <Text style={[styles.textBase, styles.textDescription]}>{description}</Text>
          <Text style={styles.textBase}>{date.toString()}</Text>
          {/* <Text style={styles.textDateExpenses}>{date}</Text> */}
        </View>
        <View style={styles.amoutContainer}>
          <Text style={styles.textAmount}>${amount}</Text> 
        </View>
      </View>
    </Pressable>
  );
}

export default ItemExpenses;

const styles = StyleSheet.create({
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
    width: 80,
    // paddingHorizontal: 12,
    // paddingVertical: 4,
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