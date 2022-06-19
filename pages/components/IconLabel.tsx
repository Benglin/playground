// IconLabel form fields used for headers

import React, {Component} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faSchool,faCheckCircle,faLock,faBoltLightning,faClock,faCalendar,faClockRotateLeft,faIdBadge,faRoad } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/iconLabel.module.css";

export default function FormField({title,value,icon,verified,fontSize}: any): JSX.Element {
    return (
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            <p style={{fontSize}} className={styles.secondaryProfileDesc}>{title}</p>
            <p style={{fontSize}} className={styles.secondaryProfileDesc}>{value}</p>
            <FontAwesomeIcon style={{marginLeft:"10px",color:"#2897ff",display:verified ? "block" : "none"}} icon={faCheckCircle} title={"Verified"}></FontAwesomeIcon>
        </div>
    )
}