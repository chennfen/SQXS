

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
//极速黑号
  
    await dailysign();
    await $.wait(1000);

    for (let i = 0; i < 10; i++) {
        await videoreward426();
        await $.wait(1000);
    }

    await $.wait(1000);
    //await share();

    await $.wait(1000);
    //await jsdailysign();

    await $.wait(1000);
    //await jsshucheng();

    await $.wait(1000);
    //await jsshare();

    await $.wait(1000);
    //await jsread()

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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.4.9.0) WindVane/8.6.1 Shuqi (iPhone10,1__shuqi__v4.4.9.0) 750x1334 Winding(WV_3) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.3&utdid=YGGXqTJyuREDACUP1Aj23pzP&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=2035402677&sn=22031888B3F53D4083F5CEFCE86BEA54C356940F&umidtoken=GWdLDxZLOgF%2BxDV705ufQC6aM36i%2BQy2&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.9.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM1NDAyNjc3IiwidXRkaWQiOiIiLCJpbWVpIjoiMzRGQzJDNEU3RDA1QTM0MjBBOTMzMDE5N0FFNTY3QzI2MTMzNDg5NiIsInNuIjoiMjIwMzE4ODhCM0Y1M0Q0MDgzRjVDRUZDRTg2QkVBNTRDMzU2OTQwRiIsImV4cCI6MTYzMTg1NDM3MywidXNlcklkIjoiMjAzNTQwMjY3NyIsImlhdCI6MTYzMTMzNTk3Mywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.DlImVKFxf8qQ059VhTKU1Mm5XG77jxT-n436m5pPV7zrjhnAWXmgkZkxP3AwaO-oejQtSub6Y6YBT2IUFxslmA&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=34FC2C4E7D05A3420A9330197AE567C261334896&mod=iPhone8&ver=210811&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=20.000000&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "2075",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1632238201&position=501&signInType=1&wua=HIVW_gNIS0flw5WWcJQ8jiEdy1xhYMjMx1EauBIgvzObi%2FJiJgjimZJGY%2BMeJ6pzIZojXmGWjvalqOxAZaJMRrUqtGzR5KQMkTbVo1ejSCDPWDrUpv0NrKA%2F4FJYoeUvx4Zc1LA%2FgfSuOrQFL4GlAhR3hjug9WCLdYJ44Vw8wKJm0PJUQTVw67JzWgTKEw8Ge%2B8djaiY1%2BikkBcYl%2Fw74Falv0KXKHSM0Iq5Nz8iKtETaEwd3RXtrQWBfM0Z%2FcnCFMk4bdHxBHqZTQbDHOgSw59RHkYYg2KRjZCUkVsj9FnjO1RqD6kGXwGgkF%2FKa18mpLbg8vQ6pQ8jqFu1N7UEmnQOWCW42u%2BmhN1EewnGQyY8Yn8I%3D&ua=&miniWua=HHnB_XJNLTQW%2FeBQV28TaG5CpscrIcrnYS9AWxcp917oNOAc8JPH%2FW3etL3892QiJ7gUBYEIgfSpPUG0soGOQtf4d6%2B5hWiGBWzv6ormB2ijfOc%2FO2SH84lNmBtwnsrHJDgTB0if%2BeyK9hp1MYEPm6g2WmzITt8uKyVfhfvrUMumyKg4%3D&userId=2035402677&umidtoken=GWdLDxZLOgF%2BxDV705ufQC6aM36i%2BQy2&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.4.9.0&placeId=111111&timestamp=1632238201&sqSv=1.0&sign=a60d38942dbca988c0bf53420d87fc8f&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.3%26utdid%3DYGGXqTJyuREDACUP1Aj23pzP%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2035402677%26sn%3D22031888B3F53D4083F5CEFCE86BEA54C356940F%26umidtoken%3DGWdLDxZLOgF%252BxDV705ufQC6aM36i%252BQy2%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.9.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM1NDAyNjc3IiwidXRkaWQiOiIiLCJpbWVpIjoiMzRGQzJDNEU3RDA1QTM0MjBBOTMzMDE5N0FFNTY3QzI2MTMzNDg5NiIsInNuIjoiMjIwMzE4ODhCM0Y1M0Q0MDgzRjVDRUZDRTg2QkVBNTRDMzU2OTQwRiIsImV4cCI6MTYzMTg1NDM3MywidXNlcklkIjoiMjAzNTQwMjY3NyIsImlhdCI6MTYzMTMzNTk3Mywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.DlImVKFxf8qQ059VhTKU1Mm5XG77jxT-n436m5pPV7zrjhnAWXmgkZkxP3AwaO-oejQtSub6Y6YBT2IUFxslmA%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D34FC2C4E7D05A3420A9330197AE567C261334896%26mod%3DiPhone8%26ver%3D210811%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D20.000000%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
    "Content-Length": "4752",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "{\"message\":\"2HHD2l85LPy83D1xUPOByQFPktnCfuWIE51GKXGgLvyjQowuCyz+f+F9DLtx4Tmyz2Wl23QFqJAMkekDH4HhzUN5vXs\\/KDKcZOFLKFZJa6\\/swJfwBAgfFovZcqFUm+rStqr8z+ToAGhPjS\\/84m3gZ1f1BoqmPBBIq2KbhbZasOdsd6vFYAUCHDUBfX7Ghwe5+FnJs1Jy78sfH8FJW\\/QvYKpSXWs+EYDG+4rjuQh71QgKfnd4JKadzH+jyHXHreAMlsSCHMCsLGO2ikyEiT2iKVGKVcG86YjCr7T7RppqELYpBB9G3jIIZyqVrWmKUKLS8RXu7b0HQFSxaHWscJsDGFHEh2FEaAuswPhfvJvFNU1yH0Rehc7kSOD6OfaUDOtx+AaxINYVi0syn\\/eVTJ1dOXFqRHJAIQZ1eYZ3TMDv9md+gk21u6creIeLBrwoBLfQWCZwHAnAXTBx4xOJXHH173TQ4RWqXWF0iiaY9CfA2fto9K9+Z5m4gO\\/gsNUEuDdS+jODbLGKAlhkWW+1fie9ncED5zXXpNnBS\\/mm2mkSGGVb8qXxBxcZeLgcJZwrw5u4QhcAbs9ked8FvaPjfS3NwQ+Y0IhLIVPE9m4Gx+vNbDJSKJ1LPXf0aSql2eqGTKQsNP93wuETyiOiYLepKSP6KWilrbXtarHJmQIc\\/49QP02RgGNLPvFTi2c4ATntTWa5E5wJNe+p5e0COTRiLCAADubKSnB9ydkKF2d6dbkpSjkXs3UdsWGGRhc2SD7rx7e5rPdE\\/19qq9HpWZihk7WFvTXTc3L6W5GO3Dw+8ppUggql8bEQ1Ig4A4\\/VhnS231CdzpnZ\\/w+SAqlAYbFPo\\/hZFpbxal48t0xf5H1IwUoB2EQRrVoKLSZFZyiWqoxrcg5n65Taq2h\\/QavsXhehblV\\/Klc\\/VJqDHMwk8jF338GCCT2XYRSuHkFe2XVxBXPyMZWxVdnR4tIult\\/5wGXxpQVNZ28stba9zLo3pcXEGwHYQJP2gleL1J1suPsR7s3viurnc+j7VZIihXOavDGlRMz3WAqtdXtQwjUlwLy\\/Dz85xgV7bdzz8JoApCRktNLoKA\\/ItxVfz6w\\/LC9Qmzy3n7XK00BVnOYOnilHszhhE8AdNHX4bLirM5W5k6PyZq+2tt2bKlex0MaRJdw9RmkjuCtI714ZwTYMwI8CgYIN+hpf+nQ7VvWd9vcuvRE0n0x+YnEeW3BuviSe6sCDoaFdrQoafhV3tG5ywfcLwmC3Woh5SSFiiCZGyl8R5+SALWdNWWy1nO1MOIuK9zzFSB9kNPNryaoXOB8\\/Il1VcvZf3hTUl1bi0ioW2BiCJsZ5AKKKjCN2zGFqNPVvFkoby4Q4wjzBqWLvqavwtoNtDaz31EyJmFgbq3QFfg+V4upZReVzeWUoKudCoz1P8s2\\/BCYMeIlVazZ6eNJF2XcPJj3EXLWOyaIYM7dgDcUlAbrJ9RdHqS4eR7VhMLPpnVjHQQy4kBjuhrlkYmqtStwLitldPr5Lcr9iJ522ekJdThcKv4arYEJ8L+YmVjBso8ruPOAQdT4HDeSV6yCtrF58m1i4X4QjcZHocMVvdXCWSNyDxCgT4KIWxiOhH7AgH8sxipoxEKG1fnAjFCdQiSMoYMg5ryVI+NJ1JoXZrkwJlqko16ny6hfjpl+nesLjCJN2Y6q9cpRuZRe23apt88VMLlCt7qn7bf7GCts02rbE2t5HALaIIKq5TaZKQPJHN1PbijOlTzWbE98aNpjOqgl9OUXhCNbRwhFrkUplMz1DbuStVMEHwStHUvANWEzCdIIBAIiGDlztEFj7DhpALfkjg84zZOsFwSfBiHsGMm9w04\\/vn3iDD0p2g59SlqLtwhSJVL2yakqjTB0cA863SXwASVAMZvqEzFkYe4SbUxnihXGxUHYEpUrZ7czyS3ZKIHM+oza8vgMGx61ce0NlnGnp0PuWv1LWmKR2n+alGmT18T6yYza3jwcPRD1DChVhHI7FmXDlyg6+E1U2L+w+mjtymA110uK7TrvjPpNulMMiosOSy9bAplXiW9CIRUM2HjlzgaFqiqYD3yLFSGrqwLp04fCDgIIiA7MkHfLob9+nBKQYNC9bNeJJ+3xKBE1g9hrKuuVNZqAmY64z2lX+ZLIc6ONkX3mu7IAI4C0gPkZHQi9oKf1FCdWkb4zgiT9J4kadcDWpRdI5y4caBSejByapC2TVDAPZ+1SfdaZ+NYA0oCJjkem53RnfgYI6RGUr9II\\/s+F57I0jucs235fIw\\/SO9IHHcpsuMbBofTk\\/bYz1h\\/yPgpkQLddLzCJ7sRL\\/LVk25EWdYHqJIhKCVPyvcnF9iAeHbjO1fKN1hnVM65JfNt1AiWP7Zj2zdN+gfVswBFHHWz7cj5ynhZkHwJuHCWy37UFd+Ly1pkOp8ffO0AyQ4uudf0e6HuPqh3704FWxPh9ucHyJxDSUUKc2iGpjauJmr8FfmplEXl9hYKEXt77pvlVuo9la+Ab1SSr9HeuBSfkMj3Jg0rR8na5GFUaIFYqdkkK8\\/TatIUOtHHYuiIHSjljlr5SUxalqHPoqxApc5mTfYy4I8SsC0jAY0DDa0lhJavIJhkGQJbLo7FjTZIm+4RlieQg0i+RTZB\\/y4x\\/NHbdBbs7WtAxovuzCnOYFBvsayQdqajwln9f7fyLR3yNpww+ovTB3eNJsllZfaXnfTsDuw\\/NhSgwN73C4DUXCfpYigM9D46485lFGu86dLKDEUayBVTffE8JCu5M+jNHvsBha2XlOBqowakBwuYuUUgdRgoOwrsk6ovgK0NyHaX5TxhrvyN1472adNK8S9Q1AnrM691F9SD59\\/Wn+d+kkenwFB+wPaNMa0tKGeYy5DAVTMZtqbCf1qUnea7bd+J1R+IulpIB3Bb85JXUN+c90MWw+uVUByB9hDmrHxCCj5ZsHkV4ObM9daEO0cIvC8YNaOB9BnZCq78Q4kkRl5V6x9w4V\\/I5uw54hDyd9Mf3bbJx4aB3JbA2XNF4pna9oJKF9tjnuTGQ21wT2YFQn3E5vOBxUaZykGZtoAA0qVOic6PyrvrzLlrk8Yb3tM95HNFDuOgd2cNeBxhUJEjnNkpxMsdagWb+rSvp7va\\/dZFnuGbpzqjW9SgTLdwpy7J28YWamcHxnc8UIMCwmTy0k8TU8xdJhnfa2j5qVq2VxhDs0VgsiqQHtqBdRA2r57r0y98Q94jsZmOjFevuluzJy6Y3Yy\\/2+OW+NMcET6WZhkY2XsS9wH9DCmHcmgaJfK+ImmnHvxuprkIGBj+QK7Qr7RJWe8T5tgvgNNEKsSZRw+38PmWoL78ZcYV2Zs0slLG7bQD9xHArhig5NZ\\/qgwP0ggCTxct1p3JEL0OWU2NhUNytujdJtcLVgyXjPOSefmdyMl9pFXR9omW7vOiFyEqfzGv9R9dnlqcDiKDo2G3Z0VqGPyVbc1xq\\/W5GfSaUikHkBZIRmj6GZogxCTwJbVyC1MDYAHx+irI7wQAsC2vpi1EoFPCW+bI\\/XIc9CQfEsa0qsQIiWclvYyMYfSF09yZ+z+t7qw\\/33HVCm4iph0WbtE7ARiYsliTqiIn1PQKawMtXx4SB7R8CUvtpSrNE6uMumFjz+z2kdg9OEMMYbnCb1ocwdRnJSJNsvmtwlf6uwvB\\/n28+8QqrL\\/cvsIR3NT0fqotljFp3QbStdsYPHQFr2CLUVKtGJUudTUw7TZgtqf5JaPF8ODLpP9hVfqzp5+SpVibxHr22SgNxDTiZlIKjxMKggZGQ9RpSH3nFTHHyhgjnmdzwq+VysAKYjon4qjbsZd2ba6CHlOJqmdmuLZp75FVBizRqonMr6H2q51ImUZcdC4xB8SqdDKLvAHbn7hxBq6fsXfwNXh32+pgchYWzfa07l57rC1lV3WV3bP6edmj8TwdT93hv3U2gjxtKkmbBFQuzbcx69MemB7mdshc0GiHsmMnqH5HYKGTQu55G0byXRxT\\/gKLsRaT2r4GSpUyTXEuZrE44WMu7dGW74ph54JrOp2kumHHKe8wlRjllLvUh57yGMJm0AmPpoVLJ7FGSM781w83xExnS5ISbTCzMNGnxM7VFCPt\\/uCtcyDul6X+1p\\/\\/JZAT\\/qmFtftEkCTCgw43OTkz1MtQUnnmeXHptGlqg8SkIiMzzCbKIANIR8cTiiSMKUe3R1F2XH5cAo886bIfXG6H9At3ryqJ6lxl2u0kHoRU9CMv8YUnaegh0Glyk+FD9TMCLGq1qM\\/d+rrUrO5BJ\\/UYVDa+a7i5TdQg\\/c2RqqCSXAjr65DfH2vLcJO8GLGdh\\/US++t+AbcuGQLXrDNGeK7E31kmQ3hsan9bwnf0bev7JoU3LMJy34wXGB2UxvhjQPtUXm7ii6NAuUusU4P0AyHQBoWKNCQ\\/BmOJzmPKiDMMT54Mc5GiWUDlT2aoI+YyTNoUdnELzo+j2N6YYB+XWJiS1RYpulyzN8hRpnzi2Z4iKSPmMi3JjLeVdB58ua3By9poWBK8ahhcOKLmQezn9\\/MQUwO96FPOZRLx1ihEohOXW71\\/J1zvTO+P8+QdyciAqEQZ\\/K0vlEMBzaX\\/P0Y+TicfcAZ5sgMDgnWggAJH\\/syF63McBEJpwKoPSKi8rL\\/TttFkskl20+rbDSEtByJXqXi+gFYPu9lncTXIBZ2jvEhejpVGJnlu\\/E=\",\"cypher\":2}";
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.4.0) WindVane/8.6.1 Shuqi-Lite (iPhone10,1__shuqi__v1.0.4.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=CZFLtfVLOliAszV8CU%2Fw6JXEAaj47NE2&net_env=4g&placeid=111111&user_id=2035402677&sn=672A1BCEEB540C2B9FDA8CB559716B5609C3E3E8&msv=10.0.0&brand=Apple&imei=01B6488CF5B39A21F6EE838B00C643845FCA6C86&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM1NDAyNjc3IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wMUI2NDg4Q0Y1QjM5QTIxRjZFRTgzOEIwMEM2NDM4NDVGQ0E2Qzg2Iiwic24iOiJmYXN0XzY3MkExQkNFRUI1NDBDMkI5RkRBOENCNTU5NzE2QjU2MDlDM0UzRTgiLCJleHAiOjE2MzI3NTcwOTcsInVzZXJJZCI6IjIwMzU0MDI2NzciLCJpYXQiOjE2MzIyMzg2OTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.xoeMxk6Nrdtp6hhiW_Ih_hdWSK5w_isu4fN8P_1m-SUXzF8_ldA-c_10Lr7NW8xMcIB2BE5mYi6Kf42DZggx6Q&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone8&wh=750x1334&utype=vip&utdid=YUn8U1m%2FHJcDAHKhDbqj6Msy&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1837",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1632238745&position=601&signInType=1&wua=ktgi_uSM6DELIb3OrWuXbmvQEiduIOZFEIPsnbLFlX6CqwMfo3Ut2j984f0qQpcRgFloApQge5F3t7cpm%2FQpfSRoUYOiOwcm4RDzNE%2Bu84xm01WiVTNGROhhS3bMHPRyDR2plomSMCsT2X0QrMMsvSwltC%2BQzcqvM9G1qw95bxPIxv%2B39MTf8%2F%2BinYQuzKjPnrp4JX7UBRKZ6%2Bgo66qG4ePm6Gd4wemMNPm0ydiBmTGtJAy3Es1vWh6qamRJvyZvggfjPG4u3mbVbzO7po4ajCvfOUCTBYGPgwtdFcO%2BnMmwd56H%2Bk%2Buqz4x3R%2FLQz1LbFt86EGZ6MulVX81O7hASVUcx9bFRUDimh6Lfm5yvGbw41eE%3D&ua=&miniWua=HHnB_dad6vPL2syiG%2BjOVNk%2FVov3rgyKiBxWy2eBcG8cAEoBxnJP1XQ5YgIf6wz5l9E1%2BrpqUFnN%2F8Dj0sPVoGyDjZURiN9qSWvSv0yItxv8cbwkB2r9sRkE3hmDgfUPfIvoX&userId=2035402677&umidtoken=CZFLtfVLOliAszV8CU%2Fw6JXEAaj47NE2&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.4.0&placeId=111111&timestamp=1632238745&sqSv=1.0&sign=2942d1c039ed0e1f9ce13ab701b47263&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DCZFLtfVLOliAszV8CU%252Fw6JXEAaj47NE2%26net_env%3D4g%26placeid%3D111111%26user_id%3D2035402677%26sn%3D672A1BCEEB540C2B9FDA8CB559716B5609C3E3E8%26msv%3D10.0.0%26brand%3DApple%26imei%3D01B6488CF5B39A21F6EE838B00C643845FCA6C86%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM1NDAyNjc3IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wMUI2NDg4Q0Y1QjM5QTIxRjZFRTgzOEIwMEM2NDM4NDVGQ0E2Qzg2Iiwic24iOiJmYXN0XzY3MkExQkNFRUI1NDBDMkI5RkRBOENCNTU5NzE2QjU2MDlDM0UzRTgiLCJleHAiOjE2MzI3NTcwOTcsInVzZXJJZCI6IjIwMzU0MDI2NzciLCJpYXQiOjE2MzIyMzg2OTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.xoeMxk6Nrdtp6hhiW_Ih_hdWSK5w_isu4fN8P_1m-SUXzF8_ldA-c_10Lr7NW8xMcIB2BE5mYi6Kf42DZggx6Q%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYUn8U1m%252FHJcDAHKhDbqj6Msy%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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



