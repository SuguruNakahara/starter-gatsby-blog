import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      © 2022 Hide, INC.
    </div>
  </Container>
)

export default Footer
