import JobProgram from "../jobProgram.js";
import axios from "axios";

export default class HttpRequest extends JobProgram {
  async run(applicationLog) {
    const reqConfig = this.#generateRequestConfig();
    applicationLog.info(reqConfig);
    return new Promise( (resolve, reject) => {
      axios(reqConfig)
        .then( res => {
          applicationLog.success('HTTP Request is ', res.statusText);
          resolve(res.data);
        })
        .catch( error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            applicationLog.error(error.response.status);
            applicationLog.error(error.response.data);
            applicationLog.error(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            applicationLog.error(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            applicationLog.error(error.message);
          }
          reject(new Error('There were errors in the HTTP request'));
        });
    });
  }

  #generateRequestConfig() {
    const requestConfig = {
      url: this.parameters.URL,
      method: this.parameters.METHOD
    };
    if (this.parameters.HEADERS) {
      requestConfig.headers = {};
      this.parameters.HEADERS.split(/\r?\n/).forEach(header => {
        let [key, value] = header.split(':');
        requestConfig.headers[key] = value.trim();
      });
    }
    if (this.parameters.BODY) {
      requestConfig.data = this.parameters.BODY;
    }
    return requestConfig;
  }
}

JobProgram.registerJobProgram('httpRequest', {
  className: 'HttpRequest',
  class: HttpRequest,
  description: {
    DEFAULT: 'Make an HTTP request',
    EN: 'Make an HTTP request'
  },
  parameterDefinitions: {
    Destination: {
      displayIn: 'row',
      parameters: {
        METHOD: {
          type: 1, // [1: char, 2: integer, 3: boolean, 7: date, 8: timestamp],
          domain: {
            GET: 'GET', POST: 'POST', PUT: 'PUT', PATCH: 'PATCH', DELETE: 'DELETE'
          },
          displayAs: 'dropdown',
          mandatory: true,
          defaultValue: 'GET',
          columnSpan: 2
        },
        URL: {
          type: 1,
          displayAs: 'input',
          pattern: 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}(\\.[a-zA-Z0-9()]{1,6})?\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)',
          mandatory: true,
          columnSpan: 10
        }
      }
    },
    Authentication: {
      text: 'Authentication',
      displayIn: 'block',
      parameters: {
        TYPE: {
          type: 1,
          text: 'Type',
          domain: {
            NO_AUTH: 'No Authentication', BASIC: 'Basic Authentication'
          },
          displayAs: 'dropdown',
          mandatory: true,
          defaultValue: 'NO_AUTH'
        },
        USERNAME: {
          type: 1,
          text: 'Username',
          displayAs: 'input',
          hidden: "parameters.TYPE === 'NO_AUTH'"
        },
        PASSWORD: {
          type: 1,
          text: 'Password',
          displayAs: 'password',
          hidden: "parameters.TYPE === 'NO_AUTH'"
        }
      }
    },
    Headers: {
      text: 'Headers',
      displayIn: 'block',
      parameters: {
        HEADERS: {
          type: 5, // String
          displayAs: 'text',
          defaultValue: 'Accept: */*\nCache-Control: no-cache\nContent-Type: application/json',
          hideLabel: true
        }
      }
    },
    Body: {
      text: 'Body',
      displayIn: 'block',
      parameters: {
        BODY: {
          type: 5, // String
          displayAs: 'text',
          readOnly: "parameters.METHOD === 'GET'",
          hideLabel: true
        }
      }
    }
  }
});
