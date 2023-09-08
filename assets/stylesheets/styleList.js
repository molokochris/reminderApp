import { StyleSheet } from "react-native";

const styleList = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    paddingTop: "10%",
    // paddingHorizontal: '2%',
    backgroundColor: "#66BB6A",
  },
  addBtn: {
    alignItems: "flex-end",
    paddingHorizontal: "2%",
  },
  date: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  headText: {
    color: "white",
    fontSize: 50,
    fontFamily: "Jua",
  },
  notifications: {
    flex: 2,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  notifBar: {
    paddingHorizontal: "1%",
    paddingVertical: "2%",
    alignItems: "center",
    height: "20%",
    backgroundColor: "#ECECEC",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  pill: {
    backgroundColor: "white",
    paddingHorizontal: 1,
    paddingVertical: 2,
    height: "100%",
    width: "10%",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "column",
  },
  imgNotif: {
    height: "50%",
  },
  numNotif: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "100%",
    backgroundColor: "#66BB6A",
    padding: "4%",
    borderRadius: 100,
    color: "white",
  },
  numUpdates: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 16,
  },
  alerts: {
    paddingHorizontal: "2%",
    paddingTop: "1%",
    // height: "100%",
  },
  tab: {
    paddingVertical: "4%",
    // paddingVertical: "1%",
    height: 80,
    // height: "20%",
    // backgroundColor: "red",
    borderColor: "rgba(128, 128, 128, 0.2)",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 5,
    flexDirection: "row",
  },
  day: {
    fontFamily: "Jua",
    width: "20%",
    height: "100%",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  textFont: {
    fontFamily: "Jua",
  },
  fsNames: {
    alignItems: "center",
    width: "60%",
    // backgroundColor: "purple",
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    justifyContent: "center",
  },
  ring: {
    width: "20%",
    height: "100%",
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styleList;
