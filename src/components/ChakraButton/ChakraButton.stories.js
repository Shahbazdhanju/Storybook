import React from "react";
import { Button } from "@chakra-ui/core";
import { action, actions} from '@storybook/addon-actions';

export default {
  title: "Chakra/Button",
  component: Button,
};

//added on click action to show at UI 
export const Success = () => (
  <Button onClick={action("Click anything ")} variantColor="green">
    Success
  </Button>
);

//expanded actions - onClick and onMouseOver 
export const Danger = () => (
  <Button {...actions('onClick','onMouseOver')} variantColor="red">
    Danger
  </Button>
);
 
//console log kinda feature in storybook -log . Inspect and find under Console
export const Log = () => (
    <Button variantColor= 'blue' onClick={() => console.log('Button clicked')}>Log</Button>
)
//installing console on UI command - yarn add -D @storybook/addon-console