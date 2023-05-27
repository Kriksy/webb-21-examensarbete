import React, { useState } from 'react'
import { Image, Segment, Form, Button } from 'semantic-ui-react'

interface FormElements extends HTMLFormControlsCollection {
    files: HTMLInputElement
}

interface OnSubmitFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

export default function ImageUploadForm() {
    const [newFile, SetNewFile] = useState([]);

    const fileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //SetNewFile(event.target.files[0]);
    };

    const onFormSubmit = () => {
        // Do something
    }

    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Field>
                <Button as="label" htmlFor="file" type="button">
                    Some button stuff
                </Button>
                <input type="file" id="file" hidden onChange={fileChange} />

            </Form.Field>
            <Button type="submit">Upload</Button>
        </Form>
    )
}