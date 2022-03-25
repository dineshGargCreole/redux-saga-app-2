import React, {useEffect} from 'react'
import { Pie } from "@ant-design/charts";
import styled from "styled-components";
import {connect} from 'react-redux';
import moment from 'moment'
import {getPosts} from '../../redux/action'

const Wrapper = styled.div`
  margin: 64px 0px;
`;


function PostsPieChart({posts, getPosts}) {
    const today = [];
    const yesterday = [];
    const tomorrow = [];
    const other = [];

    useEffect(() => {
        getPosts();
    },[])

    posts && posts.forEach(post => {
        // console.log(moment().format('YYYY-MM-DD').week())
        if(post.post_date === moment().format('YYYY-MM-DD')){
            today.push(post)
        } else if(post.post_date === moment(). add(-1,'days').format('YYYY-MM-DD')) {
            yesterday.push(post)
        } else if(post.post_date === moment(). add(1,'days').format('YYYY-MM-DD')) {
            tomorrow.push(post)
        } else {
            other.push(post)
        }
    })

    const pieChartData = [
        {
            type: "today",
            value: today.length,
            fill: 'green'
          },
          {
            type: "yesterday",
            value: yesterday.length,
            fill: 'red'
          },
          {
            type: "tomorrow",
            value: tomorrow.length,
            fill: '#1581eb'
          },
          {
            type: "other",
            value: other.length,
            fill: '#818e9c'
          }
    ]
    
    const config = {
        appendPadding: 10,
        data: pieChartData,
        angleField: "value",
        colorField: "type",
        pieStyle: (obj) => {
            if(obj.type=='today'){
                return {fill: 'green'}
            } else if(obj.type=='yesterday') {
                return {fill: 'red'}
            } else if(obj.type=='tomorrow') {
                return {fill: '#1581eb'}
            } else {
                return {fill: '#818e9c'}
            }
        },
        // pieStyle: {
        //     lineWidth: 1.5,
        // },
        radius: 0.7,
        legend: {
            layout: 'vertical',
            position: 'left',
            marker: (type) => {
                if(type==='today'){
                    return {style: {fill: 'green'}}
                } else if(type==='yesterday') {
                    return {style: {fill: 'red'}}
                } else if(type==='tomorrow') {
                    return {style: {fill: '#1581eb'}}
                } else if(type==='other') {
                    return {style: {fill: '#818e9c'}}
                }
            }
        },
        innerRadius: 0.5,
        tooltip: {
            customItems: (type) => {
                if(type[0].name === 'today'){
                    type[0].color = 'green'
                    return type
                } else if(type[0].name === 'yesterday') {
                    type[0].color = 'red'
                    return type
                } else if(type[0].name === 'tomorrow') {
                    type[0].color = '#1581eb'
                    return type
                } else if(type[0].name === 'other') {
                    type[0].color = '#818e9c'
                    return type
                }
            }
        },
        label: {
          type: "inner",
          offset: "-50%",
          content: "{value}",
          style: {
            textAlign: "center",
            fontSize: 14,
            fill: "black",
          }
        },
        interactions: [{ type: "element-selected" }, { type: "element-active" }],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: "pre-wrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            formatter: function formatter() {
              return `total\n${posts.length}`;
            }
          }
        }
    };

  return (
    <Wrapper>
        <Pie {...config} />
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PostsPieChart)