import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

import Header from '../partials/Header/Header'

import useStyles from './Default.style'

const TemplateDefault = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Container className={classes.container}>
        {children}
      </Container>
    </>
  )
}

export default TemplateDefault