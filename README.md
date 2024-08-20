
# Mail Service

Mail Service is an Express.js server that integrates Nodemailer for sending emails. This service is designed to be a lightweight and easy-to-use solution for sending emails from a sender's email to a receiver's email.

## Features

- **Send Emails:** Quickly send emails using a simple API.
- **Nodemailer Integration:** Leverages Nodemailer for reliable email delivery.
- **Express Server:** Built on Express.js for fast and scalable performance.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/venkatmidhunmareedu/mail-service.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mail-service
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Before starting the server, you need to configure your email service provider and authentication details.

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

```plaintext
MAIL_HOST=<smtp.example.com> # Ex: smtp.gmail.com  
MAIL_SERVICE=<example> # Ex: gmail
MAIL_ADDRESS=<your-mail-address> # Ex: johndoe@gmail.com
MAIL_PASSWORD=<your-app-password> # Ex: Jonny53@hi
PORT=<your-desired-port> # Ex : 3000
TOKEN_IDENTIFIER=<your-api-token-identifier> # Ex: spiderman (just for reference)
API_TOKEN=<your-api-token(md5 of token identifier)> # Ex: 9f05aa4202e4ce8d6a72511dc735cce9
```

Replace the values with your actual email service provider's SMTP details and credentials. (For MD5 of token identifier I recommend using https://www.md5hashgenerator.com/)

## Usage

### Start the Server

To start the Express server, run the following command:

```bash
npm start
```

The server will start on the default port `3000`. You can change the port by setting the `PORT` environment variable.

## API Endpoints

#### Send Mail `/mail`

- **Endpoint:** `/sendnow`
- **Method:** `POST`
- **Description:** Sends an email from the sender to the receiver.
- **Headers:**
  `authorization : <your-api-token>` 
- **Request Body:**
  ```json
  {
    "to": "receiver@example.com",
    "subject": "Your Subject Here",
    "text": "Email content here."
  }
  ```
- **Response:**
  - `200 OK` - If the email is sent successfully.
  - `400 Bad Request` - If required fields are missing.
  - `500 Internal Server Error` - If there is a server error.

### Example Request

```bash
curl -X POST http://localhost:3000/mail/sendnow \
-H "Content-Type: application/json" \
-H "authorization: <your-api-token>" \
-d '{
  "to": "receiver@example.com",
  "subject": "Hello from Mail Service",
  "text": "This is a test email."
}'
```


### To-Dos 

Checkout the below tasks if you want to **contribute**. Fork the repo and open a new branch with name of the feature. 

- [x] Sending mails from sender to the receiver
- [ ] Templates for mail (checkout the templates folder)
- [ ] Code optimization
### Logs

All server logs, including email sending status, will be displayed in the console. You can use a logging service or middleware for more advanced logging and error tracking.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
