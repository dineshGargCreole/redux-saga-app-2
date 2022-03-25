import React from 'react'
import PostsPieChart from './PostsPieChart'
import PostsColumnChart from './PostsColumnChart'



function GraphChart() {

  return (
    <div className="site-layout-background layout-background">
        <PostsPieChart />
        <PostsColumnChart />
    </div>
  )
}


export default GraphChart