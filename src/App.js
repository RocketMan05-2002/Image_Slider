import React from 'react'
import Slider from './components/ImageSlider/Slider'
import NoFetchSlider from './components/NoFetchImageSlider/NoFetchImageSlider'

const App = () => {
  return (
    <div>
      {/* choose any one of following sliders
      1. slider fetches images from picsum and creates a slider
      2. Nofetchslider takes locally stored images and creates a slider
      */}
      {/* <Slider /> */}
      <NoFetchSlider />
    </div>
  )
}

export default App
