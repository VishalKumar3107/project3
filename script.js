class API { 
#secure;
        constructor(url, method = 'GET') {
          this.url = url;
          this.method = method;
          this.#secure = url.startsWith('https') ? true : false;
        }

        get secure(){
          return this.#secure;
        }
        isSecure() {
          return this.#secure;
        }

        updateURL(url) {
          this.url = url;
          this.#secure = url.startsWith('https') ? true : false;
        }
      }
      
      const urlInput = document.querySelector("#url");
      const methodSelect = document.querySelector("#method");
      const checkSecurityBtn = document.querySelector("#check-security");
      const outputDiv = document.querySelector("#output");
      
      let api = new API(urlInput.value, methodSelect.value);
      
      checkSecurityBtn.addEventListener("click", (e) => {
        e.preventDefault();
        api.updateURL(urlInput.value);
        let isSecure = api.isSecure() ? "Secure" : "Not Secure";
        let output = `URL: ${api.url}<br>Method: ${api.method}<br>Security: ${isSecure}`;
        outputDiv.innerHTML = output;
      });
