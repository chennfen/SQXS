

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
    //await share();

    await $.wait(1000);
    await jsdailysign();

    await $.wait(1000);
    await jsshucheng();

    await $.wait(1000);
    //await jsshare();

    await $.wait(1000);
    await jsread()

    await $.wait(1000);
    //await receive();



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
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page/?serviceWorkerOn=1&hideNavBar=1&from=ShuqiTab&upf=20363&sdk=14.3&utdid=YTv4Tu4esRIDAEbG6LYJUmVQ&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2032723913&sn=3B4AE5B91557DDB8EECFA581A3577E291AA70274&umidtoken=yeBLR9RLOi%2FLQjV8PjuH0vyo5IHglNDl&msv=8.0.0&brand=Apple&imei=E7378C38E217FA98DA7FB182F94665DC8435F406&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiRTczNzhDMzhFMjE3RkE5OERBN0ZCMTgyRjk0NjY1REM4NDM1RjQwNiIsInNuIjoiM0I0QUU1QjkxNTU3RERCOEVFQ0ZBNTgxQTM1NzdFMjkxQUE3MDI3NCIsImV4cCI6MTYzMjMyNDMwNiwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTgwNTkwNiwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rkhLQlZ-Jo7VAte1QeV4Y5xmNKCxeHefaGDuX23b3c__dp2Sbc9MdrJWgYDQXuTEC7r1NRYLsSMHjDM2_TX_sw&skinColor=23B383&platform=iOS&ver=201102&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "3792",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633142755&position=501&userId=2032723913&signInType=1&wua=HIVW_9RCdPYKEguUFj53xITgqgcWgrMlGofE38XPmbDQyT%2FssZUNp95dR5603LFcFKpG9HPU0NLMHA7UU5CjoKbgZlPBPOK75txqRusCevPwH%2BTiDceQXz4oKxDWd8ji5%2F62B4EGLP%2BUgq2aKLjZyhZkV%2BaRmhOyKSXXsAud7hGnA8REL5dkc%2BwY3zqfu43GoWVfkPsIsiHIHRa%2BrlrFw0wEefabwNng%2BUcTxP%2F2H%2F11zCCGxGnvN5xglZyv%2Bi%2BVChY2IoD4bKNJ6T%2Ba5mU5qtIO76XG4%2Bv2Hl2uzc50j2VxqHT9UhSiFojgmdEDBls0zMI9NLV24FWGhtta%2FliMG%2BAfhjkBrqSnW8HEJSxoGIz3tbDChJi3fWzTKpFkm71DBcA%2FM&ua=140%23AMzdrX7pzzWcxQo2%2BixQKtN8s7aGVDPZrv6AwRA5zhH09ghzm7vVGffqk1nMX7ej4QyVlp1zz%2FihKBnFMFrxdKYr73h%2Fzzrb22U3lp1xzBT0V2EqlaOz2PD%2BVounUuI0MI2y7yDY5anrHRqjELrEkgNfA%2FQiOhM%2BWmdinbWBRuHQI3M3meop4MxaTKNtyRO8%2Ftcbelo3DLoVu%2F6BxsGbalS932Hfm3K4jIeDaBkX2lTWmZJ5E%2F%2BpD%2BJmMu15yLHga4BRV1Z2QvtLOMsdUyBrgavabklvRX9velUkFx6EyAOEcidj9dp6c3XppUcC8OIoXI39suhfYedEbH9csDRTFygJKJs3itwtN%2B1oAT5FZZtbjHoG6OBRJMpBryOLhAg2A4RyHcCHQ3f%2F8MxRa7xadHhU%2Bm%2BdXZXh9O63050QVkqvKo5ZfvjpTw5pUMdmsn810q8QyloOmwse%2BikmOJeop5hLrCVj8WCERqEwUH0NZMkwvGv%2F%2BM%2Bmz0tDEvLLkFKls66UyLYtYvGhGf2bhVSrukEHNJ7UYiq5uNRCV5w%2FkEKRlqsaQ9GKb6GDRHuBp8DABtsXMLaxEQukQ%2FHCBjKDDisV8kKW3ZKJMtg4H3%2F6HuhdMWxw%2FbNci10DbWhLSxzMJE7jZeBF%2Fa60OB4C%2FOXQZM5XDlVA1LKubnjI9QaNnIEmquMldtiwy3mpkVq6Mp75%2Bp8kCWXO4Sf4%2BABc4znXoXlAD3g%2FK9cgDDx%2F%2Be071a%2BAsNgprxmP4LMttjePvtxVTBaJOhXlPHOTlnpm4Rl%2Fdt0mtVBejSXzPmv95kHjkibESR4PKJQmUdmBmkykwb5XAR69zjElXTX78D5Nw78zgPtXk7CTgoVbFmXVnTNu3trLTC%2FDD2ITSc7xZlMfj97bnQeHOBBFozU9cCjORZ8It0WCXalGMzzU%2BXJ2TK9VDepyDjCm45NzmWQzzD1e%2FwVLPdjF1Ms9EDqtz199NPOpEruKxtYbnEyKnnTAHCssk6Fm4mwKaKlxFWHLQsGFu0ypEPY0lvaQkgrv400HNTAYd4PVHH93D0tDdgx%2FfRJx%2FOKHUeews16W3llZjYYJqFkKbLkZvGP%2BoxSZh7YYgkMn8WVzD06SpyIahuRtEcrrvMztbV1t2s7D22oqWGwXbpBXX7CxEl79Q6VCqH25qzepNN%2FEdy%2FdZhRcpIjlRSpS7Afpv2csvmAPZ969DaiP1yWlxYoEX7TijCg0x%2BK0Po1EOruaLP%2F62goMDqZgeQlWHiLtvRDCCVRa1nsNBIRWOyORbqI3%2FgOShO61Hk7G0n50UnFygvYuG1%2Fq7RdysVhuIwsc58wkPYnfyVTFht9c6wQeWcuOLKAH%2BxtFgLqA3sPsGFhxI%2FpQO3JAxXi3ei9HdBwbE%2B7EdwlJoPBb%2FTr7J1KxZ1gTA1NcyWHt0BA2kCprG1RweKgtY2WrtS%2FNgpypnDpu2h6xtZAkzOR5Rb15Bb4lG1DJdEctFlVOzmtQSFpDq7O9X2ZaFzGW2VDAiPAmGCXcgJy1rqsPj3yQaDfcQQbAM%2Fi46VmjWxVprjxjqw7NBXoEr0aCsIOaLQ8kcOgIxqbQPDyqb08WwiyNJCRMe5uRLzaHUxCsbeOm5TXXqT2CMXOAeXmIVrAaWFPyWef5DoEjZNTXL35AT9SGrVeFmC23JMuPvZkVTSJiIVA7nzIK0eGkf%2FBxTBbJ4mM0JmeP8d%2FjJ4BdxYRTCaZh2yMO%2BuO%2FWAcHgKrl0mlH5yJARF%3D%3D&miniWua=HHnB_kUQHaCZtn4Gsq1blpJXtSYYIY4Z9l1EwhSNxAwlrx2wcb2429i%2FnE5s8bSWEImDvY8M5Fgvz5Qqzwc5iFvO6EljanVa4pyhghMgjL2i8hbUGo9AQlUVgONnyLXI%2BjiKf&umidtoken=yeBLR9RLOi%2FLQjV8PjuH0vyo5IHglNDl&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=8793523176994e4b67b3c6f8b050d209&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26hideNavBar%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYTv4Tu4esRIDAEbG6LYJUmVQ%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2032723913%26sn%3D3B4AE5B91557DDB8EECFA581A3577E291AA70274%26umidtoken%3DyeBLR9RLOi%252FLQjV8PjuH0vyo5IHglNDl%26msv%3D8.0.0%26brand%3DApple%26imei%3DE7378C38E217FA98DA7FB182F94665DC8435F406%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiRTczNzhDMzhFMjE3RkE5OERBN0ZCMTgyRjk0NjY1REM4NDM1RjQwNiIsInNuIjoiM0I0QUU1QjkxNTU3RERCOEVFQ0ZBNTgxQTM1NzdFMjkxQUE3MDI3NCIsImV4cCI6MTYzMjMyNDMwNiwidXNlcklkIjoiMjAzMjcyMzkxMyIsImlhdCI6MTYzMTgwNTkwNiwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rkhLQlZ-Jo7VAte1QeV4Y5xmNKCxeHefaGDuX23b3c__dp2Sbc9MdrJWgYDQXuTEC7r1NRYLsSMHjDM2_TX_sw%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone10,1__shuqi__v1.0.5.0) 750x1334 Winding(WV_4) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?biz=lite&serviceWorkerOn=1&sdk=14.3&ustatus=1&umidtoken=fjhL6pZLOuHWvjV75Xe4kssqIacHvaZh&net_env=wifi&placeid=111111&user_id=2032723913&sn=6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC&msv=10.0.0&brand=Apple&imei=227F80890B767D337CFDD98EC7E2CAFD2E93FCEF&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTtsdxbeZFYDAKRn2sNXOyit&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1882",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633142863&position=601&signInType=1&wua=ktgi_lwaITXPhSTWqRWrymok2e83XGqfzqYPheIEEc%2FHWtPVhA9k%2B7TjLofQZr9Rr7oFxbMtn4pPjiGPnxRbJOxnpLxhoW%2FCBrwR7YrhVSZ%2BfKhS0oecgIpd9VhlRsdj1m1ETFEF31bCICPQZ4KzqnudMnGqSNLqaON%2BDl%2FeIWPjN6DlTi2fz5dNeujQYz%2F%2BdjWeLhrBCeMj2leSROzaCZFl7dthDNOBDtRIh5uAUTzV%2Baz9%2BgYh7eG6ni%2BEBWtGL9HAMw08uo7dPWcMAjmenH39IZPBzUyGlzciue12%2B3reWonMqDgeqy4J0I%2F1FLLBdgeNmjWi4HKg2tWAeOMuMunqqmJbda5Jjkcpt4HTZjetCyzFBYiwzL8HdJaXDTRVQFY1BnTt4vBsBbktOUzcXyK0ubA%3D%3D&miniWua=HHnB_Fga9i3q3%2FDdmUPFzcrZ7rM9%2BZ2YWoD2pbSS%2Fh4uC2OWlEpAWjjHaJXFV7c%2FYxvshud%2FMaZ9rLCzxe2XBHU6XmUSBpj7igZZiAn9j3OPLTJ4fVHbZab%2BIaK%2F88imv4VjqANqs1BbtHN4EcGVjaaSaWA%3D%3D&userId=2032723913&umidtoken=fjhL6pZLOuHWvjV75Xe4kssqIacHvaZh&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1633142863&sqSv=1.0&sign=614c02b40f1b22d28ff1a420310a903a&key=sq_h5_gateway&_public=biz%3Dlite%26serviceWorkerOn%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DfjhL6pZLOuHWvjV75Xe4kssqIacHvaZh%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2032723913%26sn%3D6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC%26msv%3D10.0.0%26brand%3DApple%26imei%3D227F80890B767D337CFDD98EC7E2CAFD2E93FCEF%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYTtsdxbeZFYDAKRn2sNXOyit%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
         const body = "{\"message\":\"2lWLwXWFhTLwglOhABj0LWmxFFADTi05CzCBpRIo1uBjgSMOnrru4X5GvGsfgjk5d3wcudNeF4Ln4Drx9qh0FArR3nWp\\/LbozRwHY7P3I+ZApJH0Q63CpKnHql+hG5ULl0+GwXrIAcLvpfCTPetBJE28XLoJ1vM9TEShuLoF6OulSkFrEHcKDWaV0DO137Gs7+YOEeerYD4d8Ly4h1aL+Rm7FKQtZ1vJmaUOzNfEIHG9k0Wr86YnP+vlHiE7b2yJ\\/hBjLDGydiqqvpxprTIqiZqD9+K340kKm+KcTv7mCIUlnHOXCAAXzpn3yZpGuxNJZHMou9qV3nP8MT8IaU2gxlRH7GtJ1\\/EcfvpwIbHkSOVLi8xg4z2I9J6iSurOw\\/PMC4alMUzDI8ygvtwh5\\/FKr9os0s+hqTPuFrSFR3vbXViuGT7UyaK4SzSEYLk9hkCw3+7n+Nriv+yNEstLxTOSAcNU1JjWxAzSMx90V8nGaUaIPxwJ1buESYN519Ohg2ZaHVjLH1EDTyn0UuqJExjrkDcec2be26WXc0jZmq5la1rRnHESSatcYbU2hnRODHomckTECb+4dMSvEHTPP8OPfkqnNrk0AKI1h67mnrMpxoGsp+TQDkZvZuRBDznZb99maZ5pLBVH9Lv2mjdbmz8wXTGnXcJ+TrNj1yT6f63KzqSMTV33PzF7fmim8oxgyvI2cHVN\\/VyGmw88Vdfp3j3zmTuDrbbkKSw9gonkbAqv9tUSt4bucPAAaoEx\\/rS5FNdrUL++SPBM6JDvak32FKSpjckMuWuW\\/r\\/WCgjfp7eWwLr5BZ2ZW4I0jkWwiCs7ZeX95n4bzFrlbQ4hAgwCri6lvS233oXRSK4LF9KDwXAMsimaBwPNhW3RGvbPHEoCcIxB6IscN5x04pbWXtFGzob9jqKLpYAmIMD3dyYtgX1CJt6ymTIhSng4HAaEkd63cuB4TCNAmuuyDc\\/Ga7HzZvoBPjrum+NSZa5Pf9SnZ1KgSuoaQj2IbeX9Rs7C1pVS7\\/0Qnfxf54K4S\\/gxgj+DkdwEmv45kJ3SRCpHPGWphbG8Qxlnc9WtpraRerZyuxr6k5TRPDPJ5l9D2qu\\/VXanGSGS2MroogsOOX7WHlt9vXzCat\\/Nlhtat+EszTkCiJCG5\\/XbnaFvFSeAirkJ2rU0PrvTPdEbOKFRpMsnVUCafxUlZvjW5hJswrPGxvjBra+RZ0xXBGGes\\/sq\\/4k+6PtbxhV8YYueQlo8i97kHqpYe8Dahk56yBcTQUYZz3VXK3DCQCKUUUBW0AWV69CJbi8ALm0zIOxw1fI0wQpDZz2RbrQY1YqSWZMeXcqYZqdiRSEWPYneQ02RbBdVfHI3gwjc5Nih7\\/F+ZQr6U8wUCx6qhPBjN+0engPQqSlfiNyvgGAwu4BmEmEjruXdgipe0Jz0BNDSg8Y3AU573uFtEM+HL+5twI0dLr\\/hl\\/6mNq9ZQ8nA7xWDLnExl3j2yqbr6j8FjBfujRun3T9QlbUBmj37fjC9tIac791mMKrs4hD+a2n1LXqnA28iHfGdp7P6Z2nPqySjhZisOetAWR4oqZNfW2pwrk26udZbQbYIePOtHHKJVQRPK5yQgIggFOvQgyfGTFS7TVPmB+Jhs+4fRN1NiHQ+Q0X8GS29bHu4\\/kKdfNNeFUD1nInAaTe\\/559XSA8EpPz6d+1NdD9fCTK2K12yn9KA0HCloTMbYfA\\/ECMQapn9E16IZiVKTFZiqKI+AQvFiyj4BwObzJHWV54wJmP5h\\/VKJjM2k5WLnSQ+01KOaltIJJYBu48B0wt\\/rW8LNSRHktUzIyvAgDRUT5TzMG0D35VItzCNN5FbHA6hA+SSwu845yNwlyfyNo\\/ss9pVp6gssYMQoWv72J1m\\/YZe5pvITOTmLPIYvNvVwUdW0qjHNSVcHL8NW\\/R7tidA8+EcWVaC6DLsQgPP3WxpKGEIbhLziXDEEjW+OiJH8HRsueKxjhpw+F6H7kjY+TZM9K8YJ9pEcKdA\\/hSWpHYAU3TxWSEKGpv6Yl00s+awvykX3QI4gFKZVGGEQaY\\/zRsz3aLEaHI5ac9p28icEU24v33b6EZb7aNG60R+MNwlaBwp9u2t2NCPZoPUcdNANrCdTvouKtCM0L99BpWOfm05p5PYvvW0Y5YMPtewd6kDlZ4ncSDBR84inJ9ztQDKqj7GK4jAYghujrGKIgkYR4Z32GDVT3Ao4zjbSBYCsJ6x8t6WLfrcGYCrJ4wK14kfoo\\/XNmH+f4NAX9416E4pIvSqxWT+U5GSHL8X\\/kjTz8b2FT+KaG4LP4thXQ7QWxubAZjMS3Wy0zpW+VXk1Oek5UAaprsfZvxOXqu3AwMqrTA6eUtKXi7Py75bE94oBwdVwF\\/Thi2DVuEz4OnOKw1TVr7PRz+KRaIx0jdbX+Q5nRzzMAOBiTTNQoI\\/GyeAQJi7nbyBjYJfgbjCdbTHJiIJIIIlFnGtaDT6+DETGjxiVKOotFHt1ebd5znYeBHtTMuGrFr3h+Qm2u13aV\\/08G4o9i08jhyFMbkHCkX40faXSRduCvsoTEPX\\/6nuX60rToHOa8oDkTLsvbxRyRFNcY9rYS2MO9U2IOFZ3ovkbSPF8W4psRHU1+uNwNH1kgO8JF5w8blckKLrpfv3ibBWdwaYpTa\\/h3ANQcVlO5oy2SdJaH3lB6tbtJe736RQHwniaR48Xj0sBz2HdO6HjECYQ6elc5dZKmKPA6dAWdO+ta7DJTAC53IR6NurJ9ru\\/G1sZxMV59poZUwO3rZpyv4HU9SPdddO4ZJhqY3lutuvNt41P1VJlwXbRRbjtEzjyzD5SpX83mCCeFFYZhJRyITHyaTCOKznXVukqkoWOOP8Vf0UEOZBJQBbdvF3Xv843QnJrD0qnuUPlJ4c9nWbvR2XTLvm6YYbHTgBm+z88RKJzWsnf4l7g\\/C4KXpHb903W7dYgxbyqrhvcsursaAbVlsiiCR4iW2ZnVASpUrqOVrvF+OICqcsBsLA+BbTgE5qzjFT9htbczPdD1QNtgRKjmccgkZipfiqlmT2M9K25H2ENAb1NaaG0l++QZ6S\\/u17NaQLizHusLYibyG5kOXWgffp3C0asB4\\/C6GKs0T2F4LH7FdH4JndOJcZoeMNzyzmlrqVUreYLBtLYN1MYrytv4uZlRTdMI93GuQMl+sHBozq1GQCuLQq+C5UgNVrklErWfbsfeIe6PqPI8W8UcAvbOlJLjoReh0X8aLagR2\\/+ApQg9FtqSu3c3Wzy9gB1IYwH63NMWNVD3FtOzgc+zrySzPd6PsJGNx0VkZ0G7nChGlXEoGnvsf2Tjdau8GoeIjw7RLB9jZ4Cel2HAigoU0f96onY\\/yNrZyACT88iAsEPEGaOUBkjUjyQfU5EuZCGCcDry\\/W+x7qghO+XJZHj4q8DuQ5C6ZpIT155Nz9qOq6\\/Dr+tFQLdknLzbrExRw2BPNozo\\/40h13QmxzBEM72rGctgBGeUK9vzWGJgkh2Efku5kiYMc+PNXOPTwn7zZl8zAakPKkyVp+XrmCjwi3yqdF4a7B3w1XFHkfEHr8rQdoGMcTGvIX6hDxnbRb3AFHKQ83EjgHD3tbZStLd0TCubhb5PZ5v9PD+2JKjWCSEHpsOq0KdXCQ621t08r3aRiuNPs3x1M\\/DosnxuHBNlnwS4FgWnumtNxJ32dieI1mqNx0So7y0y\\/dmy8V021OdXfeDGtV+\\/yDt9T0SMF6LQU9BWf8lkYbLj2b7Lod5KbGAe2d7Be2\\/8nGoh\\/vsDjMTpKKTM5a\\/fgFd353q2DoooS\\/ERjqWKyoKMAfdR5w9auzBGoFYC9ORVguu1Wbv92xkrflSft6S276JG0mrFoharZOx2ovkHZiKBktlXN5sD8hcvkNuOQ5XIU0mXBuMsZRNS9MsNsYFyEk2ZL6n4Ez7OqW8owjeZLEOJE04okh9Hp9mo2ATOFC7D6eeIImuqVRDLyviKepyeITG0VRJMDSYgOvRZWiIkdEFqJQDFjXlWwD0x22QUGqSb4crqPIgWf7zRUXWTOC8Pb4DTmEzmEYudRNTVVooPj6QajEVoRbwrH7nrWdN8JppeHYoU9i0QCiC3B\\/hZf9SLULDKCz4AJhhMzrm\\/tBKT6\\/LsZgSqfk342VVYpQiPZcV1c+YoYoGyMSGRgDn8\\/G5YYhZxEdVPkrTksXo\\/cercZso4Bs2Jt5bPmxml9LJN7oB8rCWykWiHliibopT5jzmEXXiVwkatvgZrfQF3b7Ljs90GQgA4raSj0OFU89KZP3B\\/ijAfetdTo9blsP+wjZRMZLlF5XfZfofJqr5YDXi6KTzUzlp\\/\\/v8\\/W3Hv5A9zLZsHlqoTgjx6c1J6LHBqz6L7V6T9ycBU0aK0IAD2yjqz4rt9qTG6SP5Uv5m3XRUR1L0HjfIVPRbpwFQFuH\\/PwM9jNLDYrfNuwwmgjXCgltHe33s9naAjmtXTuJTh3M8lJgvH+L8iVLgW4uxAXt0vMQxRtJb8JaPY7L5zexneh7Km\\/NA9KPCK7fXOYI\\/L+MuHhpRRq3\\/Yv+I6IsTkXLIdPBQZlyyvGo0f2OECN9JLwHPVi4X\\/1pvpOKi3c+kSF9fH84QL6bmLTFCA2n72sUvwTRy\\/IllfS2pP06Lv9P6SDzmZ0uvxF3ezPCKoj5lUJ8GZPu53lIum5cECWTTBWB6pQk=\",\"cypher\":2}";
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
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.3&ustatus=1&umidtoken=fjhL6pZLOuHWvjV75Xe4kssqIacHvaZh&net_env=wifi&placeid=111111&user_id=2032723913&sn=6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC&msv=10.0.0&brand=Apple&imei=227F80890B767D337CFDD98EC7E2CAFD2E93FCEF&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTtsdxbeZFYDAKRn2sNXOyit&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
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
function jsread() {
 return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=fjhL6pZLOuHWvjV75Xe4kssqIacHvaZh&net_env=wifi&placeid=111111&user_id=2032723913&sn=6D0BAA0BDD6E7797B9C3DF914A1BB96AC562DDEC&msv=10.0.0&brand=Apple&imei=227F80890B767D337CFDD98EC7E2CAFD2E93FCEF&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyNzIzOTEzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8yMjdGODA4OTBCNzY3RDMzN0NGREQ5OEVDN0UyQ0FGRDJFOTNGQ0VGIiwic24iOiJmYXN0XzZEMEJBQTBCREQ2RTc3OTdCOUMzREY5MTRBMUJCOTZBQzU2MkRERUMiLCJleHAiOjE2MzE4MDMxNjMsInVzZXJJZCI6IjIwMzI3MjM5MTMiLCJpYXQiOjE2MzEyODQ3NjMsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.2o2lUkADEPHqWAfk7P1y0idQD-K8m_3a-zFL0l1s2pZCyYnEjJ9xdHbWTlgMRG4AM26srPnzIIj2fymZ223BxA&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTtsdxbeZFYDAKRn2sNXOyit&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
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
         const body = "actId=355&miniWua=HHnB_g4ZpJrJ1BK94L7PZ78lUupLw%2BmmHEoljLiWnhK3owcP4dstMxy3Zk1ll9MLHgnYuGwlmzbAzUJE9zkDz8Rw7c2Kh7/r/Kopvd4Jmyn38iRWdcKQN5HymZmv2fBLYzuHdA5eP%2BvrJq2TaHtx%2BaZ51IQ%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633142946&userId=2032723913&wua=ktgi_Uy5tP43%2BOq0bodo62rDhVgpr2MCgDubYHsiwKCRHvJpRU5xSeUXBZTLp1HnKsueoV%2Bt%2BWB4Cf0yLn1uqOWlfYhnjw%2Be9SLhU950GZcOyPrV3RYtx3Uu8UDu3czTgj9VXyXMAP1C/%2BhiRZkqVMS6kiqI9X2gDn57rokKV6H9KW381cpk8TxxNb7Yy6C5qpLY%2BZVh710F9JC7QKs4Mx1wE8eGW0SsX2oK3TrpxPcu4/28mTW8sG0Va4pmrOuibMIgeg8uoa4d1erSWZyQ5buow2Sw0%2BEInU1RXpP3MsxTaKZLKY4wcbJ%2BsNFmwdI51IQpimpz4ebKxPG3netnAmUO2EN/iBZy3pnaW5LIA4WiU20OM46/YtwDY1jlGrupKcNC/b0ZQ9GrAlw%2Bqw8Yq2tzrAQ%3D%3D";
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
