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
//签到，视频426，
//极速版签到，阅读
    
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
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page/?serviceWorkerOn=1&hideNavBar=1&from=ShuqiTab&sdk=14.3&utdid=YTw5IwTqIv0DALcuKATNyebg&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2044136133&sn=82EA9AAC48A62C3475BFECD806DD4457CA988409&umidtoken=47NL0EBLOr11jzV7028wRZf1PzUY3GmN&msv=8.0.0&brand=Apple&imei=87BE4BB022CF0E78E58436E96675FE4F01E7518F&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiODdCRTRCQjAyMkNGMEU3OEU1ODQzNkU5NjY3NUZFNEYwMUU3NTE4RiIsInNuIjoiODJFQTlBQUM0OEE2MkMzNDc1QkZFQ0Q4MDZERDQ0NTdDQTk4ODQwOSIsImV4cCI6MTYzMjI4NzI5OSwidXNlcklkIjoiMjA0NDEzNjEzMyIsImlhdCI6MTYzMTc2ODg5OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.EcvCfNzs3mgJ8rk4DZUSXyG1zN4DaMY-SOe9Ht4l7OF6_vcWJTt3obI8n-35c6c6exReb0hOIcX2BADy3Vokzg&skinColor=23B383&platform=iOS&ver=201102&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "3838",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1631768905&position=501&userId=2044136133&signInType=1&wua=HIVW_ZPddLAcd%2FoixezEBgZk8%2FxDMlQmVaoC11GHpskCpWSD7PWEqEFSX8einxDBCh%2FQjUw4YrYCDWiP8ek7nzp0okTLzMIu1ZfoHYs%2BoScJB4ZSok2FGR%2FesoXAxanx0yjhF%2FGVXDo0EYGM12x0ZMyZQCP8cUBDocjbKD1hUM3cfT0%2Bwkh2zX1WqXHb8xwLpOkJLRt8Rc3unqbyfu1VOBFjdEGqbzE11uKpgAExJj5xRB56GD2bkILIHnPUTm0c70kY33G4k%2B%2BaqPEPQEYXBRQwuNdLMiiHJCF4l1nEUiVOyvoert6phiGlduHrrER39lpCe5gtO9UoFecB8cHs435BlQM9ptSFs%2FAw7gAl%2FvNwHvkCYayf8ZcHf6dM0WNHEcPiqunPPGy5gsumIpR1guNtBnQ%3D%3D&ua=140%23cBSdxTtCzzWDtzo2%2BQJsKtN8s7a6ij7EulQc0pIIXlK%2BqekoIuASrzxCxgQWYSsgDLgqlbzxgi0%2BWfiLzFc%2Bi1HalpTzzPzbVXlqlbrxbPU%2BV3hqabzi228%2B3Q%2FR8HBP2IwNfm7cOuF9yG7%2BSW4hkGZAgDcVJF5%2Bswrqx3pyQ7D28bMvSg1gFc7QYGUA0VL6MjotehuZGuE4bmgLZrpoiFjWSi11O896mG5kpD2mj1%2Bp3PU7zqtPp0QveqRwCvvB8xuGBIcGIK9Bs8gjAZ3oPpZxrsfLJ%2BjBqHaKZdA0%2Fvz9%2F5D6Efh6YphyWoarp8hdHQa39mq1Lb2nEATo6EYQ3OZrjB4b76%2FUe1KttH3wgSKmyNGYmN20WPAfEA66LNKG7IHKu%2BDT3Oxohs4p1Mopw%2FlkBEKvG4kpnaPfRkCvcs3mALoerQM272Rvz1Gpt0%2FzJ3PPD4g1ede%2F%2BAiqPYok9yC4NrdqNV%2BjWRPqXfPz7So%2FzBgwp46D4I9DMM6i727Cj00IlxBICrjcsDLqEERhxkWOdxLpAYgn8jvFh%2BpwjY2VO9hxb5r5Zmuaih2lrVbBCUkGDNu4K8MEwFpOMo5cZlNv8Ly6BcAvNkW2sWoUN18ypH1%2BA6sx%2BvzY7RtVCmhnnS4BY5bIKqXfR9P7M1fZowLmfDzbEBYIipJ0y5TNEFkEImX%2BlPnjM%2Be%2F%2BYiPfzC0oYQ4zqv56zm1VRQxAImXyYfk9%2B0pbUQ%2FGkWtLsSsPTZDDHV1qrRUv8hWZOsIllmkNsz6w6CNNt0jwFZrSlE5%2BGon5327P0m0X2frNmbHXP%2B%2BYtBfutQF9daUcH9equCp4aZSIEh%2B156PzERsIHnIF1QM%2Bog%2FvFsZdomtyqxAxBsZ0yRHiKiXkaL3UOiGT74Pl%2F3Tkfs4Q9CwpyKVC2AWMVDPnrR2%2B5%2Ff8z%2Bz3HYinlTcgxy2ldOBN6Gibfy7%2BoDHFyYkj%2BW3m%2BqLvkyRXE96KW0fsEBmOs2OwyXD6xQtm4h2BkFNuw68dOSz7zKYDfQhjCenXADKkb8GSopp1DjHOVXmPfsJrWIBCkEbMezFIAMkeYjO6653GoYgNSmWfltl5CFkJ5nD0M22T5lVgHl5ImpQJAMSjtccRiuMxHPTcB2ZHXTEk2s94xSpMdTkGrubCv6odxfEV9OIIdWR1%2FXGGIc07Lz60M5WOaVwDk3XhgN%2FwruDvCW%2BVUxJr1m8%2FLHJQfvW8Qrr%2F94sZNfj512HfuAZG1QpALy36zFAidawRELmH%2FqLAeriiJOzaWn0aYUExkbtx%2FClOiEZbTvx%2Fs3ajWxCtj%2B1rlCA1euivkAql%2BCKfZq6UXM%2B4tqw1N05YB7le%2Bk%2BE1nj1DBjDPUs8B1XguFMu%2BGNBB1m7PdyP2tuh%2B3TwVoGQH0w4rO3sShy8%2F5lv3UzMjt2ppbs81tUUC0HPoMW9xIud2GZrkXqlg2xnXLPiyWVc83zQsQNYjavJuwHjPLS3J%2BlGbjgwWXAytp2JaKwR41%2FDRS1xZRwoS0SgYBGXD%2FoW5alOW%2B3o7HUYgHYNIAFZp2SBSsQH3OXNgCuPz3IG%2FglL39cXjc8Yd%2FZR2gJLCQfM5liHYNptmKFvEqeXDfhCcASEZbCBf0V5zrSz3N6RpFdydiuHsvQdJ%2FJs8HMpHuDZRZHX1vDlq1mI3xXpRRlyVZ9dOkp%2FpOLcTrwzQmPBhOyBappGUuZDyoEU%2FcVpQ2bLEJ42g9FmhXLM8T07eF%3D&miniWua=HHnB_EwlwHf%2BAA9Af4dGLrUfKFkmZMd53j%2BmsIdtDeyrLQMKeAI97RpCj2aeucPMBigRFfLnFqzrwS3UgqdCDx5H2QCoY9kxA9Cd9jo1nuHC%2Fw8C%2BFtLg4U%2F1wTTmZ%2BmfebM%2BdViLkZzL0kRH3sc%2Bh2gL4g%3D%3D&umidtoken=47NL0EBLOr11jzV7028wRZf1PzUY3GmN&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=f6d3aa510d521643bcdcff5b779360e8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26hideNavBar%3D1%26from%3DShuqiTab%26sdk%3D14.3%26utdid%3DYTw5IwTqIv0DALcuKATNyebg%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2044136133%26sn%3D82EA9AAC48A62C3475BFECD806DD4457CA988409%26umidtoken%3D47NL0EBLOr11jzV7028wRZf1PzUY3GmN%26msv%3D8.0.0%26brand%3DApple%26imei%3D87BE4BB022CF0E78E58436E96675FE4F01E7518F%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiODdCRTRCQjAyMkNGMEU3OEU1ODQzNkU5NjY3NUZFNEYwMUU3NTE4RiIsInNuIjoiODJFQTlBQUM0OEE2MkMzNDc1QkZFQ0Q4MDZERDQ0NTdDQTk4ODQwOSIsImV4cCI6MTYzMjI4NzI5OSwidXNlcklkIjoiMjA0NDEzNjEzMyIsImlhdCI6MTYzMTc2ODg5OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.EcvCfNzs3mgJ8rk4DZUSXyG1zN4DaMY-SOe9Ht4l7OF6_vcWJTt3obI8n-35c6c6exReb0hOIcX2BADy3Vokzg%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
  
