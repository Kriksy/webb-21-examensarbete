import React, { Component } from 'react'
import { Image, Segment } from 'semantic-ui-react'
import CollectionItem, { CollectionItemProps } from "./CollectionItem"



export default function Collection() {
    //const collections: CollectionItemProps[] = []


    const [collections, setCollections] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:9000/uploads/')
            .then(results => results.json())
            .then(data => {
                const items = data.items;
                setCollections(items)
            });
    }, []);
    return (
        <Segment>
            {collections.map((collection) => CollectionItem(collection))}
        </Segment>
    )
}