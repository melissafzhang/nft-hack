
const http = require("https");

const options = {
  "method": "POST",
  "hostname": "api.airtable.com",
  "port": null,
  "path": "/v0/appHjuSfdaqPFVPsB/Table%202",
  "headers": {
    "cookie": "brw=brwGTJkffFYYQIv0g",
    "Authorization": "Bearer key7FLLnVuSVIf8kw",
    "Content-Type": "application/json",
    "Content-Length": "205"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  records: [
    {
      fields: {
        Subscibe: '2',
        Email: 'test1234@email.com',
        userid: '7',
        creatorid: '7',
        referralcode: '12345'
      }
    }
  ]
}));
req.end();
