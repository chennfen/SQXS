

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
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page?sdk=14.3&utdid=YTw5IwTqIv0DALcuKATNyebg&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2044136133&sn=82EA9AAC48A62C3475BFECD806DD4457CA988409&umidtoken=YTw5IwTqIv0DALcuKATNyebg&msv=8.0.0&brand=Apple&imei=87BE4BB022CF0E78E58436E96675FE4F01E7518F&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiODdCRTRCQjAyMkNGMEU3OEU1ODQzNkU5NjY3NUZFNEYwMUU3NTE4RiIsInNuIjoiODJFQTlBQUM0OEE2MkMzNDc1QkZFQ0Q4MDZERDQ0NTdDQTk4ODQwOSIsImV4cCI6MTYzMjI4NzM1MywidXNlcklkIjoiMjA0NDEzNjEzMyIsImlhdCI6MTYzMTc2ODk1Mywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.3W3DwS1KlbJYIl7LDfMWXdTlSvNjlZSvjZoexgoy9xhh_k4JdNsS8OvwntHuJv_WDwYZmOLX-JKTCqQMyTgxyg&skinColor=23B383&platform=iOS&ver=201102&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "3619",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633189903&position=501&userId=2044136133&signInType=1&wua=HIVW_jGYJmwTyYhgaAaK9SBu2lLsQDG%2BC1eFnI43d%2BUds6%2BOb5MHFVk6BNtN4E0ZjLf6AeCPYcTgNKpHegKFj1URyYn4hxmWqgwBfuZ1jVEU8UDFPPWqrAioyTgOti6ypHMWZ16mcJ8%2BJmyRzlXE%2FCMleY48KU6z3VPTBoUqC4ESJC40HH5CdRCZ90m21%2BGff6fW3jMFdUOzB7wDwHN5AQnsTvJqbWV0V7x5o%2BFvx8f%2F0%2FJw0vCASCaPZk1FLjkzNgXnexJQcUsksbH2d%2B7xvtW6TCCN4Xzq4g0NW3YUBwi7QvpBgMLA0tZrScUZmTnG6NWmugYTWynAcoQC2rRMbamcjdwvYJO6xy6U9JmdRoRpVnIEup4WnDqkoNDNOk2j%2BMH6O&ua=140%23SRXrp8MazzW%2BJzo2%2BbNFKtN8s7aGYj%2BsFmdTxIF5iag0nFlZAIICKttY5uPEOgt34QbClp1zz%2Fiijfkp7zrxKz0xath%2Fzzrb22U3lp1xzZMIV2EqlaOz2PD%2BVounUuI0MI2y7yDY5anrHRqjELrEkgNfA%2FQiOhM%2BWmdinbWBRuHQIms%2BHyIp4SxaTKNtyRO8gMvm%2BQG23LuJUxZdfhpPIm9h%2FscjAyo2KkGNOmWgcTxXymaQqfX%2BlEdsfegl4j8BhmE85LLVlo3Z9o4L8t%2Fa16x72LCKMt%2Fo9N0peDui1yKnFqGS%2BeCUhJGi4s6RlgJECLQ1POnSitjP0AYEXXC1jJruBz%2BU6LpvsdZJtTxw0zaEUkATNyLD2Ck0m2iEtoY6%2FSSOTV7xYwPfF68Nqadln55OTeUME0ZcfBOw8Gd4k1n197vfREtoDzHzoOP723qyl3AJrMZAS9jjsfoIugvfKQNFDbn3WJDTSaW3qLssmEoq63xYzxEM1SqxLd8TYASU9UdlrLr67dSdXunV71u8jw22csIjjpqdYC8LghhOwsLOJX2kzsNhqePC3%2FVTqQBCKnmKDfAezm0GHB5mMnK54sYL6AS06HJ44%2FlnswpQajwxVraq6ZmsLLi23%2FZZYC6FIUHbEiXTdFE%2BUkoQyQb9qZrguj%2BDVuSCR3PpMit28q55KDt8NNO9EuubkU1MVSPpWbvT4cLfqmQM5kY5hYxs3G83JeypB7xyZxdKqNSVfx03uNyC3i%2FdCJRa7bv8OxMgyfTf0y5um8b14mSkUFuhMAHPiRy3vRitVW6UBxoa1BFmDSmsO%2FoNK68rXN2NEuSvNM46k1XhS1gL3FXYMJsgPkdqB3fUeQo9LQmmTMYDTfkOsfXDYJwx%2BJZViToJO0ZrG5KzYDQi0Q3mJJyRE8XzG%2BrC81WR75XmKZkg5CHrWIyGiAAUP8nWMOeJSkKf7pG%2BaW%2Bv3UPwXlt7pfYiLXs%2Fao1lt5dXe%2FTSiLLs8w7eDBzPrKjy5tNbXQPNUgwDSNB5U4rzgVZCgNqYgiulNxBNeUFfUfBsNScF1s9gVOsYL5zXTw%2FGLkwMGm3CQOavwK1KG2baFVBlxn2x6BrtIPfYymNs%2FnB7MhFp5lYG61TrV645pj6RGm05%2B6OatnIWLAX2e1aIuPEdY1Q58ePkh%2FbNr3Mw%2BSP98Yy%2F1hG6HmWQ0oHtAVzNoj8tAg17QU8NwsDfk%2B9QM4xdl%2BNsL8Pf%2B6IKfwoGjTAfksIQEt%2BVGmykLPytcMHfSPBcKvdHiA6hHmnpQNyz0mt90qOBSe%2FX5mGEXJAXzMRFZEPrvhMMUdFeENspYPkhybFi6PduZCY5ftENFudZUHhlocMlxlXuvHV7z5Js8pouYJgsDjY7IG%2FpcudTpAW4au7X3uv%2FXdDB9uscSdlSQ1kdVovKLDr0BmIcV6Pw07%2BNcWtlC8BsbwClcdBEY26LvgUlOx1S5rRV8n3N6xr9u7Kp5c%2F8IakZBmFVSoCbzgtyCCq6qJ%2BU9u%2FIwVxp%2FtUsvAEdXxbqL7vuRiNxK9mBADrik1wXL8MEQKsw4AV07N897WhzQOa0ZuOPEWePOtWDXnVd4k2BDDVzGUUxx4O8XSkf8GW3sKwJjD6pN2zrtgfcmHWeXoJnZjQwmAZKpGiNxgkC9H%2F3yCvF34eBiKCxY0E57CUMZBXVqdPpGOS1&miniWua=HHnB_%2FEU%2Bku0GNxQ2eEpxqPSf4ASr5ucJYClE5dicqZvPaEsROHVb6WjuwvoD5bfT%2FgpXZEB9IFyNKFJzW8nNUou4KXFH%2FSqz7TLT0bMSOz4GrhVjIjO55WcdyJW6GLzPtDK%2B&umidtoken=YTw5IwTqIv0DALcuKATNyebg&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=d226e1c0ed8fcdd200bd9df5f6db527c&key=sq_h5_gateway&_public=sdk%3D14.3%26utdid%3DYTw5IwTqIv0DALcuKATNyebg%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2044136133%26sn%3D82EA9AAC48A62C3475BFECD806DD4457CA988409%26umidtoken%3DYTw5IwTqIv0DALcuKATNyebg%26msv%3D8.0.0%26brand%3DApple%26imei%3D87BE4BB022CF0E78E58436E96675FE4F01E7518F%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiODdCRTRCQjAyMkNGMEU3OEU1ODQzNkU5NjY3NUZFNEYwMUU3NTE4RiIsInNuIjoiODJFQTlBQUM0OEE2MkMzNDc1QkZFQ0Q4MDZERDQ0NTdDQTk4ODQwOSIsImV4cCI6MTYzMjI4NzM1MywidXNlcklkIjoiMjA0NDEzNjEzMyIsImlhdCI6MTYzMTc2ODk1Mywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.3W3DwS1KlbJYIl7LDfMWXdTlSvNjlZSvjZoexgoy9xhh_k4JdNsS8OvwntHuJv_WDwYZmOLX-JKTCqQMyTgxyg%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone10,1__shuqi__v1.0.5.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=ifhLbjNLOkjpfTV8CCzdmJ9Z8XpIm8Yh&net_env=wifi&placeid=111111&user_id=2044136133&sn=CCE87A06F2B1F47D663903C8C171FA7603DCB676&msv=10.0.0&brand=Apple&imei=DC6A889762EA396DE9133B0A31269B9E97EB1706&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9EQzZBODg5NzYyRUEzOTZERTkxMzNCMEEzMTI2OUI5RTk3RUIxNzA2Iiwic24iOiJmYXN0X0NDRTg3QTA2RjJCMUY0N0Q2NjM5MDNDOEMxNzFGQTc2MDNEQ0I2NzYiLCJleHAiOjE2MzE4NTU3MDIsInVzZXJJZCI6IjIwNDQxMzYxMzMiLCJpYXQiOjE2MzEzMzczMDIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.9YkaPXdjbWRkWeqGVIjnDyz9l_vWzN9jF2H7xdJBOAschGR8uW5XCv0KbMGGGQLD0_8wBY1JGt1163vCl9apvQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTw4563%2BWfwDAKlLqcf78uF%2F&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1907",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633189992&position=601&signInType=1&wua=ktgi_4Gc1x81ilJQ44O6Ot1eroDbRoNcYS%2B5i8siqJvcJCXAk8A0PXjNf6wfp2N1cdyB8nrygP2mEZkKzjwYsnZRas1o0QY3q1R92G8EG9NDFSX%2BIGMQ89DK01DUhuToFCTEY67%2FPMUY1nQraGeWXAuLTyqgqldX%2FzFNR70bCpaq4jHjIBD06nP%2Fe6x4PvhtOhkN0jJ0w8VF0Ypydc5rTT1o5PLA1q90Uqe7IHlq7su3vadpq02yZx6PR%2FF8jftEeQOYKdbP8Wi62u74l%2BaiFD448hvwABipJAdggNO6F6tX1%2FCgWNl9O1Yjl686FiJ2kN1KPJRSU%2BzeVN53m0bOLG7KNsmOHgYY%2Bq7pX2jua6zNQqTfKghxJi4ovqQ6zqzJuQ7Z41AGlZRqePGRooeSscvTslg%3D%3D&miniWua=HHnB_az9eUCdMTMM8H4%2BcJpKwjCdgtuSHJvUzdThxTIT2jo2ut2lncff2BL%2BHv9SU1bMtfTOBwrbS022sY7kxtb0i9Z6NT5WmygYeQ%2BTkI%2FSoqtgFV0RecQZp52%2BejUjgs9oidbgE6S8vExAPgnvw49SPnA%3D%3D&userId=2044136133&umidtoken=ifhLbjNLOkjpfTV8CCzdmJ9Z8XpIm8Yh&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1633189992&sqSv=1.0&sign=3a8ad76afbee218ce0d924cee866ef63&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DifhLbjNLOkjpfTV8CCzdmJ9Z8XpIm8Yh%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2044136133%26sn%3DCCE87A06F2B1F47D663903C8C171FA7603DCB676%26msv%3D10.0.0%26brand%3DApple%26imei%3DDC6A889762EA396DE9133B0A31269B9E97EB1706%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9EQzZBODg5NzYyRUEzOTZERTkxMzNCMEEzMTI2OUI5RTk3RUIxNzA2Iiwic24iOiJmYXN0X0NDRTg3QTA2RjJCMUY0N0Q2NjM5MDNDOEMxNzFGQTc2MDNEQ0I2NzYiLCJleHAiOjE2MzE4NTU3MDIsInVzZXJJZCI6IjIwNDQxMzYxMzMiLCJpYXQiOjE2MzEzMzczMDIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.9YkaPXdjbWRkWeqGVIjnDyz9l_vWzN9jF2H7xdJBOAschGR8uW5XCv0KbMGGGQLD0_8wBY1JGt1163vCl9apvQ%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYTw4563%252BWfwDAKlLqcf78uF%252F%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
    "Content-Length": "4816",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "{\"message\":\"2QD2fdcEGaqROFS20uNlqhw04m5Y15sltmxl8NTUYxs4D81+siaaSikVWB1c7bS+Mid2u5dwiBD52JAzSK85DjZGPfA6IiXLR+9o7O\\/6093hz9Fq5CgqvnEmz0R\\/gsNcn8\\/tb6voXw89mHI9EpGFk8g4e6Tjbnm7Yl451bI7qsjCjTwgPXW7+hCUnEuTVHEd5matJ4oPbyq4EgZXDvL3CwY8ICxnYc16Aecu6fIOK\\/wGC1tL5vuUonvNmgjvsnDyNRcyk5s+D7+Zyuh9tS98ZaHq63Djysx0MzEasIHv6\\/9ZUX90w\\/veWrT1c3D+hNKjlD84pXIoEowY2mSlu5hTYzJWT4MbAnvQtY\\/HvetRnVHNMUYdDbrUxYPk\\/rWcNl3bBTnZPlDkmFXDOShy\\/RDKGfjNGlIq7eoTo2ANH9cE798Z+ZsKcCgsG4Nygq129MIr6tKTu\\/QjE0TdYubOIooc5FcrHxzr0rXI1smnvdnaw+Q5mwdNCSnmdCp5i1YxO0dCrnv5AUfs8C5kLNwJJnPvZm4YDd\\/kKar6r60EHlSDdChjCtTgsZOP\\/Idhfoy1H0tKrt61cXJuRFB075wmd9YJ9V72z6JHnl8cE60kyXlxqyLgLwEczAyEcX8Og\\/yPL9tBcafZWrS4pwWKkvlX6dQuqLRxf9D8VsP\\/G6SpJVWj3F7jZ1Il3KUWDo+9zPywpZTu2YERzE+dQXHjzT2LETDJ8k9epQczqSPKLVvGg7YAOlB5SnutojduoEiDyAsXHdxN0ljigW1MXcL7SGS8r6rpuwsXQZHd54ZXvOiIOhPd0gdhi58EdrHX+CrWsnI4oe61r3tYoSxD6gz0COQXUIXJyCF87ZfK1VhIKaTED4bnAv8a2uobFceZj9DyffY+1qSX2ZLSE+WTVNfEcHV8GpELx5oFIbVwI\\/TBGHgZsZo7UsKNVrPxqJp20cvgqdnrNn+xcfbb5UsvXE6OSEXOA2jBdiqhtP79HDbTmhMMLqJBfevIYRMrQjl2T7gd6epeuAlr438CKxKJqr3SQdhEsm8EhOz30rHXm5oMzHHDsedAiM6u3nw\\/7FBXvc2eQO8UbQYL1Tjg8BAMoDdnYleqqzE+yRMZiqK6qBq9uOFY2P0wIpJr5dyNEvL4VOgJxfKmAXdA1RLomh3vaMUdlMvlv0pwxLCjmTmxoLR7qiJcOmTjE0qhuVt\\/YTZojYOYMzE7OPBWoiUTwMb8CU6EQPg9VI7KWewK1lISqVj70WhzaGkEc1xsFcyXoX42UEkzMzR\\/ke4vVv0PZH1H7IGg7cNkxUuBsEBeA\\/zOcCdvRMz\\/dyT2kcZybjJdPCoQiy+CIOmZX2ZXMcbQYSgpMuaVRcAn7cJW\\/FYONnuAYWpqAlGCzaiGlN5MjJV\\/OdVGWtHOaDQGNIjbTh\\/WgsoJlJcapVrL1JhsvXO7UVzuJDYXZUW7dL3jia4AE5bWnZKqsc8WobRSS9gzKgceCBy9jm1Vj5fb7Hp6vjYEWVVfuk2chJvKO\\/C96TDvU0U3yLm6micUaZS6RD298p2No41e8EDs708Tk03p6hbuwpkfiknp+yqdsBfTm70iWoVEmkG1Cvcs\\/57F5KLLz1QMbbAv3AZnfMANKfq+kg5LRNn75YpZY8kRO6PggeqcQy\\/YWb\\/HApe10JLLVirl\\/uBfsvmqmLLdCCgA24gN8G2G3oFCswfoQaZtn49TBkwwp\\/sCdl216n9F+vOr+IARYOx3yR75OobtiC6i6aiWI6FZ5abvgx9n98ipqDWrDKjli+RI4nmUSiOldk2SVi6nIpmYzlpakgldHDM66RcGBqt2QgVksL1DX+f4HV+NGbSUFjYZUQ9\\/EZ4eGA6LVw9nwOi6hIXQvbKjrYgOujiw7zCWsiCixPz95Kbl6te524qIrsWrIrXInZEecipxDMHgiozJo5VlYt\\/blbAAEqqkevAcMVVYoLJuZNX6yTWIvz7yk9i+ojvS4YX3NIY9d0S7FcWbXDuLpnda3sWPyFukpdI4yDpVy0Ml1axXSN7A\\/R\\/ndKwwTDXnJYA\\/kB2ffP8UTGdkfAKosG89hTyTHRr87HCmAhvEcKY0BRQuRRkOUYb9jYdXW2vKIHcKmJ3pB1CVcVDXLHK+mMFlCE9NE79ISJUrrsT3a+BZTpkwgvykyDau2D1NVS0IQhLUS4gnx9W6JbW+qJIcKZIJEZFHjCiDeP3d\\/AcTikX2nQa+SueuA7A6mRFgOjDSrptKpIt1\\/HntQRGZ3Yb0\\/UeMcMDGc7+KAoa\\/NSCk0xZdAMsTbLUR0nTM4vpewW0I2iXGLy11Pi6wtfi0Sh13S88siw3X0IBEIDaE1HnOgzDO2zoYQBL7jEZwiqtpEk5DosuHDygsCxUbXaZhOjpcBK0NJGnVfbdsYZpdjPSqVii75JKWnV8ix4eut2rl78Rdyi5dlqh3uhdMI98Pzp39iswTL7oDlgvGn6TWpolcRyy8koW1eV8Be5Vp6JW9fRA\\/fafJl1C7uVX1\\/cq7X0qaX0zhmrJ0UY2SJc6J75w6M9D0T8BtSiblalKcOEtQb25VUdaAU47\\/tG3wAcWAAkwOWuM6\\/+AijMVQTbubxD\\/69MYeaFzi6B0ehWq+4hhOYzYbZ7d8kcbJAFmQ9484WFJQFd6wN0UMlTSx\\/GCcthqeAdSn8EnpOEfMXkfNz\\/kQs0uYe4vqdxpt32\\/oyYIsy2Fht8DMCCoA29tfocPOMEz4LRvGPglFe+jbmWSl5Q47GHklHDD4BxmgA1IhTd9pr4KKwSIePkau5Oh02zrPdcBX2i7sB7yXs4MtMn7YTTrTMinSxT3NXHriW+9LQ4I+yDZHcYKTe\\/bdmHic5qtkIXT30yHuvfnzFM9+Vxp1kB5E2fcJwX6o1jkk+K9qh9dSMI+uFKnQgRpXw0bF\\/BBjxIbZuKEsoEAQh77mmPb87uyFNRQkOHJc2D\\/DEpCxXf9pP6ja6aOQ4ycudjZt67Ut04lY6XV0ixe2WPUzOsfwVIIKqZtZP0MYb6IxExm9\\/l\\/MRTS\\/U\\/Bo08xfgVoFZvtahCF+aJpEDDqVh+KaG1UdIf8TCzjFqxRyXE4FsLovA6lxXUxrRTiFAjgz6tFjlC96mzuQ+TIwkcbwrAe3hlsjcOMeCojJ77WD+L6vCoCLoonfVPuycuzeN0wQtS2nEgNcLSJxyFIhpSIy50m\\/KoVQKA3hcJ3niLaMQI2TIYFCYyKzAKzC8LAatNfuQOZiN3Ecc82agNA7PfFLZa7SroJcocmQ0pE7u\\/R+mUWAmE448Mrl1d5hvP+orzMz6mOKWgONXkRS7nX3VU2al5HCVnfXChD\\/dXVOmcdS5gZtSYl1uGCpRTFXbx78bXSvo\\/LwyCPbaKSlAG1dWpQqNIDkgwen3zt9tZUSUB8t8dwcQ5o\\/8iM\\/w02cPE5qQLSres3yphGhV7BJdzpoq5S7OYXfZYtC0OtAHvZIKvnIg9hOUbU05HOcn551NGUlX+HxkeM2bnocmQ\\/hacPHt0EBQJ8HvmLWq8fPGWmLkccba\\/Q0nAgGwx7Czaf4K7enz5eT5QaaijthHZofWReT3lBCppmgR9laUf6Y2tnHKEHkE6ZlefnFlvEzl\\/gD6VP7JEdwFVzR7\\/o\\/vtf3J1YEh0f8Bbo5f1Se26V6H8lnPi12zbIvByo43hNA1uADScUO0mwIDSlzBGtluJvviEmQiAVE+2ObczuHqdZd8S4GV\\/CIH7MT6S5JGy8WJwOliHC5bkvnGRkWxFlWyB++JxlZd30gkd08TFv3UWWijDtv8bPbkCpWS+j\\/mZCaCMi8eFaoJ731kFmaUsFenspgdcJGeHvTHxRh3Jdbm7jv92au+LYhR6Rk7udKDBMdXhEG3LxxSZCmSGl31P5pnkJ35H8BYgvVDaCKebSA0mJ8THu8WFT8rXx90riibjV\\/qvAwb0jYIAJLW\\/uVpjYPLgt4\\/3ze3Qgu+OeD5V+qSpnnkLaN132BwXQEBcp59dsS2xtdFfgF6MLPSzU\\/+XlEj4IW4ADn8F2ehQfPxCUjCeeWRrEAgeV1oTTnFwxWyXeHKxPKwX5jPvBGruku039bSLfgvdEk\\/X+1067\\/zKUcNX4R7sPwwPrXzXYJF8y8NFnLv3Bqw\\/aCAQXOS+6GzFb9Iwi5EfUuXaOal5dBsyapmszO7T90m1UAw8UZpBIEqj5BQ\\/UodW1z+sjdQdKawNsc7cpJLr1TVyxUBbeIE1Gm1j5fFw8okbimGRC1g+NejC2H1hbGy6g5kreFgfMsgzA5nDd2tVh0qghTF4Ug1rAs3tHLF3n2ADYxo72f3G5r3QKNlJlqoj6KSfnWB8OrBCsuZIpFZ+emj0GU9ZDjnlAmM7fVPqKHOrnWjrpVtnyB346gK5qDCkkZ+Zucn9pZ+2PXo\\/ztEyLVV0QWXabp05FddTpx3HG64Rg8jF1wqPT1EipjIBLSOczl8R+sPm1gMm1nxzD14LDf6TIoTSDtA7F\\/bpVZHFoA8ImIhMJN\\/cQJ7+jWzlmnH+eabCrm32OQefkdkfsSXB9S3d6hsq9NVk0cpszT6BwqCAJLXzfJ+3sDMb+LOt42CF1EX9wznj5u52iPvWfEexvXtx5GEU6eybrIQxBldc+WVj1lqx4ve87hZIrdaQWttZ\\/qiuT1q1Rpoz5MqtmjN+KIjdu3cLtMzINP6QNOjcoyZU4obeyRCij+ij+05FiLlNsFQGABXAtN6fazm91ZdCN0nCYMZhw==\",\"cypher\":2}";
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
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.3&ustatus=1&umidtoken=ifhLbjNLOkjpfTV8CCzdmJ9Z8XpIm8Yh&net_env=wifi&placeid=111111&user_id=2044136133&sn=CCE87A06F2B1F47D663903C8C171FA7603DCB676&msv=10.0.0&brand=Apple&imei=DC6A889762EA396DE9133B0A31269B9E97EB1706&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9EQzZBODg5NzYyRUEzOTZERTkxMzNCMEEzMTI2OUI5RTk3RUIxNzA2Iiwic24iOiJmYXN0X0NDRTg3QTA2RjJCMUY0N0Q2NjM5MDNDOEMxNzFGQTc2MDNEQ0I2NzYiLCJleHAiOjE2MzE4NTU3MDIsInVzZXJJZCI6IjIwNDQxMzYxMzMiLCJpYXQiOjE2MzEzMzczMDIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.9YkaPXdjbWRkWeqGVIjnDyz9l_vWzN9jF2H7xdJBOAschGR8uW5XCv0KbMGGGQLD0_8wBY1JGt1163vCl9apvQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTw4563%2BWfwDAKlLqcf78uF%2F&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
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
         const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2044136133";
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
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=ifhLbjNLOkjpfTV8CCzdmJ9Z8XpIm8Yh&net_env=wifi&placeid=111111&user_id=2044136133&sn=CCE87A06F2B1F47D663903C8C171FA7603DCB676&msv=10.0.0&brand=Apple&imei=DC6A889762EA396DE9133B0A31269B9E97EB1706&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9EQzZBODg5NzYyRUEzOTZERTkxMzNCMEEzMTI2OUI5RTk3RUIxNzA2Iiwic24iOiJmYXN0X0NDRTg3QTA2RjJCMUY0N0Q2NjM5MDNDOEMxNzFGQTc2MDNEQ0I2NzYiLCJleHAiOjE2MzE4NTU3MDIsInVzZXJJZCI6IjIwNDQxMzYxMzMiLCJpYXQiOjE2MzEzMzczMDIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.9YkaPXdjbWRkWeqGVIjnDyz9l_vWzN9jF2H7xdJBOAschGR8uW5XCv0KbMGGGQLD0_8wBY1JGt1163vCl9apvQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTw4563%2BWfwDAKlLqcf78uF%2F&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "731",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "actId=355&miniWua=HHnB_TGi7GBkzDdDAT64jIpt0WodEJtYcDZBfU%2BrVnNPDc77CdA/%2B%2B6pU4pOFw12wgFSKd2tWMeZHC%2BMmuPYyxHeN2mG5vvx%2Bv%2BJJUTucMQ09VLsgiTwH3qUMNjzh%2BzBio3bnGQoBgDl2m/ZVPMPf5VD53A%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633190050&userId=2044136133&wua=ktgi_ZX9m9NXiSGLIYC0PwHBD7itM1Dt1vat6ejvC%2BB2DZoLTlFX16b47jFGD0n222lp4nzbHKDc7jMedqar6OkL3Lhc5XartWEpISJY4TacneoOYP5uiPmqjo57wvUZdkJQfEeQjNjtsnGaTIxIUVeVRgVKlOObs/FTcDBhPN6f46IwkUJKZ7llTgZl2cqsF4IecUQjYdFY2xHAz%2BLz9HCSWFvLYA/b13J9swLYwVyg0qXeqAwkcMuAw4HDehWmsR6tP4KJM5eIvfXJCRnWIx7fqWw1AoehKm8XXfdnMUYtI9khzeMD8XsiaSq6yVE4elmC9qO1gvpa7My1GfeM8skx/Kq709yVHx6H8iR0m7zlsCSchu9/Bv7cClNJX4b5lkEpA1VrrRil57oUC2xAiGvqN2Q%3D%3D";
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



