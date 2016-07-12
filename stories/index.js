import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Radio from '../src'

storiesOf('Radio', module)
  .addWithInfo('Basic', 'added Description', () => (
    <Radio />
  ), { inline: true })
  .add('Basic', () => (
    <Radio />
  ))
