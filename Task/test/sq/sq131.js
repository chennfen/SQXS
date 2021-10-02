

const jobname = 'shuqi'
const $ = Env(jobname)


!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
//nodejs运行
//任务顺序
//签到，视频426
//极速版签到，书城，阅读
    await dailysign();
    await $.wait(1000);

    for (let i = 0; i < 10; i++) {
        await videoreward426();
        await $.wait(1000);
    }

    await $.wait(1000);
    await jsdailysign();

    await $.wait(1000);
    await jsshucheng();

    await $.wait(1000);
    await jsread()    


}




//1
   return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.6.0) WindVane/8.6.1 Shuqi (iPhone10,1__shuqi__v4.2.6.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page/?serviceWorkerOn=1&hideNavBar=1&from=ShuqiTab&sdk=14.3&utdid=YGGXqTJyuREDACUP1Aj23pzP&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2035402677&sn=22031888B3F53D4083F5CEFCE86BEA54C356940F&umidtoken=llNLGLFLOjEHsDV8CP1q%2Fr57%2FaMcR3wR&msv=8.0.0&brand=Apple&imei=34FC2C4E7D05A3420A9330197AE567C261334896&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM1NDAyNjc3IiwidXRkaWQiOiIiLCJpbWVpIjoiMzRGQzJDNEU3RDA1QTM0MjBBOTMzMDE5N0FFNTY3QzI2MTMzNDg5NiIsInNuIjoiMjIwMzE4ODhCM0Y1M0Q0MDgzRjVDRUZDRTg2QkVBNTRDMzU2OTQwRiIsImV4cCI6MTYzMjc1Njk1MCwidXNlcklkIjoiMjAzNTQwMjY3NyIsImlhdCI6MTYzMjIzODU1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.B4K2g3NQRMwHqOgRwi14Ve9iidUicvhb42_Y4PWKX6nlBqEk5ppNiMy2nLkeitR0kATxQhZHBuNwTBS_ud7aAg&skinColor=23B383&platform=iOS&ver=201102&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "3844",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633190801&position=501&userId=2035402677&signInType=1&wua=HIVW_XlparheAeZt8ovGXnmzpphEdK8%2B1haiHu8cUBZZuE9Vd26%2Br2IzRBz8WwKgrvCKhjgE3XScBuEWtzedz%2Fje9VQHrABQroT29YTT%2BK4hT3rxSkXMZ7yxxOuVXSsoeuYlLzkcNt9a9J35qItnbP%2FNQVuCtAYp9S9hzE3azrLMJpFdVajCdOcOIYmve1NGpHTFimoTn9RFmxlmdsEK4LiHZeRRvvD2WdlDZi%2FizUOTkUXvJ9sUd5xs0A2SiTvY%2FF4sVm5uAQQ5vt4C2C7qKMyhzhFb%2FLcX3pHWOPYe3CWf4XlpWBTsiMC7M5N3%2B5i5hbOQyfn0gbMG0uFTgnr%2FW9QU94QikT5U3f38hpjKkJAHHDhmat58oSTuenCld2SRqzbh%2Bz6ybJ6KNs54RBrDsOtNdsQ%3D%3D&ua=140%23GA%2BdDmv4zzWxnzo2%2BbNTKtN8s7aGYtSPLCUKxx8%2FisaWKk9NzFaxq%2BmzjIiUNgYK4QiSlp1zz%2Fiiom2T4FrxSK0oa6h%2Fzzrb22U3lp1xzZ2IV2EqlaOz2PD%2BVounUuI0MI2y7yDY5anrHRqjELrEkgNfA%2FQiOhM%2BWmdinbWBRuHQI3F3LqVb4MxaTKNtyRO8%2FtcbltqlrqC%2BE1Dg8fZmF1fcSG2qKH%2Ba%2FPku%2F7FIDUNomWfpaQnvf7RsL6C0AyGGUTbCKw1iNXVawh%2BJUyfWFM7fFZmdDBEc0lIaVSZARvGQHCTFJueKgq7qGfQYimuN5PsHVjPlNDXDxTe%2FzguksojrZc0E1HgC6y%2FReSXwM2yHbb4%2FrDfA2jPd4kt8fcKTUZGFvrZDX5K7yVZLZAbM5uFEAIXBu9krS5kU58Sq5ZLqhJl%2FTpbfviZx14UiV0PYdEVL8H4ayJRKccL9Sdi851laDG6SxI3fvzFrTBEnYDy9KVYyR0ow%2FvPLwAUso6AF8xhQ0vB6LavhzRqbhM%2FJSTxDX%2FNJvAvPcEC1eT%2BzLbymo6bVKZoNC3kjr9UA0QW5xxkMEE%2FmTau2G4nDCamhLDMVuWm2cdjICbIcnOQNJWYPBEx1L%2BZu8bVMH27aaP3yR%2B74O%2F3UpHTa%2FMapBqt4eF2ovuUFcVWTGpzXIPHwosS45mkQ977lcH3gnmhmlFgOApZQcXmdKdK9%2BlMDqCfdD2a52ZmGY6WJOHFxCCDNqkfxy%2F4XoaV%2BGdwc5oSzsQDXDIwVbxXz1vpCYpT1%2BATLOH%2ByMwTaWBwnE69eW4dTn%2B0oQ%2BztNCOm37Cy6m%2BCu07wdSGlNeltacwTJBDGgBX57ZMKsXUOqbLasHKq%2BdJeaVYhijvuFWtk3vSI6S3DAW1JEn9CvJC6oxrMPT6DxzZnXx8dFnyVJ9owJRM0Aw8i2QBIilXgG%2FAPciIz9Gprd5NfWKeY6cz%2F1fe7qvGdVkte8%2FhI2VAZuQ2N23k9OguSNAm65U0NiAROCyBuliqLbpAbUNC4gbp5uLod0uVqa8D32YL4AQWK2sA%2BZ7etcMk24k0vXGDtz69%2Bhd6mH%2F61j5fqJfTGCX4C3p9JavI9gYEdkZt2gZT%2BXUpP%2Bd6xxA3l%2BUqjrVp6%2B79XG70XNMJ4AmcqzQyGVGYNMUaOs39oU4SWwzuRWV3X77FyWUzcDW1Tpnxiqiz5UFDf2HhErFya7hgFYTIgFpmTcoLlvnthEAS1j7%2FKm%2BSwVcy1jhy%2FVuYkPYSDsLw5SrhMqV6AANHVlfeXcvHokUVfR4KiftB09i1uClg1ba6GULNHbmmSMFyhNlKhg%2B16hTNobZr0vlBqO6aS%2F%2F0EY1lPVXcpt4Eqko7H2R%2BEWxHnzXueOqcR%2B51Kcf4hDuvXwUA%2FwIsUGrOuq9u6vpA2d%2FYF3IJKyaHP40xe1PvJF%2BQtYzgdaldAd9okkOLeksTw0KkjRxW2P0TGziSlPlRlEjH7qDKL4HFA8mN1NItb3Nw4L1sgIauxOOp0p%2Bmdtq1vE2DkoBqfaatr4OKbeBfscapJ3yWo89GrBxYGNVxWIBhMn86Sbsi1Om22XtEAFa%2BoQY17cdFu0wyJaEukkR%2B%2Bfu4TXF4uIXchEmb7bGiVmA%2BHGfq6B4f3O7jnRbYIX%2BJ7O6cdADgK73SRI3QBD06zfGLdfdzt%2BEuOfc4pxDotaK2MpsJztst02OnEK2fucVjfqPEBUBMQG4FXnr6jqvMto%2Bkn2Cr%3D&miniWua=HHnB_Y3tFkUb8N%2BqHbigtC1YNeKpPAR4nxqo2%2Fs4WVUtv2gZ3jMfYFeO6wgSy7Abefe02F1J45XhQYm5qCTBxNn9Zbbhf9nFjyFw%2FC9aZBYjSsc8AWyeP09cZVFjxZ64BPNHXW9HrhdA9LWfxYrl1TqbeBg%3D%3D&umidtoken=llNLGLFLOjEHsDV8CP1q%2Fr57%2FaMcR3wR&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=4cdd74b5ec7217955bcacdc860acff8a&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26hideNavBar%3D1%26from%3DShuqiTab%26sdk%3D14.3%26utdid%3DYGGXqTJyuREDACUP1Aj23pzP%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2035402677%26sn%3D22031888B3F53D4083F5CEFCE86BEA54C356940F%26umidtoken%3DllNLGLFLOjEHsDV8CP1q%252Fr57%252FaMcR3wR%26msv%3D8.0.0%26brand%3DApple%26imei%3D34FC2C4E7D05A3420A9330197AE567C261334896%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM1NDAyNjc3IiwidXRkaWQiOiIiLCJpbWVpIjoiMzRGQzJDNEU3RDA1QTM0MjBBOTMzMDE5N0FFNTY3QzI2MTMzNDg5NiIsInNuIjoiMjIwMzE4ODhCM0Y1M0Q0MDgzRjVDRUZDRTg2QkVBNTRDMzU2OTQwRiIsImV4cCI6MTYzMjc1Njk1MCwidXNlcklkIjoiMjAzNTQwMjY3NyIsImlhdCI6MTYzMjIzODU1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.B4K2g3NQRMwHqOgRwi14Ve9iidUicvhb42_Y4PWKX6nlBqEk5ppNiMy2nLkeitR0kATxQhZHBuNwTBS_ud7aAg%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


//1
  return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone10,1__shuqi__v1.0.5.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=8ZRLGGxLOmwKPTV8Cfup5Nv7Bh64idTA&net_env=wifi&placeid=111111&user_id=2035402677&sn=672A1BCEEB540C2B9FDA8CB559716B5609C3E3E8&msv=10.0.0&brand=Apple&imei=01B6488CF5B39A21F6EE838B00C643845FCA6C86&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM1NDAyNjc3IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wMUI2NDg4Q0Y1QjM5QTIxRjZFRTgzOEIwMEM2NDM4NDVGQ0E2Qzg2Iiwic24iOiJmYXN0XzY3MkExQkNFRUI1NDBDMkI5RkRBOENCNTU5NzE2QjU2MDlDM0UzRTgiLCJleHAiOjE2MzI3NTcwOTcsInVzZXJJZCI6IjIwMzU0MDI2NzciLCJpYXQiOjE2MzIyMzg2OTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.xoeMxk6Nrdtp6hhiW_Ih_hdWSK5w_isu4fN8P_1m-SUXzF8_ldA-c_10Lr7NW8xMcIB2BE5mYi6Kf42DZggx6Q&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YUn8U1m%2FHJcDAHKhDbqj6Msy&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1903",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633190864&position=601&signInType=1&wua=ktgi_eDv8Yv3140%2Bf8qAqh5OpBcTSFC67Sm4%2BbDxr4cNK96G2sGUbEDtD747FSHewSHlYYXQ3hW08i9A8hiORHv3dP40Bu9oJbrWn9THNy9LgKw4flbxWiIJcCCp5gdMS85wMg7wHfhI5KkIKjq7Om1%2BPYMcczNCzt46jN9%2Bgcx9bBYwth8amj5GWglzBUATUNrM%2F0dFTb8qiriNOMTAx%2BPiJUbYg%2BWssN0zPxbkvBCg%2BKQ%2FK3jAfRrNitbWo1fb5lZpBX4RU8YGZWORJxan1w76X17BSdsOsR245ixtWKLVQ1M6oUnCcUNZbeXjmlmfGhk4HyL42sOIZD2FPm9TmLvMkJ13montIwIVYoIOJvGBob%2BshtR7wJI1xm1MalUMBjHbXmHSHS1Boe5ZUmVP%2BK7R2sw%3D%3D&miniWua=HHnB_fW0ZURrrdyMTuiJpae5y%2FZmr6olvX9aXzoggHcFNbnjSElcOmePs7RWZEnBJ%2BUGf0Tz04iOZDaqGxRX9yAfaSk9kMTe00aM4aUa51%2FeDzZNYJsIjd%2BhftyKkBxznoYPNzf6MGXRmTAqb8Zipho78Qw%3D%3D&userId=2035402677&umidtoken=8ZRLGGxLOmwKPTV8Cfup5Nv7Bh64idTA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1633190864&sqSv=1.0&sign=12b5b56c1ef7f0757c7e06c17712dcaa&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3D8ZRLGGxLOmwKPTV8Cfup5Nv7Bh64idTA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2035402677%26sn%3D672A1BCEEB540C2B9FDA8CB559716B5609C3E3E8%26msv%3D10.0.0%26brand%3DApple%26imei%3D01B6488CF5B39A21F6EE838B00C643845FCA6C86%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM1NDAyNjc3IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wMUI2NDg4Q0Y1QjM5QTIxRjZFRTgzOEIwMEM2NDM4NDVGQ0E2Qzg2Iiwic24iOiJmYXN0XzY3MkExQkNFRUI1NDBDMkI5RkRBOENCNTU5NzE2QjU2MDlDM0UzRTgiLCJleHAiOjE2MzI3NTcwOTcsInVzZXJJZCI6IjIwMzU0MDI2NzciLCJpYXQiOjE2MzIyMzg2OTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.xoeMxk6Nrdtp6hhiW_Ih_hdWSK5w_isu4fN8P_1m-SUXzF8_ldA-c_10Lr7NW8xMcIB2BE5mYi6Kf42DZggx6Q%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYUn8U1m%252FHJcDAHKhDbqj6Msy%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


//1
function videoreward426() {
return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "4762",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "{\"message\":\"2OQ15L7W7lsybUEfu4Xr6OaULTy5GeRSh1P1g0IBdBsL4zvf\\/L94Jtv+fjinRIuHC8WCbvtQ5g4hKSCE9HAzHW2J7uAuoEEFYjdjQZrdrBkWI5pPpoS2yuEa1YfWoBJ1YEyzFr6aee8uUloh3XYMvv4xN6qrwCH7RswKxfsvB1igMarEwYWy5RGKye6md0Apas01CEShcV5p+oZAN4h+PtuJALCdImYrZchPHX3W8BA+dDXeNR3fFKjJjvyqse2lxz8pvuLwCxmXA54KpF+jAJ5EI3hKlt99TxlWzyPyt85scKgoMDs7Z8G5gMj+WMncFVYpmbENUjdwft1yx6bhbrig\\/0qw6I3b5Cknv\\/7fcgu7AGB2ZPUadkvpF9hk3URqW3m0MfRqpVxB63InS5nyxnBfRN+Wb0aD9VyBr7xJGXn7TqO5B3ZKabPKNEYXw1L1MSPRgsmNq2x3VeuJq18hw6OQK7STFNpHCw4fHDQ6cvfLZ6EL3O2cWWk+YpsamkX0FyCJfBRSAJHFj7G4Yp6MxMYHuqhAXFpBDNX3Mjag659WXAx7D9nU1nyFQy1CwwCvGJzGP9H8p\\/K6D77+z9RneIqxTaTuYHLh0FgT6OxH5LgN8vmIbafkQIGSLazk9Vd+pVSgn\\/wIMRf6J\\/Y5nQnuv5Wsq+PHUIk4l5QauFbWkkAQZr3wqD0o\\/rhZ\\/J8bEJQpsSzQpmBu0MtAofF4y8gU7rQk1\\/\\/f5aRCm8C11KQj7T9ngPFPyexHenw0AIrhxoMiuirar+JoTixUz8WTkJDx7eNGUMDbEHUp4P30Wwt5DGLBUmYcN1Lcd0Veh5oytspji7HxMDSNC8xeH3SRgJJgtP9Cu05nKxXAzVxnXvqNY5p3cPguy0jxPQ9DASx3UlIyPLXkXXS4VdrZ9x6abPriq5pxBrPJydcPeXdI7fzsivwEPcFxppX4KAjS+YXcWPHctyciNpT1DstA7AZt\\/tqkQQZ6Cb3wX6KW4FR+IYeEXy6HX0U0E10uv\\/KhwdyZxU2AnlMHrAXtpw+fXKmU3l38P6Se06c6OGBxQnP4BtcW2UuNb9pLrzZ9tbr9AFfIYlPVXp5NU8aA\\/3NYpI1Sgh7YrtxckMBJIsngE8dET4C5GPynVBHmW5ZNF9YpPp41UPZk8XYNu1taiMNq\\/sbP\\/aGD29VDpJfZbkbWD1jg4u46K9fCIQNmSZN8dTjoIvjcJ5FvIqEaxFgSbX+8FTAlF3\\/QVBtOLCWvWB8CeyyLm\\/QLU33e5alOSbPMGJCemqWGJ+zJjquiRyBxoRP47Icx1aFx435Z9XEykaGmNQDu\\/my4lzVix0OW66hphgWw++sQGptJLO3Fjd7inaFnRxf9yXQgLE5VbRhH75bx44Agg6MAXaOVt7ObYFPyDecbDuHaJ8En9O3u4m2R2Q36j9otvAMF8ylDStFhRCwOuSV76+a6lSvR64HUvrJ1CPxaC6zM7tPqD7yRGU0eM9ZC05zmxCIOy0WG146WP8wN+wgCZ5ba992r\\/Ke5eQGOdhaUCZ\\/eLhBPIPSozea\\/ryy5hgAnlC0MlqMV1unBuh0Qd32XFSpmm0dlHEL\\/s8uAhSoiprmmG0zPbeCW6yvy9kf27JgP4o4gdgMOf806laTfzfrndwfESzxdZA2yjGrRRSk6kr+tIWO8s5XVU8khzzAQQhVVt1DdVzcnUw+BR3MqNlJxtz\\/DvkqMRdNvDIrWkn+263bcO5Ow664JbzXkAe0aSUDP25idbsvWa77+qXLOSDRoXzd7mbtHLtRuc5+vEeyPLA03P9k2AEtvZFGgHCtVlQYrank8U+O69AercrJn9KNAH5DeWN9GrCaOM+lrtsmrsulZreuysd4w5IDa2js00aeZ1XcqOZKUvLpHSvi4S+I\\/y6QmEwYzStkPXy0sj2Py+KV55VNsXpFHEE0LxkEAqDVj\\/VnBjL5LUGRNpS6R\\/K1m\\/icJg8enHocjISake0QTE6ioMDwvnTgbMeqEfZufFAJRbA7PleNGVaBad0FR+l4A8KuAocuU35UuEHvLj8WbpEJg6peBea8eM2ysEigrNN4PJTcbDZxAmyESVV\\/CpzfrQgjk2eHadq9G748tCo4a2DDxHq1UlET\\/xTLR5DVSL9gavhK8NdFlwPum7HVM+9YSD0GcDiqu48LGt6E+hoZKtwZZiUtgY8Qde84pkhW\\/p\\/BMkRMCeTVP+HpcYeG3S2zQrIYskp\\/+PUukQClPF2LljTQcyUGb2sOcK+p+wQcIjtzTmz7kHLLoWYDu93JANEUJ3zE+4OdqRcIvBqvgDFMYSAue2C7gucfCuP+IbW1uRdD+Eqtf9qXsnWl30sn2qlfjbrIBbpm5eX8cu7GE2wcDjxA5rIYmDcH5WS05\\/NAOdn2aSGBgD7zul8g9215IMfpWMHNWHr17pd12DjfAI5+bvrO05H9C\\/9UluV+64jMBi5fve7qXeyt286QO0VhCsK6lsvmanc+xNGFH6tePwXvqV2WOYahctdjOEsNOwPoKrSu+5vWEtXt0nUGlJ0oeYdWfyyok9MQrz45\\/qSpyVOM3nbymWgfS4ij0yav49UVeDrDac8cXdXQES6OdkhMY7qCkC0NwpPfFwTlAZp\\/Z42PvnN5S3meJGX5IgrNERrKv77bgBYUa\\/e6EsQiYz+HaJ5HtorCZVf0e+sB4NfdNKU8WV2334rdjJ7DOcYwRY7Y7seRM8hArwaTV1A+awBY47MJtRXldaN9RYAhF5z5TvEt2H6OtZMpevk6nzLSgFHVMdMX6Le9sNbtTWCK0w2WGM5OnAF7I5sD5\\/A8Kd6sjLp6Nt01E5DMRQnqjQLehqhIfAu+Ci3cfZUGARj9sbAaPwxQtcJdBs\\/2sDZ3aUMxsPkywMbY1Yx5JcTY2ZApdun1s6RLy3cDwzLjUIKMRt+0q5TeLyr\\/d95hubeSSlAm39fdYJTH\\/MGFpkyq8PLBZz7WpIELFV82F\\/xrv4Va6Nvp6IMfm3iQ5kyEac\\/\\/D9FIMnbqkC3Ik\\/Mrs1kv\\/BR0lLWKZTR1Rp53M7v6rqjPNABdHXGlx76aX0mP6awu0gaFfLHP0rMh\\/VLjMcRe78RYK5Y6IVuyGfYLfLcKgJ0M0V53zzLyTvA8Td9n7Ep+wsxcpUjiVEVa53PrBvX7+hk10EKwWsFHNL6Akj9bQm6mE27U6NF2NR+1LIJaSpguA5uX3mi7nweg9tXpXwrNpTlppBOY1kuTNQ5eYxfhJC1u8RMdaKCc9rkWGOMrUbTHoxk8Z8EtrK6jMGzLdlPPYYg9lH8RX7uBc8bbxgPc72m9zzDfuRZ32Jjv6e1irFvMzs6zSTQxf3Gh1KLLC9PdRS8PG2Jq+72lPNYdPpX2q5dTULOr47JJiLzm3GhpSSb8n9lGYfqMOvy4n5Whzu7eaha9Vy36mpmM4IbF8\\/8Bc3GjP3pukLietrt6aMdUyL1lLtvEGMYvZnAIKUxfobt4GUtlxaMr0mHtJ3dnZEkojiEwzUKIxqlBn+EDv4MGVE8v01C7Bx4pFkk+zLwPEZjSJk21c4\\/ZBHdkhf2W6DbRxz74ePDvQ7KKAxGw+YtBIDKh6vsF+dQN415OaShic8LLaFsGslljAeBDPbNRIDSlpLlteAIublYVsLQEg4sZ3AUBNIyOwB2KJtShWzuzofHQbl\\/5H+cXLFPPub8VKm71d60Xhez\\/M4Ee0FvgNcfJA9o9FrkAaIAzwlXxSYj7wQ2QKRxJkm\\/Z13g2X5CPzrnoV0T0MJ8c\\/+lZikOtJ1ojmMlGAcvg+R6Z6RaomA0twERZTA\\/LXroYcSrWwL6BBxzWn+8NSXEwpGdbVtAErVpEIi96kcxOr4OvCtBzpXeM5Euth15vchuoqNYROkOGqGauzORGZw4QDFr7a4Snjg5MNs6nupGZq1H9Eh3RFJ9P\\/ZTRC+EGC+sc4rDFyztR\\/HIs8OnBYERIsDe8ryYESxycxHjZLtr\\/R4OHsyucblxQ9VskkkuoHi8EQUeyYKx\\/s9FxSAMpL+FQ\\/y966Uk+4E9c5K7hdiAOY5brbS7jYr97\\/ZqUoTOoEQps16PcQRDywSYQXGpjLIdcByPU2KZ5SFrkRKgIyvfECh7kTRBR9g7mHjmTfjbK+sAyMz\\/UcZWH2Iw54uDs8QBP7FnEeQVtee\\/RN9qanJaUwJp8CZ9wLnzETvhfBMMVHOXxUn5ec7JidnEK53jLHmb\\/pDEAyWWAdihHnhDhkmeEgKqTLR41uFXcFiCOVxjMGwhP4yRpXFAmQQNrh2mmLSclEWmoSi3+UEat+KAmTzkmNnfYkvtC2s8uOWfjelhgAU5BcV13pxqgMCAhT4lwtZ2Fh34TjMIA1CFr4mkzxbQ1xxK\\/mIZSH\\/xc80ol4RgwnpaILeazmmWCAStkqB8irP2IeeS30KzGr1DnD6AFIvQbfobPmTlk3fSYQf4W++NOnmm4V0mJJM0mUCCdcKrEeUNCaeqY15HJMR+lVZ9W1kkqcPC6e7V5K4IxZRxrpTYxTWr604jxS29dgahqmuCY4x6C67raSLqpZfbWMe+x2DD+WgbyCTi2u9ch+udobpoPPw137IE8s9LTPWLuX2bsBxcyjCB+y2Efb74M0Lt6f\\/lQzFZi4FeePrZkwxu3qCO3nd6GLb8ypyF3zk2H\\/LCnbE4S7lLsP3lU0spyHfAkrGVoOe+YmO\\/KY=\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


//1
function jsshucheng() {
   return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.3&ustatus=1&umidtoken=8ZRLGGxLOmwKPTV8Cfup5Nv7Bh64idTA&net_env=wifi&placeid=111111&user_id=2035402677&sn=672A1BCEEB540C2B9FDA8CB559716B5609C3E3E8&msv=10.0.0&brand=Apple&imei=01B6488CF5B39A21F6EE838B00C643845FCA6C86&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM1NDAyNjc3IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wMUI2NDg4Q0Y1QjM5QTIxRjZFRTgzOEIwMEM2NDM4NDVGQ0E2Qzg2Iiwic24iOiJmYXN0XzY3MkExQkNFRUI1NDBDMkI5RkRBOENCNTU5NzE2QjU2MDlDM0UzRTgiLCJleHAiOjE2MzI3NTcwOTcsInVzZXJJZCI6IjIwMzU0MDI2NzciLCJpYXQiOjE2MzIyMzg2OTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.xoeMxk6Nrdtp6hhiW_Ih_hdWSK5w_isu4fN8P_1m-SUXzF8_ldA-c_10Lr7NW8xMcIB2BE5mYi6Kf42DZggx6Q&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YUn8U1m%2FHJcDAHKhDbqj6Msy&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "100",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2035402677";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


//1
function jsread() {
   return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=8ZRLGGxLOmwKPTV8Cfup5Nv7Bh64idTA&net_env=wifi&placeid=111111&user_id=2035402677&sn=672A1BCEEB540C2B9FDA8CB559716B5609C3E3E8&msv=10.0.0&brand=Apple&imei=01B6488CF5B39A21F6EE838B00C643845FCA6C86&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM1NDAyNjc3IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wMUI2NDg4Q0Y1QjM5QTIxRjZFRTgzOEIwMEM2NDM4NDVGQ0E2Qzg2Iiwic24iOiJmYXN0XzY3MkExQkNFRUI1NDBDMkI5RkRBOENCNTU5NzE2QjU2MDlDM0UzRTgiLCJleHAiOjE2MzI3NTcwOTcsInVzZXJJZCI6IjIwMzU0MDI2NzciLCJpYXQiOjE2MzIyMzg2OTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.xoeMxk6Nrdtp6hhiW_Ih_hdWSK5w_isu4fN8P_1m-SUXzF8_ldA-c_10Lr7NW8xMcIB2BE5mYi6Kf42DZggx6Q&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YUn8U1m%2FHJcDAHKhDbqj6Msy&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "729",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "actId=355&miniWua=HHnB_Kf5dTKlDU7aAJn0jjNL69bvJpYx8twpviZXbwEKALzR1zJGzLxA5INDjmXwLCHeSYh8Fz87pjIxCnk4F8Avt%2ByKpnfo957kJ5Zm6LXdGu47re5Jbq4S00mAAX0EfMVNyCeNHk7khjzexaLn9wbZSow%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633190929&userId=2035402677&wua=ktgi_Rw/gugHnuL%2BBaw%2B%2B7a9J0jIJY0rSespsikJaIaHY9rzK3WcPsQemI9aUNTyC3dVveuAw0CWHz2iHrs20mtbzqRI1AsY%2BU%2BkyAToI08L6JaDzMHGmgWDFRH9aMDEf6h2x1mtJE6InewpgMCgZmyGURpSdG1XmAXWMmM7DsKpafXqAX/CjxaeZVes6WveW/Etj9vj4dHFowhsMYi98N7mbifSYDEKVndzZF3D2A0/Heez1cRN32/H8TUVahcyefC7aj1EMpxSeM0Ge3dy%2BR/YiED9uu68laKLbEzLziK1uAequFMBeNM4j4cf1inHSvj9eSZ4ChqLeAwaDzgjqOMWrBk9KzsJ/vj%2BhxTsutAijr9zX/tfV/Rb5tlwxE/AZN2XJoqjk4blM9Vju18eEbKc8Lw%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsread();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}






