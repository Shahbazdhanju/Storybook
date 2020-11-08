import React from 'react'
import Input from './Input'
import Center from '../Center/Center'

export default {
    title: 'Form/Input',
    component: Input,
decorators: [story => <Center>{story()}</Center>]
}

export const Small = () => <Input variant='small' placeholder='Smal   l size'/>
export const Medium = () => <Input variant='medium' placeholder='Medium size'/>
export const Large = () => <Input variant='large' placeholder='Large size'/>

Small.storyName = 'Small Input'