

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
//签到，视频426，分享
//极速版签到，视频，书城，分享，阅读，收取
//tips: 书旗426分享鉴权错误 极速105签到视频非法请求
    await dailysign();
    await $.wait(1000);

    for (let i = 0; i < 10; i++) {
        await videoreward426();
        await $.wait(1000);
    }

    await $.wait(1000);
    await share();

    await $.wait(1000);
    await jsdailysign();

    await $.wait(1000);
    //await jsvideoreward20();

    await $.wait(1000);
    //await jsvideoreward10();

    await $.wait(1000);
    await jsshucheng();

    await $.wait(1000);
    await jsshare();

    await $.wait(1000);
    await jsread()

    await $.wait(1000);
    await receive();



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
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page?sdk=14.3&utdid=YG%2B52Xxg5lYDAGLrDZD2l9sq&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2032723913&sn=DF018E7E75A621F69E57BDE9F510AAB8DA839FCF&umidtoken=YG%2B52Xxg5lYDAGLrDZD2l9sq&msv=8.0.0&brand=Apple&imei=0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMTgwMTkyOSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTI4MzUyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Zn4j5xIZESQMj78nqPaTiT0LHdjA8acBcu-IUPt3SnuSVa0E2z1O0BcEB41CCn0O4rpSj0nnlol8Fm1mNuPbNA&skinColor=23B383&platform=iOS&ver=201102&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "3727",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1631283555&position=501&userId=2032723913&signInType=1&wua=HIVW_y4Pu0R%2F7ktgy%2BWB13PT5m9EQi83QFfEMzdgT3vcA0blmTItpDnP0h18J9Sx1C%2FEg73gb%2FyeW%2BjAsbmB%2FOVkn%2BU5MNr1Cbk7%2FIqKqZ1pTK8xJu7hskOyI04b4gSy8jyFap5eeNAFdX3K9Qi%2BZi4GRs8CVHrbx5GAMlKErNzpk1xoVO4IIQhJusDsNObSGZ1BALlCWBIpP1jn5gQjjBveZWOhl62ZzfrYC2zOMnNLsPkizXoVBDIBqC5pM1ZczHYMHRu4MAOe3NO1j1eUKR%2Bu1KaWhrLl7Xo%2FGDXuDOABsNQuaOCxoPNwjb2m7Y%2B%2BBfSgt12nsgMNFU3jiU4KPQaFtNpz2qZCEDHXlN5hngEN5HdajxH7%2BCrhPwnEdvzfLdd3UWYlnU7cn2d5SPWLqfmMPPg%3D%3D&ua=140%23XC%2BrJ%2FhXzzWDkQo2%2BbvQKtN8s7aTLu9Qg%2FbR%2FNYdPyuH17frQ3iWvQmx%2B8h8pnM84Qivlp1zz%2F1zvU3ltbrxazUr73h%2Fzzrb22U3lp1xzR1yV2EqlaOz2PD%2BVounUuI0MI2y7yDY5anrHRqjELrEkgNfA%2FQiOhM%2BWmdinbWBRuHQIHr%2BHxI74SxaTKNtyRO8gMvm%2B9AGkrr3HHNzM6FUoAwiMs94ha9qzKU%2BObjP%2FaurE%2BSm%2FT4FTHgBHig%2BgRP9VVzcG1SZc8EMdGRTmE8qrptm4x8j3FDGjPh1ff%2BRwKCgpaYGomq%2BTj334a78oHovxBUMeCkn%2BN9D8SxCwxbgSRxiPi0TKZ46g81Sm891%2B7okcPc5f4KNERByWXa2I6AAFEL0gPfBwsmuipsqWcUdjr8CITl932OtpTbL6suZrjQ8l9fIYqULQEIfdTSRkDs2QteApHpfKut%2BbiNfp%2Fbt7dWn9xaQM4TF0C8wdcyascHiwGMFDN41C84OWbVFwWgTVzVyHz3YuFfF2%2FqG6tQ6aH%2B%2FvPU8ox7ue41K3vAdbzY0NtKj0Nr5yb3YxdO%2BtCM51Dd3ZR75acD6bfZr%2FeJTlckoGlw0ZFKykj2R%2BK18Tl4kMiVaFya5DF7XEX6%2FaAkr0trISGAoEgprebMrGzJvAsD3PvZmEdst8OMb%2B7q94Eauxx83m%2BzoEBaeA2HRV09eBjYTLDerxC7egwxcOpYaAUVW9%2BrDPQvPCJkgAEze0KEguO%2FJ6Fuv6%2B%2FYF2UKC4%2BAGpjxRSrGiHKGaM%2B1jJ7pl%2BWYwDts73oh3VAibsD2Ax%2BDnj8e8V7jrBFPiVBkGnYvyR8noMQl7St3P3RdoPC7iMT8NkgQeJV7iRgdm7SOGdxM3PaN5x3gKGPQ2dygeGdKMzRvJgBHhzpti7OKZxMt3XNWDzKjPAw11nAYlFNupAFf0QYrVBRxSGwSTkkd2RnNEL8Iq1Irs7UwBqv2psn8%2FBGZ7uHKJjwCP0f%2BDNaJdnQ8IbDsGKqUDCahC9eUPyCxkXCedh9N7%2Bl87Jat%2BxI%2FasdgZb%2B1eMN363R2B5q4TpzkCvdxn6bh9tWSnXaj5kq4V8xw1SynJJLUJaQO9gO7xAinIR2ixrRnMp9ZhK66TFlLbaIF8680W0SJyy8i6eoq9czGdH4hLKDUpp7yTb0hV%2B0RDhr9SCw0tkUS3TX1UrP3DmahapXPqxOgaZPccKryYSe7WsFlM6A7G1TwoI%2BDDtJ4NQyUKtva0uN1McV4s4jNBSR%2BHiU0euZo%2FLATv5w9Vxj4PHfSM1Uc4sHs6Y1PpV7Bmvu1L8M3MSCozyJ1G4dAquoOQOvPbqCWyDQnjQSt%2FxZGqseIDuJ9QVVUJ3NHltr%2FhcLq4Rr4%2BnXTOI8ELxsjsV%2BZoVKkGzsfUnQuP%2BXTgadhRVDHRjx646udyurOktnsVVWM9f3zTQ%2FoQvJ27VlDlOKYuQbdtWlV52v79%2FYa5PZSfSIKBU0x3oxsWrOsd%2FIAdLBWf%2BH%2B1z60Pl1SOJ5wxI4U5czDRMO9Gr2xYvRgPPLiYq6jtvZbaJhFKp3c%2Fa0F5XAInYuyvfjRWG50SAReEamFahymPhhwwxmYVO4oMVd5RUod6KZtzGEuLoXQUdZE9TRxYcTPOuiFogmW6VHMs%2FFP%2Bcgm2INDWtucFAigtqgKDnivr2pgGgeNOSYzmZnIRyTA&miniWua=HHnB_H6h2R2VVRHYOQ%2B4RAqzO1I7lzT4JY4NfMrpyjEkM0mIR%2ByCStdo2fY2I4Jx43Fod8bjNXuFEUO3YZ5CCHRlynQgYyGNZhf%2FZdKC%2FhLZw3b748gFLKpd%2F2POQEdizTfofBc93vrvLfpk%2BxpPTC858Jg%3D%3D&umidtoken=YG%2B52Xxg5lYDAGLrDZD2l9sq&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=9b7efe0f06bd832d7347e8714172f526&key=sq_h5_gateway&_public=sdk%3D14.3%26utdid%3DYG%252B52Xxg5lYDAGLrDZD2l9sq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2032723913%26sn%3DDF018E7E75A621F69E57BDE9F510AAB8DA839FCF%26umidtoken%3DYG%252B52Xxg5lYDAGLrDZD2l9sq%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMTgwMTkyOSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTI4MzUyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Zn4j5xIZESQMj78nqPaTiT0LHdjA8acBcu-IUPt3SnuSVa0E2z1O0BcEB41CCn0O4rpSj0nnlol8Fm1mNuPbNA%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
    "Content-Length": "5047",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "{\"message\":\"2vD5GxLwbAWZ931zK48Px1a6fIm4IU6FvBE9use8u18OH1x2SJoXltjnXDCTVNye7oS3OYAgROGC22+RXWJYTyWIbjctpVDk1uLwcu8Pk3\\/b2ct5rC2Q1N+xZKLN7sj\\/vehgWNGQvnutQepvcsaXd2mZk9LozpmnpMhHEuZsMgegJf1aSRaEMJAFb0VJpSqM1G7ui3yrR9Yu8l6qidBhlobUzgF+iVD8c2t42yMjkjIMDLmurNqZQ6ixkB0A+deb5UjkDmPrSWWzzYH6ESW+0X1zbeYrZ4APYkH5NcbnlsijQov+mPxXB84sPd1bZus7OSj8QBjOQfxmZEZQY7hxHtpXh9Xx8rmeT+McZwyFIwbrBDRZQSd5NMulQQDxmGYHSbPW6TYselVOoxVkonvn0XtqInnLEh0r8igXLFXXsDDLHdVG2clDtT0JJtaczSkw7iQvoGi8Dfhf5dyLSBCiIZM4pEa6s13shcemyej2HCspBol\\/cggtrlL4D2s7nTuG+1DdXS9r03WQaJUovWfOJyPH6mApvs6H61FOv3bgiEM3+3Fu+FGM4B4E6gCXry6ZHzNO30WdzrkdJ7qGP0c0oIfAoypqAVbl6piDvkbTuooCfRRLcqTjKmTw9+y1SrDUK9PmziIzwYUFQtVfxSBXxoJcqP6HzgQ4MWgjb36nT1oR0gDYnrvGmCXHRy4wx6QdZh8IqIgEOdV1yFHXS2XGa0ifauItV9vijkMMqTynsfDXSQi+gUVt98U6Q9B\\/USF8hTvYQkkqYpVAfgH74eV0KAEWfS8XH7V7rl9QOIQpuKHKIDDuRwSWE2vK5OcgrCcpjECWT+QnRg56Nf9InVDs2vc6iLOI\\/RdomlZUKIoH0PxpIMXTNVKeXtP2W6AhLJyzcs5vc3nzcodnl5PDM7uQvmIQqki3ZeQNTnI0A85eGDPKVU2Q469NJqzHcJ3IjAEWROzMXA+I6S7hGhQQ2LaJs01r5o8sO71vqC8\\/enuJona7tGKCbBRKdnyc76\\/39ztOku\\/iDezz\\/wtTBBtfosAjRwK6YJBmQlBWNnWMpso11JXsfYE1rTXMYuiAFT8e+c\\/9I\\/s21YCgjzsG0DK8fV+Iicxh4UOFH6I2mHufyJVDfLF7AUxAZXlwfuc6dLG4uXbs+9DJbOgo8jX0G8dYulolWTDe\\/aiJnQmnxl8mOa\\/iNQuTUWnxi45irZOExEKvdCJMg7E00z6mTnzrIVVH6ITVZWUP+k24PqsRSB+puJDbFzO7rDELqUov6ZZ1oOZY1MOFVq93T+Pg8rm\\/s3IEG4fchmUWjVktZuu0YfpYQtMygIeXsaKDQwgudtmMhBXOBLhteVdLOQf5DWYITuStu4LxwmP\\/tpEHWWWEeZ9XpLjVVjzJqX2sGd5jDzEq66\\/pxnGN4m72Zp0E7nBAyBNcugtQqpZWygYeqnjSRIaizhuvuYgQckEkUgxkSTxLQXthuaxVUPlDzA1N2DJDjtWtxGb2EAzt6AVrTXBD+FZK5rbmWFYtrIcNgs4n13JNoDHgBkQ\\/cz4\\/c+WOiZfpAZQocGumX2tlayPJ4YCiTr+O06SQdPuEXRvQxN5flBHXWwfKoTRR6VceQeg85TttV\\/gLTi21SgbZNAEw+VnyrAOxg8xdEFeLWgVQP5GY+krezzYm9MvYg\\/WZgE4k6bVjo8f7PosVN5zCi31ET6U6fjl685fH91A1T5Z5EVD8+lrVdNpaP2cJMOcogGaW2Ww2QAwd8rBScCwpT07drHcayVRYMyagB3NjMBubBsW+tFHhHutqRXdcCYIwQOHBFhB66mO3Z2JVlnVh2hSYALaCtNgGh+4of4heOnSX2kljd5ZoscToU5bOKrENRBZ48IhP\\/c\\/7hvbG3oVMF5szQV3HAV9O4qKyqk17ZE\\/ZiFBgKgzRcsRkdG5lNwrni1eaRIg+PxQDmw9Rp6GPJ+Rimmz8i10yd5PgKCgFoFeWkifVXR2byD5ZpG2Y4pQJrMWk3629PWn7nIYp4fwH+k+oqrhRknUID+dq\\/Hp+wRfLj9q3XPA\\/E777IVxgj08YuXupQGL8uWwCrxtlXjne8YdZn6ml0BABU1v7MXerfhf8HtmynjHLQlhhQj80KsvNSqf1yOeD9hidNUDTJAaN6vlXiqvQ7S6EQ7nL6B5bVeBPBRipECwuPqiwvCLOP3SOFNs\\/GzgsfPfGoKrLvJE59KnG3pKAjENcZeCwEljCHRE6Mz44W3CpTtE9+WMCuLyARRVmfIsa3pLBuoyzdyLSu9pDrpkeNkgTLqf7AXCzCBZaDM6zCLmmnq1cOJ003Jx3m0sjwEkwuX4hZmUjorDrikpN6m+Ve+eyuYKwDwgLXdJ8FPtjGJwB4\\/1I9Gq3\\/3HWNMgFasw+vbt1PDGDEn2IyYBdyOkKXmbY8aI5MG8n4ZlUxMWMZ3WujlInAvHKkkzeZaZSAfQT+\\/B3VuuEWSay1RI73fFDQdH1dJPXyliUAToq36NL+hq0CVCPhLLpWG\\/LafgzzUSIMBvc9hOk+0TeNLX49UL4zqOm+csGhRUXMMSTHouFlTLWRHE7e3rndorH+rthx81Aa5Y14czZidxKGAZxbqBRuJfV2wCQrIE5TvO5\\/DUPpnFWEWXX0Cp4fg5UY2PimHpLhajucrGlZMR0+aOD0H+K6379HHBU2CMNoPX8MVNSSKAipjcGWD6w4RRtB7GKi2sQAHDviuCOQs0F8HsGA514m6B4bIwFqIrty772gmtVb7QIQE\\/MRKZnxQa8TYty8KSWKtOK3GzmTcYbo7tNA4usVIAmrQMyecLJj3eP0b8ItFfRy9nRRlQaaI0yYqCxCsXZ7yq1Nv\\/NOW4RotfRPQNO08ZM\\/QYYUo4cA5i5pUb7Boe\\/Hi2xy6GC9BnzkzJRrK5Ri+W7BXvGOiw0WC94zSdFszp0NOLOCOYMH0oOLIQGDnudrD0a1WQOFrAU1sx3Z59PPIUlg07zdlF8SWFzNPu1cVaR5IemUC\\/JnF8h9S3eibINmqtWbds\\/PHw3mLBSgZ9JgAP5\\/Qi5ZRxRsA4ATXWIENhrCe2hPKrUMBJswPkFHgjC\\/Q1442\\/dbuRb6ZXyQQzwX8q7I\\/WdDwqejsd\\/f3Ruv9Yu8AFPLVcyx7BQ98WM\\/MamuQFTB2m2iITEjAOqKe7VEMUccUeXmYgYdfqDE+cZotF8t1zI543eKaX4DQ0cg+Z+qAXlTWrzJ5WsoUQPrKNmNrzR9ksehfwN+9B9aCNuuMy\\/O79Hj2nZY0Mxohtnvg5j6ierIONaZQ5ndrKjvYAQv4\\/rWqo0J+qVm20WgVQrN4OFiT0WmzJWxd\\/5iBDT\\/K3XjqBD+d1cP0QQOWJqWgZXD4XUfw8S+Rk9DNmdu3yMKmkYJRh5TQxpUqsJ8DxWa74NcA4\\/fPOQuJOw5gxxx3Vl9sXRhg7J1jRXESBxtn8iZ7tNzWqNPO8mC6\\/uEopxrihCA5\\/Lc0\\/olIEaGQPCf9zi2xdI5DJyU1eGQi+037t3i8MNwV84ikTRe2aKm6yuUmBY0BxUjBFPTVTEcNMmsUTitjc8tQymqyX1NvoPQLXyy9n8Udo1HTQp\\/n8knIJx9hV8uno8XpmF5azxGEMo0sRbp3Uk3TgwRkexMpvH9mRtCvnQ+\\/Xwi92ZEYQa79kXOeZejeTZ2J4fT59nrp3f67i2aYSsHwwweKctY6FqzyyYQpdlUZAWMIRs4xs7wyv\\/ckjlWysNLIp1gz5KoQ\\/8hmDEhEAKAXvlXUGLY59f6SLO6WGWWEuEVekOofZCNCucSaJdrR6sstdkt8l8DXNA4pEriLEgQCwV\\/AfipnqkztSCoeMZ3M8iP4SazxAEScjH4+\\/1RcIEgNoR7YyuxuGwWBdGRMSwLsb9TkasewW\\/bl\\/qnexJVFJYtegON41+Mk\\/Sr\\/EqHWje7aq5TTVH9Wup9R3pKqrSF2rDzq9TjKKLbO0UjB\\/\\/q5JnE7Yuz0xs8qDgGeAprmbIYjc5yL9z9xHWmNqUny8hDDpQ0dgZLNh\\/UNKAuHa6vSdPRdtPMSGLuzuYeAxiLm\\/aIfUcx79qqbZ5zDk8Vfj0yfDXipKPsWzOJ7vwf6Q1OKc0WPJogiq6HkhYVQMQcSX86Ir49FZAqHeTc0wwxx9+LvT9gO5zH823nsCP+VCzNQn+JiVNvmYCX3y8od6jy7WbAUvPONPu5FiMUehaqQBxe1Zp8ny3UfLk8PytkOlq6r1N22146IFqQ6ToVAR68oZmgtiX+HFqVwcfZLb17mhVabsFc\\/i0W1wvwuLEoo\\/5NV7WKpDY5\\/m8C9KWqYvuowPUUgkQ91vcDslBcIanMMHPB2F\\/RcZarQc+g1kcUmU\\/5l3E9IaXmS06C94+3gmJAnfDAenCvFlEoxYEQS1eE\\/30OSaYvPRvtf+RkjSWzfyyg6RHNxpgCl3KhspR6eF\\/i9sl1f4MqE4hHnvc16LzPf4bt9Q4cBhkcXkRxciBLfq2pTf4uG1kqbBBJjv5cICraAVbH1p4DQn\\/\\/bvcHX8wCSvz3HSJ7RQAATJCywM5Y4SQyEbfTIJ9gJ58ItCsTLouj3ugpk5SGtem2AS8UdzEPZ7u9XvITRlQPOi7Ti1wsdpvmDsdVknifH9Ln6XWTIlCrFHefHRHG7PtQQzBQ07oYhbOoP80+iOT3MuV08H3MhMqmtCOU7wqw1enHxUrk\\/r4TqcjdJNoGE7Awzq8hAB4KE+BEvOC+ccSNANZRm4kXK56HnGbz7stXeBmLnFb0nH3t97mOCy5\\/hlvgGj03MjoSjjz3UDeulpJ2TreeJB7I3KEdYW9WRuOqmd0nR6iPZzdEvxUaty3MswUH7IPZcwSQ4LYSAWRywFoRMAsmTRoX\\/yZkH9s1eBp+e6nCV0EiyZzHtYLR9NqXDbnxZpp85YWRpwuynHcn5AoXh8sPVHc9CnVxwmm19Rlo5mNTSucC2CeqSlFcWS+UAJfh0nvmQSXtIqgo\",\"cypher\":2}";
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
function share() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.6.0) WindVane/8.6.1 Shuqi (iPhone10,1__shuqi__v4.2.6.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page?sdk=14.3&utdid=YG%2B52Xxg5lYDAGLrDZD2l9sq&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2032723913&sn=DF018E7E75A621F69E57BDE9F510AAB8DA839FCF&umidtoken=YG%2B52Xxg5lYDAGLrDZD2l9sq&msv=8.0.0&brand=Apple&imei=0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMTgwMTkyOSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTI4MzUyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Zn4j5xIZESQMj78nqPaTiT0LHdjA8acBcu-IUPt3SnuSVa0E2z1O0BcEB41CCn0O4rpSj0nnlol8Fm1mNuPbNA&skinColor=23B383&platform=iOS&ver=201102&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "4061",
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=262&wua=HIVW_nRH068xCIhoMc2ehiAhyg4%2FLH2KLuDsWU4K0e69OOVSM1drkTKiTNIIpsvmA0mty0%2F4E1hgQjwhFGS%2Fe8cHnQQJCodWvFGawSnIQbVs6EFaVq9CEvo%2Fa2m%2BNtnOUUWhfiIXAv51H8KacMjoOFHF1%2B7y%2F1hg3e5QSPyOmWHIx7nR8h28d%2F8U74CKwcDOuZgTzTBQDdHWisaUNSeuX4emEIiSrInzVbZFzAACGJxX6epebfJSa6cb3Zevsn%2FyYEs%2B4GBr3BBV5YdbdD3T%2FpGwXuJILsZx3JLSHcaa2Lxz0eoXtJth7p34ad9qW%2BgMuR5YJ5GdUZ2pc5kbGBKVt%2FBLR1fo3ylhoyKjZPaoeqWDWvwyrnKC%2FUKKsbH1EsOQy4BpRHfr%2Bm%2BC%2B7Qqb7gcHYFQxFQ%3D%3D&ua=140%23xwXdbwNbzzWTmQo28FrSbHEBc73bNvCzvmzTMMInAV1ulwQKPcnkNXQPWauQ0X2Blm4xjvzumKdlrJSpPsX%2FugJ4XFndiRKUD%2FEqRhvt65Rbo0QvRSCapmylMWjtqFuiGy9RKDXoROoHqNzInq6Sc4Iq05TMucgoZDsl4EBnV%2BqFQxt5jmNyCIFWrVekHiSiWLJM5joCTvRRmwJFzWtslp1zz%2F1zvU3ltbzx4mkLOtluzzrb22U3lp1xzG1ydkgtlzzx2oa3V3BwQFrDLnRhPQQxznW6VxBRUbrz2DDPSt6BF2Zb2WbYl3eACIz%2FVOl%2FYHrz2F8R0phqzzxA21MRv8GzzZfrV2gq7eTzoDcKVJO4zbrrWXY4l2zz0PrVVfnuEFcW2IK%2BV3g%2FHb%2Bi2oXnY6P0MI2y7yDY5anrHRqjELrEilhjY3rVbdr8kR%2FaaIy0CuntWFcvooMl5W6zjJo7vRwj%2BJ6L8EHAq%2FioLWrgOuZ0OfblGClDprEVD4aXc3eKdHJP8Xe%2FKNgwBb22CENW8uUwq9etjEK%2F7CBAYx%2Fgs63lL9QDc8HQ9mswclPj7mXNOa8TY0Yh8IfjkFDM9HPs7s6uDPcCnLqCVsENStwZ0MJNdszH9RwRs4lJwOt9Vk2Hf9Gp%2BTiThQnL2SPUQqdsmBUFJu19wd46%2FIdrnFXFjXr%2Fq4R8flptup2XMQcrL7vaMsEdVDSQBIwNci%2FP7l31G5IaDgpORyQplkwhtTCSc4j3t6VGgF8EL0c2%2FxI3Ap07%2F3NC1lp%2BXNIdOV1dVbs5FtkcQpgnLFSTo%2FLKin3vUKzK%2FXC7sweTY0nODo9it8eZkXk1AIBUKVHZRXxFeBlsbKZW2SVn4t1U2IwpWcpHC4ndkRSa6uQjGkljxQUc5kmDyF30aue7ETxlMlfIMPpxyGGr6aU8ZZGZiF%2BFIdY6pnbdGmNQ%2FZVWb4%2FfEL9rDCbp6K9h2C3HqcvtxSketcJgdD%2FyZhYy%2BnJJiwz5HdeMIAiddsTQr02NRdsnKQIQFTr%2Bt1ls2xreq7BNn%2BRSy2VJKIMqIovbAmd7%2FkkwCmTETuxo%2BMa9qTJR0zAqcblhM92cne%2FRfZpxJQZsdMpoATC6a7XXJv6ekovGnd4pz0TazyPvHDEBxvhfsw8kfCJSB9O2ffPQXqSeyo7my%2Bg0dPES28fiWW6dxw%2BJS9%2FyXgTLV7LrwlqFbWbfOPSc%2FVe%2BTWN6WMS7FMyR%2FF2Cop5EI1h0L5ClqJNM2rEgKHxbrQy6Y%2BgYcudygJgxq94qsnsBdh95iYMr7HTLjUIhRjJXXEN4vbBpeY0mzgQJPjTYKwQPLTdK9MT%2FlLSS9j8ibRsFiqorHHRYASlurUmo1us%2Fk%2FKJ%2BQKBVyuPWo7cjd8O2R%2B1XCoIIRjY6wWpiQrsJ%2B7retXViIfbkOIxKEn7gHK3tdOZtJVga3eQ4dW9iFSu7ZVrI7JXAvIbsMh0VAeB%2BXsI1ox27iB5ddBa6F97sp3J4PWKEeMF%2FRe53sh%2BYhcb8Z506bTLY%2FApKPfClBipGhPZ4rIYGi2CnjbtLxHDmlGPjQFi82YdEMVjEloPKB0TSUrSoYJ0E0MbQm4dqli5dxMbfY2Pq%2BGc2xqIjvfm%2FO6IOo%2B1TrwRIRff8YbO9X6GM510VaHh1X7UW4iCl6v5Nszo7CDdC6owoAOzb%2F%2BMoRu49Ai%2FN5AA8yG9riDed14p2MSK76iQFV9fK%2FFbJeacceWvs%2BMTEwNv7M4z4siy3e045CWS7jalvOE2R6h9bvtbxblxGdr2U4rCToXg0oYOcV%2FTru6R24n%2Bdce3kHh2RmJRiz4xrc%2BO%2BuAJ1peSEU8dSU5%2BRi9drnsM1oPin0kKCrbr4%2BAttWVPLm7x27wn2kSqIitYNTjrzFAqEY7tWi%2Fvu18z8JIHKVbEee2q%2Bp5L9zVHrJv5qV86MhQNFjcXzKItvY%2Fk%2FFnmgtTZ9vqO6FnNFUUKqWDi0xZUK4QWcQWjCtFQ&miniWua=HHnB_poDmPhWGQsPAZBTEi0ahCxqeRQs5YC8wL3nxSj4r0uOnPFaIiBsq%2BHP%2B9%2FkeXxIPveq5WpFLGxcHDocRQL3gPgT8Ce%2BGsRZSdUEScpHnxHizIq9yfFW3IjYQfIKBIBVKs9uey9iHrln56JeGnc%2BELw%3D%3D&userId=2032723913&umidtoken=YG%2B52Xxg5lYDAGLrDZD2l9sq&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.6.0&placeId=111111&timestamp=1631283610&sqSv=1.0&sign=8744cc6a2bdc64cd1defc32c151d2b57&key=sq_h5_gateway&_public=sdk%3D14.3%26utdid%3DYG%252B52Xxg5lYDAGLrDZD2l9sq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2032723913%26sn%3DDF018E7E75A621F69E57BDE9F510AAB8DA839FCF%26umidtoken%3DYG%252B52Xxg5lYDAGLrDZD2l9sq%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMTgwMTkyOSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTI4MzUyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Zn4j5xIZESQMj78nqPaTiT0LHdjA8acBcu-IUPt3SnuSVa0E2z1O0BcEB41CCn0O4rpSj0nnlol8Fm1mNuPbNA%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
function read() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
         const headers = {
    "Cookie": "isg=BJqaNSJOr6iCpyMCLNN3sTgS4US8yx6lt_bRfKQTDC26Fz1RjFu4t3914WWL3JY9; cna=UObCGauxYk0CAX0hoUvvX82/",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.2.6 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "1798",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "_public=skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3D07dLW55LOnME0DV70//51sd3FywJseDq%26user_id%3D2032723913%26sn%3D3B4AE5B91557DDB8EECFA581A3577E291AA70274%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DE7378C38E217FA98DA7FB182F94665DC8435F406%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiRTczNzhDMzhFMjE3RkE5OERBN0ZCMTgyRjk0NjY1REM4NDM1RjQwNiIsInNuIjoiM0I0QUU1QjkxNTU3RERCOEVFQ0ZBNTgxQTM1NzdFMjkxQUE3MDI3NCIsImV4cCI6MTYzMTkyMjg4MiwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTQwNDQ4Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.geuaco-kjbx8ReAiGEvDG3QWTPsfULKQCxn5xIPmE5QGRH4S-HnKmRBtWZRHUx1FWgBXR-UMN4GmyD0kqzDoQg%26skinColor%3D23B383%26platform%3DiOS%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYTv4Tu4esRIDAEbG6LYJUmVQ%26utype%3Dvip%26sdk%3D14.3&deliveryId=531&key=sq_app_ad&miniWua=HHnB_3llOhpy0%2Bpxk/rx2GI28VPycJC306GHAgWB5x2aapREebX583H/LPhJObkc7MFVlUXoUvIX9Rk41zUobDM7tuIfIirbhQ%2BRRBktD9VEdO/b2ieYae6SOpmIk93XzfvUm&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=EC25960AB9857627C9C378270C3190C5&timestamp=1631404621&userId=2032723913&wua=HIVW_s/HP/Fv3K/V6lTtFF3gmIXhNeyDnVni5wUG5ke3%2BOeUCwo8Ovbu%2BXT5cWkC/867AnLXLISRD0ONpIF0cfXlalSyHQ%2BM4cxaMgcNLIkqDQnbRdlaNqKjSDGkgieLqb1udYCP8Wm4OtcRcXe6EHsLPodptUKzvSnkrYVBkOqa9qjgb0vUk%2BNFRfB1u7rRTyBC7sjNfqQ09B7DOoad19tR28RhFppPWZY/P18IRUH3%2B6dJ/jP/BJFa/nNyNlfrvwQUZZu4AXuAfMdkMUNYKsXViwmNP0K7ECEFSFqOPHuuH6EDd%2BYIu%2BeVgyFlaomSU2R8xyoDwN5hDIxdifEDHv9wj1SJYb%2BVKVzB2w9mUH/r66AaHT9t6rnK66KZHQ%2Bzm1YTP";
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
                        await read();
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.3.0) WindVane/8.6.1 Shuqi-Lite (iPhone10,1__shuqi__v1.0.3.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=2q5LHWlLOrC%2F6jV70O8Ck4GIH74Dic9M&net_env=wifi&placeid=111111&user_id=2032723913&sn=6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC&msv=10.0.0&brand=Apple&imei=227F80890B767D337CFDD98EC7E2CAFD2E93FCEF&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA&statusBarHeight=20.000000&platform=116&ver=210223&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTtsdxbeZFYDAKRn2sNXOyit&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1903",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1631284788&position=601&signInType=1&wua=ktgi_gZt4zgnP8NxfXWZfHDV%2Bix0zm0P0R0CoxLCMsj%2FbMACIhDpaoiGNEUKDpnvQcKRnA5b2b88umg%2Flw5w5imTNfDFpFQts9KaXQ5U2mL%2BHhSX8nUvdJSJHkgvtzT7TsIQsXJ0j7s9G8g%2B5DBJ4DtpKR4Ylk9mi30cnUNpA4duzt4r1OXh7%2BhoDAJQXSfQ50GyqPdWdCuJUEv2l1Cbu4won5ZBEUWzdyQnkj2Kw0U4zQZ52zs9JlxNqQqi263d1CMbya9VvUkvvYgHH3h7DAoTyuWXyLDUP%2FdV3k5iqmkoO8Omf3CNgB%2FsCTdYEDMDO4gVLBv%2FjFQwoiu47wA6xezIqhP5Yj7dTxA2dC2yD2VCnBARU62jEP3PMJOIJtlk4FXyrb8LleYxOnTbj23vdY3wV2g%3D%3D&ua=&miniWua=HHnB_dHzfVUDFPH8ZkNuo9KZT%2B5XeTPrK2Rg01BW5IAfil9Ux5riZUF4QNWqQwRbmO2wiIaBUUhsameLnG%2FyTPIpPr2kvf5dXcPw7BB59%2BLzCHq6i6bLyyzR4ABHEAD6jhejJCE69XYGOfaMICm1f9PLEkg%3D%3D&userId=2032723913&umidtoken=2q5LHWlLOrC%2F6jV70O8Ck4GIH74Dic9M&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.3.0&placeId=111111&timestamp=1631284788&sqSv=1.0&sign=3ae0b65dabf1c9f7af58a0aa902f11d5&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3D2q5LHWlLOrC%252F6jV70O8Ck4GIH74Dic9M%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2032723913%26sn%3D6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC%26msv%3D10.0.0%26brand%3DApple%26imei%3D227F80890B767D337CFDD98EC7E2CAFD2E93FCEF%26appVer%3D1.0.3.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210223%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYTtsdxbeZFYDAKRn2sNXOyit%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.3&ustatus=1&umidtoken=2q5LHWlLOrC%2F6jV70O8Ck4GIH74Dic9M&net_env=wifi&placeid=111111&user_id=2032723913&sn=6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC&msv=10.0.0&brand=Apple&imei=227F80890B767D337CFDD98EC7E2CAFD2E93FCEF&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA&statusBarHeight=20.000000&platform=116&ver=210223&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTtsdxbeZFYDAKRn2sNXOyit&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.3 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "100",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2032723913";
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
function jsshare() {
     return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.3.0) WindVane/8.6.1 Shuqi-Lite (iPhone10,1__shuqi__v1.0.3.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=2q5LHWlLOrC%2F6jV70O8Ck4GIH74Dic9M&net_env=wifi&placeid=111111&user_id=2032723913&sn=6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC&msv=10.0.0&brand=Apple&imei=227F80890B767D337CFDD98EC7E2CAFD2E93FCEF&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA&statusBarHeight=20.000000&platform=116&ver=210223&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTtsdxbeZFYDAKRn2sNXOyit&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1880",
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=327&wua=ktgi_42i1ciGgRmntB26ZFzxkUnwCxyzZ%2BbIATr52YtuIMNmYStfHtst0CbyCrYMq5qLuShoTq01ZN7vRs38cPsbivwqvs76W34bESRYVm3kGxXturNHuVY5GXNe%2FZAujNYKyYTAIoxOGR%2FR372qJT6RS1i8Xh1oorI%2FntkCUeN0Dk06HhAW3nVjG%2B81PpoUOKzYapdYQqNp021FwqFNfPHqTj0ERfX8NRhPWyxGQhOc9GmKBX4%2FAWMQqM3484XcfJoEb3ODu53tWDkF%2ByuyIAO86sqdoOvdQ5YBB5pz4g8xx7gQtqJlFwUcrUMEKKDM%2FtKRH8Lx7QNTM8GXYVuEGfHWmBfVRJp7FLcUXHg8JGf2c%2BzEUwmRdS4kl2ixn7mKJYQd81dYNKw16Hl0nL%2BRHhh5aHA%3D%3D&ua=&miniWua=HHnB_GEn4%2Fcl8S%2BkqWUZMboF3N6H%2FfDKi6hOZ2BBRm9CdJzfEtE7LYmIRJ%2FbwI%2BRHRn8XT6x8V0btHpd2ipC3N4pPvRuhKjePk%2FUqyfBGrjqGFm6j%2F4m8A%2FO9aBbMRTfjG%2FXFxrdE9b2Oc%2BGfVlq7oLxmmA%3D%3D&userId=2032723913&umidtoken=2q5LHWlLOrC%2F6jV70O8Ck4GIH74Dic9M&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.3.0&placeId=111111&timestamp=1631284902&sqSv=1.0&sign=8e4629c7aa4a18359a1dbe6f1c8f1f6f&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3D2q5LHWlLOrC%252F6jV70O8Ck4GIH74Dic9M%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2032723913%26sn%3D6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC%26msv%3D10.0.0%26brand%3DApple%26imei%3D227F80890B767D337CFDD98EC7E2CAFD2E93FCEF%26appVer%3D1.0.3.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210223%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYTtsdxbeZFYDAKRn2sNXOyit%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
function jsvideoreward20() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
         const headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/2.00)",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "_public=idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3Dn8hLRnJLOoy3BTV715HY5oC4YhJ%2BaMcb%26placeid%3D111111%26user_id%3D2032723913%26sn%3D6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC%26msv%3D10.0.0%26brand%3DApple%26imei%3D227F80890B767D337CFDD98EC7E2CAFD2E93FCEF%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYTtsdxbeZFYDAKRn2sNXOyit%26sdk%3D14.3&deliveryId=980&key=sq_app_ad&miniWua=HHnB_nq6XKSBcNOE4aozofH6Po3nFmjJJqYsiB/6NVD2%2BEKmZA30naCRYwMFpcV8yB2CGGgEydp1weGPXqDLIsc90gepiTl0qP1sTIPmlKNhkJlVvHr3CcZ7dB1nGIJRL893d0GR%2BJOK6y/nFTeuHYOPwEg%3D%3D&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=FA6F605EB4578AE85985FA62B2F2B2C8&timestamp=1631406982&userId=2032723913&user_id=2032723913&wua=ktgi_Rm6JbRWAtoGJqpznOPyDWXWbYA%2BNVF4lYiRo1UhgTcOoUPMEhpCS%2Bikh8Wy7jOzUUywZwM/CBgH1lUSqaoJXXARTMNLqKfJcfLYR8E6cL8QvUcJFvumHAnGZiQ20ZuKe6UACqkVdFG7x8c6wjn3/kqO/Uqd8QHd6yHiGchEzjtevExGCaMcRuD9H%2BYjy32SIoRZDxNqeqbfFN0YtZVZkSjzZINR2aC4ROISOlnpnlF1oPMrwCTT9BNKLK91fThvx9/apXg022VqlFEIIPaVgvQuj8FjC0qz7aQe4RzI6f1REbXUBxAUcbt94%2B1mZALQn63tOm%2BfiKmiF9Q4crRcVRfv1JavH3oguJK1jTGuNnBpWvUqz5EqGsmzmkaPi3IwY3qkee2m%2Bg2Hcwl8ECiNHrw%3D%3D";
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
                        await jsvideoreward20();
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


//1
function jsread() {
   return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=FypLOQJLOjuy6zV70OlGqZy6L%2Fqc0wPM&net_env=4g&placeid=111111&user_id=2032723913&sn=6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC&msv=10.0.0&brand=Apple&imei=227F80890B767D337CFDD98EC7E2CAFD2E93FCEF&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTtsdxbeZFYDAKRn2sNXOyit&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "737",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "actId=355&miniWua=HHnB_y%2BnEYyDO3noMl3vV1Doly9RkYxnM1sJKj9U8K7CJ6ofIFeejhsIOZRIcxPfHdgNFwAQbAKrmgJeYDvqqcXlurUDfGxuyYeaZgerSCFS2EFRrHHtVbtej3rO%2BWXzQJczp02gaG455003bfFCHL5VxZg%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1631285807&userId=2032723913&wua=ktgi_ynJD4qcN27Iof21tnZJ%2BFI4i41O5J13FYyhVs8m1GbGSDt9ZJ/7BWDD6DYL1m%2Br%2BjDIwXXB7kKj1u1lOnWvz9fwZC7xk5HIEKU21N1ria7U0t5dK//o/Egi9X8cEh0d26V5na41E%2B/sXdGASBt5c97I3s8bR8BlyAuWZKb4dm/gt67VYBmXCQ4lz%2B4ptuUNF9evt54DokYgFMxOVaF%2BwAbxNEamsLBzu6V8EibO9rnA/pP2Bn0zWW%2BuFHT5bHcS19FqrP6NoO%2BusubvSIKMZ%2BwVEpWz1iseVwUhfhV/0FLODHjmxW1Y2Rp8Ci4vnPZp14FW5sksJPDnp/wl6QYQvWILixoZToHqWhDdIEt2xYx4COHV48lGGq1M9y8VkhQBNjs2hCYT37uGspx5PJ%2B8BaQ%3D%3D";
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


//1
function receive() {
     return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone10,1__shuqi__v4.3.6.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.3&utdid=YG%2B52Xxg5lYDAGLrDZD2l9sq&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2032723913&sn=DF018E7E75A621F69E57BDE9F510AAB8DA839FCF&umidtoken=YG%2B52Xxg5lYDAGLrDZD2l9sq&msv=8.0.0&brand=Apple&imei=0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMTgwMTkyOSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTI4MzUyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Zn4j5xIZESQMj78nqPaTiT0LHdjA8acBcu-IUPt3SnuSVa0E2z1O0BcEB41CCn0O4rpSj0nnlol8Fm1mNuPbNA&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1270",
    "Accept-Language": "zh-cn"
};
         const body = "src=&userId=2032723913&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1631284497&sqSv=1.0&sign=d4553b95bb9d15f549fb1247b4571745&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.3%26utdid%3DYG%252B52Xxg5lYDAGLrDZD2l9sq%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2032723913%26sn%3DDF018E7E75A621F69E57BDE9F510AAB8DA839FCF%26umidtoken%3DYG%252B52Xxg5lYDAGLrDZD2l9sq%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMTgwMTkyOSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTI4MzUyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Zn4j5xIZESQMj78nqPaTiT0LHdjA8acBcu-IUPt3SnuSVa0E2z1O0BcEB41CCn0O4rpSj0nnlol8Fm1mNuPbNA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
function timeupload() {
    return new Promise((resolve, reject) => {
         const url = "https://jcollection.shuqireader.com/collection/iosapi/reading/upload";
         const headers = {
    "Cookie": "isg=BJqaNSJOr6iCpyMCLNN3sTgS4US8yx6lt_bRfKQTDC26Fz1RjFu4t3914WWL3JY9; cna=UObCGauxYk0CAX0hoUvvX82/",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "jcollection.shuqireader.com",
    "User-Agent": "shuqireader/4.2.6 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "1462",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "_public=skinId%253D999%2526idfa%253DB69897E1-9858-46B8-9463-4A461DB9CF98%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253D07dLW55LOnME0DV70%252F%252F51sd3FywJseDq%2526user_id%253D2032723913%2526sn%253D3B4AE5B91557DDB8EECFA581A3577E291AA70274%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253DE7378C38E217FA98DA7FB182F94665DC8435F406%2526skinVersionPrefix%253D1%2526appVer%253D4.2.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiRTczNzhDMzhFMjE3RkE5OERBN0ZCMTgyRjk0NjY1REM4NDM1RjQwNiIsInNuIjoiM0I0QUU1QjkxNTU3RERCOEVFQ0ZBNTgxQTM1NzdFMjkxQUE3MDI3NCIsImV4cCI6MTYzMTkyMjg4MiwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTQwNDQ4Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.geuaco-kjbx8ReAiGEvDG3QWTPsfULKQCxn5xIPmE5QGRH4S-HnKmRBtWZRHUx1FWgBXR-UMN4GmyD0kqzDoQg%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D201102%2526mod%253DiPhone8%2526statusBarHeight%253D20.000000%2526skinVersion%253D1%2526wh%253D750x1334%2526soft_id%253D21%2526utdid%253DYTv4Tu4esRIDAEbG6LYJUmVQ%2526utype%253Dvip%2526sdk%253D14.3&key=and_log&readingList=%5B%7B%22startTime%22%3A1631404604%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%228408905%22%2C%22readingLen%22%3A21%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=60FCA562C704A585D4E52332AFD3C941&timestamp=1631404625&user_id=2032723913";
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
  

function jsvideoreward10() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "1721",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "_public=idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98%26ustatus%3D1%26net_env%3D4g%26umidtoken%3DOXNLxI5LOi0hKTV70PfosZTPJLbwWMaW%26placeid%3D111111%26user_id%3D2032723913%26sn%3D6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC%26msv%3D10.0.0%26brand%3DApple%26imei%3D227F80890B767D337CFDD98EC7E2CAFD2E93FCEF%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYTtsdxbeZFYDAKRn2sNXOyit%26sdk%3D14.3&deliveryId=980&key=sq_app_ad&miniWua=HHnB_th4r%2BBA6WLKwaysGoZWvK/CuL5NlQtT0YoTn2HWdQjL0uWQ6xNgRViZUgZPyflT09/Rxj75GIg8TJEdkG4%2BRAvP6OinOiOjrupv4o/xX8ZoPctXVCa/4hTTBIkWnehAAl7f53ckk6AUxC1qULBBWCA%3D%3D&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=F5FF99FD491B33BABFB8F2A9198D425F&timestamp=1631285460&userId=2032723913&user_id=2032723913&wua=ktgi_fUeX47%2BLpqR5TJgRWHdXq98W38ntyP/HHstek3eBzRRvd1DcFkq7EPM/ApaDV%2Bm0nycPxS1GCZcVdF6SPEGdI8eNwemmMKMsN%2BiTJ%2BId59UB2Hd7khT0qP9Vw2JQPz9MFUZGka3O8E1lMu4UHDhGy6CWAyR4AmIKx15G2UcGWz5HTu1tIaBpZjT1wFl1qujFYWMDd1eBnvQ1tlqjE11gR877NKrRm03rGR74%2BZoDnbiQtpJACP%2BpX4ugJwuTeMUaSAZJ/p28pVGma4CY5cGkeWvh/GzVOcwF9gQ6/KJzMYwONRTQ7vvSzcSRT9QymlJgyfh/sDo%2B0jiwUC4g6yXjzM0tizS2L5YX72ocIMtgxaXcWXcAEHXDycGIIy/9XNAL";
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
                        await jsvideoreward10();
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
