import React from 'react'
import AddInventory from '../components/formComponents/AddInventory'
import ViewInventory from './ViewInventory'

class Inventory extends React.Component {
  state = {
    viewState: 'view'
  }
  toggleViewState(viewState) {
    this.setState(() => ({ viewState }))
  }
  render() {
     return (
       <div>
          <h3>Inventory</h3>
          <div className="flex">
            <button onClick={() => this.toggleViewState('view')}>View</button>
            <button onClick={() => this.toggleViewState('add')}>Add</button>
          </div>
          {
            this.state.viewState === 'view' ? (
              <ViewInventory />
            ) : (<AddInventory />)
          }
          <button onClick={this.props.signOut} type="button">
            Sign Out
          </button>
       </div>
     )
  }
}

export default Inventory