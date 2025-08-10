//Extract values from each property in req.body

function extractValues(data, body) {
    const values = data.map((value) => body[value]);
    return values;
}

module.exports = { extractValues };
