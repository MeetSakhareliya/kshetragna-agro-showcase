# Video Gallery Setup

## How to Add Videos to Your Website

1. **Place your video files in this folder** (`public/videos/`)
   - Supported formats: MP4, WebM, OGG
   - Recommended: MP4 format for best compatibility

2. **Update the video list** in `src/components/VideoGallery.tsx`
   - Open the file
   - Find the `getVideos()` function
   - Add your video to the array:

```javascript
{
  id: 4, // increment the ID
  filename: "your-video.mp4",
  title: "Your Video Title",
  thumbnail: "/videos/your-video-thumb.jpg", // optional
}
```

3. **Optional: Add Thumbnails**
   - Create thumbnail images (JPG/PNG) for your videos
   - Place them in this same folder
   - Name them similarly to your video files
   - Reference them in the video list

## Example Structure

```
public/videos/
├── README.md (this file)
├── farm-tour.mp4
├── farm-tour-thumb.jpg
├── harvest-season.mp4
├── harvest-season-thumb.jpg
└── your-new-video.mp4
```

## Tips

- Keep video file sizes reasonable (under 50MB) for faster loading
- Use descriptive filenames (e.g., "organic-farming-2024.mp4")
- Thumbnails should be 16:9 aspect ratio (e.g., 1280x720px)
- Videos will automatically appear in the gallery once added to the code
