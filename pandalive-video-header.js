/*
 * @name pandalive-video-header
 * @author you
 * @platform Loon / Surge / Quantumult X
 * @desc 为 pandalive 视频请求伪装 Origin / Referer / UA
 */

let headers = $request.headers || {};
let h = {};

// 统一 Header 大小写（防止平台差异）
Object.keys(headers).forEach(k => {
    h[k] = headers[k];
});

// ===== 核心伪装 =====
h["Origin"]   = "https://www.pandalive.co.kr";
h["Referer"]  = "https://www.pandalive.co.kr/";
h["User-Agent"] =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
    "AppleWebKit/537.36 (KHTML, like Gecko) " +
    "Chrome/120.0.0.0 Safari/537.36";

// 可选：防部分 CDN 校验
h["Sec-Fetch-Site"] = "cross-site";
h["Sec-Fetch-Mode"] = "cors";
h["Sec-Fetch-Dest"] = "video";

$done({ headers: h });
