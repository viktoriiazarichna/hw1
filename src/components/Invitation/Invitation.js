import React from 'react';
import styles from "./Invitation.module.css";

export const Invitation = (props) => {

    let {name, location, time} = props;

    return (
        <div className={styles.invite}>
            Alisa and David invite you, dear  {name} to join them at the celebration of their marriage {time} at two in the afternoon {location}.
        </div>

    );
};