import {useState} from 'react'

import Input from '../form/input'
import SubmitButton from '../form/SubmitButton'

import styles from '../Project/ProjectForm.module.css'

// import styles from '../project/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText, projectData}){

    const [service, setService] = useState({})

    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleOnChange(e){
        setService({...service, [e.target.name] : e.target.value})
    }

    return(
    <form onSubmit={submit}>
        <Input

        type="text"
        text="Nome do Serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleOnChange}
        
        />
        <Input

        type="number"
        text="Custo do Serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleOnChange}
        
        /> 
        <Input

        type="text"
        text="Descrição do Serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleOnChange}
        
        />
        <SubmitButton text={btnText}/>
    </form>
    )


}

export default ServiceForm