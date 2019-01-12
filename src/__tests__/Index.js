'use strict'
import React from "react"
import ReactDOM from "react-dom"

import App from "../App"
import renderer from "react-test-renderer"
import {shallow, configure} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<Index /> should render correctly", () => {
    const wrapper = shallow(<App />)
    it("should render text 'Hello React!'", () => {
        expect(wrapper.find('div').children().text()).toEqual('Hello React!')
    })
    it("should render 1 child", () => {
        expect(wrapper.find('div').children()).toHaveLength(1)
    })
})