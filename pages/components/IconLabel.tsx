// IconLabel form fields used for headers

import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faSchool,
    faBoltLightning,
    faClock,
    faCalendar,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

import { Box } from "@mui/material";

import styles from "../../styles/iconLabel.module.css";

export default function FormField({
  title,
  value,
  icon,
  verified,
  fontSize,
}: any): JSX.Element {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      <Box
        component="p"
        sx={{
          fontSize,
          margin: "5px 0px 5px 5px",
        }}
      >
        {title}
      </Box>
      <Box
        component="p"
        sx={{
          fontSize,
          margin: "5px 0px 5px 5px",
        }}
      >
        {value}
      </Box>
      <FontAwesomeIcon
        style={{
          marginLeft: "10px",
          color: "#2897ff",
          display: verified ? "block" : "none",
        }}
        icon={faCheckCircle}
        title={"Verified"}
      ></FontAwesomeIcon>
    </Box>
  );
}
