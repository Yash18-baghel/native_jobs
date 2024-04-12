import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
import { JobT } from "@/utils/types";

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;


export const logoContainerStyle = (selectedJob: JobT | undefined, item: JobT) => ({
  width: 50,
  height: 50,
  backgroundColor: selectedJob?.job_id === item.job_id ? "#FFF" : COLORS.white,
  borderRadius: SIZES.medium,
})

export const jobNameStyle = (selectedJob: JobT | undefined, item: JobT) => ({
  fontSize: SIZES.large,
  fontFamily: FONT.medium,
  color: selectedJob?.job_id === item.job_id ? COLORS.white : COLORS.primary,
})

export const publisherStyle = (selectedJob: JobT, item: JobT) => ({
  fontSize: SIZES.medium - 2,
  fontFamily: FONT.bold,
  color: selectedJob.job_id === item.job_id ? COLORS.white : COLORS.primary,
})