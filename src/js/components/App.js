import React from 'react';
import Webcam from './Webcam';
import PhotoGallery from './PhotoGallery';

class App extends React.Component {
    constructor() {
        super();
        this.state = {photos: []};
        this.handlePhotoAdd = this.handlePhotoAdd.bind(this);
        this.handlePhotoDelete = this.handlePhotoDelete.bind(this);
    }

    componentDidMount() {
        var localPhotos = JSON.parse(localStorage.getItem('photos'));
        if (localPhotos) {
            this.setState({photos: localPhotos});
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    _updateLocalStorage() {
        var photos = JSON.stringify(this.state.photos);
        localStorage.setItem('photos', photos);
    }

    handlePhotoAdd(newPhoto) {
        var newPhotos = this.state.photos.slice();
        newPhotos.unshift(newPhoto);
        this.setState({photos: newPhotos});
    }

    handlePhotoDelete(photo) {
        let photoId = photo.id;
        let newPhotos = this.state.photos.filter(function (photo) {
            return photo.id !== photoId;
        });
        this.setState({photos: newPhotos});
    }

    render() {
        return (
            <div>
                <div className="webcam-wrapper">
                    <Webcam onPhotoAdd={this.handlePhotoAdd}/>
                </div>
                <PhotoGallery photos={this.state.photos} onPhotoDelete={this.handlePhotoDelete}/>
            </div>
        )
    }
}

export default App;
