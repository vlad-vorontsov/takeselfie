import React from 'react';

class Photo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imageUrl = this.props.url;
        const onDelete = this.props.onDelete;
        return (
            <div className="photo">
                <img src={imageUrl} alt="" />
                <div className="delete-photo action-btn" onClick={onDelete}><i className="material-icons">close</i></div>
            </div>
        )
    }
}

export default Photo;
