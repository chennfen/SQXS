

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
    await dailysign();
    await $.wait(1000);

    for (let i = 0; i < 10; i++) {
        //await vedioreward();
        await $.wait(1000);
        //await vediorewarddraw();
        await $.wait(1000);
        //await drawreward();
    }
    await $.wait(1000);
    await read();
    await $.wait(1000);
    await share();
    await $.wait(1000);
    await receive();
    await $.wait(1000);
    await jsdailysign();
    await $.wait(1000);
    await jsvedioreward20();
    await $.wait(1000);
    //await jsvedioreward10();
    await $.wait(1000);
    await jsshucheng();
    await $.wait(1000);
    await jsshare();
    await $.wait(1000);
    await jsread()
    await $.wait(1000);
    for (let i = 0; i < 10; i++) {
        await vedioreward426();
        await $.wait(1000);
    }
    await $.wait(1000);
    //await read426();

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
function vedioreward426() {
    return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "4940",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "{\"message\":\"2AA1yjsXuGnED5VZflSOVixB5IH2oJ7NPfnorcEKARch7e0ZfGPpdVwP4t6M4pKtNEZEZGuQjH5NmUxNy+tz\\/4Xd\\/z7\\/Xvu0RQnhXEQslZeLx\\/lh4ZB+UoMTs422piwc9gHYs4uWAHUD51AYWk356fz1sCHE\\/BpMTNQxG06TeHVXfTdU8S1Mj4JC8dJhpDhONqNIUOjDg0E+3e7Q3wKDsSA94tZfsHdvmiyE1R4o5HeCvVIr1yGeSTfaT8pwepyNBaw0Kdh6Vj\\/zJpLPrxJyyou\\/7I4VJbiKy85la38WVO362dxJSxfUtg7L4\\/8X5OblUxlM1SP5nDwbsCu13JUYWjqwu4PSqvyMJ26zAFsDQzTEvf8+8I9bufqBP0CiP2wybQXW9\\/LvejdScn67IzqwiBhiJ0dUf4ylFmgVweWy86P0C8LwALvgUQDKfUevZ1ZSQnkmQ3g50XrgGIPRTdgWMDnGxqzoydikMwI+52YgCWOPzx7Mb5jvxri3lc14Bf28BQMlIN56rof5G6Y7JxxCa8FElQkyXLVhVM+JYzCrhqtIpva1EXLvoztZ6atnPe3q8RoUqVm\\/aGySj1VdsrvwZTI4\\/GecTNId9BwpyzOnV0EEoKUrGsQpMr5mj+kPt7MCUrRQPSad9XMH5EkSdqSoKa5lgHnoegLupZ9+QmdMX3uxPF1ohRa5UkyEwJwx\\/NHwQ+LSJlp+XQXzpBiQEhR0YzJHIyIc9HpP1qjpypJIC0eCbMzPnivcbXg5uFEdNGtqncGjp70xcbnDUaHG9ZkPd6V\\/9rVG+qKHS0+u3I\\/dRXwAHtfnxFvnpLWaasUxfH3x+DZ1\\/b1Iqd\\/IXM16U5yxk2p74stACpeZVBMMf57l1K23g024YBvpo2lQhGDy2TPSbS2mAwhKi640loLOYREfSC37yMzfGvwilHlkFZWoRx3P5RZOdEHTON9WGq2GagFl2K1KAP\\/AaxHANxBPn0FyvFz8FVvZgwzqW5uviP+O3ALe9GhSGpr9lj3WMeLfuYCw\\/kuyfOippHTl78yJlh2ocEJG+voyg8TWDEoQ7w+4SFubFdseqXJLeZCtmLzgtFgBWfHppSVck0KfvoMkxff8YqLxB1c1Mw7JlDDUWh9ynLXfBf4BKG6sL3QRxu6CgS3KH0aj5zyuWqtW1UrT0y3mQryNpk6nxdABx0WqbH9xeDWoxSi+A4Pr27t604qr6t\\/iATHCL769UicyAJIVA5e8SGDLeKoK+rrSFT06yeqa1Mxn1o\\/QTOMicCNod++jZ+QUgrTwA6JidfdfVIjxXo91axgdADbbLhnBTcV8ahaJnYKtdIm65b2gax3UchIHSovOI54E6WN5Dhe7ZHtPjHy0rvbqm9z+lVIw9eGElGBaIWWpmkIP0bUckvlNosT4kGHA0UWBdsvrlThTwamo6vQdWcTYLr92zgGIQDo3X0juQ6MekMw1fxYzgBYccWobB0piyoEEEjXIsKZkdIG2omYV4t9p5I9P5txEl7P9NxbH6bdnVGvBFkKYrqnleUNaIEf3zw46dQbXqH3eN6BZZ3R2qtT6C5FD6bBIsOYsyNEF\\/SMRaHASaDJIpGmcaI\\/QvHBHuiTcyJAGleze69yo6xACgW6HZXzyZ5s\\/vgXP9123NKtw2VQS3yJKlmdOc59z\\/2h4cThxUOJYcL34ogvV0VterX2oUfdtDrU1uf1C8Nzg35pug00+HEhKDpRBvNWXFnD4aci3c593oJMtOEKbW4AQcX+Ng+l0sUupUYI3Ei6Zl+781Ef\\/zTu2qgflUIL3X06wUpLWAz4lRn5Z8r3DcOZGuvDs9u3ZI7pAWz3oChjbaLeRKHIJxm5DdnE8A0bsyTx0K7NRsMnTy+F8IVbXCl\\/+343wn7rWzpu6y+Nh4Fet1TKHIfnMes\\/8YHwYhWS9Z8DXxVIGA2\\/pyO98lUZsurliCCQAQPiiwp6D7h+z2F70rq0gyA+7HZSwxQoAfaH7YmaQWRVffN1Vtm2ZRjIk4PXMk8isOTbm0UEOzFNgLGEkDDsCFgGgSLTa3WjnnetuIsvYztweAHD3\\/ULSttrm6QFndxKrrqUSDVUeFlkO4Gd2zmHsohanxE7ZaGMsUt4eiY53c+DCxGiKnOeXAckKaauxl2cKEKhsygklHi0foBc7Tr0CPHYQW0zSdTdOy7UGmIwSLn6lqosj+r4+lw2ZkC1lsyM+J8BWqUqgnS9Qaj6mZrEHorQ4UEWBEfCQV2d\\/fCyaCvbM6L5+DifE4OKH\\/AwsSFeTlIM93Npn6WlXtrZMrtiOlfacUfQz5eTriKmC8CupnP3oQU14eBGl2SSEH1I5UZ15GTWew\\/Y5CplqsqMwK8GkCabjPeAMELp2yx2qEltSBb+F7Y6q3t1naTX1tYMiGqFY6zpxowv5ZFaWK4uBpAnO6V+WWxFs+1znYqa7vHPT4zKL7V+WQXZcBUHz8yrhn3J45s0xIbXzPv83JW9NAipLlpa44eSs++l1ymQzUrbUNG8KK1Rx6f+FYQdUZmrqg+M2d4+rYcG3JVQeMTcyJVg24qA9WwVzJHxUciFaU28yrX\\/cW2Eo8UFuzjHtZQDwbFQH5ku3ZX0mxmAkpvvwVmqTfxaM\\/8mokBc5wV6q92Uc36cIzmaw1+YK8YqluXzCsz29pNwd2XuNMNLKF709mCXCsl+SR4YZGbHYLeuviTX1bUwROSpOYRK8rCyYySDbd390hugS+wuQDUluhqsN62Z9\\/mhRQP5LyzYWiUN3Tr\\/lBLcCI2IuWwu9Ol6w\\/6UXuRFFQNgzhiegDAQRpmL8kctKzsn7Qw7QvDmGLbuZbAGWngrYmDO5KeikavM+NcQZtBQHRQupgruhwy+PnPU\\/GH1QYOwvKqLNJ+yFUabf34IyUpkl9WdAiP55O7SKElx7q8NtUT\\/c4T8QWnUHAA6CJYJ66DjRf\\/aytqbEG7epRbDF9ld+\\/hvdvW0RReRCOfbeNH7KMfz8lGs+GxpZ2uKHi\\/Nv5zsZLknR8C795aO5g4\\/pOdTMaqj6XwzCy0d0ietTELWUZQjqxSQeMd5RYeSmvYlYC8aN+3CaXkUNeUpm6R2YvO1VivI\\/2nq07\\/xwxJkhpfyW1aTfNFx1AkDVDZwGSFjuVBv2W2anMw8w23lXJAmKBdOASaTuukqep90NfNHpntNNpQqnmFYpWkizvzsjE5B8+Bb3BmzzZrTIo4SQWyMeb5HngHghrp1pbJu+d2Ph+3k8M4FwCfOpGnq\\/d0bHuuQKle2cw3EI3dng2YpWt2AxlPPNVLn7N4nw5b8M0scgiQyGNhfHvc\\/qgvy3UIR2GvC2B43FL4G4HOovXUzg62mvAniYOh0GQjwQ0AaqV\\/lXYSwXyM9hWKI3b0OaiKRuG1\\/1IEEbAwN0qbdZnoxptGDEQDKzE+2c2gY8BR7XR6JMhHCtgOIHqJZMW\\/zZ9HgXhUkbjtl5D0mflZZ6GUMVAHBg2JFoL2Wd8uAxj11LuTm\\/dhAMfuMTnSzIL55Tvuop0b0UgYIrG6vKJzG\\/FCp2aHRtuYYqo8LEIF4HUP3orfXCj1tLfaXm\\/h+N4TK8vOn\\/Uuat7ZidA2K7OCiGWkH5KyeOxANvnQm2nsPlKlX7dH0P+YpDwosrKcu+m4U9hYAmakdD\\/egfvhMsLKTjsNbn06f0ccWLJJtnCLuuH7Qs2aoK622RZazqOQMwCvCQTN9Gf\\/e\\/h\\/en2KQazchowVzT9Yag40iuUbjUitEnxXI\\/PBR2dTAhiz6kNV1i4W7eKedqcZJfNyYMV+fXPfOs44nvViKJPBPkXahP8\\/x6Ji8TuTjEOYqwFynS4rv4kAFzKVmOw8Mcsujdx\\/Q4FASLgIZ5uaUmzuuHZYSVEh2zeBPQya9uUsGSnl93KrLsbTkESqL+QABisGlE+u9oHp0gKjGoGt7eqHrzEpa44UMkXuSGnyHNgqmdm31GT5vELjY8pi+UfTKf2yGjKFpZOiuIRmm9iAxKtMngU+V32ij85vF1LsK3eb8SQHffBJdn4bdFiRiYOEYyECsmzjjSvqMV3HUq3CJIVx1ppE8\\/NeLx7aiyQyyy+tq4QS\\/rQF2\\/VSJFL9xk0rAogrHHPUu9XwmvWfMSjY8kSxy+Q63gNs+Q9RVg0kAFs+NaAevMVA975EA\\/CZg8vXOYZoWt9VN8BEVcHCS2+IBiysCzs\\/7XjzRGzFvWKaN1W4KLTWv8zKvOsbCAVeLNhEr7XIlciMXKAj5+\\/GicK2MTiRBJ7RnPVGOF5Z8FNZ616MfrBGBmjIRBxbiAyTdt6vrjuMDfW5RFd8NglwFPaLjBZn\\/qERTLYob41CCqqQzRygyq6ISVZTYnWW8dKbqrL98q5\\/KukeHz\\/N6YjxrqHuy2VCJLEhYwUwJEaH0hcYtIjN7QpDkphijWJlUlEd\\/l6RXcpmazU69ZhGLjVc2XEODGMeuUyNqYGCPgTliV2wGdjq8QU+EwPdPqXc8ibjL1vqnqmnlDXl5D4aw5+MI7BdGYQp1cNvlVJlh+hRgfadPyv4px1xm4BirKRZjyH5J+O\\/gw1p9+WnXgDOb5Kz1ISxZYLPJhAbQJ2SOfMCIYt3dlzrUJmBiqQRwVb2w02XRNOU2x71dC7oRBCPGIB2S5SeIIoz6hum7a0QVSgYx6uZDqagx2XRy8tFofRwOgariewYQJtgSVOpoxifvu5PGUY2GXbrDwZja95cX4guLw9VWY5UPkUet4Mct3Dj28rHqw7T7k8t5wRoLuCyKQmBJyoNDUU5FdTfiaKf62\\/CMeTCMcR3nvdW6I4\\/MsApvMeTwjpOYFWeZUiI0Z7oNaF7rbjvMkLzScKWBN0Wlg6znJT9X8OIh2PRyBhpViDUb6PDg==\",\"cypher\":2}";
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
function read426() {
   return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
         const headers = {
    "Cookie": "isg=BIiIdVi1fZAXH5BAS_UEXXISU_KaMew76SyDikI55IO5HSOH6kHgyo5fkXNtNqQT; cna=L3SnGUcRg30CAXL+AL9gnRyj",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.2.6 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "1838",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "_public=skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DYG%2B52Xxg5lYDAGLrDZD2l9sq%26user_id%3D2032723913%26sn%3DDF018E7E75A621F69E57BDE9F510AAB8DA839FCF%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D0A3F122D956A2BDCA11CCBBFCAEDABDBDFFAB0F9%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiMEEzRjEyMkQ5NTZBMkJEQ0ExMUNDQkJGQ0FFREFCREJERkZBQjBGOSIsInNuIjoiREYwMThFN0U3NUE2MjFGNjlFNTdCREU5RjUxMEFBQjhEQTgzOUZDRiIsImV4cCI6MTYzMTgwMTkyOSwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTI4MzUyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Zn4j5xIZESQMj78nqPaTiT0LHdjA8acBcu-IUPt3SnuSVa0E2z1O0BcEB41CCn0O4rpSj0nnlol8Fm1mNuPbNA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYG%2B52Xxg5lYDAGLrDZD2l9sq%26utype%3Dvip%26sdk%3D14.3&deliveryId=531&key=sq_app_ad&miniWua=HHnB_XFvUyD75CMp0UX500uK7w27m3JGTJ5GvhHOX46GAJ5vMlMJDjOfqy4ftoH/fRDhkS7SgNdzJKX1KCwXNygLZF0Z5tGjJhzHNQAzTiO85ZODUg%2BNrGvPZiPUt%2BuPCdiKlZ/EeMngKhGHiGXD/INWYiQ%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=98B2C6BA8AD908EA06E977EF2D6A70AF&timestamp=1631283649&userId=2032723913&wua=HIVW_F2CW5frcURffZrgy1KjuKvx38f94rq/kmOTmDVWRtEQ1Ewy5xSErzrblM87ku/sfWVdrZCBvuxo77VXqZKrN7dJvOvoWsNDZ0Nt/H4KwroY/e34IJiXGb0Pd5I44tjQtku83AheXKUL/WHxd3gXDWEShv6Wuwh2xKwXQm/BlhlQjm%2BYmOjr0gmFyQs67ipFoeZjINFLemDNKGPGUYeDb6OCsAb5bXt7S7pS1lcw3FSP86cp/vPBoKCq8A7kfCnRpH0gVo/8uJ4d%2BgmGwwo8Xwqe4P6E342p1Ks0CHTTEHg0PjLgBrIMTOhU4SLb4LRX2pCv3rCIWOL70khx/M8fbyGpJAvVKtVzMIaTijJj2IFLERPf6ViCH7HFMILPsbhUDMFLZbVGy%2BuekqPYn1SHvyw%3D%3D";
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
                        await read426();
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
function jsvedioreward20() {
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
                        await jsvedioreward20();
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












function read() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BDIyVn-9h1VRsrtp7nV3yEDjiXwUwzZdhviC__wLa-Xtj_aJ5FO0byale60z5K71; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A/p%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzMDkxMCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMjUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.XflxZv-XcfSRCM8xOPe9cTov51UPtAsEGN8uNnu59Gl-GykDa9PiD6hLSmBft0gUKXmJZ-jUuql5wFtceuB8zw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=707&key=sq_app_ad&miniWua=HHnB_U3vcrUclZBGI8xgdUJ8toyc%2Bcu3V7L6584b4LJIqAo9rKD4xOidudtaDEkcZkA34sDtTnXBwQcsP06dfIT%2BwJny1aqZ4O0U9X4YOywUGltpZN1pnlmCAZT/aayksQ%2BsR&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D68E7080F23E0123C177D2F090C22836&timestamp=1629014445&userId=2916901745&wua=HIVW_5GYaKaLjxLSXInwlxv92LU3UYSySyk5Zb1vIqiSKppZ3k/5ybmHegQJtI6SFnGMca6CRW8KEDuZTBpJG3oWo9wQTHmeBIvTt1/3VesMgxwl/6ump9ia7jvKwqSpZjY7Hq5JON%2Bzk/QhpAfitngKoSxhPKHLDAzpbRZTU06Vs7egZTirraGpMjB9685eeUXqfQt%2BAo%2BaRqFym8u40CdVOPOALEMLGQGGCmQFS9VolpMGFfhS4Iw4vELFzXblrumStKtxJZPnJw7EJ7px/sw9POkjSsxGRc2IEwjcocqaYJ2ueMxvhZzim/Cvk8v2wOFKbIewXvqnvtCG/mnPdf8grdg%3D%3D";
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


function timeupload() {
    return new Promise((resolve, reject) => {
        const url = "https://jcollection.shuqireader.com/collection/iosapi/reading/upload";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BBgYkueLzeNc6OFnwPftXvbB40KqAXyLn_CVz1IJV9MG7Y7X-hHiGkGHIaNdZjRj; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "jcollection.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%253D999%2526idfa%253D00000000-0000-0000-0000-000000000000%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%2526user_id%253D2916901745%2526sn%253D9FFC2945934B0127160C769D23FE8D9606CB0FAE%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%2526skinVersionPrefix%253D1%2526appVer%253D4.3.0.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzNDc2MiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxNjM2Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.pQFbLw8WrDYjlNnOeO7kfBHqW7-LZyZjZ-Mwk03SWaYrfQ2QspcF26DKI4wsmDChqyHv3SJ_GxVlhObZu1Yvsw%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210107%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1125x2436%2526soft_id%253D21%2526utdid%253DXblVsgqHUiwDAN7BcQnm2A%252Fp%2526utype%253Dvip%2526sdk%253D14.6&key=and_log&readingList=%5B%7B%22startTime%22%3A1629016791%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227370011%22%2C%22readChapterId%22%3A938736%2C%22readingLen%22%3A6%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=67E3DB2C6F946BEF9D018989F4B3AEFC&timestamp=1629016797&user_id=2916901745";
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


function jsvedioreward10() {
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
                        await jsvedioreward10();
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


function vedioreward() {
    return new Promise((resolve, reject) => {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Host": "api-access.pangolin-sdk-toutiao.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "{\"message\":\"2bZ0lmlRrgswoqrpFX8+qvvWu17D6dWpIFEX7YtXJisqA150Egopda2XXQVncsOSMLJuFHweuapowARas3uqNdTHBf9p\\/wY7SDVMuIt\\/ibqIfGEXdiwKrOVGXMaUmYP7asVr2KRka6rHevJfHtObxu2JRWFpMcSiLeKipFPq\\/0ENg6SgcILzH7uXBIwv3EVucv\\/kPciEmOvQc4Jk58XoUlWqz6my2IsdkJeQDeXlfU\\/naD6QUBf6\\/YmWNiMvJOodnIkdHKKTFHF783H1448Rag3IRvxbCQ2FVxxRCNNnf\\/lXMZPNAwuU0d6QJG3yu1D22gy6bnS3goSbvtqKuZVbHXkhEFiCHrgPFRh3f92T5qP5Lw2xXXGZLiAAVoogQvYYWUClZgRPTA0xfsX+SK3ULuwsRhPBb\\/eVVHnWOKCg++2p6E\\/8Q3FoAf1u\\/B1T7oKoR2VkQ+7sfgk4F8K3Xg0rduP6l1xa4f8+I5mL\\/QaVdBvHm4a9XpBPJLSWWDFxckoSKcvoSPACPAEOVqu1LVVCtX1LIiJ4cXQgL3r1S1cYEs6byXJvemToe3GDfVoG4DzNMPwPNloHXFtv8vcC+6kFwq+vraY4eX5gzODHuDQ9V2gu26jK9XWGSsXXPw5R3tXdXg9o\\/jp+WUTDRGvFMy2GKMqaNZp5wXdHuSOyJFNUtBB0TPKwRAZUeZ097uHntKRPz4Ehb6P\\/JGNCvMDas5qZtMC6hSHQZj6jQris16eHLbYtwsgkK1sPF53WKZ6VJdYrhZj9N\\/4n+IBbOZOumbA9CvOJJXQ2KeflbsUm3lOOjl+Ua9\\/9Vdn5f2Rh0MTsDI94hQ7dWsqyIjE2rbkUvPsgWNc4qYhFUgaO7tnZ6EzGJfRyw8AASE5AuGcONjCeoq5nkso2d5xDGfOQKVZz3s1xYiF7LsNoRsyLKXrQnBvdKloAfX5V\\/Gvz26IBlSBeyNnE8dQtT0N03X2qjzEOCgCDGyiibV\\/DGjcer6T\\/G6XdWaUrnG+zBs+PYiQ1\\/6On4K0yFkYsEqj53WmX6ar5N6ihrxg76nU08sjrnfOi6GCUHOBNqONJzqOifPWgn83zpxkVtPPFfcVrZdQfgY2bP+lA+tlrBcNSY2IEEVFx8nqH0HzTXmkw+s+cw9Wi85TZ\\/qP6n0TvF8sjuZ4cogVJuOJcNvqDyNYbo9LOpXDoHRslUNRZCY7yn5QQ1csArZNLqqsuTjCYGqVNLNWoqH8yxCeof4a3kLn6Axn06rDEYavoqnznd\\/NIE8ESe89RP+M4+mwwbkPbt5E9+wV1ZOfwb6iAUKH+c4yPzaHVwqbPoQwDpKWOTcOyuW2MN1EfXCdW4ws9ejdPmnFEgX\\/e1HcLIpiGRWlGmpQmYbfoWgyu\\/uo5U0AN2xxPXV4X09FSLwIdaUfsf8pHMENZpt9c11V95xiBKRaT8+W1gfbFu7ERRIWaD8sJOx3k59oXUvQ2tl+pZ5P6p5SaJhj9GTM7+dNV7PR1eHF4PE3qXlyi15K+gZiX8p2YnNYwgRO\\/xpaEyPsUAEXiH\\/i2MmYZyCZGUtqSr\\/bJQPHZTFCJ3CfbucOGBdSc09rSRyH5TnVzZz0\\/IDptEigYf+nFGrbk0FVlbpGE93Ie2TFkCxARMjVsZdxpdNhiIqmVAJiDTW5v0wpmRd66sYbrMbEdj28rUGsF\\/cTRNFPDPQ\\/2WRyIeYP1mWubUFGwh1zXCwuI1GkQRfj5r80l6Fga\\/1yNFBGVijc7XbPK9dsyyYbQXFl3VA9Q9Xadic\\/9lIKfbJ796ZbYIW0htwjFPIHcRzoMBNmKMLknqYuf1qT1UtIjSzCqAMyCpQ87Hapz9Nk9QiG+X2y7gYmmMRTeEwQo2RjHphtQiImao4wzWMx2MeX7pyw928O1P6V8ta7c9TQUBKUTuo2kENJ0cxOJxl8ZwKmNDs7VByj4Ynhb7+nhvGrykCAkLOhqhhyBXWe+zj8XZF+f1IKRJe\\/y+oo9uU1qtN5a4WYBcHNaTHPbYP6yE4+NbroeL2r5uI5YRhY3+7Y4tMWT82knjFRckh895hLJevl6jYk\\/aruquUAz94E0mTQi1K1XaUE1fVgpSoRu54FW2AlFeHBniS39CwBCE5pnk2JgsUZErJxlixetQ7AUQ6\\/90aDEpV4s8fnjHhslE3IsuLdpV6ya5lluAwm8euJ085tPsTs8uO9WS5FlbSQh9Rk6NiS\\/cM+\\/uH\\/YOt0B2yMo7lgceK4zlXPGlRCVpfnyB1KjbVbET1WY8DGrCngtgdFeiim6ggbgdIVgE2WYnzfzZ747etd+\\/vAnX3t8+xDWmF9ZYwkadTDDSAGiPrryJDt+cS5B1afOxWXNBMVHAvq6cIMk81ZuIMJK88x39vIRM6YvBb5reCrvTw8iuKBo31v44tOXMRSHBqDJgLDuZDkTuqGC75nIrakKjD27B\\/Nq8HVv3UBkVdWmnOy6tLrfypNC1cMTIW84bijRdzjDWeAsdHBMFn\\/QHY8BYcIoEsqd8Wu0y3IL7qDoHbXK1CvvfXeJDLYRwaAyyk4VTiArbeGyPTAkZz0hRK8fMv\\/Bg7AUm2i557VbhRTrgFI1KUHVEP9C+aZbHOObEG+A\\/wf+G3CRnXwNSazROKEjnhD3PP7xWAWTRqEMZc76GZ6YEy3aat34j\\/85SlTh3h4JPsh\\/0uQp59IcO5tdhfZ5ZapMx1ZYScQw4f9LdztN4WEiXkEdYUOce2Q56MrEeP\\/NptOWyne0uzDR7qqx1B0Ndr0te\\/CnzaBSEx0p+DQNsusTkQZ1CadpRo5ZPD5ZCLb\\/\\/gg5BaJj1ndTcqaNUzp9mL6Xate0lbHbMYjPlJX4btnZ8VPSS3ditz3q1Xt5c20gne7piSyxv7p8rc\\/mmSjQjvEpOeZEXkwPa9ZdSdr2xZ94YAY9BTt9mT\\/ypXWub7s32SXfFe5ffLC\\/7PI6N7JCtjjUvpGdfQRuJlbs\\/kjT\\/jb+TksfAQPgSjNtRDgy+g\\/Ue7AhVAiEVITDEFnGfi10HfeXZ8T0Y982nUqiJSe\\/+R\\/x8YvmFs+OZY+6yKyNGzoOZN83sI\\/aFrnr1hcZPwWIWAka0+i8b37l66LLNsV+GvQ1mHZY5wAsJASiCqIJCfCSC39bhXU6S8dU9U1O2w9rYJ13QOsQ5ZyYTYv6EqooiT4Rh7sya92WCpmeqjgvA+gsW32uBanc\\/M\\/o+jJSoQ5ZbBL7ONNUs28n\\/eKC4dZ4KiNaX0IOHDX7yuV06zYbXgyoBhQFm+uAy7UJ78EjC8ZkWtFwVZVucwB0rxdWngOv81IydobWI+5\\/dWR1pLByzaCPqnmnHX4bRFYIlvC4cqjN20kfVxUzwTRQ+4BZlDu6lO4JX6E96koqJi5osOFBKjNTZMHzluP\\/FafRSC7IsGwXzGM9wx7TX\\/1j+Q\\/kkPLm1ul20grTdNr5mfXfQieN428urwW2Z5ExjnAUDVshd0uxIHaie2lLM\\/tMEpup16pWPKeo9Kn5eHsp+cGQouwz99m1IaqJywnLChpBELX\\/oZGVC0Ogrq68iO77qaYKqv4effHBd7LzSceJ715lEwJI7bFpMHOg5D4S6xaHGMD3I8BeHXw3WRcSy1NscrB46r6VSTV7rzIKj6Gm9IM9fng56eYiQdSVouXehoHoXAn9fnutY2eJi9QpCrmiAqV7TTO9nl\\/LI9U64MW2xJevyyUyGQr\\/adXQpeYVgccQ5V91tubiyND5kl8gzMpvj2gUdVwID48QFYnpP+\\/Je5uO1zrSnwJBp1U6Oc8E8Acc9ZzqxKyiNxGXLLcWJBFb4qA0Npmel4QMxjTmMXE2z9ooTKdZ8KfUuGUFL0nrv7O3JJ522ohLViLTO+EtAnuyv3EwbBStTdDg07JzG6Q6D8IO14D+QyZh31tjwTncLpzJBqcuYBZxqlqQ0h1UIcThng3Xt4+lc1PYU2Aq6xJFV4APwoyQECuxiyVOFUs8xpAJOqw43Vf6TcUk4F1eB8Tmz8XwfD10Y9hGeaVToKwsht+oAw0vc4lvzVZt2wPVhhejK\\/2DYn0H41\\/TVfgzgU56IeOKrFMgVHqisSnxjgX1sKqBeYAr5AwyDtNx5dAT52HUBWdYEtJaM+RiGvsLaaOQR9ng+uIDC26YDplw\\/63jK81+ptSBJyU4b1J1kdzrzrY5TEoe0SGjgZUeKOIUHDDDxA66+Lt67FfpuBPHhF\\/8XvvpsvraBIkua2OV8\\/XNk+is6f5nFr0e4Ug2Wwms5yjLLxMUdcJXnnw0yd8qujsDrbzQB3zH0advwd02VbALQSI935eoyLOYrYHJMzLyGGFLM9LtERcBsGaSTHVluaxTpb8UWVnAoy1d1nAqBbJUL4ZDmbaIrgVLgY1r14ZQoeioKL2ZJzxWbIcOzEhaxK3eZv0OIPGAFzOaFg1oDoe8UhQAU83oIBzSKsN7kmt+KnazgMypng3HT+ZcJy+jDhBBDsqinXg+V3h5pSQsoyaBPj0QqaHG8IzfHvY\\/SozZSeWMkLd7gEF6zgDiVtaYPO1BMiXOQGivcwduO2tK0DYqOU72gQ+enF+PzmzHrmFx8\\/YXI9J7Q8G3zfn3A6Y2w4+ululr8i1qvrsHw6NBEucUnFHDSnA+zyO98aBE5ye6XfxMRXTt99cvh04uMPrw7\\/awl4bL25WY1eIdcp60xuaH+wiocnWBlyGz9P4AeWQQ81vwalbkz5gBrz7P7U\\/+kRJvnewHJIaDPs9wnGw==\",\"cypher\":2}";
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



function vediorewarddraw() {
    return new Promise((resolve, reject) => {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Host": "api-access.pangolin-sdk-toutiao.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "{\"message\":\"2uv3ebdXXFKiXnKva+iBawMt9UGGPhtQXpTxGzK+eJnpoQQ4cFravHWNzOgEvzytd+2IMQ8iFF2wmXIO2nrV6LolWNuMy54XR6URewzOnJj\\/11NDMrjsGIe3whrVRmFxQk5TbP9\\/6LukXB9+KchHKr6xvN\\/xBh0aiH8gg30x4VIP87tsviZozre1WwXZRof1fzUnoQQv40SKDMUKFWTyNF3sUAZtJiUReeyHnL3UorwInJF9J19qnFoyytyh0mPnV5VnC4QJ+AzXLRG3mClKgy0d\\/pJPGys7etkNxMwJ\\/VGgAxF\\/SrRmZqexVXc2lQEyF+5cf+iwsqy1Wa4cf1mheIGzCoqoTwWjuXYYKGmCPsxqPqssFuhxQhTrqMuvrQcmuVUCBV3r2BWPS9tdccnJBhg+RirbqJkZkDEVpPh606Xe4EQXHBKFSb7XeE2Rd9U0qFM\\/qL+T2pW3ZT9U+uYcIEdawbeHs9WNQSyegCmV5v5pS\\/aF9+yJfiKrOIXv5u5XLW5IK5\\/Ep+2aPIy99t66Uskp1cvPcns5spYOISWQsg1Mpe8A1C2oPuu16d15zEKv6L6oR+j+ePhoji9VfMWkxLh4Ez1+N6U4miC66dZxM94iYf5jUJX6JRPFIAaOxV\\/YffJdZr1pkdPj\\/zDqJPQ+eh+gzctfUeIAzgHaeB43ndVs8ykPIZV5VxM8+s7bYguSnSQgzVUtyd0YKuhXLJsxHWU2boOGI3DZqHE4kdvFbi2jtEvKyvkrXryAKcVEhVRZr0CyfPcdKd4pZRZNXCDJBqcZV03KCj0LPKxknh5zW21xj7peOqHSeeOacz69izYDy37EuozWstv0cc1v7LHRwwqGeAg5W8VO+LZoMC+CB3zM22uAQ3QDql90\\/Ovpf1PR+W28YTu5lPs5hqzq8FdtXkj1wVN8nlGmrVfxxu82uvd+VJ6zRfjJ+D4HdElJPnvRhVw5jRsUM4E\\/wOWTWkTfWf5A5KXcQYgs5Mo3Ch5YkhaN2t+5Rf+E0l6fgIqhc89frE2TA7Tnxq3CuraPwbFuD3tDI91rm2yAP4s1EIBi4CANcLXd5qYN4ymxHLb8vEDWxO2GLPjmMyAHP0er9lhnL8lWwoYd4gQ2kTaexSedTW0z7vz6ue5Wz4SDgVB6lpfRQr2pdb1Ks9nx6JK1rus+a5CykI7fQu4tfyeTQSDk5YYlWHTutZO+JB1h8UoUznpM2vC9CQrgXAyFYcSfDNGItylg3wa7a9W5yX\\/kUaZLDXKLJJYdl43NnV2Et+kTwsz75vAQLOn+u88xAS4W6PMUXycF2j69rtwWkHtMwUodvaZb5qrlFBz2is2k00g1wwtbeOfUiDkGlqwtY+Bkp44IOWNRD8kBAGA2diDNI6IZGV6k2oPbzvJpqWf7yjXW5a59w1MPM7zCPuCzJfbZHzf\\/tskqgYGr1DsVpMg\\/tBech2YyB+yULCUfdnIF3khjHgbUuefwiXRcNvZdBCb4WeKcNR\\/fj6mtmJAUToYPpEsPrKoqCBH2kBJeouVO0w0Z30nLFfH4rFAZLpVr48dsfSo07Vdfn2jdPxsXrjo6d8PMBmoirfqWPN3LW2tXM36WWYwMRVRqsv4juh\\/zftxkRD5UlyU2nymGwpyVyTmnSiyHEsgR7deDdYWvg5cm9Q1ovEMbj3NQbebkZvbR+xTAqGsndUIGzAy9MzYkOfSifMqIS4W4acsFitL9qUmHtAfqxURbyTiFsRnBK0KNtQzuvM7rFzds6bgmOccRSLRON7LCY7+Yb8MX2rfYvAaW244wWRCcb79gzzSdghvTQksK1Sx+8tA3FTUkugHC\\/kAxq4EHa3aDMqxgh2bb\\/N\\/qQ1x4f6sf3vr2Rius\\/zFqjqjP1Hxlc6AJ8ts3X+4jqDfUgWv2o3KycSYT7qzucoCLiKNbAxusCCmAt6fDM8mWdseGaZHQvgkGSIhTduhipWaKP0ef6MVzXJif61eTAO3yeZs+qtUsktFo+QAjdym3OdRZUphJVDhjbc2fiyEUglS9Eua6MGLWAk3vn2Hvv4hdLrAx0MuRef7L7CxWLszyVxHIQVrE0Mej+To6MiEer2Lf5sTM1Gq6KON2jeFcrqqB\\/pu\\/jw2\\/QaGW\\/Kn3pstYEWIiAZR1bg\\/TRo121juadjuoFxQfnZnwE13J8ljyIzhPDlVy65vkDPcc6XS7OnNknd\\/9HvLTiJpRtZWbs7HHzaviWkQtl+ZzmIUv5Fr3Cu3KIFbDNgSVX6Zwai94PfE2ePApeCerLPVmX8OwFE58uV5oEPghT9fB8UzEJRsV4dD2OR26wDU5nKE064CLTDEZRkWq+Om+WkJ\\/gunfZmx+ffndV0ZEyz7ONWMcG1TVJovtTnc88GOjL2z+ZO2RKcq1FDhkk160nCM\\/Py\\/WaPzmcbW0YRlVlkywQmn4ZbZ8yYYXJll1+Rv4FYlrZMPzPoj0kvMOUo5zpR6ieKIKa5yo+g4r8g70H2NCBbtaA8TocSbhwNwYjG\\/\\/aVGN9avSHh9YzVgxAlG8qfbEDsX9VAetYU+awuXtLxvFf2J6VbzpvhumFi4PRSGqmZ4gqw2L+zc39rVtiNwm2CpdHlf\\/M1BIXYtVPpuwjP0TotpiLMfoIctMOBef\\/sZtXUTmKnGEB4nJJUIKkJR6hVCIqELwl8yk9O\\/Pml0G\\/HhqskNngq0qKhDeGRAmW5jNTF6GbrpOxwSUYv\\/30zZWUi\\/GxdsZqPmXOSfzfoiuWmzhkbT7iplLsSWoT\\/sLFVZQKR\\/5WkprQ6b1hWNAYGFb2gqAezRzONxq644kiascMIbCIwjvCEMXSw9Q2UM7pmjJCm50Zs6u1ryPjcPVBN74qvtTpXjNiA6c1WI8\\/QO3y\\/VjCd29d8mSbQpn\\/AgbDL7GeerOK\\/FphOvbVbnhfCiI1k3Fesw3N091uolh\\/khzP\\/sHlHTykDI7co\\/UW6z+3A7H1+RproggNhJzdpmGXxrdFgPCz61iDG3N7tJPEQ\\/NHoCFiL9TEWT\\/mWS7GKsnauqCMYdMRMqockwYZ4rbdEycVBdKs5PVX06iaVikWnvs3\\/bod+38NjmhE83AjgXabyebslIx8pvb6uqCO3M26WaJhd3XBnG0V04v9aknFY1mZ0JD9649bLceRLHVxlaWlT\\/C\\/UC1oU8ATcRI6Vsz3pezyEELWgPl9rkixWVsaoTFaCnZi7KdkR9FqN5vfn0BNJbkzzH30EK6gfzfsnFIcJrRxWF9SEaJp28Ek+WngUtVpHJk6x6oHkVma1\\/myjSluzZTyPbIBeUiTJRoJqTlQ7BIjICCj4ilg2pGiZAzOIJ9\\/sN6M96lVcJu4huPPeSvCvYW8SEvqlE2mDfYAc5eUeJ+3HdZqmKDwKjZYNYpum3GSR272KZKs9IXMUqGN+LH3GlIOoFh9feA88\\/Nlj1BM25gEY8iO9fvfNmy4ZZqPFEfeN1Lowfd+Gph3yemiCO3PAA5+9PYir7Bn9KQ5afgXQA9qCrmxETLMd0+vKOrc3lPfFC7SsUXdFhHjjE1cfvzbbOGbvE7z8NxjPpU4RhHGuEzGoMwdHMl6aSRzZn2EpA4IgIIGT0DtMO9rITJW+VooeqdcJal+YhTBoFX\\/ZqGLSt5nRw86qqWCDOq3+fT8y5m3rLbXtNllG8X81BXvhm35MxPQ6WM3h4RrJgFWmCN7NXKYzcnN2LmANlDh17vFuzMlqxnW65WeTQ++YEgOas5ihzo9gKJo7PWm2ORbCjoIi6HYgThiYIkH\\/A+DJUp0Ti+iSptH8FLwiHsHXHGWu4AwQl1w1SAcdHLyUyC235m6e1roXY4bAvsfss9MRvaPoEvoRME1P+djGe4aD\\/FgG7CjJ3RvaQx2aVqnOLcVxn9ffOkleS4motnEhZvaxdCtRdQZ0f3HS6DfEzFP79t\\/eQOPTXZHlZAnNlRrqusCF1ztWQ0zBhXweeqP6Tp\\/5VmvsD8ocshJmf26iU9uk+fPZ4wTYT8Z3bPnX3b4iCbpU8kiNALU3rI9E3RFwPT+5Mf+KLgnaceppS6\\/imDhh\\/4SuiPrx+e2cwZQuRn5Roh3VOtLxwhkIeVgoqXagp9Nld+Dc3vxXtIE6U2JY+5vIVvr7iMVrww0vLG1iLUN7Hk2pT8Gh3hW65\\/t6E8nziTRz5VeZj+xpYtI6\\/\\/0Q+AKnypdryJyLzQjfZCanGECqyf3hcVHm37qBR+KZESDYVjppUgFz8oD4Fe7YMfz4N4O18BcUt31+W5sPpKQw9b+k9dhxVGx\\/EyUmt5LY4k607DAAhuKRZCJ8pJW48bDfh6sMmydolsLP+NkUsZph\\/wTWLJJM+AiX5QaXvtL6jlyO4O4DItAch0FCZHkJDkDGOuP3bbIEdvyvROSYngghMN0kThmGVZzCwfFOg5E9pJe8HaX\\/yOgw1w4FdgRmQ3r54dzb\\/biFK\\/JiH0hZa1lM18KDmN85ne+FTueqIGe+iCturmvJL9WfkcY2WZ\\/GoDsrzPEeBaEkc906ybpZDpltjUGrwUs+6zkedWNM4LOJAaBdsBCOrvt9Rq2b\\/MVI9koh+dSynhCdzIkYVL8LhbpGrvKwcEeZrANGYg8XqTSSIDdGtlKRalRrzAySs3S8b77KyawH+baH64eLYghWYJDFX8R6SwQaP9e\",\"cypher\":2}";
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



function drawreward() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Leto(JSBridgeVersion/3.0) AliApp(shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_29) WK",
            "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.8.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&mod=iPhoneXS&ver=210802&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=44.000000&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Accept-Language": "zh-cn"
        };
        const body = "wua=HIVW_TB8cyKJuhWjB2xlQurypI5kuvo%2F9AD711q3jpJQCWsJNv4fq7zpFB1wtzj5oyVV06fN7qncBgRyAiZ%2Bq34MNU1q2hO6Ybas%2BaH9laokU2sLg6itc9c%2BB642cbshDYUOQTvv1JosGC2scvgd0Q30DR3N3ZvTRx2M9AbfWcTGz%2Fa6BNhLrDakmYc%2FleyEDs838jt1OCA3PNoJJvfgt9tYlmu94wFjuoKdwAzIGlJU7ksaPbA%2Fyz7BLv%2FLxJS5pikvxr0Q4qrGqJFD85O3XCnupN0D1%2BE54zVXC%2Fgg6Pe5bIQs%3D&ua=&userId=2916901745&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629011857&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b3243867382bdca486cef64931b847b8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%252Bz6if%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
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
