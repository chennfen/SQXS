

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
function dailysign() {
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
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page/?serviceWorkerOn=1&hideNavBar=1&from=ShuqiTab&sdk=14.3&utdid=YGiOQUWmiEEDAIksjVnm0trc&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2042762472&sn=FC0E03E973BC740740F53DBF283ADF7A8FA6FA40&umidtoken=ZTZLHqhLOp2WjjV8CYGjJEsxC4IdlBS6&msv=8.0.0&brand=Apple&imei=212FED7D95066DCEF95C70AE4E4C5C83037DF56D&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQyNzYyNDcyIiwidXRkaWQiOiIiLCJpbWVpIjoiMjEyRkVEN0Q5NTA2NkRDRUY5NUM3MEFFNEU0QzVDODMwMzdERjU2RCIsInNuIjoiRkMwRTAzRTk3M0JDNzQwNzQwRjUzREJGMjgzQURGN0E4RkE2RkE0MCIsImV4cCI6MTYzMjgyNjc4OCwidXNlcklkIjoiMjA0Mjc2MjQ3MiIsImlhdCI6MTYzMjMwODM4OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.0AljL_hJ55ioEGmkR-k23f2AqedZrWHnOCrzaC3A4ud3bJwvXuWMFaih-CctwuVh5vmCgBz-gFR4QU6UVCFXMQ&skinColor=23B383&platform=iOS&ver=201102&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "3836",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633191650&position=501&userId=2042762472&signInType=1&wua=HIVW_9XnVlD6UNM3PzDpI1rGaYUxPx%2Fb3wBYy5Lh10J5hkJU7rU%2Fu8V%2BfrahQW5toMQ4I3cKJbyND0zjFOV3m4lFH%2BWzaq2J8pIDbtYMw3PdY2ZoNCrsFdeGXqsXYPEXm7n8IwhRySzdZ0pzlontaIN03%2FbjJ6yFWxxUrZPUTdshTOnXQBO2dLSNpd3Ggk1BBzPTHtbWE9Su1HEP5NdH0eTT58%2B12cuaGZqNJNejOfShnEcabG%2BnnHx2ymXMR6sjSMrbu%2BYynkxQSMYQCWc4sDSUCIGAy%2FVKgMB2HwtFFBAD9aC3DRsr8sd6qcmvNQbLLr7EBdDboBUW6fPV0lgvGWJZbVXysq%2FDbt%2BcYy1BfXWTL6NxNVlkmhxxpD0pXsLsPbiPbMtuBpiokG5cUWAYswrKABg%3D%3D&ua=140%23g3MdDBcWzzZpWzo2%2Bb0uKtN8s7aGY%2Fq7GF%2FVSoLB5p%2BOjoypzFaLzcmgElyUsqTe4Qiglp1zz%2Fiix9Qi2zrxJz0Daph%2Fzzrb22U3lp1xzB2SV2EqlaOz2PD%2BVounUuI0MI2y7yDY5anrHRqjELrEkgNfA%2FQiOhM%2BWmdinbWBRuHQI3f3KJET4MxaTKNtyRO8%2FtcbltqlrqC%2BE1Dg8fZmF1fcSG2qKH%2Ba%2FPku%2F7FIDUNomWfpaQnvf7RsL6C0AyGGUTbCKw1iNXVawh%2BJUyfWFM7fFZmdDBEc0lIaVSZARvGQHCTFJueKgq7qGfQYimuN5PsHVjPlNDXDxTe%2FzguksojrZc0E1HgC6y%2FReSXwM2yHbb4%2FrDfA2jPd4kt8fcKTUZGFvrZDX5K7yVZLZAbM5uFEAIXBu9krS5kU58Sq5ZLqhJl%2FTpbfy1fh64hrxEzQNBwDVJ5fRorUg4%2B5e6HATBfexQhyP%2FoLlzy%2Br7NISqh%2BqR8m%2BAJVueeXr%2ByeanzcAK2owl9%2Br0DLurc9eFiRusskmlifuoAflpiu3kIMoJQf6US6UID1ka7YNTficy1SYerT2uoVVZUXCEtfZLjYf%2FE%2FwuDUo787WN1RbpuhmMuSasUCYqiDB0CpXndkweegeURFbMbFPMHLAlB%2FOohmw2jXMpG%2FhNPfTJBAqq5RBFSqyCKu9wmQeRyeXJGLKU8d5iHStOKN%2BvFxapInhcjeNZydKeWk5Q%2BRf4eMupYmLG%2FPjWjV%2FP9gtEm2b70Q12tycBSooPGhH%2BAY6EInoA7KIgs0P2NQO0IqeT9kLHWcJJgbOXpNuZo0DhyE5XVwY8sS1SMfgG1UNBNqBEL3M4hClPSyZ5f%2BcjutSUTFmOs1yC%2FHqxDuYBURhSYcXcluStvvESoH8OHCbVx%2FPu%2FvmX8zEP1Y7e3nK7io9WruGma3Ve8SisX%2FVCRu9IPZeEgixTCEqMULOxxkM%2F%2FSMUnIvMy0bquofc8mZ1kMhKFwQ261u%2BdMn%2BomVDSkeW7yQLQiiUtEzM6c8tSKDCm%2F%2BI899jdQEiWeVWdSwUeZqSd0EteqYiuTfdVWKQrIHV5pDWY%2BIxixxpVRadXTVnS%2BLAJyWXePcTkbtXi7fLNE8Sqmp0Rj8dUpnZSXHT4eETGglS82qPj7Imal2YL%2FoCw1%2FOJ84L%2Fv50lAUlsZfeZZPOJ93ksubzPk%2BSCVlPZGQFgWRjFXQylHzCAq3Z1tlsQG%2BM9goS6YutEgsqlRPjaOQwDvJEfEdNgtv5Yk0of1rtuDbJFKIYiUHQ4lzXOD6CiRNzfce%2Btwp42KwbsKpe6V9SZhJMZ0cej2Hk8hPnKD3l1fWPz4%2F%2FP7qboUL3ByTngnrQOk9xIkKU%2FUn%2F6cI0av09rH6TGxK%2BvcUwZGkQtvk3kcmFjr1pt7BEIF3x8hlM4pl5cJoEnwyB2AqyBMNbBnILk7u2jcg%2FR9pOFeZKQDjv%2Fw5xBzIGJ931JQGPb6F%2FumiarqNVibB%2FAUyTIIU9Nkc0AqiGbdHm1LLeAE8R7aHvbBUgqokWvLfB6h90KsxKPAz9qt3BNKwYGX2UlcWHm%2FW%2ByklyfVGMFGAK7JhufBV3CFTwyGt4eBGblT3udjjIx5vFGLrqoEPFhyCqZw%2BC2jXdTkmnbI42aEjY2W9go1WO6%2B2bGWPPBZidh3DOrhULA4Ovdm4DbQL2d2DQ5gge%2Fin9K2sWNgrPzdcRczqyX5bq6%2Fdx7PmiiVGdXCVRqNau2X&miniWua=HHnB_G86oyleNGdm6AYdDmFQKVMIrDeEYgy8NHVMLd0kz1jQSyEqCyhroAdx5GslkqxPVsNP1GKax7VkHXowv9DQ7LV52tG%2BlrsJgSQkBY%2FbI%2B1G53Swi9WphZq17TKIUpUxn5hQeHhsYTTV3SDoLkOB83Q%3D%3D&umidtoken=ZTZLHqhLOp2WjjV8CYGjJEsxC4IdlBS6&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=1e4445931871227a493af858e780ca9c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26hideNavBar%3D1%26from%3DShuqiTab%26sdk%3D14.3%26utdid%3DYGiOQUWmiEEDAIksjVnm0trc%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2042762472%26sn%3DFC0E03E973BC740740F53DBF283ADF7A8FA6FA40%26umidtoken%3DZTZLHqhLOp2WjjV8CYGjJEsxC4IdlBS6%26msv%3D8.0.0%26brand%3DApple%26imei%3D212FED7D95066DCEF95C70AE4E4C5C83037DF56D%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQyNzYyNDcyIiwidXRkaWQiOiIiLCJpbWVpIjoiMjEyRkVEN0Q5NTA2NkRDRUY5NUM3MEFFNEU0QzVDODMwMzdERjU2RCIsInNuIjoiRkMwRTAzRTk3M0JDNzQwNzQwRjUzREJGMjgzQURGN0E4RkE2RkE0MCIsImV4cCI6MTYzMjgyNjc4OCwidXNlcklkIjoiMjA0Mjc2MjQ3MiIsImlhdCI6MTYzMjMwODM4OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.0AljL_hJ55ioEGmkR-k23f2AqedZrWHnOCrzaC3A4ud3bJwvXuWMFaih-CctwuVh5vmCgBz-gFR4QU6UVCFXMQ%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
function jsdailysign() {
     return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18C66 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone10,1__shuqi__v1.0.5.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=YViHGPmBLYsDAC5Eb1YDBV42&net_env=wifi&placeid=111111&user_id=2042762472&sn=E287F95FE4E4405F7F0F1AC5418BA0EAC3163B4C&msv=10.0.0&brand=Apple&imei=A1A0D422871BA1C3F1E071EF4864E2CBD2422DD6&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQyNzYyNDcyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BMUEwRDQyMjg3MUJBMUMzRjFFMDcxRUY0ODY0RTJDQkQyNDIyREQ2Iiwic24iOiJmYXN0X0UyODdGOTVGRTRFNDQwNUY3RjBGMUFDNTQxOEJBMEVBQzMxNjNCNEMiLCJleHAiOjE2MzM3MTAxNjcsInVzZXJJZCI6IjIwNDI3NjI0NzIiLCJpYXQiOjE2MzMxOTE3NjcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.ZQQ4Q9_Hlt2MW46gpbCjZEeArowDHT7DVLqDw8yT4-sYBRG62apf0jOIyTpZd_o0bRtfXYhh7BMzHHFxqEyTpQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YViHGPmBLYsDAC5Eb1YDBV42&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1829",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633191774&position=601&signInType=1&wua=ktgi_nYZZCDkTOZ2LZrszjJk09YK6swRceO9h%2FO3YrxsiEsHelkXdu6ElTGhgvBSZ%2FLU6XcQHyQRIgRfOO1GBjEOQfxV5B6J2U%2BnUVrrFhCb0KUAq1vqAJQFKsNLzz9oAKeZ5kkp5YvJm3AP5Av7I%2FLfOKeRA2YMkN%2Fg0uwWFvPM3WiGkT48QZZTOj3SazK4NVtkswL0B%2BS658X30m14raGvzBGs%2BSni4RGfAcG8RzW1cCAbVAYp17CtUvEyGFKwVQjlO1UYD8ToH%2BlmRD54n9aDTmVgEA3Qc964gFXyCWnwmSvVN03oYbfE4%2FVk%2FI18M3vnMZ%2FKQTNsR6IrYNLD6tF6JANsf4%2BSzDrmcugWDYXJeQyneZpl6UEA%2B19brA4x58UOl&miniWua=HHnB_jQZ4W59ewWh4PZ65Hv6Ahgp2uOtPQoEghTVrPe6LSUy9d9K%2BwwfAf8CSENysnUB9rI%2BH%2FhDKSb48YnXGjlUTu59Zf6eleDpfGitCjM0UyNDsE1a8NeHTRlhSQV5AZzWa&userId=2042762472&umidtoken=YViHGPmBLYsDAC5Eb1YDBV42&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1633191774&sqSv=1.0&sign=cb5f496738bbe494cf9ba23c4bd91cb1&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DYViHGPmBLYsDAC5Eb1YDBV42%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2042762472%26sn%3DE287F95FE4E4405F7F0F1AC5418BA0EAC3163B4C%26msv%3D10.0.0%26brand%3DApple%26imei%3DA1A0D422871BA1C3F1E071EF4864E2CBD2422DD6%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQyNzYyNDcyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BMUEwRDQyMjg3MUJBMUMzRjFFMDcxRUY0ODY0RTJDQkQyNDIyREQ2Iiwic24iOiJmYXN0X0UyODdGOTVGRTRFNDQwNUY3RjBGMUFDNTQxOEJBMEVBQzMxNjNCNEMiLCJleHAiOjE2MzM3MTAxNjcsInVzZXJJZCI6IjIwNDI3NjI0NzIiLCJpYXQiOjE2MzMxOTE3NjcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.ZQQ4Q9_Hlt2MW46gpbCjZEeArowDHT7DVLqDw8yT4-sYBRG62apf0jOIyTpZd_o0bRtfXYhh7BMzHHFxqEyTpQ%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYViHGPmBLYsDAC5Eb1YDBV42%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
    "Content-Length": "4754",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "{\"message\":\"2iLn21LbHL7dZMpoKZcEzjbeV3T\\/LkK1A6dTbWs\\/6eCEfV16wB9kEXFGfBNVeXLOp6x93WqtCqlb7HoIkqM7SW\\/x8Z1Jm2XHddl+efAa\\/ouEYcPHKXVuvQIKxNGqNt7wKxp4YjzmOKYgAI91MvJ2Vr\\/ti9QolBotzrtzuw1OZ5QJlUSmjjBUosXuB1Lt91BKQ+m+8nnHdqezw1WMbXrWM\\/shDQ9Q6hmLR8PTLdY2+1PzlkqR9hsxB3gLF76ZIJs4hAOC\\/rd1y7tBlovlDvAfq3o0u9BuGxRL\\/vIHOCQa+9d+0h0p+C7okiFXknzhpLrS5u+JMhWCrRQg\\/0u35TmIbWb1+xOt6\\/Tmkv0AwYpNbRCgFHKjOeFiNTFSqFAnLnrqb1f0mxNwVJvubl9FJqRFDfqbZtw8CVVNLouB7guPPql6PDCWi4c5OvjbrM\\/qVkoq+RofC58j35y7RnA\\/+p5LIj5xZq+8w4jG0TS2g6LDvxilAUxRmXc8d9T1Ev34zhx1NXOy+nwQxek26wyeUaXtxeVepSJPzvxy51xAP9paunGmC0jyBdUiQS0Oy1a5kkwfxdeJVV1dY3KV3QpVcTvP7WdFfn04ZvLHYaAj9sb6mk60yFacZfVcXS\\/xvDWmbteyDMchtHtcRx0P8yBNZ65TKoaZdoqWQbA05rW8uTrVHDZk5ylvQBRJV1gGoLoDRwRCzuMGZ71n0XwM9dx8sxtN07Gh8VNwpawgqcUb5rxls4jGZhKeZhlmvuPurPVkUfjnLwFjkOl9XAhMvhPHh316CWchi3L60ZnbNp8KZm0ugwznZhlLXj5LjR08WVHPwlRBp3usFg8jURko5eEbM91DqarguGqtlug+OZ4ibiRskORG4QtS4OY5AflFxH18nAJBVoNDm0e9dEe\\/oxvBe09o6hPbWoRqu4ltjsiVWiQJQWx50cO73sUOS7qsDd3Th95rzQxtGXxfCG+3A1MGRpO4Vn8lqOi6GYWr+uctNbaE1ZnyJhbPTXcFItkNnN2tBEnN3RC85W04breZea\\/pFs1U1tcx8PGEUQbocn3oE8A02F7epHHwL6ca2oFCwXa9k5xLlW39g6RVIXfIKTPKxYsjumIVJ3yilbs62+hzRAG74CxZIfvp8REFUZdZhcj2plKr46w\\/a+3jOTe2afUYJwDBn2me+EkP9USsSxxa07amEVuQf4HsbUo521INtUtBDcFXL8CKttcukj7o5DQyWAHoWDp9Hh1wH5N91jMVTffgnMXCxty7BMI46if1KKis3vjoqz6MrjQ8E+4pdqNLKx63aUCt0ZbERhkVPjOTtB3A5QVJnQTVSQOeGQ6xf2Ac33sRLkq+ruSPARMjdqOm4DV8ranQqJBVSurXOzUUAxS0AM1Ls35joRmzSGR4MXAPm4JutbPbbTK5pYRIPbFHQCzkLMAZLR1wxdzUPylHTSPceNKcKccUJ1uAVsIKICdCnE8xn8B2mFTQ1HQ21Rv8S6qilGzWYFd2Feygw\\/dAQmKaiNtu9yP2miUWeCy6okCgaWGsNxI3ubQWZRQVdALEDCToyk7YhasrkluecWwxkn9B13ElpOHz6HNf8rSPzFx0kZ8RE+QAzg5ICvoR31G4zJfPt1DMofPm+jIt1800yFZs2gFmDYQOrHcSEU3JlRpOPc08Lb3pax87I+acWJDzyBHEROyNYyWs61IDrpVyYcHj20fStbj4sHVH6G+vpTfYozM0yFPBSPj3ihvwdcz7tFN8+dN+OiNz1ktjkxUHJpcIqpqMLRd6VVQyj4Q00sYekzzQOi+LrwBOANMCgEM7yJ3mfA7xsGbr+TZVAD\\/Qpk0IRwM6U7RhOzzgPVwJKRWqhwta1dezw7GydYH99HLzXZVLqjuDwRAybTEepuqgscMgMUaWIpsKECrR0r10KIGCF5fDiNapG2rhXGereMgpnijDdT4ruIsTfQUBp\\/b+SGVoain6Y7t\\/47saVvfqxaimhThlkmNPk6UOFGG\\/XEIgj9gXjQArHcngyfBTQhUBU3RoZI\\/EZkwr9QOYLNSgl2KKgDZTd72\\/6sh0uchWrTqXgyvX9nussonqAdeyZguDmqgiOvzAR5mMS2OZ0h6BbjO6RJbMIIAMD7AZAAU7GddPMrfk+OjTMOYtmuYGZM\\/NSH1kRWk8KNqP5ewoiuQ+tgwu9o2\\/6qk36wep1rmIASnOcomDMPTPrn8k4aG+S005KWiXHN1poa9pZLtPf255dYRHxyNL3HZWd+Xs+\\/GKbffJqJabMwScgEw70BufC08bYoeepc0DWTi2MyvWZIle8bfRKcDotcA3HtUVIa+BLUlLD\\/kRlF+Kw\\/n7Omg4GQwc5O95fB0jM4wa+KSscs3w18+wPJei\\/X1U\\/6iw\\/lEdursdtv8wpOSX3RgKFFtsWEq877Hf5vcqFHraLm21Ud+U0ZUiGJCq95DlZ+x5wl8pBcl37ybLoWn8CeAuqNI8r0AlTefLeYXOvk7abWBfku0AZ\\/u0npnMn9Jmte87f6mATIuBWnqqTlMyS4vAdhinYry2fmxqlgAaujDW53owj6Ax+ugJmDchxDnXaQvA2hsUK98vscFiwi9HE7ruK0e2s4wQrg\\/DXVma2BG\\/shv1Je9zkG\\/BYkyRqPnq2s2S5CUVESj+pTuBBmDQtxLL+TrEBBRxw1BUbdlNcS9VJlLSkYhlkIGj6ATpHB9cbzcp2NlaNopwprpZNA779az2MvXnoch7pduuBuORZT9+HEPMfbxmEV5FrAmQAkg+Cw0lYyA0HQWAVSXJkHJoPeAvSYORgeQvPwtBqy5U9cb0RvBnB9gvjnPialEN0Jvjsrq9wbwlsroznUqW\\/rU4lT+1NNMaEN9Npiz6xdqYG1lPV90dE4O1qLLlnijr5OykAKO6JaWypU+2z0+UwxAGoW\\/I\\/giLBmxwkYDWQcC\\/QK+ojWhuxS3HESQKZ1nVSN\\/g5hsza4Q9b+W31IHnLAMl+an6sLXZyhIZiMbSubAw+IoPratZ3dOmXPIDWhgwU5K2Gd+NE5ZgPaytimOZ0DYI4AIkb0+amUzUJ3k8jR14JFMqQs7+ii5DJgbvoc4Wdlhne+QEkJIcTvJPy6ovlxWNIWRLIrII9b733M0HWchMtXAppZTvNd4jU8xXUI7JWRGYKb42+yYGvS6rH0RqlFGsAGbmd8B\\/VsUrD7fq+CwYu7KX2Zjy4\\/OdnstCurQlP09j7XIBgOj3dzF1ubAkjaxldRRJ40oFlWOFNsAD00KUsSn7z5sfHyjGnuBRupxDKnxW4WuwGkebTaq60XxCn6DFtXY3gELO9E5Z49LsTE0B2jahZsLnLPO0ceAM6iU5cTvMXS4HVpsrH\\/rSXYVOpZzkLSaBBnVfoL0uw420Mnqt1TQ+jHSMMG+yNNPuHAxi\\/pkHRDKVrjuHBAeZdUu53E1iSOZnVPgd77on9GfWV1TQjkINuF18ZVhi2\\/yEeyTegw5rgFFera5pN8Pl61JeAoo95VtCOc+Fpdmsz51551Gqgl1ppsDNEV3SLZS+viy8YHFpvUvBZOO6gGNd3uIxErSNKWkO9xKV+Hrga5pNWCtfPEUm4w+0FBfupg\\/0NiACKVHvI6qmkKxgyZ7X8h0q53nCSr6ZRsInbie85TCh5qLD3oyJRRRtioDSI1c9Y6W1Lz\\/FxeHi1uBVAw9DMBOBb53pDEhsVG8x1+WBLBGt4PFxczX8EPXWl3UwprZDsoe8+2SsUvmYWBVyR5MqWTQOQQGU9I3zI8pUwZxhBg9MeMsu+0cQRmWfVM+X8ZPFI\\/V92rt1Zx+gjL35\\/XUxMT9Yu8cswVjNbcgezvzugXkVDrPP8pyWHkrFR2b0CjD8N7SW3MXLBYsJBUxAsV\\/pN6JlivlNzpDbRTuRAN8pH9i3J3ukeJhNqadeh2+VPFcCwg+nkQrMZ7stw+wSRyCo5JKjS+mNm9pBfNEGO7zpaFe3kwzJc92yISXqjq6NeyqxQC4galhJupi2nb+thb37rspv5EMeke6FWVxcoROax4nQGBiSHuf\\/hX5SpWIumHbnC\\/IsJJC1g36uq0h2seejwxyf3HHF2gMvdIqaKeHh9lgGa1DpMXvpmRExtYGueEuUGrY9db3YG+HsmfWScl3BxE5gMQYimd1SbjEuXaTNhNsvPbDiHJtPwgrAvR2sYtN4NJuenav7wuO5A9grfqFq5g++cOUrb+8B2TYGv\\/EM0VHa0WCHwGNlVrH5jXVUs5yraD9iaXKMQ0f29uoOepCopz6BowtvmGOE77hxryMpm7mWZ6+U5OX+9EK+VMVAK8rFj6bgd+p7oa\\/cbCUL0hQNDEv4mz9pnHyGEgiOIyO9iidr80GrXQpP+WkjGakiWYnnWzvbdJ9QHmV0gnqVXKaM5hOpM04qkISA93HCQNS8cyrXCn\\/a47eEtvXGBFmETElWtOQADkBt5ryjmPSYLHmI1aPx7QPpykKRa+qN+gz\\/lHpii\\/qMurlb3NjuSU7NTJYQ\\/jZCm3E2K05rDotF5NK4BXa2qwXRYwqP01erwwvJO7H7WpwFG8h8766KjzitUjvVFtl86DgVO0zAdQOvEgNo8hUDobxmjVpBLHdpTEfd6qqncfrqd5BJJrVF9c5CJKR38IGeEHhMc4gV9mTcm2tECjOx2DzOJ54\\/Yx3GaLCWMu1+MW74C8JxBGksPoPAb\\/QU=\",\"cypher\":2}";
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
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.3&ustatus=1&umidtoken=YViHGPmBLYsDAC5Eb1YDBV42&net_env=wifi&placeid=111111&user_id=2042762472&sn=E287F95FE4E4405F7F0F1AC5418BA0EAC3163B4C&msv=10.0.0&brand=Apple&imei=A1A0D422871BA1C3F1E071EF4864E2CBD2422DD6&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQyNzYyNDcyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BMUEwRDQyMjg3MUJBMUMzRjFFMDcxRUY0ODY0RTJDQkQyNDIyREQ2Iiwic24iOiJmYXN0X0UyODdGOTVGRTRFNDQwNUY3RjBGMUFDNTQxOEJBMEVBQzMxNjNCNEMiLCJleHAiOjE2MzM3MTAxNjcsInVzZXJJZCI6IjIwNDI3NjI0NzIiLCJpYXQiOjE2MzMxOTE3NjcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.ZQQ4Q9_Hlt2MW46gpbCjZEeArowDHT7DVLqDw8yT4-sYBRG62apf0jOIyTpZd_o0bRtfXYhh7BMzHHFxqEyTpQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YViHGPmBLYsDAC5Eb1YDBV42&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
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
         const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2042762472";
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
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=YViHGPmBLYsDAC5Eb1YDBV42&net_env=wifi&placeid=111111&user_id=2042762472&sn=E287F95FE4E4405F7F0F1AC5418BA0EAC3163B4C&msv=10.0.0&brand=Apple&imei=A1A0D422871BA1C3F1E071EF4864E2CBD2422DD6&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQyNzYyNDcyIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BMUEwRDQyMjg3MUJBMUMzRjFFMDcxRUY0ODY0RTJDQkQyNDIyREQ2Iiwic24iOiJmYXN0X0UyODdGOTVGRTRFNDQwNUY3RjBGMUFDNTQxOEJBMEVBQzMxNjNCNEMiLCJleHAiOjE2MzM3MTAxNjcsInVzZXJJZCI6IjIwNDI3NjI0NzIiLCJpYXQiOjE2MzMxOTE3NjcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.ZQQ4Q9_Hlt2MW46gpbCjZEeArowDHT7DVLqDw8yT4-sYBRG62apf0jOIyTpZd_o0bRtfXYhh7BMzHHFxqEyTpQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YViHGPmBLYsDAC5Eb1YDBV42&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "671",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "actId=355&miniWua=HHnB_15eRUl616y3cbpMQk1%2BQk4rnS4cZ/4VKXE%2B6A72iegNxbYKCnXvmpXJF6CrNWUPsYIY%2BBg5bwll66j0RFb5wYHGCeh%2BwBWu1cmWKnwVfbTukigDo2DzH6IM36pVnoOpI&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633191872&userId=2042762472&wua=ktgi_YhOAqbZ5SFfC2uinefhUsq31Tkp4h03w8iRDFcbFsU3BKs8w81u7OrWoNjXCaivf0T1yRgka66kERsgVYvXj6dgm9A3MMfJPQZtBgENvEv%2B9QacwVYpy/WURmIWeidISvv1CQUQ5OmcC0G0othNaAlUFlUnSrUvrGPokcky8MozYxwyPEgIWTtNbwncVRlKI0%2BFBT4AkHvAQNXmDqIfGXLNUuJogdBB4k4NCRJW4074%2ByicjL/8oGQq27UvfQnzlJD3kvkoI5elnZxLw/NiUeMTRsTewhEXyIBBaAAeWbFL7/0VLpdbzgf7ZFuPK1HBNERDIzjw4EbSpcJ/rA74ZJHWLs/hDzG0sPJNSoV1ltgiP/tiwQGu6MSggkCm3Uwxt";
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



