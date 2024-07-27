import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

const FrameUploader = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const processVideo = async () => {
    if (!videoFile) return;

    const videoElement = document.createElement('video');
    videoElement.src = URL.createObjectURL(videoFile);

    videoElement.addEventListener('loadeddata', async () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const frameRate = 1; // Number of frames to extract per second

      for (let time = 0; time < videoElement.duration; time += 1 / frameRate) {
        videoElement.currentTime = time;
        await new Promise((resolve) => {
          videoElement.addEventListener('seeked', async () => {
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            const frame = canvas.toDataURL('image/jpeg');
            const blob = dataURItoBlob(frame);

            // Create a reference to 'images/frame_timestamp.jpg'
            const storageRef = ref(storage, `frames/frame_${Date.now()}.jpg`);

            // Upload frame to Firebase Storage
            const uploadTask = uploadBytesResumable(storageRef, blob);

            uploadTask.on('state_changed',
              (snapshot) => {
                // Handle progress if needed
              },
              (error) => {
                console.error('Upload failed:', error);
              },
              () => {
                // Handle successful upload
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  console.log('File available at', downloadURL);
                });
              }
            );

            resolve();
          }, { once: true });
        });
      }

      alert('Video processed and frames uploaded successfully!');
    });
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div className="Frame">
      <h1>Frame-by-Frame Video Upload</h1>
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={processVideo}>Process Video</button>
    </div>
  );
};

export default FrameUploader;
