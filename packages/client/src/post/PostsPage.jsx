import { useEffect, useState } from 'react'
import { Button, Icon, Card } from 'semantic-ui-react'

import NavbarHeader from '../components/Navbar'
import PostLink from '../components/PostLink'

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/posts`)
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])

    return (
        <div className="center">
            <NavbarHeader />
            <div className="center">
                <Card fluid className="card">
                    <Card.Content>
                        <Card.Header>
                            <h2>All posts</h2></Card.Header>
                    </Card.Content>
                </Card>
                {posts.map((post) => (
                    <PostLink post={post} key={post.id} />
                ))}
                <Button class="ui button">Send</Button>
            </div>
        </div>
    )
}

export default Posts