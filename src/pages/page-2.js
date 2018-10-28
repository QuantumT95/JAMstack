import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Freecodecamp rocks! Soo Cool!</h1>

    <p>Welcome to Seans second page! Enjoy your stay!</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
