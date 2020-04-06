import React, { Component } from 'react';
import FromNhanVien from "./FromNhanVien";
import WithModal from "./WIthModal";
let FromModal = WithModal(FromNhanVien)
class HOC extends Component {
    render() {
        return (
            <div>
                <h3>HOC</h3>
                <FromModal />
            </div>
        );
    }
}

export default HOC;