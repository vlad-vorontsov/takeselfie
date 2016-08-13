import React from 'react';
import Webcam from './Webcam';
import PhotoGallery from './PhotoGallery';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="webcam-wrapper"><Webcam /></div>
                <div className="photo-gallery"><PhotoGallery /></div>
            </div>
        )
    }
}

export default App;