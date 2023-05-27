import { Dropdown } from 'semantic-ui-react'

import { animalDropdownOptions } from "../shared/animalTypes"

export interface SearchDropdownProps {
    onChange: (selectedAnimal: string) => void
}
export default function AnimalDropdown(props: SearchDropdownProps) {
    return <Dropdown
        placeholder='What are you looking for?'
        fluid
        search
        clearable
        onChange={(e, { value }) => {
            props.onChange(value as string)
        }}
        selection
        options={animalDropdownOptions}
    />
}