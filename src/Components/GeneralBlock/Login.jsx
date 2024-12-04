export default function Login() {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div
        className="row w-75 g-0 rounded-3 shadow-lg"
        style={{ maxWidth: "1200px" }}
      >
        {/* Left Column - Form */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-5 bg-white rounded-3">
          <h1 className="text-center text-primary mb-4">Log In</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control rounded-3"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your information with anyone else.
            </small>
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-3"
              id="exampleInputPassword1"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
          <div className="d-grid">
            <button type="button" className="btn btn-primary rounded-3">
              Log In
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 d-none d-md-block">
          <div
            className="h-100 w-100"
            style={{
              backgroundImage: `url('/undraw_medicine_b1ol.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0 10px 10px 0",
              minHeight: "500px", // Increased height for the image side
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
