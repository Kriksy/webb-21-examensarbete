
import { useContext } from "react"
import { Menu, Label, Icon, MenuItemProps } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../../../context/appContext";

export interface PostsMenuProps {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps) => void
    activeItem: string
}

export default function PostsMenu(props: PostsMenuProps) {
    const appContext = useContext(AppContext)
    const navigate = useNavigate();
    const handleItemClick = props.onClick

    const { activeItem } = props

    const showUserOptions = appContext.loggedIn
    const hideUserOptions = !showUserOptions

    return (

        <Menu attached inverted color="blue">
            <Menu.Item
                name='feed'
                active={activeItem === 'feed'}
                onClick={handleItemClick}
            >
                <Icon name='angle double down' />
                Newest
                <Label color='teal'>{appContext.postsApproved.length}</Label>
            </Menu.Item>
            {
                showUserOptions &&
                <Menu.Item
                    name='favorites'
                    active={activeItem === 'favorites'}
                    onClick={handleItemClick}
                >
                    <Icon name='favorite' />
                    Favorites
                    <Label color='teal'>{appContext.favoritePosts.length}</Label>
                </Menu.Item>
            }
            {
                showUserOptions &&
                <Menu.Item
                    name='me'
                    active={activeItem === 'me'}
                    onClick={handleItemClick}
                >
                    <Icon name='user' />
                    Me
                    <Label color='teal'>{appContext.postsByUser.length}</Label>
                </Menu.Item>
            }
            {
                showUserOptions &&
                <Menu.Item
                    name='pending'
                    active={activeItem === 'pending'}
                    onClick={handleItemClick}
                    disabled={hideUserOptions}

                >
                    <Icon name='hourglass half' />
                    Pending
                    <Label color='teal'>{appContext.postsPendingApproval.length}</Label>
                </Menu.Item>
            }
            {
                hideUserOptions &&
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='login'
                        onClick={() => {
                            navigate("/login")
                        }}
                        position='right'
                    >
                        <Icon name='sign in' inverted />
                        Login
                    </Menu.Item>
                </Menu.Menu>
            }
        </Menu>
    )
}
