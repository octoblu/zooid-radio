import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'
import FormLabel from 'zooid-form-label'

import styles from './styles.css'
import Radio from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Radio />', () => {
  describe('when given no props', () => {
    let sut

    beforeEach(() => {
      sut = mount(<Radio />)
    })

    it('should not render the label', () => {
      expect(sut).to.not.contain(<label />)
    })
  })

  describe('when given props', () => {
    let sut
    beforeEach(() => {
      sut = shallow(
        <Radio
          name="visibility"
          value="Public"
          label="Bluprint Name"
          description="Greate Bluprint names are descriptive"
          required
        />
      )
    })

    it('should pass sanitized props down to input[type="radio"]', () => {
      expect(sut).to.contain(
        <input
          type="radio"
          name="visibility"
          value="Public"
          required={true}
          className={styles.radio}
        />
      )
    })
  })

  describe('when given className prop', () => {
    it('should add the class name in to the text input', () => {
      const sut        = shallow(<Radio className="catsAreAwesome" />)
      const radioInput = sut.find('input[type="radio"]')

      expect(sut).to.have.className('catsAreAwesome')
      expect(radioInput).to.not.have.className('catsAreAwesome')
    })
  })

  describe('when given label prop', () => {
    it('should render a FormLabel with given label', () => {
      const sut = shallow(<Radio label="Emacs" />)
      expect(sut).to.contain(
        <FormLabel name="" required={false}>Emacs</FormLabel>
      )
    })

    it('should pass down name & required props to FormLabel', () => {
      const sut = shallow(
        <Radio
          name="visibility"
          value="Public"
          label="Bluprint Name"
          description="Greate Bluprint names are descriptive"
          required
        />
      )

      expect(sut).to.contain(
        <FormLabel
          name="visibility"
          required
        >
          Bluprint Name
        </FormLabel>
      )
    })
  })

  describe('when given description props', () => {
    it('should render the description', () => {
      const sut = mount(<Radio description="Cats are awesome" />)
      expect(sut).to.contain(
        <span className={styles.description}>Cats are awesome</span>
      )
    })
  })
})
