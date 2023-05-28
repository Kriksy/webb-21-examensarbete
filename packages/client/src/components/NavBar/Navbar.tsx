import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon, Menu, Header, Button, Grid } from 'semantic-ui-react'

import UserProfileImage from '../UserProfileImage'
import NameProfile from '../../profile/NameProfile'
import NavbarIcon from './NavbarIcon'
import { useAppContext } from '../../context/appContext';

export default function Navbar() {
    const navigate = useNavigate();

    const { logout, loggedIn } = useAppContext()

    const handleItemClick = (_e: any, { name }: any) => {
        navigate("/" + name)
    }

    const handleSignOutClick = (_e: any, { name }: any) => {
        logout()
        navigate("/home")
    }

    const activeMenuItem = useLocation().pathname.slice(1)

    return (
        <div>
            <Menu icon='labeled' stackable secondary position='left' inverted color="blue">
                <Menu.Item>
                    <a
                        href='/home'
                    >
                        <NavbarIcon />
                    </a>
                </Menu.Item>
                <Menu.Item
                    position='right'
                    name='home'
                    active={activeMenuItem === 'home'}
                    onClick={handleItemClick}
                >
                    <Icon
                        name='home'
                    />
                    Home
                </Menu.Item>
                <Menu.Item
                    name='search'
                    active={activeMenuItem === 'search'}
                    onClick={handleItemClick}

                >
                    <Icon
                        name='search'
                    />
                    Search
                </Menu.Item>

                <Menu.Item
                    name='user_profile'
                    active={activeMenuItem === 'user_profile'}
                    onClick={handleItemClick}
                >
                    <Icon
                        name='user'
                    />
                    Profile
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Grid divided='vertically'>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Menu.Item
                                        position='left'
                                        name='user_profile'
                                        onClick={handleItemClick}
                                        disabled={!loggedIn}
                                    >
                                        <Header
                                            as='h2'
                                            position='right'
                                        >
                                            <UserProfileImage />
                                            <br />
                                            <NameProfile />
                                        </Header>
                                    </Menu.Item>
                                </Grid.Column>
                                <Grid.Column>
                                    <Menu.Item>
                                        <Button
                                            inverted={true}
                                            name='logout'
                                            onClick={handleSignOutClick}
                                        >
                                            <Icon
                                                name="log out"
                                            />
                                        </Button>
                                    </Menu.Item>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Menu.Item>
                </Menu.Menu>
            </Menu >
            <div className="navbar"></div>
        </div>
    )
}