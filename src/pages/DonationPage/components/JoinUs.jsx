function JoinUs() {
  // handleDonateClick = async() => {

  //     const donationData = {
  //       amount: 25000,
  //     };
  //     try {
  //       const response = await fetch('https://shelterstride.onrender.com/api/v1/users/id/donation', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(donationData),
  //       });

  //       //check if request was successful
  //       if (response.ok) {
  //         console.log('Donation Successful!');
  //       } else {
  //         console.error ("failed to donate:", response.status)
  //       }
  //     }catch (error){
  //       console.log("Error donating:", error.message)
  //     }
  //   } else {
  //     console.log("user is not logged in.");
  //   }
  // };
  return (
    <section className="joinUs">
      <div className="textWrapper">
        <h2>
          <span>Join us</span> on the journey.
        </h2>
        <p>
          Whether you're a supporter or a partner, we invite you to join us on
          this transformative journey. Together, we can rewrite the narrative of
          affordable housing and create a world where everyone has the
          opportunity to thrive.
        </p>
      </div>

      <div className="btnWrapper">
        <button>Donate Now</button>
      </div>
    </section>
  );
}

export default JoinUs;
