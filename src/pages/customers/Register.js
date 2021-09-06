import { useState } from 'react'
import axios from 'axios'

import {
  TextField,
  Button,
 } from '@material-ui/core/'
 import Toasty from '../../components/Toasty'

 import useStyles from './Register.style'

const Register = () => {
  const classes = useStyles()

  const [form, setForm] = useState({
    name: {
      value: '',
      error: false,
    },
    job: {
      value: '',
      error: false,
    },
  })

  const [openToasty, setOpenToasty] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: {
        value,
      },
    })
  }

  const handleRegisterButton= () => {
    setIsLoading(true)

    let hasError = false

    const newFormState = {
      ...form,
    }

    if (!form.name.value) {
      hasError = true

      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Digite o campo nome corretamente!'
      }
    }

    if (!form.job.value) {
      hasError = true

      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Digite o campo cargo corretamente!'
      }
    }

    if (hasError) {
      return setForm(newFormState)
    }

    axios.post('https://reqres.in/api/users', {
      name: form.name.value, 
      job: form.job.value, 
    }).then((response) => {
      setOpenToasty(true)
      setIsLoading(false)
    })
  }

  return(
    <>
      <div className={classes.wrapper}>
        <TextField 
          error={form.name.error}
          helperText={form.name.helperText}
          id="standard-basic" 
          label="Nome" 
          name="name" 
          value={form.name.value} 
          onChange={handleInputChange} 
        />
      </div>

      <div className={classes.wrapper}>
        <TextField 
          error={form.job.error}
          helperText={form.job.helperText}
          id="standard-basic" 
          label="Cargo" 
          name="job" 
          value={form.job.value} 
          onChange={handleInputChange}
        />
      </div>

      <div className={classes.wrapper}>
        <Button variant="contained" onClick={handleRegisterButton} disabled={isLoading}>
          {
            isLoading ? 'Aguarde...' : 'Cadastrar'
          }
        </Button>
      </div>
      <Toasty 
        open={openToasty} 
        severity="success" 
        text="Cadastro Realizado com Sucesso!" 
        onClose={() => setOpenToasty(false)}
      />
    </>
  )
}

export default Register