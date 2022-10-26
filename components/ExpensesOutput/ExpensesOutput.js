import { StyleSheet, View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod }) {

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      description: 'A book for math',
      amount: 26.80,
      date: new Date('2022-05-01')
    },
    {
      id: 'e2',
      description: 'A book for laguage',
      amount: 9.25,
      date: new Date('2021-11-09')
    },
    {
      id: 'e3',
      description: 'Some bananas',
      amount: 18.44,
      date: new Date('2022-09-13')
    },
    {
      id: 'e4',
      description: 'A speedy bicycle',
      amount: 59.99,
      date: new Date('2021-12-19')
    },
    {
      id: 'e5',
      description: 'A small sofa',
      amount: 2.50,
      date: new Date('2022-10-25')
    },
    {
      id: 'e6',
      description: 'A book for math',
      amount: 26.80,
      date: new Date('2022-05-01')
    },
    {
      id: 'e7',
      description: 'A book for laguage',
      amount: 9.25,
      date: new Date('2021-11-09')
    },
    {
      id: 'e8',
      description: 'Some bananas',
      amount: 18.44,
      date: new Date('2022-09-13')
    },
    {
      id: 'e9',
      description: 'A speedy bicycle',
      amount: 59.99,
      date: new Date('2021-12-19')
    },
    {
      id: 'e10',
      description: 'A small sofa',
      amount: 2.50,
      date: new Date('2022-10-25')
    },
  ];

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 0 // removes the gap at the bottom
  }
})