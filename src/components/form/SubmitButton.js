import React, {Component} from "react";
import {Link, link} from 'react-router-dom';
import styles from './SubmitButton.module.css'

function Input({text}){
    return(

        <div>
            <button className={styles.btn}>{text}</button>
        </div>

    )
}

export default Input;