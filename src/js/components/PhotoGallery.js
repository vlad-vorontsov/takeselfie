import React from 'react';
import Photo from './Photo';

class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let onPhotoDelete = this.props.onPhotoDelete;
        return (
            <div className="photo-gallery">
                { (() => {
                    return this.props.photos.map((photo) => {
                        return <Photo key={photo.id} url={photo.url} onDelete={onPhotoDelete.bind(null, photo)}/>
                    });
                })()}
            </div>
        )
    }

}

export default PhotoGallery;
