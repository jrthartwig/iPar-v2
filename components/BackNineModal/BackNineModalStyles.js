import { StyleSheet } from "react-native";
import titleTextColors from './titleTextColors';

function createTitleText(backgroundColor) {
  return {
    padding: 6.5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor,
    color: "white",
  };
}

const titleTextStyles = {};
titleTextColors.forEach((titleTextColor) => {
  titleTextStyles[`${titleTextColor.title}TitleText`] = createTitleText(
    titleTextColor.color
  );
});


function createYardageTitleText(backgroundColor) {
  return {
    justifyContent: "space-between",
    padding: 6.5,
    fontSize: 14,
    backgroundColor,
    color: "white"
  }
}

const yardageTitleTextStyles = {};
titleTextColors.forEach((titleTextColor) => {
  yardageTitleTextStyles[`${titleTextColor.title}Yardage`] = createYardageTitleText(
    titleTextColor.color
  );
});

let backNineModalStyles = {
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
  title: {
    flexDirection: "column",
  },
  titleText: {
    padding: 6.5,
    fontSize: 14,
    fontWeight: "bold",
  },
  holeTitleText: {
    padding: 6.5,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#ddd",
  },
  holeNumbers: {
    justifyContent: "space-between",
    padding: 6.5,
    fontSize: 14,
  },
  topHoleNumbers: {
    justifyContent: "space-between",
    padding: 6.5,
    fontSize: 14,
    backgroundColor: "#ddd",
  },
  button: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: -300,
    justifyContent: "center",
    alignItems: "center",
  },
};

const styles = StyleSheet.create(backNineModalStyles);

backNineModalStyles = { ...backNineModalStyles, ...titleTextStyles, ...yardageTitleTextStyles };

export default styles;