//111
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
    "Content-Length": "4766",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "{\"message\":\"2mlRrhTiUYmZbCzhfi6XsQCy8UvpfT0ooEnqZHsPUAkF7YA3kOJnHiZ5eFM\\/5qeNEju1+6L7mftJyWFZXonaWEzAwm0pfpVm82s\\/LBqzSJfVNQr6mZvzOQHfS4StlOxlSdwzibxgRQ3pS5hEd+UF4pMk5E7Kee26DyTpMeVbj\\/eYnsOJH6wIK48b3847UdR+yRcTN4Mjtpgk50eiWbiGX42VT+AYI\\/Qw+ZSZxlrv6TjOXzjuZBHIyI8z+c2w25NniNSZmL8rfKxCzfwc2fJNhX5EQhYjVaLJ6HUPzc+6v6sOibt3NtO6uQCDVt9yP9oyNrYeCK3BM1OKV8E6azibzSgBzIqotWxrmNzpLef4lK71WKsdusPKNoyofYzM6WtmLQdOEKVK19mfKRutji6OPSc6Nm78DHtOcx1zlPwpMrSYShXRR\\/\\/dggYCibEo4FOovlxALVMtKVzEB2C8syYEzZUPbtX3qS4lK\\/3vWkVhQu5npyhZUFS31n7wah2Y8t8JVRTfXDBTC47xKcuS9J9xMA9fPtIMVJERIridfvtzsP4jm+jJKXtFD\\/AuwaF0c9T9\\/PNKkyoKk+xHhO821Zq6TlCgjhrKg1uJPwhiXa75dDKvzOv7DFvv47kje2jZYTQ3L4rFAjQ+843UbbRkHdyf+0iDqDSQkCVLD36lC03XbqAZSXISmQ9w7xaQfODvIvBg8LP6KzD64VlJsN5c3Q\\/b+RrYTjATnlpeNJaf9HaWkiLORs4lLyQxnU6p3BiAaUMnyTxYkOI7xek44\\/mdKvONBZf+U1mUQxO9wIFpfx8xZxzgpT0sFRlvDxhETAJ3S7oiTuAKQXY\\/VLOfVg96fPTaw1i1eOeGdbhcUj6a01CtNhPk9vrxW24lGnSmMkPVvfjgtceQ2xLUvTZ7g162F7Oz3Cg0Z6nAi9DmZ+vIPaJamS7XsFv2YfL0llSHohQjAWvIFxHcXDYi7SFikvGFkjC37E2xtMu03kGPrEoc\\/8jJx0lX3WK4NP+Zkgy5kMGRbE12bd3rviNwAgGw\\/C6DWifsrrRSPZDEMjid1PHnwv7b4YZeD2eF8bU3r5DtB0jNLcjGG\\/ewUozuOOkQFse3Rbm0il8dMCxZBtVxjwhBFtcw+yNH8\\/YyhEdHKKJYWvbRhPuAll9lyFTaZaF\\/pMdlj0eQL2dBE4Y3Ybcp8D8VVkx6ryG4b6CqY+SIr9titxZ02\\/VzJKa73jn5HXVhmBXUQrM79llE2Islms\\/N4pG2bbhWh6vfQbwqXUmvyyfGwmewKyc7IvFhcf2W3q1pWLGb7ph9pYy+kn4lZOeg0\\/jULH9oliNgAuRko2orKPs1VNZ\\/YoGGMfuXQetcMAWyOKl1c0OTuhsdx31IZrbWIua1m0ajjvhGlm9j3pWQte3kLwcQK\\/sQPP5+LoWediRrK7GxMtBdrCeYBea2HQDnRiM4KrNLU8tqCrJPQNvx1ccU4QU+PrtzP52AMAmTowV8a6jyNdX3NTiSNeJrTJ8FrEkfdgjDoXS\\/Q04FF63LQG\\/5+iAq8CzJ+YnU5OM9x1oXy5ApVclS\\/Tt5T5+Ij8dMEchx398Ps7psFwrolTKJJ7Ntz5YPqNVOXPD7N6BD4fpcAyBunlrkw8IhpkuPXIEYpXoFZRUsNEznhVJIJVaAuqbMwVseN7L641Zoo1q4oVP3BV+IgMl3ZdNi0zdCHklIwPYqKBjEW2HDuYNQ0vU7RVDJXr9\\/6P5qqUW1V1bsFH3XF5iaqbZBDqn\\/UQoJW1Mc\\/SxqCsoLuJqYt15MqgSQDD2i8fJOCfMHIz2N1FtRopwKQPfmZm2qNlIyy8GknoKpRjaWf7KoDCYTnwiWG2n600AL9UPSkS\\/Lf79e7XGvAP4s+yKBWFAfiz7H3SeNgM7ktAasU2\\/Eq0yc+H+\\/2a0DFKPCMdDCRi0AwOPnGrBBVnOP9mmRU1ohfoq8IIzHj8nCuWhMAZP\\/+hROjzRrxYrxIqwG7I3SfdT3cfyzmy3lscuh9Eu7XgtMuP\\/2rBENPoCu0ZjZDChqZCENDZfu1\\/idsm3OnnDRGJGsX3QgD4aw9Sipr5EHv6Ma2mngFbJ2p40JvMdD3x3uC65ZuVgHlP8sjV6\\/kJPaf4QUwITD1Nm6y21mK+E2GBsuLqE5gdaZ3f\\/NZcRginhvtxrW6q28wyIPvFztSFIrycxILRbsVu01UEZGVHNeHJmUv313HBDrnzS1Ph2+Oq+J6IF0YvZZDl5hOn\\/ZvbTBiyalTg1hRQ8aQk7PsCxr72ctaDXJNFxLQElJTdejKweALnEUC1vBK08u+UYyjKECjpD0A9EfOlmZOd\\/QxmdYyw3hAJJj83nKTnZKPkMDH2Ex1Jj1L3o9O1lpKj4JN5jzYm\\/t2kGDw99oFgAfeI\\/euFWFUUjxr84XyXr39GS+gwp6Tj4wjh18WGt4bCk4+O5mNiOA88aEF09kwIqMt3iQZzvfYNoF0kze8wo0RIOrOzqegdiH\\/eWrQBYJGfwy4rw5TQMowRHm6CPXnBw4B0e3T+pei8wqqAC6FUu2zjTXsY08PY9gvqnGpwJwUwgEWK+2Wx3FnpXIHfLb7n8tnSGOn9+eAyHwkHHjnkS0Q99lDwpubOMCSJo4iZ\\/GiBHfx1\\/2vPnL3DilgtIpCUCxA3iHySfMcJF8lAWq42h6NjEQZUYD8ch7uh1pjHq7GVXzE4QzUKlh1COeop37rrsZ07aQfnZOjIw9m+jZWDk4hfSs1hNwBAYUNk8Ddh4kOBU3WK87LHLY1vNhbmMiTN3UrfgUq2UHYSWIF5MSkWJiFRF6RMoWMwCc+\\/1IoofoN6EwynQIPQVV+FtEI9GASx8rhJNO4od5vP7Biui5\\/Zr8eF5fdsTrhCrCZ\\/G2uhmtBeyybw9vixh6KM7gNNMGTugNvz2lm0FZfi2CJUe\\/aG5hJjOuX4spIid6GXhIqpKy9RdTHsnj7vdu7ukWLMT0n48YevHybB3wvq96tSXpXHeZUyVMBxCYLHjlBNuFnExYmvv10udmsUg9tSKpaiLJgb6y\\/lk7OwJvUSQK\\/k4LfPn6X+9FwQF5RYlVuavjzTbh\\/Sb9OSUUZJgmc7hJfZ9uBT54x3dpd+EBTBpnsjBY5r1Bm3Kbq3Ri03UvbObnB7xl1Y4DOu2zyGflR7q3WijC3nt3YAkNUmmMH2DrxJSL\\/cqSlwTYNFeZDlKt1ap7NR5c+NUcS1FrjBKNk\\/NUJ8qVgH9D0Mq9Nd1w2dRi9QC7ftoitPsC2Fetpa9KDa9Ie1dZrmswoDQ7TCsXgBMGmbgaUuldjAJDrJ5aEGs8F6eaGdvi9fNiebjiJfZfvcCIn66tM+b5eoyE6V+WYRuDZFG6MSZ6JCNr35CI58mbPq5wW2yTe4IKmi7CIkLUqOMsdjqWAGinSLWc\\/qXp1xUSFiY3KpD6vikhxVQkmpk6V4Y6wE+tAJhbQecl2zFndSF12dznrQ93SrqO4KTYdajuK4PxW+FZ9\\/I+dfWHkfQJU3FUGZZI+EQ1+3Tf6JBtF6aLVkGJ8bP7zYUItEqUtjSy87oXuyfmf7uiNzuFMhsx6RBqkH2XxNEaY8fk4\\/c9p5qpNQvTj0+34U\\/pftxbEviSBASS8CvJATY59u6RA\\/dGjoHSRyiquHpJH2Byet6ezVwaZMGgWacmi0eY5nnSTFEXGbSMPDf82tkpfMJakOJYr1bnltlHEqsg4ftZAAVoet2NUUSz5D6HNq7wuKv2I0FauGPswrl5BISLePWZXG5yo0AMmY6J3l66NnQQLoXwBWHmH\\/SLxtd6GiJqDG65550bUyUFvJT4N9m1D1eEJl5c97yD\\/b7NjC+oWjaWdrdveBe2X88tYDkA\\/tUhHf4GTIRqPzEJaNAzu9rlkPv6AzqAYCkfkCa04AAX1i0GwSncujX2eUmD+9vtuynqVRAmdV26Y4pgzvrIolhFUWWu\\/KsrqTp8rAaCm5AjXY5QxcnYbvRfPd4lrMw+LupVsHMFhAcWFA3Y1ex9yhWw7Gbps5EUfSO7XHaEuofmX\\/N5lUi0Jug3hoCjoSIMLd7pltdM7FR2P6UfU\\/5kfqe3eFUVyr4LJEfS1GOYK8ZjWBpeNMFmE4y4uPfK6QuDnCHnd8V5lWALq9X1ROwU6ly8KsjD9EZC++HWJIXFDHIf3qw+VImenJn0ZvYluUfbq\\/WoeaAAMObolw9nf7FYUqHUxvhF++1ljUjNv+Mxwo63T2+jEoe6\\/6FW52li5byI7RXPrsLoHHMVaUMPFEX2g4iO46GQeVC7ieP+nG6Nf\\/hDET9HBwan9Sh5EkEVskPuoI\\/CIeUIscDeMmmQ7i7EEdl4BSgc84aogTzm5NU6eyJrKFapbCQAd2T5mWFP5WXBy3lKE4zF9DhbqW8PSjXDsZ0ww13w\\/lJni7QD\\/beWR+QWZBxR+3a86uSU4U37sw8eVfIJDdXWyiTwV+Lv8HnBx8yzNdeAn35QjrWEoglEOcLXr063bceVnoTATknZ\\/3MTrk9mCxaXL0nVIMA1Ro31+QZaGtE3V5fiQwe4jghJjhi5f58AZU+tlW\\/Rb9H43w7umuIATEobPYDdd2C1wY4HvH+6qKn\\/rAWffApXZDozod0p351skLywfizNxkcQI2lgzb+pXNYvIm4LoOrnjDD8F+IxS+Aw2pcqG4+Mg2XGjCiEEHDSQBKjkW69EYSQ8B6fdaRQ=\",\"cypher\":2}";
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


