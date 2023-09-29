import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import CreateProduct from "../pages/CreateProduct";

import { Provider } from 'react-redux';
import store from '../store';

window.alert = jest.fn();
describe("Display Input Create Product", () => {
    it("should displays Product Name correctly", () => {
        const { getByLabelText } = render(
            <Provider store={store}>
                <CreateProduct />
            </Provider>
        );
        const productName = getByLabelText('Product name');

        expect(productName.value).toBe('');

        fireEvent.change(productName, { target: { value: 'Product 1'} });
        expect(productName.value).toBe('Product 1');
    });

    it("should displays and update Product Category correctly", async () => {
        render(
            <Provider store={store}>
                <CreateProduct />
            </Provider>
        );
        const CategorySelect = screen.getByLabelText('Product Category');
        expect(CategorySelect.value).toBe('');

        fireEvent.change(CategorySelect, { target: { value: 'fashion'} });
        let options = screen.getAllByTestId('select-option')
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeTruthy();
        expect(options[2].selected).toBeFalsy();

    });

    it("should displays and update Product Freshness correctly", () => {
        render(
            <Provider store={store}>
                <CreateProduct />
            </Provider>
        );
        fireEvent.click(screen.getByLabelText('Brand New'));
        expect(screen.getByLabelText('Brand New')).toBeChecked();

        fireEvent.click(screen.getByLabelText('Second Hand'));
        expect(screen.getByLabelText('Second Hand')).toBeChecked();
    });

    it('should displays and update additional description correctly', () => {
        render(
            <Provider store={store}>
                <CreateProduct />
            </Provider>
        );

        const additionalDesc = screen.getByLabelText('Additional Description');
        const text = 'This is a test description'
        fireEvent.change(additionalDesc, { target: {value: text} });
        expect(additionalDesc.value).toBe(text);
    });

    it('should display and update product price correctly', () => {
        render(
            <Provider store={store}>
                <CreateProduct />
            </Provider>
        );

        const priceInput = screen.getByLabelText('Product Price');
        fireEvent.change(priceInput, { target: { value: '100' } });
        expect(priceInput.value).toBe('100');
    });

    it('should update image of product correctly', () => {
        render(
            <Provider store={store}>
                <CreateProduct />
            </Provider>
        );
        const imageInput = screen.getByLabelText('Image of Product');
        const file = new File(['product-image'], 'product-image.png', { type: 'image/png' });

        fireEvent.change(imageInput, { target: {files: [file] } });
        expect(imageInput.files[0].name).toBe('product-image.png');
    });
});

describe('CreateProduct Input Validation', () => {
    it('should display an error message when Product Name contains special characters', () => {
        render(
            <Provider store={store}>
                <CreateProduct />
            </Provider>
        );
        const productNameInput = screen.getByLabelText('Product name');

        fireEvent.change(productNameInput, { target: {value: 'Product@'} });
        expect(window.alert).toHaveBeenCalledWith('Please enter a valid product name.');
    });
    it('should display an error message when Product Name exceeds 10 characters', () => {
        render(
            <Provider store={store}>
                <CreateProduct />
            </Provider>
        );
        const productNameInput = screen.getByLabelText('Product name');
        
        fireEvent.change(productNameInput, { target: {value: 'ProductName'} });
        expect(window.alert).toHaveBeenCalledWith('Product name must not exceed 10 characters.');
    });
    it('should display an alert when not all fields are filled', () => {
        render(
            <Provider store={store}>
                <CreateProduct />
            </Provider>
        );
        const submitButton = screen.getByText('Submit');
        const productNameInput = screen.getByLabelText('Product name');

        fireEvent.click(submitButton);
        expect(window.alert).toHaveBeenCalledWith('Failed to add new product, please fill out all the fields');

        fireEvent.change(productNameInput, { target: {value: 'product'} });
        fireEvent.click(submitButton);
        expect(window.alert).toHaveBeenCalledWith('Failed to add new product, please fill out all the fields');
    })
});
