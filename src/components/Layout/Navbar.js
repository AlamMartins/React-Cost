import React, {Component} from "react";
import {Link, link} from 'react-router-dom';

import Container from "./Container";

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'


class Home extends Component{

    constructor(props){ 
        super(props);
        this.state = {

        }
    }


    render(){
        return(
            <nav className={styles.navbar}>
                <Container>
                    <Link to="/">
                        <img src={logo} alt="Costs" />
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/projects">Projetos</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/Contact">Contato</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/Company">Empresa</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/NewProject">Novo Projeto</Link> 
                        </li>
                    </ul>
                </Container>

          </nav>
        )
    }
}

export default Home; 