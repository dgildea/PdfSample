function start() {
  console.log("Request handler 'start' was called.");
  response.write("Starting..");
}

function upload() {
  console.log("Request handler 'upload' was called.");
  response.write("Upload...");
}

exports.start = start;
exports.upload = upload;