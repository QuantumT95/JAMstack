import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World!!</h1>

    <p>Welcome to your new Gatsby site.</p>
    <p>My name is Sean! I am a big fan of freecodecamp. </p>
    <p>It was the first code resource I found when I discovered the world of coding.</p>

    <p>A year later, I find myself in the bay area studying C full-time. I aspire to be the very best!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
