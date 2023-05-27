import { useState, useEffect } from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import { AppContainer } from "../../components/AppContainer"
import AnimalCard from './components/AnimalCard'
import SearchDropdown from '../../components/AnimalDropdown'
import { IPost } from '@snoutbook/shared/lib'
import PostList from '../../post/PostList'

export default function SearchPage() {
    const [posts, setPosts] = useState<IPost[]>([]);

    const [selectedAnimal, setSelectedAnimal] = useState("")
    const [animalInfo, setAnimalInfo] = useState([])

    useEffect(() => {
        if (selectedAnimal === "") {
            return
        }
        const url = `https://api.api-ninjas.com/v1/animals?` + new URLSearchParams({
            name: selectedAnimal,
        })
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": process.env.REACT_APP_NINJA_API_KEY as string
            },
        }).then(res => {
            return res.json()
        }).then(res => {
            setAnimalInfo(res.filter((item: {name: string}) => {
                return item.name === selectedAnimal
            }))
        }).catch(error => {
            console.log(`failed to retrieve animal details from ninja api service, got error: ${error}`)
        });

    }, [selectedAnimal])

    useEffect(() => {
        if (selectedAnimal === "") {
            return
        }
        const url = `${process.env.REACT_APP_API_URL}/api/posts?` + new URLSearchParams({
            animal: selectedAnimal,
        })
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => {
            return res.json()
        }).then(res => {
            setPosts([...res.data as IPost[]])
        }).catch(error => {
            console.log(`failed to retrieve posts, got error: ${error}`)
        });
    }, [selectedAnimal])

    return (
        <>
            <AppContainer header={{ title: "Search Animal", icon: "paw" }}>
                <Segment attached>
                    <SearchDropdown onChange={(animal) => setSelectedAnimal(animal)} />
                    <Divider />
                    {animalInfo && <AnimalCard animals={animalInfo} />}
                    <PostList posts={posts} role="standard" />
                </Segment>
            </AppContainer>
        </>

    )
}