import { FlatList } from "react-native";

import ItemExpenses from "../ItemExpenses";

function ExpensesList({expenses}) {

//   const renderItem = ({ item }) => (
//     <ItemExpenses 
//       description={item.description} 
//       amount={item.amount}
//       date={item.date}
//     />
//   );
  function renderItem( itemData ) {
    return <ItemExpenses {...itemData.item} />
  }  

  return (
    <FlatList  
      data={expenses}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
  
export default ExpensesList;