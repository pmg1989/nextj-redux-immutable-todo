import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header, TabBar, Nav } from 'components'

let dic = {}

const ListDetail = ({ query }) => {
  if (!dic[query.id]) {
    dic[query.id] = 1
  } else {
    dic[query.id] += 1
  }
  console.log(dic)

  const headerProps = {
    rightContentType: 'tabBar',
  }

  const containerProps = {
    renderHeader: <Header {...headerProps}>商品详情页</Header>,
    renderTabBar: <TabBar selectedTab="" hidden />,
  }

  return (
    <Container {...containerProps}>
      <Nav />
      <div className="box">
        i am list detail: id: {query.id}
      </div>
      <div>Loading data from {process.env.BACKEND_URL}</div>
    </Container>
  )
}

ListDetail.propTypes = {
  query: PropTypes.object.isRequired,
}

ListDetail.getInitialProps = ({ query }) => {
  return {
    query,
  }
}

export default ListDetail
