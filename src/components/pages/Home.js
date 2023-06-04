import React, {Component} from "react";
import {Link, link} from 'react-router-dom';
import savings from '../../img/savings.svg'
import styles from './Home.module.css'
import LinkButton from "../Layout/LinkButton";

class Home extends Component{
 
    constructor(props){ 
        super(props);
        this.state = {

        }
    }


    render(){
        return(
            <section className={styles.home_container}>
                <h1>
                    Bem-vindo ao <span>Costs</span>
                    </h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton to="/NewProject" text="Criar projeto"/>
                <img src={savings} alt="Costs" />
            </section>
        )
    }
}

export default Home; 