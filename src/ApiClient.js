/* eslint-disable no-undef */
function search(tags, page, cb) {
  // NOTE: the API does treat page number as optional but
  // lets always send it here anyway
  page = page || 1;

  return fetch(`feed/${tags}/${page}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);

  // return Promise.resolve(
  //   {
  //     photos: {
  //       page: 1,
  //       pages: 20,
  //       perpage: 5,
  //       total: '202704',
  //       photo: [
  //         'https://farm66.staticflickr.com/65535/48592965357_22ab22e082_m.jpg',
  //         'https://farm66.staticflickr.com/65535/48592821811_0e80dde859_m.jpg',
  //         'https://farm66.staticflickr.com/65535/48592963737_b0ee686e52_m.jpg',
  //         'https://farm66.staticflickr.com/65535/48592962677_b45c2d2cb0_m.jpg',
  //         'https://farm66.staticflickr.com/65535/48592818661_9cf2087e67_m.jpg',
  //       ]
  //     },
  //     stat: 'ok'
  //   }
  // );
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const ApiClient = { search };
export default ApiClient;
