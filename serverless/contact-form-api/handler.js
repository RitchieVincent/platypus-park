// handler.js

const aws = require("aws-sdk")
const ses = new aws.SES()
const myEmail = process.env.EMAIL
const myDomain = process.env.DOMAIN
const endpoint =
  "https://kdz5miu56d.execute-api.eu-west-2.amazonaws.com/dev/email/send"

function generateResponse(code, payload) {
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": myDomain,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(payload),
  }
}

function generateError(code, err) {
  console.log(err)
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": myDomain,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(err.message),
  }
}

function generateEmailParams(body) {
  const { email, name, phone, type, message } = JSON.parse(body)
  console.log(email, name, phone, type, message)
  if (!(email && name && type)) {
    throw new Error(
      "Missing parameters! Make sure to add parameters 'email', 'name', 'content'."
    )
  }

  return {
    Source: myEmail,
    Destination: { ToAddresses: [myEmail] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Contact Form Submission \n\nName: ${name} \nEmail: ${email} \nPhone: ${
            phone ? phone : `-`
          } \nEnquiry Type: ${type} \nMessage: ${message ? message : `-`}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Contact Form Submission`,
      },
    },
  }
}

module.exports.send = async event => {
  try {
    const emailParams = generateEmailParams(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}
