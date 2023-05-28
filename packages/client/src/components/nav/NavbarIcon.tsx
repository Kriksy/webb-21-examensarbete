import React from 'react'
import { useLocation } from 'react-router-dom';
import { Image } from 'semantic-ui-react'

export default function NavbarIcon() {
    let iconSource = "snoutbook_navbar_icon_black.png"
    if (useLocation().pathname.match(/\//g)!.length > 1) {
        iconSource = "../" + iconSource
    }

    return (
        <Image size='medium' src={iconSource} />
    )
}