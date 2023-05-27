import React, { useState, useEffect } from 'react'
import { Form, FormProps, Button, Image, Segment, Message, InputOnChangeData, Label, Divider } from 'semantic-ui-react'
import FormData from 'form-data'
import AnimalDropdown from '../../../components/AnimalDropdown'

export default function CreatePostForm() {
    const [newFile, setNewFile] = useState<FileList | null>(null);
    const [preview, setPreview] = useState<string>("")
    const [state, setState] = useState<{ text: string }>({ text: "" })
    const [selectedAnimal, setSelectedAnimal] = React.useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, { name, value }: InputOnChangeData) => {
        setState(Object.assign({}, state, { [name]: value }))
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>, data: FormProps) {
        e.preventDefault()
        if (newFile == null) {
            return
        }

        const selectedFile = newFile[0]
        const form = new FormData();
        form.append('text', state.text);
        form.append('animal', selectedAnimal)
        form.append('image', selectedFile);

        fetch(`${process.env.REACT_APP_API_URL}/api/posts`, {
            method: 'POST',
            body: form as any,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("user") as string,
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            setSuccessMessage("Successfully saved post!")
            setState({...state, text: ""})
        }).catch(error => {
            setErrorMessage(error?.message)
        });
    }

    const fileChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
        if ('target' in e) {
            if ('files' in e.target) {
                const files = e.target.files as FileList
                setNewFile(files);
            }
        }
    };

    useEffect(() => {
        if (newFile == null) {
            return
        }

        const selectedFile = newFile[0]
        if (selectedFile === null) {
            return
        }

        // create the preview
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [newFile])


    const hasErrorMessage = errorMessage !== ""
    const submitOK = newFile !== null
    return (
        <>
            <Segment color='blue'>
                <Form onSubmit={onSubmit} error={hasErrorMessage}>
                    <Form.Field>
                        <Form.Input
                            label="Scribbles"
                            placeholder='Text...'
                            name='text'
                            value={state.text}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Divider />
                    <Form.Field>
                        <label>What snout did you find?</label>
                        <AnimalDropdown
                            onChange={(animal) => setSelectedAnimal(animal)}
                        />
                    </Form.Field>

                    <Divider />

                    <Form.Field>
                        <Form.TextArea rows={2} label='Where' placeholder='Tell us your history about how did you meet the animal ...' />
                        <br />
                    </Form.Field>
                    <Form.Field>
                        <Button as="label" htmlFor="file" type="button">
                            Upload Image
                        </Button>
                        <input type="file" id="file" hidden onChange={fileChange} />

                    </Form.Field>
                    <Button type='submit' fluid disabled={!submitOK} color='green'>Save</Button>
                    {
                        preview &&
                        <Segment>
                            <Label attached='top'>Preview</Label>
                            <Image src={preview} size="medium" centered outline="true" className="sdf-logo-vit" />
                        </Segment>

                    }

                </Form>
                {
                    successMessage &&
                    <Message>
                        {successMessage}
                    </Message>
                }
                {
                    errorMessage &&
                    <Message
                        error
                        header='Oh noes... failed to save post'
                        list={[errorMessage]}
                    />
                }
            </Segment>
        </>
    )
}