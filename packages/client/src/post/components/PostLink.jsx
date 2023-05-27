import { Link } from 'react-router-dom'
// import parse from 'html-react-parser'
import { Card, Feed } from 'semantic-ui-react'



const PostLink = ({ post }) => {
    return (
        <Card fluid>
            <Card.Content>
                <Link to={`/posts/${post.slug}`}>
                    <Feed>
                        <Feed.Event>
                            <Feed.Content>
                                <h3>
                                    {post.title.rendered}
                                </h3>
                                <Feed.Date />

                                <p className="data-color">
                                    {post.date.replace("T", " ")}
                                </p>

                                {/* <Feed.Summary>
                                    <div>{parse(post.content.rendered)}</div>
                                </Feed.Summary> */}
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Link>
            </Card.Content>
        </Card>
    )
}

export default PostLink
