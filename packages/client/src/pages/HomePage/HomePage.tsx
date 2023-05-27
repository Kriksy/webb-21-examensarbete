
import { useContext, useState, useEffect } from "react"
import { Container, Segment, Header, Divider, Menu, Label, Icon, Message } from 'semantic-ui-react'

import PostList from '../../post/PostList'
import PostsMenu from './components/PostsMenu'
import { AppContainer } from "../../components/AppContainer"
import { AppContext } from "../../context/appContext"

export default function HomePage() {
    const postContext = useContext(AppContext)
    const [state, setState] = useState({ activeItem: "feed" })

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [firstLoad, setIsFirstLoad] = useState<boolean>(true);

    // useEffect(() => {
    //     if (firstLoad) {
    //         postContext.fetchPosts()
    //         setIsFirstLoad(false)
    //         setIsLoading(false)
    //     }
    // }, [firstLoad]);

    useEffect(() => {
        postContext.fetchPosts()
    }, [state.activeItem]);



    const handleItemClick = (e: any, { name }: any) => {
        setState({ ...state, ...{ activeItem: name } })
    }

    const { activeItem } = state
    return (
        <>
            <AppContainer header={{ title: "Snouts", icon: "paw" }}>
                <Container>
                    <PostsMenu onClick={handleItemClick} activeItem={activeItem} />
                    <Segment attached>
                        {
                            activeItem === "feed" && <PostList posts={postContext.postsApproved} role="standard" />
                        }
                        {
                            activeItem === "me" && <PostList posts={postContext.postsByUser} role="standard" />
                        }
                        {
                            activeItem === "favorites" && <PostList posts={postContext.favoritePosts} role="standard" />
                        }
                        {
                            activeItem === "pending" && <PostList posts={postContext.postsPendingApproval} role="standard" />
                        }
                    </Segment>
                    <Message
                        warning
                        color='green'
                        attached='bottom'
                    >
                        This is the bottom.
                        <Icon
                            name='hand point down'
                        />
                    </Message>
                </Container>
            </AppContainer>
        </>
    )
}
