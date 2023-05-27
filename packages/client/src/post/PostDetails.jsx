import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { Card, Icon } from 'semantic-ui-react'
import NavbarHeader from '../components/Navbar'

const PostDetails = () => {
    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/posts?slug=${slug}`, {
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if (data.length) {
                    setPost(data[0])
                }
                setIsLoading(false)
            })
    }, [slug])

    if (isLoading || !post) {
        return <div className="center vertical-center">Loading...</div>
    }

    return (
        <div className="center">
            <NavbarHeader />

            <Card fluid>
                <Link className="left" to="/posts"><Icon name="hand point left" size='big' color='blue' /></Link>
                <div className="center">

                    <div>
                        <h2>{post.title.rendered}</h2>
                        <div>
                            {parse(post.content.rendered)}
                            <p className="gray-out">
                                {post.date.replace("T", " ")}
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PostDetails
