
const $ = new Env（'书旗小说获取ck'）
$ .idx = $。getval（'sqxs'）;
if（typeof $ .idx ==='未定义'）
	$ .idx = 1;
		
var url = $ request.url;

if（url.indexOf（'/ ad / v1 / api / prize / readpage / pendant / lottery'）！=-1）
{
	var body = $ request.body;
	var headers = $ request.headers;
	如果（正文和标题）
	{
		$ .msg（'书旗小说'+ $ .idx，'获取阅读ck成功（共6个ck）'）;

		让readck = body +'&&'+ JSON.stringify（headers）;
		$ .setdata（readck，'readck'+ $ .idx）	
	}		
}



if（url.indexOf（'/ api / jbookmark / v1 / readmark / sync'）！=-1）
{
	var body = $ request.body;
	var headers = $ request.headers;
	如果（正文和标题）
	{
		$ .msg（'书旗小说'+ $ .idx，'获取极速版阅读ck成功（共2个ck）'）;

		让readck2 = body +'&&'+ JSON.stringify（headers）;
		$ .setdata（readck2，'readck2'+ $ .idx）	
	}		
}




if（url.indexOf（'/ prizecenter / xapi / prize / manual / receive'）！=-1）
{
	var body = $ request.body;
	var headers = $ request.headers;
	如果（正文和标题）
	{
		$ .msg（'书旗小说'+ $ .idx，'获取收集金币ck成功（共6个ck）'）;
		让receivecoinck = body +'&&'+ JSON.stringify（headers）;
		$ .setdata（receivecoinck，'receivecoinck'+ $ .idx）	
	}		
}



if（url.indexOf（'/ ad / v1 / api / prize / lottery'）！=-1）
{
	var body = $ request.body;
	var headers = $ request.headers;
  
	if（body.indexOf（'deliveryId = 525'）！=-1 && headers）
	{
		$ .msg（'书旗小说'+ $ .idx，'获取视频金币奖励ck成功（共6个ck）'）;
		让vediogoldprizeck = body +'&&'+ JSON.stringify（headers）;
		$ .setdata（vediogoldprizeck，'vediogoldprizeck'+ $ .idx）	
	}	
  
	if（body.indexOf（'deliveryId = 711'）！=-1 && headers）
	{
		$ .msg（'书旗小说'+ $ .idx，'获取视频抽奖奖励ck成功（共6个ck）'）;
		让vediodrawprizeck = body +'&&'+ JSON.stringify（headers）;
		$ .setdata（vediodrawprizeck，'vediodrawprizeck'+ $ .idx）	
	}
  
	if（body.indexOf（'deliveryId = 807'）！=-1 && headers）
	{
		$ .msg（'书旗小说'+ $ .idx，'获取视频金币奖励ck成功（共6个ck）'）;
		让vediogoldprizeck = body +'&&'+ JSON.stringify（headers）;
		$ .setdata（vediogoldprizeck，'vediogoldprizeck'+ $ .idx）	
	}			

}




if（url.indexOf（'activity / activity / v1 / lottery / draw'）！=-1）
{
	var body = $ request.body;
	var headers = $ request.headers;
	如果（正文和标题）
	{
		$ .msg（'书旗小说'+ $ .idx，'获取抽奖ck成功（共6个ck）'）;
		让drawck = body +'&&'+ JSON.stringify（headers）;
		$ .setdata（drawck，'drawck'+ $ .idx）	
	}		
}
if（url.indexOf（'activity / xapi / gold / record'）！=-1）
{
	var url = $ request.url;
	
	如果（网址）
	{
		$ .msg（'书旗小说'+ $ .idx，'获取用户信息url成功（共6个ck）'）;
		让userinfock = url;
		$ .setdata（userinfock，'userinfock'+ $ .idx）	
	}		
}
$ .done（）;  


