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
          <div>
            <p role="button" onClick={() => this.toggleViewState('view')}>View</p>
            <p role="button" onClick={() => this.toggleViewState('add')}>Add</p>
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