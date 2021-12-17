import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

class CommentsSection extends Component {
    state = {
        comments: []
    }

    componentDidMount = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2Mzk2NjAyMjQsImV4cCI6MTY0MDg2OTgyNH0.kMQv1FRu_3dz4nGd6Svq-5gtmJxijc2IHVwiWb6Ldqk"
                }
            })
            console.log(response)
            let comments = await response.json()
            this.setState({
                comments: comments
            })
            console.log(this.state.comments)
        }

        catch(error) {console.log(error)}
    }

    render() {
        return (
            <>
            <AddComment/>
            <CommentsList comments={this.state.comments}/>
            </>
        )
    }
}

export default CommentsSection