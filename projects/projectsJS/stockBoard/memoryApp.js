import React from 'react'
import './styles/memoryApp.scss'

// import classnames from 'classnames'
import CardView from './CardView.js'
// import pdfurl from './images/tfsi.pdf'



export default class MemoryApp extends React.Component{

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <div> 
          {/* <a href={pdfurl} targret="_blank">pdf</a> */}
          <CardView onClickCount={this.handleClickCount} />
        </div> 
      </div>
    )
  }
}