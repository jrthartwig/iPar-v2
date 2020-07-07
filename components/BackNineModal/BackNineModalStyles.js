import { StyleSheet } from "react-native";

const cellStyle = {
  padding: 6.5,
  fontSize: 14,
  color: "white",
  fontWeight: "bold",
};

const yardageCellStyle = {
  justifyContent: "space-between",
  ...cellStyle,
  fontWeight: "normal",
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 40,
  },
  title: { flexDirection: "column" },

  titleText: { ...cellStyle, color: "black" },

  holeTitleText: { ...cellStyle, color: "black", backgroundColor: "#ddd" },
  talonTitleText: { ...cellStyle, backgroundColor: "black" },
  augustaTitleText: { ...cellStyle, backgroundColor: "#006633" },
  whiteTitleText: { ...cellStyle, backgroundColor: "#666666"  },
  redtailTitleText: { ...cellStyle, backgroundColor: "#990033" },
  seniorTitleText: {  ...cellStyle, backgroundColor: "#999900" },

  talonYardage: { backgroundColor: "black", ...yardageCellStyle },
  augustaYardage: { backgroundColor: "#006633", ...yardageCellStyle },
  whiteYardage: { backgroundColor: "#666666", ...yardageCellStyle },
  redtailYardage: { backgroundColor: "#990033", ...yardageCellStyle },
  seniorYardage: { backgroundColor: "#999900", ...yardageCellStyle },

  holeNumbers: { ...yardageCellStyle, color: "black", fontWeight: "normal" },
  topHoleNumbers: { ...cellStyle, color: "black", backgroundColor: "#ddd" },

  button: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: -300,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
