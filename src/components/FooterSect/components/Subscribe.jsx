function Subscribe() {
  return (
    //main wrapper
    <div className="subscribeWrapper">
      {/* info wrapper */}
      <div className="subscribeText">
        <p>
          Stay informed <span>Get email updates</span>
        </p>
      </div>
      {/* input wrapper */}
      <div className="subscribeInput">
        <input
          type="email"
          name="email"
          id="emailsub"
          placeholder="Enter email address"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;