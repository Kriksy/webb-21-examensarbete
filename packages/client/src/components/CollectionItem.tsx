import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export interface CollectionItemProps {
    name: string;
    desc: string;
    img: {
        data: any;
        contentType: string;
    };
}

export interface CollectionItemProps2 {
    imageSource: string,
    header: string,
}


export default function CollectionItem(props: CollectionItemProps) {
    const source = `data:image/${props.img.contentType};base64,
    ${props.img.data.toString('base64')}`
    return (
        <div>
            <Card>
                <Image src={source} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    {/*             <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description> */}
                </Card.Content>
                {/*             <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
            </Card.Content> */}
            </Card>
        </div>
    )
}