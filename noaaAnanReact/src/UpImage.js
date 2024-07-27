import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

const FrameUploader = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const uploadVideo = async () => {
    if (!videoFile) return;

    // Create a reference to 'videos/video_timestamp.mp4'
    const storageRef = ref(storage, `videos/video_${Date.now()}.mp4`);

    // Upload the video file to Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, videoFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress if needed
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      async () => {
        // Handle successful upload
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at', downloadURL);
          alert('Video uploaded successfully!');

          // Send an HTTP request to update the JSON file
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: downloadURL }),
          });

          const data = await response.json();
          console.log('Response from server:', data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    );
  };

  return (
    <div className="Frame">
      <h1>Video Upload</h1>
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={uploadVideo}>Upload Video</button>
    </div>
  );
};

export default FrameUploader;
