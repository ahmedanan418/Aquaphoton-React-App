const Display = () => {
    const videoUrl = '/file_example_MP4_480_1_5MG.mp4';
    const logo1 ='/Aqua_logo1.png'
    return (
      <div className="video-preview">
        <video width="640" height="360" controls autoPlay loop>
          <source src={videoUrl} type="video/mp4" />
          Your browser doesn't support this video tag
        </video>
         
      </div>
      
    );
  };
  
  export default Display;