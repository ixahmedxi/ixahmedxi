import { Grid, SxStyleProp } from 'theme-ui'
import { Content } from './Content/Content.component'
import { Wave } from './Wave.component'

export const Home = () => {
  const styles: SxStyleProp = {
    wrapper: {
      gridTemplateRows: '1fr auto',
      minHeight: '100vh'
    }
  }
  return (
    <Grid sx={styles.wrapper}>
      <Content />
      <Wave />
    </Grid>
  )
}
