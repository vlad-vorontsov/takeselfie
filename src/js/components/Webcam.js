import React from 'react';

class Webcam extends React.Component {

    constructor(props) {
        super(props);
        this.newPhoto = {};
        this.setUpVideo = this.setUpVideo.bind(this);
        this.handlePhotoAdd = this.handlePhotoAdd.bind(this);
    }

    componentDidMount() {
        this.setUpVideo();
    }

    setUpVideo() {
        var video = this.refs.videoStream;
        navigator.getMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

        if (!navigator.getMedia) {
            console.log("Your browser doesn't have support for the navigator.getUserMedia interface.");
        } else {
            navigator.getMedia(
                {
                    video: true
                },
                // Success Callback
                function (stream) {
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                },
                // Error Callback
                function (err) {
                    console.log('There was an error with accessing the camera stream');
                }
            );

        }
    }

    handlePhotoAdd() {
        const canvas = this.refs.canvas;
        let context = canvas.getContext('2d');
        let video = this.refs.videoStream;
        let width = video.videoWidth,
            height = video.videoHeight;
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);
        let photo = canvas.toDataURL('image/png');

        this.newPhoto = {
            id: Date.now(),
            url: photo
        };

        this.props.onPhotoAdd(this.newPhoto);
    }

    render() {
        return (
            <div className="webcam">
                <video ref="videoStream" id="camera-stream" className="camera"></video>
                <div id="take-photo" className="take-photo-btn action-btn" onClick={this.handlePhotoAdd}><i className="material-icons">camera_alt</i></div>
                <canvas ref="canvas" id="canvas"></canvas>
            </div>

        )
    }
}

export default Webcam;
