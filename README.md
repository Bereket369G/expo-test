# Cinema Ticket Booking App

This is a multi-screen cinema ticket booking mobile application built with React Native and Expo. It provides a seamless experience for users to browse movies, view details, select seats, and book tickets.

## Features

- **Splash Screen**: An engaging entry point to the application.
- **Home Screen**: Browse movie banners, top movies, and upcoming releases.
- **Movie Details**: View comprehensive details for each movie, including summary, cast, and genres.
- **Seat Selection**: An interactive seat map to choose your desired seats.
- **Checkout Confirmation**: A summary of your booking details.
- **Cross-Platform**: Runs on Android, iOS, and Web from a single codebase.

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router
- **Styling**: React Native StyleSheet

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Expo Go app on your Android or iOS device (for running on a physical device)
- Android Studio and an emulator (for running in an Android emulator)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd expo-test
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the Application

You can run the application in several ways:

### 1. On a Physical Device (Android or iOS)

1.  Make sure your computer and your mobile device are on the same Wi-Fi network.
2.  Start the Expo development server:
    ```bash
    npx expo start
    ```
3.  A QR code will be displayed in the terminal.
4.  Open the **Expo Go** app on your device and scan the QR code.

### 2. In an Android Emulator

1.  Make sure you have an Android emulator installed and running.
2.  Start the Expo development server:
    ```bash
    npx expo start
    ```
3.  In the terminal where the server is running, press `a`.

### 3. In a Web Browser

1.  Start the Expo development server for the web:
    ```bash
    npx expo start --web
    ```
2.  The application will automatically open in your default web browser.

## Project Structure

The project follows a file-based routing system provided by Expo Router. The main screens are located in the `app` directory:

- `app/index.tsx`: Splash Screen
- `app/home.tsx`: Home Screen
- `app/movie-detail.tsx`: Movie Detail Screen
- `app/seat-selection.tsx`: Seat Selection Screen
- `app/checkout-confirmation.tsx`: Checkout Confirmation Screen

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.