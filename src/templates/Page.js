import Typography from '@material-ui/core/Typography'

// import useStyles from './Page.style'

const TemplatePage = ({ title, Component }) => {
  // const classes = useStyles()

  return (
    <>
      <Typography variant="h3">
        {title}
      </Typography>
      <Component />
    </>
  )
}

export default TemplatePage