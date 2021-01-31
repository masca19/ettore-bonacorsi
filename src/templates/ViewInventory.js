import React from 'react'
import getInventory, { DENOMINATION } from '../../providers/inventoryProvider'
import Image from '../components/Image'
import { Link } from 'gatsby'
import { slugify } from '../../utils/helpers'
import { FaTimes } from 'react-icons/fa'
import { API, graphqlOperation } from 'aws-amplify'
import { listProducts } from '../graphql/queries'
import { updateProduct, deleteProduct } from '../graphql/mutations'

class ViewInventory extends React.Component {
  state = {
    inventory: [],
    currentItem: {},
    editingIndex: []
  }
  componentDidMount() {
    this.fetchInventory()
  }
  fetchInventory = async () => {
    const inventoryData = await API.graphql(graphqlOperation(listProducts))
    const { items } = inventoryData.data.listProducts
    console.log("inventory items: ", items)
    this.setState({ inventory: items })
  }
  editItem = (item, index) => {
    const editingIndex = index
    this.setState({ editingIndex, currentItem: item })
  }
  saveItem = async index => {
    const inventory = [...this.state.inventory]
    inventory[index] = this.state.currentItem
    await API.graphql(graphqlOperation(updateProduct, { input: this.state.currentItem }))
    this.setState({ editingIndex: null, inventory })
  }
  deleteItem = async index => {
    const id = this.state.inventory[index].id
    const inventory = [...this.state.inventory.slice(0, index), ...this.state.inventory.slice(index + 1)]
    this.setState({ inventory })
    await API.graphql(graphqlOperation(deleteProduct, { input: { id } }))
  }
  onChange = event => {
    const currentItem = {
      ...this.state.currentItem,
      [event.target.name]: event.target.value
    }

    this.setState({ currentItem })
  }
  render() {
    const { inventory, currentItem, editingIndex } = this.state
    console.log('currentItem: ', currentItem)
    return (
      <div>
        <h2>Inventory</h2>
        {
          inventory.map((item, index) => {
            const isEditing = editingIndex === index
            if (isEditing) {
              return (
                <div key={item.id}>
                  <div>
                    <Link to={slugify(item.name)}>
                      <Image src={item.image} alt={item.name} />
                    </Link>
                    <input
                      onChange={(e) => this.onChange(e, index)}
                    
                      value={currentItem.name}
                      placeholder="Item name"
                      name="name"
                    />
                    <div>
                      <p>In stock:</p>
                      <input
                        onChange={this.onChange}
                      
                        value={currentItem.currentInventory}
                        name="currentInventory"
                        placeholder="Item inventory"
                      />
                      <input
                        onChange={this.onChange}
                      
                        value={currentItem.price}
                        name="price"
                        placeholder="Item price"
                      />
                    </div>
                    <div role="button" onClick={() => this.saveItem(index)}>
                      <p>Save</p>
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <div key={item.id}>
                <div>
                  <Link to={slugify(item.name)}>
                    <Image src={item.image} alt={item.name} />
                  </Link>
                  <Link to={slugify(item.name)}>
                    <p>
                      {item.name}
                    </p>
                  </Link>
                  <div>
                    <p>In stock: {item.currentInventory}</p>
                    <p>
                      {DENOMINATION + item.price}
                    </p>
                  </div>
                  <div>
                    <FaTimes onClick={() => this.deleteItem(index)} />
                    <p role="button" onClick={() => this.editItem(item, index)}>Edit</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ViewInventory