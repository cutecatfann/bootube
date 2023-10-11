# Bootube

A simplified Youtube clone that lets users upload and watch videos.

Inspired by Neetcodes' Youtube Clone. A huge shoutout for the learning opportunity!

## Features
- **List videos**: Browse a list of uploaded videos.
- **Watch a video**: Play any video from the list.
- **User Authentication**: Sign in and out of the platform.
- **Video Upload**: Easily upload your videos to share with the community.
- **Transcoding**: Watch the transcoded version of the uploaded videos for optimized streaming.

## Tech Stack
- **Frontend**:
  - [Next.js](https://nextjs.org/)
- **Backend**:
  - [Express.js](https://expressjs.com/)
  - [Firebase Functions](https://firebase.google.com/docs/functions)
  - [Firebase Firestore](https://firebase.google.com/docs/firestore)
- **Authentication**:
  - [Firebase Auth](https://firebase.google.com/docs/auth)
- **Video Storage & Processing**:
  - [Google Cloud Storage](https://cloud.google.com/storage)
  - [FFmpeg](https://ffmpeg.org/)
  - [Google Cloud Pub/Sub](https://cloud.google.com/pubsub)
  - [Google Cloud Run](https://cloud.google.com/run)
- **Containerization**:
  - [Docker](https://www.docker.com/)

## How It Works

1. **Video Storage**: Google Cloud Storage is utilized for storing both raw and processed videos uploaded by users.
2. **Video Processing**: Upon video upload, a Pub/Sub message is sent to a non-public video processing service hosted on Cloud Run. The service uses FFmpeg to transcode the video. After the process is complete, the transcoded videos are stored back to Cloud Storage.
3. **Metadata Storage**: Cloud Firestore serves as the database, storing metadata associated with each video.
4. **Web Client**: A Next.js application, hosted on Cloud Run, acts as the web client. It lets users interact with the platform – listing, uploading, and watching videos.
5. **Backend Service**: The Next.js client communicates with backend services through API calls to Firebase Functions. These functions fetch videos and their metadata from Cloud Firestore.

## Demo

**Note**: *The project is currently not hosted publicly for demonstration since videos are not checked for inapproprate content.*

## Security
For the sake of security, no API keys or private credentials are stored in this repository. Please ensure you follow best practices when deploying or using this project in your environment.
