import { StyleSheet } from "react-native";

export const TaskItemStyle = StyleSheet.create({
  cardBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    width: "100%",
    height: 70,
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#31364D",
  },
  cardText: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  cardButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    
  },

  CardButtonEditColor: {
    borderColor: "#9ABAEE",
  },
  CardButtonTrashColor: {
    borderColor: "#B75D63",
  }
});
