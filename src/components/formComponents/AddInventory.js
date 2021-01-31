import React from 'react'
import { Storage, API, graphqlOperation } from 'aws-amplify'
import { createProduct } from '../../graphql/mutations'
import uuid from 'uuid/v4'

const initialState = {
  name: '', brand: '', price: '', categories: [], image: '', description: '', currentInventory: ''
}

class AddInventory extends React.Component {
  state = initialState
  clearForm = () => {
    this.setState(() => (initialState))
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onImageChange = async (e) => {
    const file = e.target.files[0];
    const fileName = uuid() + file.name
    // save the image in S3 when it's uploaded
    await Storage.put(fileName, file)
    this.setState({ image: fileName })
  }
  addItem = async () => {
    const { name, brand, price, categories, image, description, currentInventory } = this.state
    if (!name || !brand || !price || !categories.length || !description || !currentInventory || !image) return

    // create the item in the database
    const item = { ...this.state, categories: categories.replace(/\s/g, "").split(',') }
    await API.graphql(graphqlOperation(createProduct, { input: item }))
    this.clearForm()
  }
  render() {
    const {
      name, brand, price, categories, image, description, currentInventory
    } = this.state
    return (
      <div>
        <h3>Add Item</h3>
        <div>
          <div>
            <form>
              <div>
                <label htmlFor="name">
                  Item name
                </label>
                <input
                  onChange={this.onChange}
                  value={name} id="name" type="text" placeholder="Item name" name="name" />
              </div>
              <div className="mb-4">
                <label htmlFor="price">
                  Item price
                </label>
                <input
                  onChange={this.onChange}
                  value={price} id="price" type="text" placeholder="Item price" name="price" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Item Description
                </label>
                <input
                  onChange={this.onChange}
                  value={description} id="description" placeholder="Item Description" name="description" />
              </div>
              <div>
                <label htmlFor="item image">
                  Item image
                </label>
                <input
                  type="file"
                  onChange={(e) => this.onImageChange(e)}
                />
              </div>
              <div>
                <label htmlFor="currentInventory">
                  In stock
                </label>
                <input
                  onChange={this.onChange}
                  value={currentInventory} id="currentInventory" placeholder="Items in stock" name="currentInventory" />
              </div>
              <div>
                <label htmlFor="categories">
                  Item categories
                </label>
                <input
                  onChange={this.onChange}
                  value={categories} id="categories" placeholder="Comma separated list of item categories" name="categories" />
              </div>
              <div>
                <label htmlFor="brand">
                  Item brand
                </label>
                <input
                  onChange={this.onChange}
                  value={brand} id="brand" placeholder="Item brand" name="brand" />
              </div>
              <div>
                <button onClick={this.addItem} type="button">
                  Add Item
                </button>
                <a onClick={this.clearForm} href="#">
                  Clear Form
                </a>
              </div>
            </form>
            <p>
              &copy;2020 JAMstack ECommerce. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default AddInventory