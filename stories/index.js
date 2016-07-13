import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Radio from '../src'

storiesOf('Radio', module)
  .addWithInfo('Basic', 'added Description', () => (
    <Radio
      name="visibility"
      value="Public"
      label="Bluprint Name"
    />
  ), { inline: true })
  .addWithInfo('With description', 'added Description', () => (
    <Radio
      name="visibility"
      value="Public"
      label="Bluprint Name"
      description="Great Bluprint names are descriptive"
    />
  ), { inline: true })
