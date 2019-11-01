import React, { Component } from 'react';
import './App.css';
//import InfiniteTree from 'react-infinite-tree';
// import FolderTree from 'react-folder-tree';
import {Treebeard} from 'react-treebeard';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results };
  }
  componentDidMount() {
    const data = new FormData();
    fetch('http://localhost:5000/data', { method: 'POST', body: data })
      .then((response) => {
        console.log("response");
        console.log(response);
        let cmpt = this;
        response.json().then((result) => cmpt.setState({ results: result }));
        console.log(response);
      })
      .catch(error => null)
  }

  onToggle(node, toggled){
    const {cursor, data} = this.state;
    if (cursor) {
        this.setState(() => ({cursor, active: false}));
    }
    node.active = true;
    if (node.children) { 
        node.toggled = toggled; 
    }
    this.setState(() => ({cursor: node, data: Object.assign({}, data)}));
}

  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <header>
          <h1 className="App-title"></h1>
        </header>
        <div><Treebeard
                data={data}
                onToggle={this.onToggle}
            />
      </div>
      </div>
    );
  }
}

export default App;
