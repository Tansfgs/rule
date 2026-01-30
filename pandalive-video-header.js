/*
 * pandalive video header injector
 */

let headers = $request.headers || {};
let h = {};

Object.keys(headers).forEach(k => {
    h[k] = headers[k];
});

h["Origin"] = "https://www.pandalive.co.kr";
h["Referer"] = "https://www.pandalive.co.kr/";
h["User-Agent"] =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

$done({ headers: h });
