import Header from "./header/header";
import Banner from "./banner/banner";
import Online from "./online/online";
import LiveCards from "./LiveCards/Livecards";
import Footer from "./footer/footer";
import '../index.css';
import { useHistory } from "react-router-dom"

//import  Search  from "./search/search";



const Home=() =>{
    
    const history=useHistory()
return(
    <div>

    <div className="main-background"> 
    <div className="row">
        <div className="col-12 ">
        <Header className="" />
        </div>
    </div>
    <div className="row banner-component">
        <div className="col-12 ">
        <Banner />
        </div>
    </div> 
    </div>
    <div className="row ml-5 mt-4" >
        <h4 className="bold font-weight-bolder">Live anywhere</h4>
    </div>
    <div className="row live-cards-section ">
    <div className="col-12 col-md-6 col-xl-3 mb-3" onClick={() =>{

        history.push('/filtter/ENTIRE_HOME')
    }}>
    <LiveCards
       // src="../image/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg"
       
        src={require(`../image/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg`).default}
        title="Entire homes"
        

         />
    </div>
    <div className="col-12 col-md-6 col-xl-3 mb-3" onClick={() =>{

history.push('/filtter/UNIQUE_STAYES')
}}>
    <LiveCards
       // src="../image/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg"
        src={require(`../image/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg`).default}
        title="Unique stayes"
         />
    </div>
    <div className="col-12 col-md-6 col-xl-3 mb-3" onClick={() =>{

history.push(`/filtter/CABINS_AND_COTTAGE`)
}}>
    <LiveCards
       // src="../image/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg"
        src={require("../image/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg").default}
        title="Cabins and cottage"
         />
    </div>
    <div className="col-12 col-md-6 col-xl-3 mb-3" onClick={() =>{

history.push('/filtter/PETS_WELCOME')
}}>
    <LiveCards
      //  src="../image/fbe849a4-841a-41b3-b770-419402a6316f.jpg"
        src={require("../image/fbe849a4-841a-41b3-b770-419402a6316f.jpg").default}
        title="Pets welcocme"
         />
    </div>
    
    </div>
    <div className="row online-component">
        <div className="col-12 ">
        <Online />
        </div>
    </div>
    <div className="row ml-5 mt-4" >
        <h4 className="bold font-weight-bolder">Join millions of hosts on Airbnb</h4>
    </div>
    <div className="row Host-section pl-5 pr-5" >
    <div className="col-12 col-md-6 col-xl-4 mb-3">
    <LiveCards
        src={require(`../image/hostyourhome.jpg`).default}
        title="Host your home"
         /> 
    </div>
    <div className="col-12 col-md-6 col-xl-4 mb-3">
    <LiveCards
        src={require(`../image/hostOnline.jpg`).default}
        title="Host an Online Experience"
         />
    </div>
    <div className="col-12 col-md-6 col-xl-4 mb-3">
    <LiveCards
        src={require(`../image/hostAnExp.jpg`).default}
        title="Host an Experience"
         />
    </div>
    </div>
  
    <div className="footer">
    <div className="row">

        <div className=" col-12">
            <Footer/>
        </div>
    </div>
    </div>
    </div>
    
)
}

export default Home;