//111
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
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page/?serviceWorkerOn=1&hideNavBar=1&from=ShuqiTab&upf=20363&sdk=14.3&utdid=YQ%2FYZWdAvqMDAKM%2FiFXyqqma&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2126444763&sn=C26EE3EBD0766A4CC59F848954C6CB7CA38E54DF&umidtoken=PTxLwAdLOuB5gjV70ogZObHSxI3L0W%2BE&msv=8.0.0&brand=Apple&imei=6745B60E81789B372E03EE0A15627C2951D7098E&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiIiLCJpbWVpIjoiNjc0NUI2MEU4MTc4OUIzNzJFMDNFRTBBMTU2MjdDMjk1MUQ3MDk4RSIsInNuIjoiQzI2RUUzRUJEMDc2NkE0Q0M1OUY4NDg5NTRDNkNCN0NBMzhFNTRERiIsImV4cCI6MTYzMTg1NDQ3OSwidXNlcklkIjoiMjEyNjQ0NDc2MyIsImlhdCI6MTYzMTMzNjA3OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0._6R2vE7hhzo4JyfF6ajH0BE7BVQFEhWBhKGZnuZQOHXu_P17bnPUofiEDud6-d83qhXBZWcuX4cb0Vuflw-vuw&skinColor=23B383&platform=iOS&ver=201102&mod=iPhone8&statusBarHeight=20.000000&skinVersion=1&wh=750x1334&soft_id=21&utype=vip&skinId=999&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "4704",
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=262&wua=HIVW_j5CCq1fqtQNqCZdF0uIHjYc5cMCmvdzJuYWgMNMDeXSPjwBiFs%2BbGgZJqiEXqUy%2B8wxp%2BM4CatpMTKCA0ELH3DriexlaPfdRVDYxBpenEptgd0IKjZ6UluZp%2BF5POz05aU8nuDUyKv2qQ6n46yYJ9MO2G8ewj84QJ86tz6b%2FSQzZwca%2Fd7dUZcm3W6wDaFScXMORfjl%2FukN1d8%2B96VWwp6h1tpT4qpdGOlg6YbH4bRyrqTJcUHq5lG2xm6W%2F3HRh%2BKf8zd3hQY%2BSw%2FbieFU7nzoGng0F7qe20zsWnIVWb2Kud6k2vAiCM66U0j4w3G5IvDGXEVVDkm2%2FoeNtQaff1b9wG7%2BpteTnTDi58dO5bj1R8jWZz2Xdq2j8UbGEHQENKbvVNPeRzewmEB645qU%2FHg%3D%3D&ua=140%23a8scWEGkzzFYuzo2lz30s3%2Fqc73bNvCGna%2FQZGzbnuL%2FeZIpvSoVgTHLr9TFXw1oChfaRSG9AqbnKOEFHLpkJwMfdK7oRNandR%2BZtD6Sqm9NtsK7kDXJzOukiL3mcrh8MRib7ARba2Rm%2BXjyJZ63ayOgeM9H0ZjWyXUjsDYcnhF4Lnic3EAgOHxKlcxRuT%2BCYROTfCGnUmdN0dsLrMKmxtWx8J8h4SvF77Yy92WXoHQ0GcGXvq6Ezu0pSVyYym%2BKRvksmeYjfOv4CbYfyZueMhiUklSVSGV4FrkHxKCR%2FNH0OS%2Brj2TO%2BuBtCgvjKNsbSV0V0eqL5%2B3W9fmffdsX2epJA%2FKeSPw%2FQ%2FAtpeW3ZdGQqhQ4PZZD58jCFV4g8OrxRUvSGyAz0Q38M3hqzznkxSNHFM2zzZovbHVtlzzx2DD3VthqzFr2zOaml61zaIzipmZQuXFDDe3oP3h%2FLSSb12Y4lTNxz8c1b1mqlbzzQPc3uLGCFFcsm283l6Tz%2BIrbbuBqIbrx2DD373hquQbi01Y4lp1zzrOiVu7XUfQx2PD3VqBvzzxv2t7Blp1zzrSiVXgBUSQx2PD3Vq%2F0zD3v2P2VlpTzzDxUV28KVbd32Pc3Vtg9zFozL28blpTzzDxqV28wyzd32Pc3VtgMzFxPBOEFlpTzzDx2V2ENmb%2BxvI8%2BVtg%2Fzx2i2mBNlbfDzPd3Mp2JmzrzjkI%2BVZbBzFdCE2eSl3MzIwo%2FVD%2FoQzdWFDxCA3EuiFzzXXQ9epuxfrzbAyCqlb6O2Fj%2BVtYonzDL218%2BYD6xzBbSV2l%2FlQzR2Po1%2Fth%2FJ%2Bby2X8GbOmCz8rbQqBqDb2x2nuV2pGfoQri22U31qzxzoXnY6P0MI2y7yDY5anrHRqjELrEilhjY3rVbdr8kR%2FaaIy0CuntWFnloffnbE6zjJo7vRwj%2BvlZO3tQEFNozFdyBIyYxdRNJBfgUp52YBm0u%2BD7avTg80lpRx9uG8aCvNv3%2FMUcLzTMIBnEd9XHY24xaR%2B0GRm70tIWp%2BeEpvl4b2%2B9H%2BdzOaDpfkDzR0j%2B%2BwF8p3p1NvtI2hYGArLRBntV6tNOEwdH6nMDCiXeK0iRDfY4NJHquRx6iCeE%2Bt3ilMFKrDgGc0ihnukm%2Bt3DkRRIjVs0JCCAeb37Ugq5781LP3GsCWfLkRxwxP2pMjdOZa1XQIsq4JJ3Ox3A8qmoROo8vdowJGMWwEATVcCUZUuRYaDPtO4UOP5urI9NdpmJnZ7jIAHtQ1CEzplLyoUUb5jHeGYl7U4KP7rMd%2FH4NTx25MdgRukPFOVFQz1Rl9JPjrC8oD5cvTP729mxx7bhCTy%2FcP24qDm%2BFkTefjotTf1OHjfLmYxDnP4Lkl5nUu7znc3EJXONt7LxpodTCuzE%2BbQ3zgKPKG8kPucjTmmTtJhi1XQcS3tyQIl5Pw31npcYFCrUELB04uRSkB50HGI5K%2FzWrInvv078cMeNjoOJDNS8L46lhFT4dC1MfFgBuuOkksrKyyR%2FZZCq2Xj7WZDMUwBy90TKWMkitQyAO%2BUjCKdyCYzsV%2BipEeExl7KvFmHMwMGEUF16dGvGK%2BKu3N9y7JdKKuhjVf5DKN%2F4XiUKCYUR7MKbibLIcKwqFhxi3%2BvAH7gCncGzFYtna%2FUvU3i3WH%2FEi7xd34I%2BhulqzKnsb%2FdrBX4YLL57s%2Fpt1ao306kflwdyTss4WDZroDyldh4QECKI1v3xnLdCA1k%2FphCZ%2FOn17YL28K8Fj%2Blup8UfgUdpsBizkk6v2mGqIk31M1UYJ9qyaeuhX%2BrToq64GGFG4dM3YZOauPenc46mi1gl%2FnxQafKMwAjjGlOI3FyNS16dVm%2FRyHSOiXJGsCfEBLc98rsWV4x1J1q0bKYKk%2FYntSmqGNBYqKGFfH7iPfNfVfIaqID%2Fj6MY1zyf7aO0lS2XNcxMuAcUL6VB3eJnJ6J5WICOfS6vM7A2NonAIdsq2KgqqLFJ5%2BBTPNlxSzdbKpzfM2FnJPjP5LZ9RFS0sm5Opra4C%2BaxaEeUCunPtwT80xB00oeNihFjJ6GNJkThvuQ39FSwNFg62c0D5trw3EcKZtOD%2BCtNSgYpH47qa3tq2UwwswEG3qLH2D1GAjIVOb5%2FqHb7eYdfZMbTiI7YBAJh4HzwiOT%2BcJhvLyCI1ITn0FTRLUNqzXkleoFdK53TEmIuuLoQBOL4idwKD4zGd98W9kP1ARYzUNs6EjjQ7bgnYIpMF6E2%2B8dTFjnJXaO2XmuqyCaLtj6b5qVn5HvoY2z8niuuOMZtWJm0%2BWvfvucrX55CP2JmXh2ikDE9%2BdhvGXNFqm44vkv3tng4VKbGUzY4As%2F2qiw4hRG4HnF4rskjeUpCuPzjyajGxufm%2BaMAsTUYdr9y3KNyGvDVCd%2FPRZuCymSlQiyg7Qw2kTRGgM6juw%2FRds1F9aw0Gi7x3o8TKiOqry8%2Fb%2FrreweYldg1z4JLuMxq4Y%2FSCwDisYr0D%2FRQxXa1%2F0o%2BbGsE83IDIQbto%2BjnXWzS&miniWua=HHnB_0ICdbBG%2Fgj9NS3b20%2FqqpytENijT65sWSPs%2BqhHtoOsEZNfWW654XhSWvB7p%2B%2F4q8g87pqnL7uaMA5C4f2yuWd0pMzAw7lLHk6sELQyv28Krl6zKVwOK9RZkCbHupJNcuAhwYPFiKuPbBpOuuBW%2BRw%3D%3D&userId=2126444763&umidtoken=PTxLwAdLOuB5gjV70ogZObHSxI3L0W%2BE&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.6.0&placeId=111111&timestamp=1631408697&sqSv=1.0&sign=9fdf152a7d8241a69ba4d7810e7c049c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26hideNavBar%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYQ%252FYZWdAvqMDAKM%252FiFXyqqma%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126444763%26sn%3DC26EE3EBD0766A4CC59F848954C6CB7CA38E54DF%26umidtoken%3DPTxLwAdLOuB5gjV70ogZObHSxI3L0W%252BE%26msv%3D8.0.0%26brand%3DApple%26imei%3D6745B60E81789B372E03EE0A15627C2951D7098E%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiIiLCJpbWVpIjoiNjc0NUI2MEU4MTc4OUIzNzJFMDNFRTBBMTU2MjdDMjk1MUQ3MDk4RSIsInNuIjoiQzI2RUUzRUJEMDc2NkE0Q0M1OUY4NDg5NTRDNkNCN0NBMzhFNTRERiIsImV4cCI6MTYzMTg1NDQ3OSwidXNlcklkIjoiMjEyNjQ0NDc2MyIsImlhdCI6MTYzMTMzNjA3OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0._6R2vE7hhzo4JyfF6ajH0BE7BVQFEhWBhKGZnuZQOHXu_P17bnPUofiEDud6-d83qhXBZWcuX4cb0Vuflw-vuw%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhone8%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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




