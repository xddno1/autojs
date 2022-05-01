importClass(javax.crypto.spec.SecretKeySpec);
importClass(javax.crypto.Mac);
importClass(java.security.MessageDigest);
importClass(java.util.TimeZone);
importClass(java.text.SimpleDateFormat);
importClass(java.nio.charset.StandardCharsets);

var service = "tmt"; //服务器
var host = "tmt.tencentcloudapi.com";
var region = "ap-guangzhou"; //地域
var action = "TextTranslateBatch";
var version = "2018-03-21"; //版本

module.exports = function(config) {
    var SECRET_ID = "AKIDte69wXvdMrAQgymZyTv60h7ZqeEfRmmW";
    var SECRET_KEY = "a37sTsuqU2J3lOml9GBqCfvylUpsh91g";

    var body = JSON.stringify({
        Source: config.source || "en",
        Target: config.target || "zh",
        ProjectId: 0,
        SourceTextList: config.SourceTextList
    });
    //console.warn("POST数据:\n" + body);

    var dateso = (new Date).getTime().toString().slice(0, 10); //时间截


    var authorization = siha(); //计算签名
    var res = http.request("https://" + host + "/", {
        headers: {
            "HOST": host,
            "X-TC-Action": action,
            "X-TC-Version": version,
            "X-TC-Region": region,
            "X-TC-Timestamp": dateso,
            "Authorization": authorization
        },
        method: "POST",
        contentType: "application/json; charset=utf-8",
        body: body
    });

    //console.warn(str.body.string());
    return res.body.json();

    //计算签名
    function siha() {
        var canonicalHeaders = "content-type:" + "application/json; charset=utf-8\n" + "host:" + host + "\n";
        var signedHeaders = "content-type;host";
        var timestamp = dateso;
        var sdf = new SimpleDateFormat("yyyy-MM-dd");
        // 注意时区，否则容易出错
        sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
        var date = sdf.format(new Date(Number(timestamp + "000")));
        var UTF8 = StandardCharsets.UTF_8;
        // ************* 步骤 1：拼接规范请求串 *************
        var httpRequestMethod = "POST";
        var canonicalUri = "/";
        var canonicalQueryString = "";
        var hashedRequestPayload = sha256Hex(body);
        var canonicalRequest = httpRequestMethod + "\n" + canonicalUri + "\n" + canonicalQueryString + "\n" +
            canonicalHeaders + "\n" + signedHeaders + "\n" + hashedRequestPayload;


        // ************* 步骤 2：拼接待签名字符串 *************
        var algorithm = "TC3-HMAC-SHA256";
        var credentialScope = date + "/" + service + "/" + "tc3_request";
        var hashedCanonicalRequest = sha256Hex(canonicalRequest);
        var stringToSign = algorithm + "\n" + timestamp + "\n" + credentialScope + "\n" + hashedCanonicalRequest;

        // ************* 步骤 3：计算签名 *************
        var secretDate = hmac256(java.lang.String("TC3" + SECRET_KEY).getBytes(UTF8), date);
        var secretService = hmac256(secretDate, service);
        var secretSigning = hmac256(secretService, "tc3_request");
        var signature = HextoStr((hmac256(secretSigning, stringToSign)));

        // ************* 步骤 4：拼接 Authorization *************
        var authorization = algorithm + " " + "Credential=" + SECRET_ID + "/" + credentialScope + ", " +
            "SignedHeaders=" + signedHeaders + ", " + "Signature=" + signature;

        return (authorization);

        //~~~~~~~~~~~~~~~
        function hmac256(key, msg) {
            msg = java.lang.String(msg); //转为JAVA字符串
            var mac = Mac.getInstance("HmacSHA256");
            var secretKeySpec = new SecretKeySpec(key, mac.getAlgorithm());
            mac.init(secretKeySpec);
            return mac.doFinal(msg.getBytes(UTF8));
        }

        function sha256Hex(string) {
            var f = MessageDigest.getInstance("SHA-256").digest(java.lang.String(string).getBytes());
            return HextoStr(f);
        }

        function HextoStr(f) {
            var result = "";
            for (var i = 0; i < f.length; i++) {
                result += java.lang.Integer.toHexString((f[i] & 0xFF) | 0x100).toUpperCase().substring(1, 3);
            }
            return result.toLowerCase();
        }
    }
}