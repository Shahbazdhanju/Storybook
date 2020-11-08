
import React from 'react';
import {addDecorator} from '@story/react'
import Center from '../src/components/Center/Center'

addDecorator(story => <Center>{story()}</Center>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}