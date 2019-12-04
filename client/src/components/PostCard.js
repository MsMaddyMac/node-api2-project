import React from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action import
import { getPosts } from '../actions';
// styling import
import styled from "styled-components";

const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 3px solid #f1f1f1;
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const FlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;
 const FlipCardSides = styled.div`
  background: #cacfd2;
  color: #4b7fad;
 `;

const PostCard = props => {
    console.log('PostCard', props);
    return (
        <div>
            <h2>Press for Posts</h2>
           <button className="get-btn" onClick={() => props.dispatch(getPosts())}>Get Posts!</button> 
           {props.isFetching && <h3> Here come the Posts!!</h3>}
            {props.error && <div>{props.error.message}</div>}
                {props.posts && props.posts.map((post, id) => (
                    <div className="posts" key={id}>
                        <FlipCard className="character-card" >
                            <FlipInner className="flipcard-inner">
                            <FlipCardSides className="flipcard-front">
                                <h2>{post.title}</h2> 
                            </FlipCardSides>
                            <FlipCardSides className="flipcard-back">
                                <p>{post.contents}</p>
                            </FlipCardSides>
                            </FlipInner>
                        </FlipCard>
                    </div>
                ))}
        </div>
    )
}


export default connect(state => {
    return state;})(PostCard);

