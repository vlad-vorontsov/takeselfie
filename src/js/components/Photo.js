import React from 'react';

class Photo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imageUrl = this.props.url;
        return (
            <div className="photo">
                <img src={imageUrl} alt="" />
            </div>
        )
    }
}

export default Photo;
