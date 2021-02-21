import React from 'react';

const SearchResultStays = ({ stayInfo }) => {
    if(stayInfo && stayInfo.length>0){
        return stayInfo.map((host)=>{
            let image = `/images/stays/${host.image}.jpg`;
            return (        
                <div>
                    <div className='row'>                        
                        <div className='DivImg col-12 col-xl-6 col-md-6'>
                            <img src={image} alt=''/>
                        </div>
                        <div className='DivDesc col-12 col-xl-6 col-md-6'>
                            <div className='col-8'>
                                <p>{host.type}</p>
                                <p className='fas' style={{color:"#2F4F4F"}}>{host.address}</p>
                                <hr/>
                                <p>{host.description}</p>
                                <p>{host.services}</p>
                                <p className="P_Price" style={{color:"#2F4F4F"}}>{host.price}</p>
                                <p className='rate' style={{color:"#2F4F4F"}}>{host.rate}</p>
                            </div>
                                <span class="fa fa-star star"></span>
                        </div>
                        
                    </div>
                    <hr/>
                </div>      
            )
        })
    }
}
export default SearchResultStays;