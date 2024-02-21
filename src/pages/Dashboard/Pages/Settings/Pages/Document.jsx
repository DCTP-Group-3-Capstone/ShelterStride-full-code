import React, { useRef } from "react";
import "./Document.scss"; // Replace with your CSS file path
import home_income from "../../../../../assets/icon/home_income.svg";
import face from "../../../../../assets/icon/face.svg";


function Document() {
  const profilePictureInputRef = useRef(null);
  const accountStatementInputRef = useRef(null);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);



  const handleProfilePictureUploadButtonClick = () => {
    profilePictureInputRef.current.click();
  };

  const handleAccountStatementUploadButtonClick = () => {
    accountStatementInputRef.current.click();
  };


  const handleCaptureFaceButtonClick = async () => {
    try {
      // Get media stream from user's camera
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      mediaStreamRef.current = stream;
      // Attach the stream to the video element
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleStopCaptureButtonClick = () => {
    // Stop capturing video and release the camera
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here
    console.log("Selected file:", file);
  };

  return (
    <div className="document">
<h1>Verify ID & Income</h1>
<p>Click the buttons to verify</p>
<div className="id-upload">
<div className="v-income">

<img src={home_income} alt="Profile" className="profile-picture" />

<div>
<input
        type="file"
        accept=".pdf"
        ref={accountStatementInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button onClick={handleAccountStatementUploadButtonClick}>
     verify Income
      </button>
</div>

</div>
  
<div className="v-id">
<img src={face} alt="Profile" className="profile-picture" />

<div>
<input
        type="file"
        accept="image/*"
        ref={profilePictureInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button onClick={handleProfilePictureUploadButtonClick}>
    Verify ID
      </button>
</div>
    
</div>
</div>


      
    </div>
  );
}

export default Document;