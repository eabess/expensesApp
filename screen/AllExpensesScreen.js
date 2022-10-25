import { StyleSheet, View } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpensesScreen() {
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod={'All period'} />
    </View>
  );
}
export default AllExpensesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: GlobalColors.color.primary700,
  },
})