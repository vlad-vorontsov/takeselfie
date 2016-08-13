import React from 'react';

class Webcam extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="webcam">
                <video id="camera-stream" className="camera"></video>
                <button id="take-photo" className="tack-photo-btn">Take Photo</button>
                <canvas id="canvas"></canvas>
            </div>

        )
    }
}

export default Webcam;