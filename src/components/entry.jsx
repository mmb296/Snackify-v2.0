import React, { Component } from 'react';
import Comment from './Comment.jsx';
import shortid from 'shortid';
import ThumbsUp from 'react-icons/lib/fa/thumbs-up';

class Entry extends Component {

	render() {

		let id;
		let username;
		let commentDisplay = [<div className="None"></div>];
		
			if (this.props.userPost.comments !== undefined) {
				commentDisplay = this.props.userPost.comments.map((comment, i) => {
					return <Comment key={(i + shortid.generate()).toString()} commentInfo={comment} />
				})
			}
			if (this.props.usernameLoggedIn === this.props.userPost.postby) {
			return (
				<div className='entry'>
					<div>{this.props.userPost.postby}</div>
					<img className='entryImg' src={this.props.userPost.snacklink} />
					{commentDisplay}
					<div className="votes">{this.props.userPost.votes}</div>
					<button className="thumbsBtn" onClick={() => {this.props.voteUp(this.props.usernameLoggedIn, this.props.userPost.postby)} }><ThumbsUp className="thumbs" /></button>
					<button className="deleteBtn" onClick={() => { this.props.deletePost(this.props.userPost.id, this.props.usernameLoggedIn) }} > Delete </button>
					<input className="commentInput" onChange={()=>{}} />
				</div>
			);
		} else {
			return (
				<div className='entry'>
					<div>{this.props.userPost.postby}</div>
					<img className='entryImg' src={this.props.userPost.snacklink} />
					{commentDisplay}
					<div className="votes">{this.props.userPost.votes}</div>
					<button className="thumbsBtn" onClick={() => {this.props.voteUp(this.props.usernameLoggedIn, this.props.userPost.postby)}}><ThumbsUp className="thumbs" /></button>
				</div>
			)
		}
	}


}

export default Entry;