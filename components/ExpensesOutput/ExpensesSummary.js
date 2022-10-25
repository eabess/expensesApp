import { StyleSheet, Text, View } from "react-native";

import { GlobalColors } from "../../constants/styles";

function ExpensesSummary({ periodName, expenses }) {

  const expensesSum = expenses.reduce(( sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
        <Text style={styles.textPeriod}>{ periodName }</Text>
        <Text style={styles.textSum}>${ expensesSum.toFixed(2) }</Text>  
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 10,
    // marginHorizontal: 20,
    marginBottom: 5,
    padding: 10,
    backgroundColor: GlobalColors.color.primary50,
    borderRadius: 6
  },
  textPeriod: {
    color: GlobalColors.color.primary400,
    fontSize: 14
  },
  textSum: {
    color: GlobalColors.color.primary500,
    fontSize: 18,
    fontWeight: 'bold'
  },
})