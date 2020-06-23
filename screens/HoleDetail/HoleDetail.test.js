import 'react-native';
import React from 'react';
import HoleDetail from './HoleDetail';
import TestRenderer from 'react-test-renderer';

describe("the hole detail screen", () => {
    it("exists", () => {
        const testRenderer = TestRenderer.create(<HoleDetail />)
        expect(HoleDetail).toBeDefined();
    })
})