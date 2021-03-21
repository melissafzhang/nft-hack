const axios = require('axios').default;
const callback_url = "http://95.217.122.163:3000/api/auth/callback/rally";

const getRallyDetails = async () => {
  return (await axios.post('https://api.rally.io/v1/oauth/register', {
    username: process.env.RALLY_USERNAME,
    password: process.env.RALLY_PASSWORD
  })).data
}

const toConfig = (headers) => {
  return headers && Object.keys(headers).length ? { headers } : undefined;
}

const httpPost = async (url, body, headers) => {
  try {
    return await axios.post(url, body, toConfig(headers));
  } catch (err) {
    return err.response;
  }
}

const httpGet = async (url, headers) => {
  try {
    return await axios.get(url, toConfig(headers));
  } catch (err) {
    return err.response;
  }
}


class RallyAuth {
  static access_token = undefined;
  static refresh_token = undefined;
  static expires = undefined;
  static token_type = undefined;

  static set_authentication = (data) => {
    if (data) {
      RallyAuth.access_token = data.access_token;
      RallyAuth.expires = (data.expires_in || 3600) * 1000 + Date.now();
      RallyAuth.refresh_token = data.refresh_token || RallyAuth.refresh_token;
      RallyAuth.token_type = data.token_type;
    }
  }

  static register = async () => {
    console.log("/register");
    console.log("Trying to register to Rally");

    const data = await getRallyDetails();
    console.log(`data = ${JSON.stringify(data, undefined, 2)}`);
    RallyAuth.set_authentication(data);

  }

  static authorize = async () => {
    if (!RallyAuth.access_token) {
      throw new Error("Application not registered")
    }
    console.log("Calling Rally IO authorize API");
    const rally_response = await httpPost(
      "https://api.rally.io/oauth/authorize",
      { callback: callback_url },
      { Authorization: "Bearer " + RallyAuth.access_token }
    );

    const status = rally_response.status;
    if (status == 200) {
      console.log(`redirecting to ${rally_response.data.url}`);
      return rally_response.data.url;
    } else {
      throw new Error(rally_response.statusText);
    }
  }

  static callback = async (code) => {
    {
      if (!RallyAuth.access_token) {
        throw new Error("Application Not Registered With Rally");
      }

      if (code === "cancelled") {
        throw new Error("No authorization to continue");
      }
      const rally_response = await httpPost(
        "https://api.rally.io/oauth/userinfo",
        { code },
        { Authorization: "Bearer " + RallyAuth.access_token }
      );
      const status = rally_response.status;
      if (status == 200) {
        return rally_response.data;
      } else {
        throw new Error(rally_response.statusText);
      }
    }
  }
}



export default RallyAuth;