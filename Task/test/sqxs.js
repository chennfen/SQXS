/*
【账号个数判定】：
个人信息个数决定(userinfock)

【nodejs教程】：
打开boxjs，复制会话，新建文件，粘贴，改文件名为 sqxsck.json,与本脚本放同一目录下，用nodejs即可运行本脚本；


 */
/*
非加密替换

const jobname = '书旗小说'
    const $ = Env(jobname)

    let ReadTimes = 0;
let Read2Times = 0;
let videogold = 0;
let drawgold = 0;

!(async() => {
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
    if ($.isNode()) {

        let sqxsck = require('./sqxsck.json');
        let CountNumber = sqxsck.settings[1].val;
        $.log(`============ 共 ${CountNumber} 个${jobname}账号=============`);

*/


const jobname = '书旗小说'
    const $ = Env(jobname)

let ReadTimes = 0;
let Read2Times = 0;
let videogold = 0;
let video2gold = 0;
let drawgold = 0;

!(async() => {
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
    if ($.isNode()) {

        let sqxsck = require('./sqxsck.json');
        let CountNumber = sqxsck.settings[1].val;
        $.log(`============ 共 ${CountNumber} 个${jobname}账号=============`);
        for (let i = 0; i < CountNumber; i++) {
            if (sqxsck.datas[7 + 9 * i].val) {
                readckArr = sqxsck.datas[0 + 9 * i].val.split('&&');
                receivecoinckArr = sqxsck.datas[1 + 9 * i].val.split('&&');
                videogoldprizeckArr = sqxsck.datas[2 + 9 * i].val.split('&&');
                videodrawprizeckArr = sqxsck.datas[3 + 9 * i].val.split('&&');
                drawckArr = sqxsck.datas[4 + 9 * i].val.split('&&');
                userinfock = sqxsck.datas[5 + 9 * i].val;
                read2ckArr = sqxsck.datas[6 + 9 * i].val.split('&&');
                videogold2prizeckArr = sqxsck.datas[7 + 9 * i].val.split('&&');
		videogold3prizeckArr = sqxsck.datas[8 + 9 * i].val.split('&&');    

                $.log(`\n============ 【书旗小说${i+1}】=============`);
                ReadTimes = 0;
                videogold = 0;
                drawgold = 0;

                //阅读
                await readbook();
		    
		//极速版阅读
		await read2book();

                //收集阅读金币
                await receivecoin();

                //看视频奖励金币
                await videogoldprize(0);
                            
                //极速版看视频奖励金币
                await videogold2prize(0);
		    
		//极速版签到奖励金币
                await videogold3prize(0);

                //看视频奖励抽奖次数
                await videodrawprize(0);
		    
                //个人信息
                await userinfo();
            }
        }

    }	
	
	
    //QX运行
    else {

        let CountNumber = $.getval('CountNumber');
        if (typeof CountNumber === 'undefined')
            CountNumber = 1;
        $.log(`============ 共 ${CountNumber} 个${jobname}账号=============`);

        for (let i = 1; i <= CountNumber; i++) {
            if ($.getdata(`read2ck${i}`) ) {
                readckArr = $.getdata(`readck${i}`).split('&&');
                receivecoinckArr = $.getdata(`receivecoinck${i}`).split('&&');
                videogoldprizeckArr = $.getdata(`videogoldprizeck${i}`).split('&&');
                videodrawprizeckArr = $.getdata(`videodrawprizeck${i}`).split('&&');
                drawckArr = $.getdata(`drawck${i}`).split('&&');
                userinfock = $.getdata(`userinfock${i}`);
		read2ckArr = $.getdata(`read2ck${i}`).split('&&');		 
                videogold2prizeckArr = $.getdata(`videogold2prizeck${i}`).split('&&');
	        videogold3prizeckArr = $.getdata(`videogold3prizeck${i}`).split('&&');
              
                $.log('\n============ 【书旗小说' + i + '】=============');
                ReadTimes = 0;//阅读次数统计
		Read2Times = 0;//极速阅读次数统计
                videogold = 0;//书旗视频金币统计：视频&极速视频&极速签到
                drawgold = 0;//抽奖金币统计
              
                //阅读
                //await readbook();  
		    
		//极速阅读  
		await read2book();   

                //收金币
                //await receivecoin();

                //看视频
                //await videogoldprize(0);
                            
                //极速视频
                //await videogold2prize(0);
		    
                //极速签到
                //await videogold3prize(0);		   

                //抽奖次数
                //await videodrawprize(0);
		    
                //个人信息
                await userinfo();
            }
        }

    }
}

//阅读
function readbook() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";

        const request = {
            url: url,
            headers: JSON.parse(readckArr[1]),
            body: readckArr[0]
        };
        $.post(request, async(error, request, data) => {
            try {
                if (error) {
                    $.log("阅读请求失败,再次尝试阅读");
                    //await $.wait(1000);
                    await readbook();
                } else {
                    const result = JSON.parse(data)
                        //$.log(data);
                        if (result.status == 200) {
                            ReadTimes++;
                            $.log("【阅读任务】第" + ReadTimes + "次阅读成功，获得3金币");
                            //await $.wait(100);
                            await readbook();
                        } else {
                            if (result.message != '领取达到每日上限，请明天再来') {
                                $.log("【阅读任务】阅读失败，" + result.message + ",再次尝试阅读");
                                //await $.wait(500);
                                await readbook();
                            } else
                                $.log("【阅读任务】阅读失败，" + result.message);

                            //$.log(data);
                        }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}


//极速阅读
function read2book() {
	return new Promise((resolve, reject) = >{
		const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery";

		const request = {
			url: url,
			headers: JSON.parse(read2ckArr[1]),
			body: read2ckArr[0]
		};
		$.post(request, async(error, request, data) = >{
			try {
				if (error) {
					$.log("阅读请求失败,再次尝试阅读");
					//await $.wait(1000);
					await read2book();
				} else {
					const result = JSON.parse(data) $.log(data);
					if (result.status == 200) {
						Read2Times++;
						$.log("【极速阅读】第" + Read2Times + "次阅读成功");
						//await $.wait(100);
						await readbook();
					} else {

						if (result.data == {
							"awardStatus": null,
							"awardMessage": null,
							"chanceMaxCnt": 360,
							"chanceCurrentCnt": 360,
							"todayBizCoinAmount": null,
							"prizeInfo": null,
							"toast": null,
							"jumpType": null,
							"jumpParam": null
						}) {
							$.log("【极速阅读】上限");
							//await $.wait(500);
						        $.log(data);							
						}


					}

				}
			} catch(e) {
				$.log(e)
			}
			resolve();
		});
	});
}


//收金币
function receivecoin() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";

        const request = {
            url: url,
            headers: JSON.parse(receivecoinckArr[1]),
            body: receivecoinckArr[0]
        };
        $.post(request, async(error, request, data) => {
            try {
                if (error) {
                    $.log("收集阅读金币请求失败,再次尝试收集阅读金币");
                    //await $.wait(1000);
                    await receivecoin();
                } else {
                    //$.log(data);
                    const result = JSON.parse(data);
                    if (result.status == 200) {

                        $.log("【收集金币】收集阅读金币成功，共获得" + ReadTimes * 3 + "金币");
			$.log("【收集金币】收集阅读金币成功，共获得" + Read2Times * 8 + "金币");

                    } else {
                        $.log("【收集金币】收集阅读金币失败," + result.message);
                        //$.log(data);
                    }
                }

            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

//视频
function videogoldprize(j) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const request = {
            url: url,
            headers: JSON.parse(videogoldprizeckArr[1]),
            body: videogoldprizeckArr[0]
        };
        $.post(request, async(error, request, data) => {
            try {
                if (error) {
                    $.log("视频失败,再次尝试");
                    //await $.wait(1000);
                    await videogoldprize();
                } else {
                    const result = JSON.parse(data)
                        //$.log(data);
                        if (result.status == 200) {
                            j++;
                            $.log("【视频】第" + j + "个视频成功，获得200金币，等待1s观看下一个视频");
                            videogold += 200;
                            await $.wait(1000);
                            await videogoldprize(j);
                        } else {
                            if (result.message != '领取达到每日上限，请明天再来') {
                                $.log("【视频】失败，" + result.message + ",再次尝试视频金币");
                                await $.wait(1000);
                                await videogoldprize(j);
                            } else
                                $.log("【视频】" + result.message);
                            //$.log(data);

                        }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}



//极速视频
function videogold2prize(n) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const request = {
            url: url,
            headers: JSON.parse(videogold2prizeckArr[1]),
            body: videogold2prizeckArr[0]
        };
        $.post(request, async(error, request, data) => {
            try {
                if (error) {
                    $.log("极速签到失败,再次尝试");
                    await $.wait(1000);
                    await videogold2prize();
                } else {
                    const result = JSON.parse(data)
                        //$.log(data);
                        if (result.status == 200) {
                            n++;
                            $.log("【极速视频】第" + n + "个视频成功，获得100金币，等待1s观看下一个视频");
                            videogold += 100;
                            await $.wait(1000);
                            await videogold2prize(n);
                        } else {
                            if (result.message != '领取达到每日上限，请明天再来') {
                                $.log("【极速视频】观看失败，" + result.message + ",再次尝试视频金币");
                                await $.wait(1000);
                                await videogold2prize(n);
                            } else
                                $.log("【极速视频】" + result.message);
                            //$.log(data);

                        }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

//极速签到
function videogold3prize(n) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const request = {
            url: url,
            headers: JSON.parse(videogold3prizeckArr[1]),
            body: videogold3prizeckArr[0]
        };
        $.post(request, async(error, request, data) => {
            try {
                if (error) {
                    $.log("极速签到失败,再次尝试");
                    //await $.wait(1000);
                    await videogold3prize();
                } else {
                    const result = JSON.parse(data)
                        //$.log(data);
                        if (result.status == 200) {
                            n++;
                            $.log("【极速签到】第" + n + "个视频成功，获得100金币，等待1s观看下一个视频");
                            video2gold += 100;
                            await $.wait(1000);
                            await videogold3prize(n);
                        } else {
                            if (result.status == 900202) {
                                $.log("【极速签到】" + result.message);
                                //$.log(data);
                            } 
                        }
                }
            } catch (e) {
                //$.log(e)
            }
            resolve();
        });
    });
}



//视频抽奖
function videodrawprize(k) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";

        const request = {
            url: url,
            headers: JSON.parse(videodrawprizeckArr[1]),
            body: videodrawprizeckArr[0]
        };
        $.post(request, async(error, request, data) => {
            try {
                if (error) {
                    $.log("视频抽奖请求失败,再次尝试视频抽奖");
                    await $.wait(1000);
                    await videodrawprize();
                } else {
                    const result = JSON.parse(data)
                        //$.log(data);
                        if (result.status == 200) {
                            k++;
                            $.log("【视频抽奖】观看第" + k + "个视频成功，获得一次抽奖机会");
                            await $.wait(1000);
                            await draw(k);
                        } else {
                            if (result.message != '领取达到每日上限，请明天再来') {
                                $.log("【视频抽奖】观看失败，" + result.message + ",再次尝试视频抽奖");
                                await $.wait(1000);
                                await videodrawprize(k);
                            } else
                                $.log("【视频抽奖】观看失败," + result.message);
                                //$.log(data);
                        }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function draw(k) {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";

        const request = {
            url: url,
            headers: JSON.parse(drawckArr[1]),
            body: drawckArr[0]
        };
        $.post(request, async(error, request, data) => {
            try {
                if (error) {
                    $.log("抽奖任务请求失败,再次尝试视频抽奖");
                    await $.wait(1000);
                    await draw();
                } else {
                    const result = JSON.parse(data)
                        //$.log(data);
                        if (result.status == 200) {
							k++;
                            $.log("【抽奖任务】抽奖成功，获得" + result.data.prizeList[0].prizeName);
                            drawgold += parseInt(result.data.prizeList[0].prizeName);
                            await $.wait(1000);
                            await draw(k);
                        } else {
                            $.log("【抽奖任务】抽奖失败," + result.message);
                            //$.log(data);
                        }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
}

function userinfo() {
    return new Promise((resolve, reject) => {
        const request = {
            url: userinfock,
            headers: {},
            body: ""
        };

        $.post(request, async(error, request, data) => {
            try {
                if (error) {
                    $.log("用户信息请求失败,再次尝试用户信息请求");
                    await $.wait(1000);
                    await userinfo();
                } else {
                    //$.log(data);
                    const result = JSON.parse(data);
                    if (result.status == 200) {
                        $.log("【阅读任务】本次共获得" + ReadTimes * 3 + "金币");
			$.log("【阅读任务】本次共获得" + Read2Times * 8 + "金币");
                        $.log("【视频任务】本次共获得" + videogold + "金币");
                        $.log("【抽奖任务】本次共获得" + drawgold + "金币");
                        $.log("【金币总数】" + result.data.gold);
                        $.log("【总计收益】" + result.data.income + "元");
                    } else {
                        $.log("【金币总数】数据异常," + result.message);
                        //$.log(data);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        });
    });
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
                } catch {}
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
                const[o, h] = i.split("@"),
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
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
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
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
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
        get(t, e = (() => {})) {
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
        post(t, e = (() => {})) {
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






