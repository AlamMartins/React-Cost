import React, {Component} from "react";
import {Link, link} from 'react-router-dom';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'


class Footer extends Component{

    constructor(props){ 
        super(props);
        this.state = {

        }
    }


    render(){
        return(

            <footer className={styles.footer}>
                <ul className={styles.social_list}>
                    <li>
                        <FaFacebook/>
                    </li>
                    <li>
                        <FaInstagram/>
                    </li>
                    <li>
                        <FaLinkedin/>
                    </li>
                </ul>
                <p className={styles.copy_right}>
                    <span>Costs</span> &copy; 2023 
                </p>
            </footer>

        )
    }
}

export default Footer; 