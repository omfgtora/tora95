import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Canvas from './Canvas';
import Preview from './Preview';
import { MdClear, MdColorLens, MdRedo, MdUndo, MdZoomIn, MdZoomOut } from 'react-icons/md'
import { SketchPicker } from 'react-color';
import { Button } from 'react95'

export default class Draw extends Component {
  state = {
    scale: 10,
    size: 64,
    color: {r: 255, g: 0, b: 0, a: 1},
    backgroundColor: '',
    isDrawing: false,
    grid: {
      on: true,
      color: 'rgba(0,0,0,0.1)'
    },
    showColorPicker: false,
    colorPickerCoords: {}, 
    pixels: [],
    redo: [],
    undo: [],
  };

  toggleDrawing = (bool) => {
    this.setState({isDrawing: bool})
  };

  handleEvent = (ev) => {
    const scale = this.state.scale;
    const rect = ev.target.getBoundingClientRect();
    const [mouseX, mouseY] = [Math.floor(ev.clientX - rect.left)-1, Math.floor(ev.clientY - rect.top)-1];
    const [cellX, cellY] = [Math.floor(mouseX / scale), Math.floor(mouseY / scale)];

    const newPixel = { x: cellX, y: cellY, color: `rgba(${this.state.color.r},${this.state.color.g},${this.state.color.b},${this.state.color.a}` };

    if (this.checkDuplicate(newPixel)) {
      return
    }

    if (this.state.isDrawing && this.state.pixels.length > 0) {
      let lastPixel = this.state.pixels[this.state.pixels.length-1][this.state.pixels[this.state.pixels.length-1].length-1];
      this.detectSkip(lastPixel, newPixel);
      this.state.pixels[this.state.pixels.length-1].push(newPixel);
      this.setState({ pixels: [...this.state.pixels] })
    } else {
      this.setState({ pixels: [...this.state.pixels, [newPixel]] })
    }

    this.setState({ redo: [] })
    
  };

  changeSize = () => {
    let newSize;
    if (this.state.size === 64) {
      newSize = 128
    } else {
      newSize = 64
    }
    this.setState({size: newSize})
  };

  toggleColorPicker = (ev) => {
    const [mouseX, mouseY] = [Math.floor(ev.clientX), Math.floor(ev.clientY)];
    this.setState({ showColorPicker: !this.state.showColorPicker, colorPickerCoords: {x: mouseX, y: mouseY} })
  };

  setScale = (int) => {
    this.setState({ scale: int })
  };

  increaseScale = () => {
    this.setState({ scale: this.state.scale+1 })
  };

  decreaseScale = () => {
    if (this.state.scale > 1) {
      this.setState({ scale: this.state.scale-1 })
    }
  };

  checkDuplicate = (newPixel) => {
    return this.state.pixels.flat().some(pixel => {
      return (pixel.x === newPixel.x && pixel.y === newPixel.y && pixel.color === newPixel.color)
    })
  };

  detectSkip = (lastPixel, newPixel) => {
    
    const deltaY = lastPixel.y - newPixel.y;
    const deltaX = lastPixel.x - newPixel.x;

    
    if (Math.max(Math.abs(deltaY), Math.abs(deltaX)) > this.state.scale) {
      if (Math.abs(deltaY) > this.state.scale && Math.abs(deltaX) > this.state.scale) {
        let skippedPixel = {x: 0, y: 0, color: this.state.color};

        for (let i = 0; i < lastPixel.x; i++) {
          console.log()
        }
      } else if (Math.abs(deltaY)) {

      } else if (Math.abs(deltaX)) {

      }
      console.log(deltaY, deltaX)
    }
    
  };

  undo = () => {
    if (this.state.pixels.length > 0) {
      const removed = this.state.pixels.splice(-1);
      this.setState({ redo: [...this.state.redo, removed[0]] })
    }
  };

  redo = () => {
    if (this.state.redo.length > 0) {
      const readded = this.state.redo.splice(-1);
      this.setState({ pixels: [...this.state.pixels, readded[0]] })
    }
  };

  handleColorPick = (ev) => {
    this.setState({ color: ev.rgb })
  };

  save = () => {
    let canvas = ReactDOM.findDOMNode(this.refs.preview);
    let base64 = canvas.toDataURL();
    let link = document.createElement("a");

    link.setAttribute('href', base64);
    link.setAttribute('download', 'pixemoji.png');
    link.click();
    link.remove()
  };

  clear = () => {
    this.setState({ pixels: [], redo: [...this.state.pixels] })
  };
  
  render() {
    return (
    <div>
      <div id="tool-container">
        <Preview 
          ref="preview" 
          pixels={ this.state.pixels }
          scale={ this.state.scale }
          size={ this.state.size }
        />
        <Button onClick={ this.toggleColorPicker } id="color-picker-button"><MdColorLens /></Button>
        <Button onClick={ this.increaseScale }><MdZoomIn /></Button>
        <Button onClick={ this.decreaseScale }><MdZoomOut /></Button>
        <Button onClick={ this.undo }><MdUndo /></Button>
        <Button onClick={ this.redo }><MdRedo /></Button>
        <Button onClick={ this.clear }><MdClear /></Button>
        <Button variant="contained" color="primary" onClick={ this.save }>Save</Button>
      </div>
      <div>
        <Canvas 
          ref="canvas" 
          scale={ this.state.scale }
          size={ (this.state.size*this.state.scale) }
          pixels={ this.state.pixels }
          handleEvent={ this.handleEvent }
          toggleDrawing={ this.toggleDrawing }
          isDrawing={ this.state.isDrawing }
          grid={ this.state.grid }
        />
      </div>
      { this.state.showColorPicker ? (
        <div id="color-picker">
          <SketchPicker color={ this.state.color } onChangeComplete={ this.handleColorPick } />
        </div>
      ) : null }
    </div>
    )
  }
}