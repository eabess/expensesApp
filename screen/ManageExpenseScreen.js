import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/UI/Button";

import IconButton from "../components/UI/IconButton";
import { GlobalColors } from "../constants/styles";

function ManageExpenseScreen({ route, navigation }) {

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edite Expenses' : 'Add Expenses'
    });
  }, [navigation, isEditing]);

  function cancelPressHandler() {
    console.log('Cancel Press!');
  }

  function confirmPressHandler() {
    isEditing ? console.log('Update Press!') : console.log('Add Press!');
  }
  
  function deletePressHandler() {
    console.log('Delete Press!');
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode='flat' onPress={cancelPressHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmPressHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton 
            icon='trash' 
            color={GlobalColors.color.error500} 
            size={50} 
            onPress={deletePressHandler} 
          />
        </View>
      )}
    </View>
  );
}
export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalColors.color.primary700,
    // alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 2,
    borderTopColor: GlobalColors.color.error50,
    alignItems: 'center'
  }
})