//111
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
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=mFZLl7NLOsVYtjV709NHREz%2FPkqEakXR&net_env=wifi&placeid=111111&user_id=2044136133&sn=CCE87A06F2B1F47D663903C8C171FA7603DCB676&msv=10.0.0&brand=Apple&imei=DC6A889762EA396DE9133B0A31269B9E97EB1706&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9EQzZBODg5NzYyRUEzOTZERTkxMzNCMEEzMTI2OUI5RTk3RUIxNzA2Iiwic24iOiJmYXN0X0NDRTg3QTA2RjJCMUY0N0Q2NjM5MDNDOEMxNzFGQTc2MDNEQ0I2NzYiLCJleHAiOjE2MzE4NTU3MDIsInVzZXJJZCI6IjIwNDQxMzYxMzMiLCJpYXQiOjE2MzEzMzczMDIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.9YkaPXdjbWRkWeqGVIjnDyz9l_vWzN9jF2H7xdJBOAschGR8uW5XCv0KbMGGGQLD0_8wBY1JGt1163vCl9apvQ&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTw4563%2BWfwDAKlLqcf78uF%2F&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1895",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1631768971&position=601&signInType=1&wua=ktgi_yi%2FMQVF7LfEI%2F0G9BTN4PsDqY%2FmBSsXGN%2FOt3yU2lcCoTcbMAeGZN96DcMrKy1VTE%2FKwyi%2BIiJfhJGsJTM9Bs37RvPm2nJl1sONLiJKz1vMzxkNa2FhBgBnhN%2FiBvGSgIQoZJuce%2FkWb7co3YZtptBKHQChGKiDS5xiumJHKmTJzl19N%2FZinCd0K%2Bib5y6lBoYLR7gtqnuhUe4RWhpR1Ecc26jUzXHuBRiv8ro7aBdNcoZZxjIVPacum4%2Fd48r8etA5oyn0zDuVs%2Fm1paD3qwikr327%2Bj6Q2Qg7JaWjcp8L5tmKjFXgECO1WQZBcbG7jEPtZcVVTnfpX1N7El5OYl2E8Ko3E0v8hA%2B4IzcBRrzZnd95SDBq7J4eCXun12Vqm&ua=&miniWua=HHnB_5F0gdQh6uk2wkJhPnRerL9MMvjGZhQQByzH64GfLUgOUN9%2F5WkSBNH8kk2y%2BTCMuqgs%2FxwfpHBgizoHz228UU9ihS9ptoA0BwHGNJsmmZb2rddt3s1mAZ%2BZoXBv4QpBTy7eQ5PrY7pGObP3uDPA9Ig%3D%3D&userId=2044136133&umidtoken=mFZLl7NLOsVYtjV709NHREz%2FPkqEakXR&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.4.0&placeId=111111&timestamp=1631768971&sqSv=1.0&sign=532a1e2c866c7118a3d69956483b8f7f&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DmFZLl7NLOsVYtjV709NHREz%252FPkqEakXR%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2044136133%26sn%3DCCE87A06F2B1F47D663903C8C171FA7603DCB676%26msv%3D10.0.0%26brand%3DApple%26imei%3DDC6A889762EA396DE9133B0A31269B9E97EB1706%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9EQzZBODg5NzYyRUEzOTZERTkxMzNCMEEzMTI2OUI5RTk3RUIxNzA2Iiwic24iOiJmYXN0X0NDRTg3QTA2RjJCMUY0N0Q2NjM5MDNDOEMxNzFGQTc2MDNEQ0I2NzYiLCJleHAiOjE2MzE4NTU3MDIsInVzZXJJZCI6IjIwNDQxMzYxMzMiLCJpYXQiOjE2MzEzMzczMDIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.9YkaPXdjbWRkWeqGVIjnDyz9l_vWzN9jF2H7xdJBOAschGR8uW5XCv0KbMGGGQLD0_8wBY1JGt1163vCl9apvQ%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYTw4563%252BWfwDAKlLqcf78uF%252F%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
  


