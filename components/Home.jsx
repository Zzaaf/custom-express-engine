/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function Home({ name }) {
  return (
    <Layout>
      <h1>
        Hello!
        {' '}
        {name}
      </h1>
    </Layout>
  );
}

module.exports = Home;
