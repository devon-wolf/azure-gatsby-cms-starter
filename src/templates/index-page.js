import React from 'react'
import Content from '../components/Content'

import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Welcome to This Test
                </h1>
                <Content className="content" content={<p>Hello, world</p>} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
