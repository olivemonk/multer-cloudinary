# Image Upload Backend with Express, Multer, Cloudinary, and dotenv

This is a backend application built using Express.js, Node.js, Multer, Cloudinary, and dotenv that demonstrates how to upload images to the Cloudinary server and retrieve the image URL and public ID, which can be stored in a database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- A Cloudinary account. You can sign up for free at [https://cloudinary.com/](https://cloudinary.com/).
- A MongoDB or any other database of your choice if you wish to store image information.

## Usage
You can now use this backend application to upload images to Cloudinary and store their URLs and public IDs in your database. Here's how you can make requests to the API:

* **Upload an image**: Send a POST request to /upload with a multipart/form-data payload containing the image file. The server will upload the image to Cloudinary and return the image URL and public ID.
* **Retrieve image information**: You can create your own routes and logic to retrieve image information from your database using the provided image URL and public ID.

If the image is successfully uploaded, you will receive a JSON response with the image URL and public ID, like this:
```json
{
  "imageUrl": "https://res.cloudinary.com/your_cloud_name/image/upload/public_id.jpg",
  "publicId": "public_id"
}
```
## How to Use

Follow these steps to use the image upload functionality of this backend application:

1. **Clone the Repository:**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/olivemonk/multer-cloudinary.git
   ```
2. **Install Dependencies:**
   
   Navigate to the project directory and install the required dependencies by running:
   
   ```bash
   cd image-upload-backend
   npm install
   ```
3. **Create a .env File:**

   In the root directory of the project, create a file named `.env`.

4. **Set Environment Variables:**

   Open the `.env` file and set the following environment variables:

   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   PORT=your_desired_port
   ```
   
5. **Start the Server:**
   Start the server by running the following command:
   ```bash
   npm start
   ```
6. **Open Postman or Your Preferred API Testing Tool:**

   Open [Postman](https://www.postman.com/) or your preferred API testing tool.

7. **Send a POST Request for Image Upload:**

   Send a POST request to the following endpoint in Postman:
   on POST : (http://localhost:5000/api/users/upload)
8. **Configure the Request Body:**
  In the request body, select the `form-data` option.

9. **Add the Image File:**
  Add a key-value pair with the key set to "image" and the value set to your desired image file. Make sure the "image" key matches the field name expected by the server.

10. **Send the Request:**
  Click the "Send" button in Postman to send the POST request with the selected image file.

This completes the process of using the image upload functionality of the backend application.

- **You will get the following response:**
```json
{
    "success": true,
    "message": "Uploaded!",
    "data": {
        "asset_id": "bea4ac70d863055a081d06176bc029e5",
        "public_id": "zhvdslessiy8icvyyofz",
        "version": 1694886623,
        "version_id": "278fc77dfe3bb82f18cb5eb575888550",
        "signature": "cef654180cc20c86293e3960064307f83881faf1",
        "width": 737,
        "height": 632,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2023-09-16T17:50:23Z",
        "tags": [],
        "bytes": 27979,
        "type": "upload",
        "etag": "3b4a144f22d54207db4fe8928c59a21f",
        "placeholder": false,
        "url": "http://res.cloudinary.com/dzaipt6nn/image/upload/v1694886623/zhvdslessiy8icvyyofz.jpg",
        "secure_url": "https://res.cloudinary.com/dzaipt6nn/image/upload/v1694886623/zhvdslessiy8icvyyofz.jpg",
        "folder": "",
        "original_filename": "cm (1)",
        "original_extension": "jpeg",
        "api_key": "288647416491943"
    }
}
```