//111
function jsshucheng() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.3&ustatus=1&umidtoken=I9ZLo8pLOmhBKTV77VrP1lC5AlmRlrlq&net_env=4g&placeid=111111&user_id=2044136133&sn=CCE87A06F2B1F47D663903C8C171FA7603DCB676&msv=10.0.0&brand=Apple&imei=DC6A889762EA396DE9133B0A31269B9E97EB1706&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9EQzZBODg5NzYyRUEzOTZERTkxMzNCMEEzMTI2OUI5RTk3RUIxNzA2Iiwic24iOiJmYXN0X0NDRTg3QTA2RjJCMUY0N0Q2NjM5MDNDOEMxNzFGQTc2MDNEQ0I2NzYiLCJleHAiOjE2MzE4NTU3MDIsInVzZXJJZCI6IjIwNDQxMzYxMzMiLCJpYXQiOjE2MzEzMzczMDIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.9YkaPXdjbWRkWeqGVIjnDyz9l_vWzN9jF2H7xdJBOAschGR8uW5XCv0KbMGGGQLD0_8wBY1JGt1163vCl9apvQ&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTw4563%2BWfwDAKlLqcf78uF%2F&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/2.00)",
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


//111
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18C66 AliApp(shuqi/1.0.4.0) WindVane/8.6.1 Shuqi-Lite (iPhone10,1__shuqi__v1.0.4.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=YT1NqcEwK0kDAI%2BGL48c7Szp&net_env=wifi&placeid=111111&user_id=2126444763&sn=2C5A6C6F79EDEE477A8EE92D86B6FEC191D7782A&msv=10.0.0&brand=Apple&imei=C380A3F4FFAB32B625BC8EDA1FCD9ED4413D31C1&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9DMzgwQTNGNEZGQUIzMkI2MjVCQzhFREExRkNEOUVENDQxM0QzMUMxIiwic24iOiJmYXN0XzJDNUE2QzZGNzlFREVFNDc3QThFRTkyRDg2QjZGRUMxOTFENzc4MkEiLCJleHAiOjE2MzE5MjU5NjQsInVzZXJJZCI6IjIxMjY0NDQ3NjMiLCJpYXQiOjE2MzE0MDc1NjQsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.YgxrpaC60lAvT7_kqJgiRrGgHLakhW-Sx5UlRAUU3aNo8Sh_XyWieLh7xPNQig-BQo_LDj1HB22zDxtqj6n-4A&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone8&wh=750x1334&utype=vip&utdid=YT1NqcEwK0kDAI%2BGL48c7Szp&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1806",
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=327&wua=ktgi_pnul3phZvAedLAAcJf2S953RDl2HXVr3jZ6HC8bODbpLiT8fBoRsvnx8slIQRppL1G%2F%2BiATl%2F4yWhWVT2qjXFZsKleSaPmbGaifzKj0qXI6x9dHlME%2BRSfgsAOVWVBVaTg4%2BJwLnX2qNr8uPoAbobhvagiTCc5f2di2NPzXhKNEll49rrXwaQLTkDyQ%2B7WD3EaHiurU%2FV%2FD9MyrXgVjUdvHR79BwHHPLTVQYWEOfxXWJKVqiqfYbHaAw63U5pD7efCZ2ASi0yFU5vW6LZKjomDj5I%2BJw%2BbIPjimK2UBMYeETKuTkaxUwZjfDaPo98ic0gC%2F%2FsVf7%2FlGweRGK7m8Whh8ZnUCwIqp7esRSNBcpQiy7IQAPpwQmlMU6Dibb95%2B4&ua=&miniWua=HHnB_nS21yDtkwy2ie2oz%2BOA5Nr7Mp0xFYyyXsrIg0tvPH3yIWtz1LEMIAhmanksUmfqk9qJz3X8lhT0AlwoKq6tq05kuJfigH%2Be%2BHqTLWxv17kF6XPcZuJgGzsGiphirSScw&userId=2126444763&umidtoken=YT1NqcEwK0kDAI%2BGL48c7Szp&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.4.0&placeId=111111&timestamp=1631407634&sqSv=1.0&sign=57a3c56483c7962800cd212dfeb7576e&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DYT1NqcEwK0kDAI%252BGL48c7Szp%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126444763%26sn%3D2C5A6C6F79EDEE477A8EE92D86B6FEC191D7782A%26msv%3D10.0.0%26brand%3DApple%26imei%3DC380A3F4FFAB32B625BC8EDA1FCD9ED4413D31C1%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9DMzgwQTNGNEZGQUIzMkI2MjVCQzhFREExRkNEOUVENDQxM0QzMUMxIiwic24iOiJmYXN0XzJDNUE2QzZGNzlFREVFNDc3QThFRTkyRDg2QjZGRUMxOTFENzc4MkEiLCJleHAiOjE2MzE5MjU5NjQsInVzZXJJZCI6IjIxMjY0NDQ3NjMiLCJpYXQiOjE2MzE0MDc1NjQsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.YgxrpaC60lAvT7_kqJgiRrGgHLakhW-Sx5UlRAUU3aNo8Sh_XyWieLh7xPNQig-BQo_LDj1HB22zDxtqj6n-4A%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYT1NqcEwK0kDAI%252BGL48c7Szp%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
  


//111
function jsread() {
   return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=I9ZLo8pLOmhBKTV77VrP1lC5AlmRlrlq&net_env=4g&placeid=111111&user_id=2044136133&sn=CCE87A06F2B1F47D663903C8C171FA7603DCB676&msv=10.0.0&brand=Apple&imei=DC6A889762EA396DE9133B0A31269B9E97EB1706&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDQ0MTM2MTMzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9EQzZBODg5NzYyRUEzOTZERTkxMzNCMEEzMTI2OUI5RTk3RUIxNzA2Iiwic24iOiJmYXN0X0NDRTg3QTA2RjJCMUY0N0Q2NjM5MDNDOEMxNzFGQTc2MDNEQ0I2NzYiLCJleHAiOjE2MzE4NTU3MDIsInVzZXJJZCI6IjIwNDQxMzYxMzMiLCJpYXQiOjE2MzEzMzczMDIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.9YkaPXdjbWRkWeqGVIjnDyz9l_vWzN9jF2H7xdJBOAschGR8uW5XCv0KbMGGGQLD0_8wBY1JGt1163vCl9apvQ&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone8&wh=750x1334&utype=vip&utdid=YTw4563%2BWfwDAKlLqcf78uF%2F&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/2.00)",
    "Content-Length": "731",
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
         const body = "actId=355&miniWua=HHnB_ifEixbMaLN4Aqf3sWPRUDc/kAL8torIiARRb7FWydXnuq2enQwRyqq%2B4VwQYe8Se3qMScBi7F1KQ9XSzEh5SBbcsNMYgykPeOv%2B/TP8pM5Tv2boZuXWnRGaoo7cK8CeJl62tvxWJSlpfoPqv3eMmYw%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1632237697&userId=2044136133&wua=ktgi_2ZJ%2BoSMyw/f74m9GXWVQ1ig1Xcx6gZHX%2BaCB2Vah2bAdINz/r/UKDLAXtgHCNRzruCScX2iqk0HZHZvL5v768Yx9RDKiLEc0d2tchwK/I3u%2BiQ/iNOoDADnWqotZHhnqKE8giWFN59mgMIjdvM7YjDidksXkmSh27YSIe97IwrW6bgf4Ag8h932JvDtSY/CuvtzyzJZ1dZdU3ZBiWs%2Be%2Bls3ZnOKWpPcIHdOVg5yESW3MyNHHnZRPwUBzT6ESx6YoB1SJQk3pSGxd07rPP3z8dwcv4FnKLhH%2B/h1htC8bVaLBl0MEfA26YFsvLdAyTQGl%2BPxC/nF9/IAZ4tK/QJj9r1AFaZenpIM6nXAw5Mzo8dMqZqFgbdLEiCdit3PEnS3HbSd0fLSQR/43lyZ8oz13w%3D%3D";
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


//111
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18C66 AliApp(shuqi/1.0.4.0) WindVane/8.6.1 Shuqi-Lite (iPhone10,1__shuqi__v1.0.4.0) 750x1334 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=YT1NqcEwK0kDAI%2BGL48c7Szp&net_env=wifi&placeid=111111&user_id=2126444763&sn=2C5A6C6F79EDEE477A8EE92D86B6FEC191D7782A&msv=10.0.0&brand=Apple&imei=C380A3F4FFAB32B625BC8EDA1FCD9ED4413D31C1&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9DMzgwQTNGNEZGQUIzMkI2MjVCQzhFREExRkNEOUVENDQxM0QzMUMxIiwic24iOiJmYXN0XzJDNUE2QzZGNzlFREVFNDc3QThFRTkyRDg2QjZGRUMxOTFENzc4MkEiLCJleHAiOjE2MzE5MjU5NjQsInVzZXJJZCI6IjIxMjY0NDQ3NjMiLCJpYXQiOjE2MzE0MDc1NjQsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.YgxrpaC60lAvT7_kqJgiRrGgHLakhW-Sx5UlRAUU3aNo8Sh_XyWieLh7xPNQig-BQo_LDj1HB22zDxtqj6n-4A&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone8&wh=750x1334&utype=vip&utdid=YT1NqcEwK0kDAI%2BGL48c7Szp&idfa=B69897E1-9858-46B8-9463-4A461DB9CF98",
    "Content-Length": "1123",
    "Accept-Language": "zh-cn"
};
         const body = "platform=116&src=&timestamp=1631407685&userId=2126444763&sqSv=1.0&appVer=1.0.4.0&placeId=&sign=a67de45b91d1cdb855bcc80fcf3398a8&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DYT1NqcEwK0kDAI%252BGL48c7Szp%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2126444763%26sn%3D2C5A6C6F79EDEE477A8EE92D86B6FEC191D7782A%26msv%3D10.0.0%26brand%3DApple%26imei%3DC380A3F4FFAB32B625BC8EDA1FCD9ED4413D31C1%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2NDQ0NzYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9DMzgwQTNGNEZGQUIzMkI2MjVCQzhFREExRkNEOUVENDQxM0QzMUMxIiwic24iOiJmYXN0XzJDNUE2QzZGNzlFREVFNDc3QThFRTkyRDg2QjZGRUMxOTFENzc4MkEiLCJleHAiOjE2MzE5MjU5NjQsInVzZXJJZCI6IjIxMjY0NDQ3NjMiLCJpYXQiOjE2MzE0MDc1NjQsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.YgxrpaC60lAvT7_kqJgiRrGgHLakhW-Sx5UlRAUU3aNo8Sh_XyWieLh7xPNQig-BQo_LDj1HB22zDxtqj6n-4A%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone8%26wh%3D750x1334%26utype%3Dvip%26utdid%3DYT1NqcEwK0kDAI%252BGL48c7Szp%26idfa%3DB69897E1-9858-46B8-9463-4A461DB9CF98";
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
