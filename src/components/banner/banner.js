
import "./banner.css";


const Banner = () => {
  return (
    <div className="banner">
     

      <div className="container ml-5 mt-5" style={{ marginTop: "6rem" }}>
        <div className="row">
          <div className="col-12 col-xl-12 col-md-12">
            <h2
              className="text-white font-weight-bold d-flex flex-column"
              style={{ fontSize: "7rem" }}
            >
              <span className="mb-n5">Go</span>
              <span>Near</span>
            </h2>
            <span className="rounded-lg font-weight-bold px-2 py-1 bg-white">
              Explore nearby stays
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
