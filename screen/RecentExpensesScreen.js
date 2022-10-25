import { StyleSheet, View } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpensesScreen() {
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod={'Last 7 Days'} />
    </View>
  );   
}

export default RecentExpensesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: GlobalColors.color.primary700,
  },
})