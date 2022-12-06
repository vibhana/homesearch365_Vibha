import React, { Component} from 'react'
import axios from 'axios';

const baseApiUrl = 'http://localhost:8080/api';

class ViewListings extends React.Component {
    state = {
        address: '',
        beds: '',
        bath: '',
        area: '',
        detailUrl: '',
        imgSrc:'',
        price:'',
        addressCity:'',
        addressState:''
      };
      componentDidMount = () => {
        this.getHouseInventoryByZip();
      };


getHouseInventoryByZip = () => {
    axios.get(`${baseApiUrl}/HouseInventoryByZip?addressCity=Tampa`)
        .then((response) => {
            const data = response.data;
            this.setState({ houseInventory: data });
            console.log('Data has been received!!');
        })
        .catch(() => {
            alert('Error retrieving data!!!');
        });
}

displayHouseInventoryByZip = (houseInventory) => {

    if (!houseInventory) return null;

    return houseInventory.map((houseInventoryRecord, index) => (
        <div className="col-md-12 col-lg-6" key={index}>
              <div className="listing">
                <div className="listing-img" style={{background: `url("${houseInventoryRecord.imgSrc}") no-repeat center center`}}>
                    <span className="address">Address: {houseInventoryRecord.address}</span>
                    <div className="details">
                        <div className="col-md-3">
                            <div className="user-img"></div>
                        </div>
                        <div className="col-md-9">                           
                            <div className="listing-details">
                                <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>Area: {houseInventoryRecord.area} ft&sup2;</span></div>
                                <div className="bedrooms">
                                    <i className="fa fa-bed" aria-hidden="true"></i>
                                    <span>Beds: {houseInventoryRecord.beds}</span>
                                </div>
                                <div className="bedrooms">
                                    <i className="fa fa-bed" aria-hidden="true"></i>
                                    <span>Baths: {houseInventoryRecord.bath}</span>
                                </div>
                            </div>
                            <div className="view-btn">
                                View Listing
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-info">
                    <span className="price" >Price: {houseInventoryRecord.price}</span>
                    <span className="location" ><i className="fa fa-map-marker" aria-hidden="true"></i> Location: {houseInventoryRecord.addressCity}, {houseInventoryRecord.addressState}</span>
                </div>
            </div>
        </div>
    ));    
};


render() {

    return (
        <>     
        <section id="listings">
        <section className="search-area">
            <input type="text" name="search" placeholder="Search by city..."  />
        </section>
        <section className="sortby-area">
            <div className="results">
                
            </div>
            <div className="sort-options">
                <select name="sortby" className="sortby" onChange={this.props.change}>
                    <option value="price-dsc">Lowest Price</option>
                    <option value="price-asc">Highest Price</option>
                </select>
                <div className="view">
                    
                </div>
            </div>
        </section>
        <section className="listings-results">
           <div className="row">
           {this.displayHouseInventoryByZip(this.state.houseInventory)}
           </div>
        </section>
        <section id="pagination">
           <div className="row">
            <ul className="pages">
                <li>Prev</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Next</li>
            </ul>
          </div>
        </section>
    </section>
    </>
    )
};
}

export default ViewListings;