函数Env（t，e）{class s {constructor（t）{this.env = t} send（t，e =“ GET”）{t =“ string” == typeof t？{url：t}：t ; let s = this.get;返回“ POST” === e &&（s = this.post），新的Promise（（e，i）=> {s.call（this，t，（t，s，r） => {t？i（t）：e（s）}）}）}} get（t）{返回this.send.call（this.env，t）} post（t）{返回this.send.call（ this.env，t，“ POST”）}}返回新类{constructor（t，e）{this.name = t，this.http = new s（this），this.data = null，this.dataFile =“ box.dat”，this.logs = []，this.isMute =！1，this.isNeedRewrite =！1，this.logSeparator =“ \ n”，this.startTime =（新日期）.getTime（），对象。分配（this，e），this.log（“”，`\ ud83d \ udd14 $ {this.name}，\ u5f00 \ u59cb！`）} isNode（）{返回“未定义”！== module && !!模块的类型。 export} isQuanX（）{返回“未定义”！= typeof $ task} isSurge（）{返回“未定义”！= typeof $ httpClient &&“未定义” == typeof $ loon} isLoon（）{返回“ undefined”！== typeof $ loon} toObj（t，e = null）{try {return JSON.parse（t）} catch {return e }} toStr（t，e = null）{try {return JSON.stringify（t）} catch {return e}} getjson（t，e）{let s = e; const i = this.getdata（t）; if （i）尝试{s = JSON.parse（this.getdata（t））}捕获{}返回s} setjson（t，e）{尝试{返回this.setdata（JSON.stringify（t），e）}捕获{return！1}} getScript（t）{返回新的Promise（e => {this.get（{url：t}，（t，s，i）=> e（i））}）} runScript（t， e）{返回新的Promise（s => {let i = this.getdata（“ @ chavy_boxjs_userCfgs.httpapi”）; i = i？i.replace（/ \ n / g，“”）。trim（）：i;让r = this.getdata（“ @ chavy_boxjs_userCfgs.httpapi_timeout”）; r = r？1 * r：20，r = e && e.timeout？e.timeout：r; const [o，h] = i.split（“ @ “），a = {url：`http：// $ {h} / v1 / scripting / evaluate`，body：{script_text：t，mock_type：”cron“，timeout：r}，标题：{” X-Key“：o，Accept：” * / *“}} ;; this.post（a，（t，e，i）=> s（i））} ）.catch（t => this.logErr（t））} loaddata（）{if（！this.isNode（））return {}; {this.fs = this.fs？this.fs：require（“ fs” ），this.path = this.path？this.path：require（“ path”）; const t = this.path.resolve（this.dataFile），e = this.path.resolve（process.cwd（），this .dataFile），s = this.fs.existsSync（t），i =！s && this.fs.existsSync（e）; if（！s &&！i）return {}; {const i = s？t：e; try { return JSON.parse（this.fs.readFileSync（i））catch（t）{return {}}}}} writedata（）{if（this.isNode（））{this.fs = this.fs？this。 fs：require（“ fs”），this.path = this.path？this.path：require（“ path”）; const t = this.path.resolve（this.dataFile），e = this.path.resolve（ process.cwd（），this.dataFile），s = this.fs.existsSync（t），i =！s && this.fs.existsSync（e），r = JSON.stringify（this.data）; s？this。fs.writeFileSync（t，r）：i？this.fs.writeFileSync（e，r）：this.fs.writeFileSync（t，r）}} lodash_get（t，e，s）{const i = e.replace（ / \ [（\ d +）\] / g，“。$ 1”）。split（“。”）;让r = t; for（i的t常数）if（r = Object（r）[t]，void 0 === r）返回s；返回r} lodash_set（t，e，s）{返回Object（t）！== t？t：（Array.isArray（e）||（e = e.toString（） .match（/[^.[\]]+/ g）|| []），e.slice（0，-1）.reduce（（t，s，i）=> Object（t [s]）= == t [s]？t [s]：t [s] = Math.abs（e [i + 1]）>> 0 == + e [i + 1]？[]：{}，t）[ e [e.length-1]] = s，t）} getdata（t）{让e = this.getval（t）; if（/ ^ @ /。test（t））{const [，s，i] = / ^ @（。*？）\。（。*？）$ /。exec（t），r = s？this.getval（s）：“”; if（r）try {const t = JSON.parse （r）; e = t？this.lodash_get（t，i，“”）：e} catch（t）{e =“”}}返回e} setdata（t，e）{让s =！1; if （/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i ），h = i？“ null” === o？null：o ||“ {}”：“ {}”;try {const e = JSON.parse（h）; this.lodash_set（e，r，t），s = this.setval（JSON.stringify（e），i）} catch（e）{const o = {}; this.lodash_set（o，r，t），s = this.setval（JSON.stringify（o），i）}}其他s = this.setval（t，e）; return s} getval（t）{return this .isSurge（）|| this.isLoon（）？$ persistentStore.read（t）：this.isQuanX（）？$ prefs.valueForKey（t）：this.isNode（）？（this.data = this.loaddata（） ，this.data [t]）：this.data && this.data [t] || null} setval（t，e）{返回this.isSurge（）|| this.isLoon（）？$ persistentStore.write（t，e ）：this.isQuanX（）？$ prefs.setValueForKey（t，e）：this.isNode（）？（this.data = this.loaddata（），this.data [e] = t，this.writedata（）， ！0）：this.data && this.data [e] || null} initGotEnv（t）{this.got = this.got？this.got：require（“ got”），this.cktough = this.cktough？this。 cktough：require（“ tough-cookie”），this.ckjar = this.ckjar？this.ckjar：new this.cktough.CookieJar，t &&（t.headers = t。标头？t.headers：{}，无效0 ==== t.headers.Cookie && void 0 === t.cookieJar &&（（t.cookieJar = this.ckjar））} get（t，e =（（）=> {} ））{t.headers &&（删除t.headers [“ Content-Type”]，删除t.headers [“ Content-Length”]）），this.isSurge（）|| this.isLoon（）？（this.isSurge（ ）&& this.isNeedRewrite &&&（t.headers = t.headers || {}，Object.assign（t.headers，{“ X-Surge-Skip-Scripting”：！1}）），$ httpClient.get（t，（ t，s，i）=> {！t && s &&（s.body = i，s.statusCode = s.status），e（t，s，i）}）））：this.isQuanX（）？（this.isNeedRewrite &&（ t.opts = t.opts || {}，Object.assign（t.opts，{提示：！1}）），$ task.fetch（t）.then（t => {const {statusCode：s，statusCode ：i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => e（t）））： this.isNode（）&&（this.initGotEnv（t），this.got（t）.on（“ redirect”，（t，e）=> {try {if（t。headers [“ set-cookie”]）{const s = t.headers [“ set-cookie”]。map（this.cktough.Cookie.parse）.toString（）; s && this.ckjar.setCookieSync（s，null）， e.cookieJar = this.ckjar}}捕获（t）{this.logErr（t）}）。然后（t => {const {statusCode：s，statusCode：i，headers：r，body：o} = t ; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => {const {message：s，response：i} = t; e（s，i， i && i.body）}））} post（t，e =（（）=> {}））{if（t.body && t.headers &&！t.headers [“ Content-Type”] &&（t.headers [“ Content -Type“] =” application / x-www-form-urlencoded“），t.headers &&删除t.headers [” Content-Length“]，this.isSurge（）|| this.isLoon（））this.isSurge（） && this.isNeedRewrite &&（t.headers = t.headers || {}，Object.assign（t.headers，{“ X-Surge-Skip-Scripting”：！1}）），$ httpClient.post（t，（t ，s，i）=> {！t＆＆s &&（s.body = i，s.statusCode = s.status），e（t，s，i）}）;否则if（this.isQuanX（））t.method =“ POST”，this.isNeedRewrite &&（t .opts = t.opts || {}，Object.assign（t.opts，{提示：！1}）），$ task.fetch（t）.then（t => {const {statusCode：s，statusCode： i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => e（t））;否则（this.isNode（））{this.initGotEnv（t）; const {url：s，... i} = t; this.got.post（s，i）.then（t => {const {statusCode： s，statusCode：i，headers：r，body：o} = t; e（null，{status：s，statusCode：i，headers：r，body：o}，o）}，t => {const {message ：s，response：i} = t; e（s，i，i && i.body）}}}} time（t）{let e = {“ M +” :( new Date）.getMonth（）+ 1，“ d + “ :(新日期）.getDate（），” H +“ :(新日期）.getHours（），” m +“ :(新日期）.getMinutes（），” s +“ :(新日期）.getSeconds（）， “ q +”：Math.floor（（（（new Date）.getMonth（）+ 3）/ 3），S：（new Date）.getMilliseconds（）}; /（y +）/。test（t）&&（t = t.replace（RegExp。$ 1，（（（new Date）.getFullYear（）+“”））。substr（4- RegExp。$ 1.length））））；对于（让e中的s为新）RegExp（“（” + s +“）”）。test（t）&&（t = t.replace（RegExp。$ 1,1 == RegExp。 $ 1.length？e [s] :(“ 00” + e [s]）。substr（（“” + e [s]）。length））））;返回t} msg（e = t，s =“” ，i =“”，r）{const o = t => {if（！t）返回t; if（“ string” == typeof t）返回this.isLoon（）？t：this.isQuanX（）？{ “ open-url”：t}：this.isSurge（）？{url：t}：void 0; if（“ object” == typeof t）{if（this.isLoon（））{let e = t.openUrl || t.url || t [“ open-url”]，s = t.mediaUrl || t [“ media-url”];返回{openUrl：e，mediaUrl：s}} if（this.isQuanX（） ）{let e = t [“ open-url”] || t.url || t.openUrl，s = t [“ media-url”] || t.mediaUrl; return {“ open-url”：e， “媒体网址”：s}} if（this.isSurge（））{让e = t.url || t.openUrl || t [“ open-url”];返回{url：e}}}}} ;； if（this.isMute | |（this.isSurge（）|| this.isLoon（）？$ notification.post（e，s，i，o（r））：this.isQuanX（）&& $ notify（e，s，i，o（r） ）））!! this.isMuteLog）{让t = [“”，“ =============== \ ud83d \ udce3 \ u7cfb \ u7edf \ u901a \ u77e5 \ ud83d \ udce3 == ============]; t.push（e），s && t.push（s），i && t.push（i），console.log（t.join（“ \ n”）） ，控制台。this.logs= this.logs.concat（t）}} log（... t）{t.length> 0 &&（this.logs = [... this.logs，... t]），控制台。 log（t.join（this.logSeparator））} logErr（t，e）{const s =！this.isSurge（）&&！this.isQuanX（）&&！this.isLoon（）; s？this.log（“ “，`\ u2757 \ ufe0f $ {this.name}，\ u9519 \ u8bef！`，t.stack）：this.log（”“，`\ u2757 \ ufe0f $ {this.name}，\ u9519 \ u8bef！ `，t）} wait（t）{返回新的Promise（e => setTimeout（e，t））}完成（t = {}）{const e =（新日期）.getTime（），s =（e-this.startTime）/1e3;this.log（“”，`\ ud83d \ udd14 $ { this.name}，\ u7ed3 \ u675f！\ ud83d \ udd5b $ {s} \ u79d2`），this.log（），（this.isSurge（）|| this.isQuanX（）|| this.isLoon（）） && $ done（t）}}（t，e）}



