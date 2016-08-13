import React from 'react';
import Photo from './Photo';

class PhotoGallery extends React.Component {
    constructor() {
        super();
    }

    getDataFromServer() {
        return [
            {
                id: 1,
                url: 'http://placekitten.com/200/300'
            },
            {
                id: 2,
                url: 'http://placekitten.com/200/300'
            },
            {
                id: 3,
                url: 'http://placekitten.com/200/300'
            }
        ];
    }

    render() {
        let data = this.getDataFromServer();

        return (
            <div>
                { (() => {
                    return data.map((photo) => {
                        return <Photo key={photo.id} url={photo.url}/>
                    });
                })()}
            </div>
        )
    }

}

export default PhotoGallery;