(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const F=["A","B","C","D","E","F","G","H","I"],k={A:["MID","LOW","LOW","HI","LOW","LOW","SP"],B:["MID","LOW","HI","LOW","LOW","HI","SP"],C:["MID","HI","LOW","HI","LOW","HI","SP"],D:["MID","LOW","LOW","HI","HI","HI","SP"],E:["MID","LOW","HI","HI","HI","HI","SP"],F:["MID","HI","HI","HI","HI","HI","SP"],G:["HI","HI","HI","HI","HI","HI","SP"],H:["LOW","LOW","SP"],I:["MID","MID","SP"]},x=7,se={A:32,B:27.3,C:14.1,D:12.5,E:6.3,F:3.1,G:3.1,H:.8,I:.8},Te="確率は、シナリオ選択率（設定1の公表値を参考値として使用）と、各候補のレベルで観測した初期アイコンが出る振り分け（公表値）を掛け合わせた相対値です。アイキャッチとセリフは絞り込みにだけ使います。",ue={LOW:{1:84,2:9.8,3:6.3},MID:{2:50,3:48.4,4:1.6},HI:{3:88.7,4:7.8,5:2.7,6:.4,7:.4},SP:{7:100}},Y=[{id:"unknown",label:"未確認",short:"？",table:null,levels:null,successRate:"―",color:"var(--c-icon-unknown)"},{id:"quest_blue",label:"QUEST（青）",short:"QUEST青",table:1,levels:["LOW"],successRate:"19.4%",color:"var(--c-icon-blue)"},{id:"quest_yellow",label:"QUEST（黄）",short:"QUEST黄",table:2,levels:["LOW","MID"],successRate:"28.7%",color:"var(--c-icon-yellow)"},{id:"raizex",label:"ライゼクス",short:"ライゼクス",table:3,levels:["LOW","MID","HI"],successRate:"49.5%",color:"var(--c-icon-green)"},{id:"seregios",label:"セルレギオス",short:"セルレギオス",table:4,levels:["MID","HI"],successRate:"63.6%",color:"var(--c-icon-orange)"},{id:"oromidoro_sub",label:"オロミドロ亜種",short:"オロミドロ亜種",table:5,levels:["HI"],successRate:"78.2%",color:"var(--c-icon-red)"},{id:"teo",label:"テオ・テスカトル",short:"テオ",table:6,levels:["HI"],successRate:"90.2%",color:"var(--c-icon-crimson)"},{id:"at",label:"AT",short:"AT",table:7,levels:["HI","SP"],successRate:"成功濃厚",color:"var(--c-icon-gold)"}],V=Object.fromEntries(Y.map(e=>[e.id,e])),ae=Object.fromEntries(Y.filter(e=>e.table!==null).map(e=>[e.table,e])),pe=[{id:"unknown",label:"未確認",candidates:null,strength:-1,color:"var(--c-icon-unknown)"},{id:"none",label:"キャラなし",candidates:["A","B","C","D","E","F","G","H","I"],strength:0,color:"var(--c-eye-none)"},{id:"jay",label:"ジェイ（白）",candidates:["B","C","D","E","F","G","H","I"],strength:1,color:"var(--c-eye-white)"},{id:"luchika",label:"ルーチカ（青）",candidates:["C","D","E","F","G","H","I"],strength:2,color:"var(--c-eye-blue)"},{id:"fiorayne",label:"フィオレーネ（黄）",candidates:["D","E","F","G","H","I"],strength:3,color:"var(--c-eye-yellow)"},{id:"bahari",label:"バハリ（緑）",candidates:["E","F","G","H","I"],strength:4,color:"var(--c-eye-green)"},{id:"galleus",label:"ガレアス（赤）",candidates:["F","G","H","I"],strength:5,color:"var(--c-eye-red)"},{id:"chicche",label:"チッチェ（紫）",candidates:["G","H","I"],strength:6,color:"var(--c-eye-purple)"}],q=Object.fromEntries(pe.map(e=>[e.id,e])),he=[{id:"none",label:"未確認",allowedLevels:null,description:""},{id:"important",label:"重要なクエストがありますよ！",allowedLevels:["HI","SP"],description:"次回BZレベルHI以上濃厚"},{id:"rare",label:"先ほど珍しい依頼が入ってきましたよ！",allowedLevels:["SP"],description:"次回BZレベルSP濃厚"}],Q=Object.fromEntries(he.map(e=>[e.id,e])),le={BZ:"BZ",FUKUBIKI:"アイルー福引",UNKNOWN:"種類不明"},He="公表解析上の濃厚示唆（SP＝成功濃厚、セリフ＝HI以上またはSP濃厚）を前提としています。確定ではありません。",oe={LOW:0,MID:1,HI:2,SP:3};function ne(){return{eyecatch:"unknown",history:[],line:"none",lineTarget:null}}function N(e){return e.length===0?"なし":e.join("・")}function ie(e){return e==="HI"||e==="SP"}function ce(e,t){const s=e.length,l=t[s-1];return!l||l.type!=="BZ"?!1:l.result==="fail"||l.result==="unknown"&&t.length>s}function fe(e){const t=[],s=[],l=e.history.slice(0,7),n=l.length,a=l.map((i,h)=>i.result==="success"?h+1:0).filter(i=>i>0);for(const i of a)i<n&&t.push({level:"error",message:`${i}回目が「成功」（AT当選）なのに、その後の履歴が続いています。AT終了後は1回目から数え直し、新しい台として登録してください。`});const o=n>0&&l[n-1].result==="success";for(let i=0;i<l.length;i++){const h=l[i];h.type!=="BZ"&&h.icon!=="unknown"&&t.push({level:"warn",message:`${i+1}回目は${h.type==="FUKUBIKI"?"アイルー福引":"種類不明"}のため、初期アイコンは判別に使いません。`})}let c=[...F],r=[...F],I=!1;const p=new Map,d=(i,h,f,b)=>{const w=c.filter(B=>!b(B));c=c.filter(b),f==="observed"?r=r.filter(b):f==="strong"&&(I=!0),s.push({label:i,text:h,excluded:w,remaining:[...c],kind:f})},$=q[e.eyecatch];if($.candidates){const i=new Set($.candidates);d(`アイキャッチ ${$.label}`,`${$.label} は ${N($.candidates)} の示唆（下限）`,"observed",h=>i.has(h))}l.forEach((i,h)=>{const f=h+1;if(i.type!=="BZ"||i.icon==="unknown")return;const b=V[i.icon];if(!b.levels)return;const w=new Set(b.levels);d(`${f}回目 ${b.label}`,`${f}回目の初期アイコン ${b.label}（テーブル${b.table}）は ${b.levels.join("・")} のときだけ選択される`,"observed",B=>{const L=k[B],K=L[f-1];return K===void 0?ce(L,l)?!1:(p.set(B,`${L.length}回目（SP）がBZ失敗と確認できないため、${f}回目以降の条件で除外していません`),!0):w.has(K)})}),l.forEach((i,h)=>{const f=h+1;if(i.type!=="BZ"||!(i.result==="fail"||i.result==="unknown"&&f<n)||c.filter(L=>k[L][f-1]==="SP").length===0)return;const B=i.result==="fail"?`${f}回目のBZが失敗`:`${f}回目のBZ後もCZが続いている（AT非当選）`;d(`${f}回目 BZ非当選`,`${B}。${f}回目がSPのシナリオはSP＝成功濃厚と矛盾するため除外`,"strong",L=>k[L][f-1]!=="SP")});const g=Q[e.line];if(g.allowedLevels)if(e.lineTarget===null)t.push({level:"info",message:`セリフ「${g.label}」は対象のCZ回数が未指定のため、候補の絞り込みに使っていません。対象回数を選ぶと反映されます。`});else{const i=e.lineTarget;i<=n?t.push({level:"warn",message:`セリフの対象回数（${i}回目）が入力済みの履歴の回です。「次回BZ」の回数を確認してください。`}):i!==n+1&&t.push({level:"warn",message:`セリフの対象回数（${i}回目）が履歴の次（${n+1}回目）と一致しません。回数の数え方を確認してください。`});const h=new Set(g.allowedLevels);d(`セリフ「${g.label}」（${i}回目）`,`${g.description}。${i}回目が ${g.allowedLevels.join("・")} 以外のシナリオを除外（濃厚示唆）`,"strong",f=>{const b=k[f],w=b[i-1];return w===void 0?ce(b,l)?!1:(p.set(f,`${b.length}回目（SP）がBZ失敗と確認できないため、${i}回目の条件で除外していません`),!0):h.has(w)})}if(n>0)for(const i of c){const h=k[i];if(h.length>=n)continue;const f=h.length,w=l[f-1]?.type==="FUKUBIKI"?"アイルー福引":"種類不明";p.set(i,`${f}回目（SP）が${w}のため、BZ失敗と確認できず除外していません。追加確認が必要です`)}const E=o?1:n+1,T=ke(c,l),H=c.map(i=>{const h=k[i],f=p.has(i),b=o?[]:h.slice(n),w=b.length>0?b[0]:null,B=h.indexOf("SP")+1,L=!o&&B>n?B-n:null,K=b.length>0?b.every(ie):null;return{id:i,levels:h,hold:f,holdReason:f?p.get(i):null,next:w,remaining:b,czToSp:L,remainingAllHi:K,probability:T.get(i)??null}}),C=H.filter(i=>!i.hold).map(i=>i.id),S=H.filter(i=>!i.hold&&i.next!==null),v=Array.from(new Set(S.map(i=>i.next))).sort((i,h)=>oe[i]-oe[h]),z=H.some(i=>i.hold),A=S.length>0&&!z&&!o,R={nextHiOrAbove:A?S.every(i=>ie(i.next)):null,nextIsSp:A?S.every(i=>i.next==="SP"):null,remainingAllHi:A?S.every(i=>i.remainingAllHi===!0):null,nextLevels:v,czToSpMin:A?Math.min(...S.map(i=>i.czToSp)):null,czToSpMax:A?Math.max(...S.map(i=>i.czToSp)):null,nextTableShares:v.map(i=>({level:i,shares:Ae(i)}))};let O;return n===0&&e.eyecatch==="unknown"&&e.line==="none"?O="empty":c.length===0?(O="contradiction",t.push({level:"error",message:"すべてのシナリオが除外されました。入力が矛盾しています。CZ通算回数の数え方（AT終了後または設定変更後から、アイルー福引も含めて数える）、初期アイコンの見間違い、アイキャッチとセリフの対象回数を確認してください。"}),r.length>0&&r.length!==c.length&&t.push({level:"info",message:`濃厚示唆（SP成功濃厚、セリフ）を外し、観測条件だけで判別すると ${N(r)} が残ります。濃厚示唆の例外の可能性も考えられます。`})):z?(O="hold",t.push({level:"warn",message:"判定保留の候補があります。アイルー福引または種類不明のCZがSP回に重なっているため、公開解析だけでは除外できません。該当回がBZだったかを確認してください。"})):c.length===1?O="determined":O="multiple",o&&t.push({level:"info",message:"最後の履歴が「成功」（AT当選）です。表示中のシナリオ候補は今回のAT間のものです。AT終了後はCZ通算回数が1回目に戻るため、新しい台として履歴を追加してください。"}),n>0&&O!=="contradiction"&&!o&&H.every(i=>i.next===null)&&t.push({level:"warn",message:"すべての候補シナリオがすでに終了回を過ぎています。CZ通算回数の数え方を確認してください。"}),{status:O,candidates:c,firmCandidates:C,observedOnlyCandidates:r,steps:s,warnings:t,scenarios:H,summary:R,czCount:n,nextIndex:E,endedWithSuccess:o,usesStrongHint:I}}function ke(e,t){const s=new Map;for(const a of e){const o=k[a];let c=se?(se[a]??0)/100:1;t.forEach((r,I)=>{if(r.type!=="BZ")return;const p=V[r.icon].table;if(p===null)return;const d=o[I];d&&(c*=(ue[d][p]??0)/100)}),s.set(a,c)}const l=Array.from(s.values()).reduce((a,o)=>a+o,0),n=new Map;for(const[a,o]of s)n.set(a,l>0?o/l*100:100/e.length);return n}function G(e){return e===null?"―":e>=99.95?"100%":e>0&&e<.05?"0.1%未満":`${e.toFixed(1)}%`}function Ae(e){const t=ue[e];return Object.keys(t).map(s=>Number(s)).sort((s,l)=>s-l).map(s=>({table:s,iconLabel:ae[s].label,rate:t[s],successRate:ae[s].successRate}))}function Oe(e,t){const s=[];s.push("【BZシナリオ判別結果】");const l={determined:t.usesStrongHint?"確定（濃厚示唆を含む）":"確定",multiple:"候補複数",contradiction:"矛盾（候補なし）",hold:"判定保留あり",empty:"未入力"};if(s.push(`状態: ${l[t.status]}`),t.status==="determined")s.push(`確定シナリオ: ${t.candidates[0]}`);else{const n=t.scenarios.map(a=>`${a.id}${a.hold?"（保留）":""} ${G(a.probability)}`);s.push(`候補: ${n.length===0?"なし":n.join(" / ")}`)}if(t.status==="hold"&&s.push(`保留を除く候補: ${N(t.firmCandidates)}`),s.push(`入力済みCZ: ${t.czCount}回 / 次回: ${t.nextIndex}回目`),s.push(`アイキャッチ: ${q[e.eyecatch].label}`),e.history.forEach((n,a)=>{const o=n.type==="BZ"?"BZ":n.type==="FUKUBIKI"?"アイルー福引":"種類不明",c=n.type==="BZ"?` ${V[n.icon].label}`:"",r=n.result==="success"?"成功":n.result==="fail"?"失敗":"結果不明";s.push(`  ${a+1}回目: ${o}${c} ${r}`)}),e.line!=="none"){const n=e.lineTarget===null?"対象回数未指定":`${e.lineTarget}回目`;s.push(`セリフ: ${Q[e.line].label}（${n}）`)}if(t.summary.nextLevels.length>0&&s.push(`次回BZレベル: ${t.summary.nextLevels.join(" / ")}`),t.summary.nextHiOrAbove!==null&&s.push(`次回HI以上: ${t.summary.nextHiOrAbove?"濃厚":"いいえ（LOWまたはMIDの候補あり）"}`),t.summary.czToSpMin!==null){const n=t.summary.czToSpMin===t.summary.czToSpMax?`${t.summary.czToSpMin}回`:`${t.summary.czToSpMin}～${t.summary.czToSpMax}回`;s.push(`SPまでの残りCZ: ${n}`)}t.summary.remainingAllHi!==null&&s.push(`残りすべてHI以上: ${t.summary.remainingAllHi?"はい":"いいえ"}`),s.push("根拠:");for(const n of t.steps){const a=n.excluded.length>0?`${N(n.excluded)} を除外`:"除外なし";s.push(`  ${n.label}: ${a} → 残り ${N(n.remaining)}`)}for(const n of t.scenarios){const a=n.hold?"（保留）":"";s.push(`  ${n.id}${a} ${G(n.probability)}: ${n.levels.join(" ")}`)}for(const n of t.warnings)s.push(`注意: ${n.message}`);return t.usesStrongHint&&s.push("※ 公表解析上の濃厚示唆を前提とした判別です。"),s.join(`
`)}const ve="mh_sunbreak_bz_checker_v1";function be(){return`m_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}function me(e){return{id:be(),name:e,input:ne(),updatedAt:new Date().toISOString()}}function X(){const e=me("台1");return{version:1,currentId:e.id,machines:[e]}}function Be(){try{const e=localStorage.getItem(ve);if(!e)return{data:X(),error:null};const t=JSON.parse(e),s=Ce(t);return s?{data:s,error:null}:{data:X(),error:"保存データの形式が不正のため、初期状態で開始しました。"}}catch{return{data:X(),error:"保存データを読み込めなかったため、初期状態で開始しました。"}}}function Le(e){try{return localStorage.setItem(ve,JSON.stringify(e)),null}catch{return"ブラウザに保存できませんでした。プライベートモードや容量不足の可能性があります。"}}function Ee(e){if(!e||typeof e!="object")return null;const t=e,s=ne();if(typeof t.eyecatch=="string"&&t.eyecatch in q&&(s.eyecatch=t.eyecatch),typeof t.line=="string"&&t.line in Q&&(s.line=t.line),typeof t.lineTarget=="number"&&Number.isInteger(t.lineTarget)&&t.lineTarget>=1&&t.lineTarget<=7&&(s.lineTarget=t.lineTarget),Array.isArray(t.history)){const l=[];for(const n of t.history.slice(0,7)){if(!n||typeof n!="object")return null;const a=n,o=a.type==="BZ"||a.type==="FUKUBIKI"||a.type==="UNKNOWN"?a.type:"UNKNOWN",c=typeof a.icon=="string"&&a.icon in V?a.icon:"unknown",r=a.result==="success"||a.result==="fail"||a.result==="unknown"?a.result:"unknown";l.push({type:o,icon:o==="BZ"?c:"unknown",result:r})}s.history=l}return s}function Ce(e){if(!e||typeof e!="object")return null;const t=e;if(!Array.isArray(t.machines))return null;const s=[];for(const n of t.machines){if(!n||typeof n!="object")continue;const a=n,o=Ee(a.input);o&&s.push({id:typeof a.id=="string"&&a.id?a.id:be(),name:typeof a.name=="string"&&a.name?a.name:`台${s.length+1}`,input:o,updatedAt:typeof a.updatedAt=="string"?a.updatedAt:new Date().toISOString()})}return s.length===0?null:{version:1,currentId:typeof t.currentId=="string"&&s.some(n=>n.id===t.currentId)?t.currentId:s[0].id,machines:s}}const $e=["03d5bc19d2df8338cf81f4879b5bf1bcbed6a5690f8954c30481734b7025a826"],ge="mh_bz_checker_unlock_v1";function ye(e){return e.trim().toUpperCase()}function re(e){let t="";for(const s of e)t+=s.toString(16).padStart(2,"0");return t}async function Ie(e){const t=new TextEncoder().encode(e),s=globalThis.crypto?.subtle;if(s){const l=await s.digest("SHA-256",t);return re(new Uint8Array(l))}return re(Pe(t))}async function ze(e,t=$e){const s=ye(e);if(!s)return!1;const l=await Ie(s);return t.some(n=>n.toLowerCase()===l)}function Ze(e=$e){try{const t=localStorage.getItem(ge);return!!t&&e.some(s=>s.toLowerCase()===t.toLowerCase())}catch{return!1}}async function je(e){try{return localStorage.setItem(ge,await Ie(ye(e))),null}catch{return"ブラウザに保存できませんでした。次回も解除キーの入力が必要です。"}}const Me=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function Pe(e){const t=e.length,s=(t+8>>6<<6)+64,l=new Uint8Array(s);l.set(e),l[t]=128;const n=new DataView(l.buffer);n.setUint32(s-4,t*8>>>0),n.setUint32(s-8,Math.floor(t*8/4294967296));const a=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),o=new Uint32Array(64),c=(p,d)=>p>>>d|p<<32-d;for(let p=0;p<s;p+=64){for(let v=0;v<16;v++)o[v]=n.getUint32(p+v*4);for(let v=16;v<64;v++){const z=c(o[v-15],7)^c(o[v-15],18)^o[v-15]>>>3,A=c(o[v-2],17)^c(o[v-2],19)^o[v-2]>>>10;o[v]=o[v-16]+z+o[v-7]+A>>>0}let[d,$,g,E,T,H,C,S]=a;for(let v=0;v<64;v++){const z=c(T,6)^c(T,11)^c(T,25),A=T&H^~T&C,R=S+z+A+Me[v]+o[v]>>>0,O=c(d,2)^c(d,13)^c(d,22),i=d&$^d&g^$&g,h=O+i>>>0;S=C,C=H,H=T,T=E+R>>>0,E=g,g=$,$=d,d=R+h>>>0}a[0]+=d,a[1]+=$,a[2]+=g,a[3]+=E,a[4]+=T,a[5]+=H,a[6]+=C,a[7]+=S}const r=new Uint8Array(32),I=new DataView(r.buffer);for(let p=0;p<8;p++)I.setUint32(p*4,a[p]);return r}const ee=Be();let m=ee.data,Z=ee.error?{kind:"error",text:ee.error}:null,de,W=null;const j=document.getElementById("app");let Se=Ze(),_=null,U=!1;function J(){return m.machines.find(e=>e.id===m.currentId)??m.machines[0]}function y(){J().updatedAt=new Date().toISOString();const e=Le(m);e&&te("error",e),P()}function te(e,t){Z={kind:e,text:t},window.clearTimeout(de),de=window.setTimeout(()=>{Z=null,P()},4e3),P()}function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function M(e,t=""){return e?`<span class="lv lv-${e} ${t}">${e}</span>`:`<span class="lv lv-none ${t}">―</span>`}function D(e){return e.length===0?"なし":e.join("・")}const we=`
    <footer class="foot">
      <div>判別は公表解析の表（シナリオ別BZレベル、テーブル振り分け、初期アイコン、アイキャッチ、セリフ）から計算しています。</div>
      <div>設定1のテーブル成功期待度は、ATまで続行した場合の収支期待値ではありません。</div>
      <div class="foot-disclaimer">本アプリの判別結果は参考情報です。実際の遊技における判断と結果は、すべて利用者ご自身の責任となります。判別結果に基づく損失について、作成者は一切の責任を負いません。</div>
    </footer>`;function _e(){j.innerHTML=`
    <header class="top">
      <div class="brand">
        <div class="brand-title">MHサンブレイク BZシナリオ判別</div>
        <div class="brand-sub">端末内で計算します。通信は行いません。</div>
      </div>
    </header>
    <main class="layout unlock-layout">
      <section class="panel unlock-panel">
        <h2 class="unlock-title">解除キーの入力</h2>
        <p class="unlock-text">購入時に受け取った解除キーを入力してください。一度入力すると、このブラウザでは次回から入力不要です。</p>
        <form id="unlock-form" class="unlock-form" autocomplete="off">
          <input id="unlock-input" class="unlock-input" type="text" inputmode="latin" autocapitalize="characters" spellcheck="false" placeholder="解除キー" aria-label="解除キー" ${U?"disabled":""} />
          <button type="submit" class="btn btn-primary unlock-btn" ${U?"disabled":""}>解除する</button>
        </form>
        ${_?`<div class="unlock-error" role="alert">${u(_)}</div>`:""}
      </section>
    </main>
    ${we}
  `;const e=j.querySelector("#unlock-form"),t=j.querySelector("#unlock-input");t.focus(),e.addEventListener("submit",async s=>{if(s.preventDefault(),U)return;const l=t.value;U=!0;try{if(await ze(l)){const n=await je(l);Se=!0,_=null,n&&(Z={kind:"error",text:n})}else _="解除キーが違います"}catch{_="解除キーを確認できませんでした"}finally{U=!1}P()})}function P(){if(!Se){_e();return}const e=J(),t=e.input,s=fe(t);j.innerHTML=`
    <header class="top">
      <div class="brand">
        <div class="brand-title">MHサンブレイク BZシナリオ判別</div>
        <div class="brand-sub">端末内で計算します。通信は行いません。</div>
      </div>
      ${Ue(e)}
    </header>
    ${Z?`<div class="notice notice-${Z.kind}">${u(Z.text)}</div>`:""}
    <main class="layout">
      <section class="panel detail-panel">${qe(t,s)}</section>
      <section class="panel result-panel">${Ne(s)}</section>
      <section class="panel input-panel">${Ke(t,s)}</section>
    </main>
    ${we}
  `}function Ue(e){return`
    <div class="machine-bar">
      <label class="machine-label">台
        <select class="select" data-action="machine-select" aria-label="台を選択">${m.machines.map(s=>`<option value="${u(s.id)}" ${s.id===e.id?"selected":""}>${u(s.name)}</option>`).join("")}</select>
      </label>
      <button class="btn btn-small" data-action="machine-new">＋ 台を追加</button>
      <button class="btn btn-small" data-action="machine-rename">名前変更</button>
      <button class="btn btn-small btn-danger-outline" data-action="machine-delete" ${m.machines.length<=1?"disabled":""}>台を削除</button>
    </div>
  `}function xe(e){switch(e.status){case"empty":return{text:"入力待ち：下の項目を選ぶと自動で判別します",cls:"st-empty"};case"determined":return{text:e.usesStrongHint?`シナリオ ${e.candidates[0]} 確定（濃厚示唆を含む）`:`シナリオ ${e.candidates[0]} 確定`,cls:"st-ok"};case"multiple":return{text:`候補 ${e.candidates.length} 種類（確率の高い順）`,cls:"st-multi"};case"hold":return{text:"判定保留あり（追加確認が必要）",cls:"st-hold"};case"contradiction":return{text:"矛盾：該当するシナリオがありません",cls:"st-ng"}}}function Ne(e){const t=xe(e),s=new Set(e.candidates),l=new Set(e.scenarios.filter(d=>d.hold).map(d=>d.id)),n=F.filter(d=>!s.has(d)&&!l.has(d)),a=n.length===0?"":`<div class="excluded-line"><span class="excluded-label">除外</span>${n.map(d=>`<span class="ex-chip" title="${u(k[d].join(" "))}">${d}</span>`).join("")}</div>`,o=e.summary,c=(d,$,g,E)=>d===null?`<span class="muted">${E}</span>`:d?`<span class="good">${$}</span>`:`<span class="plain">${g}</span>`,r=o.czToSpMin===null?'<span class="muted">―</span>':o.czToSpMin===o.czToSpMax?`${o.czToSpMin}回`:`${o.czToSpMin}～${o.czToSpMax}回`,I=e.endedWithSuccess?'<span class="muted">AT当選。次は新しいシナリオの1回目</span>':o.nextLevels.length===0?'<span class="muted">―</span>':o.nextLevels.map(d=>M(d,"lv-big")).join(" "),p=e.status==="hold"?"保留のため判定不能":"―";return`
    <div class="result-head">
      <div class="status ${t.cls}">${u(t.text)}</div>
      <div class="cz-pos">入力済み ${e.czCount}回 ／ 次回 <strong>${e.nextIndex}回目</strong></div>
    </div>
    ${a}
    <div class="kpis">
      <div class="kpi"><div class="kpi-label">次回BZレベル</div><div class="kpi-val">${I}</div></div>
      <div class="kpi"><div class="kpi-label">次回HI以上</div><div class="kpi-val">${c(o.nextHiOrAbove,"濃厚","LOW・MIDの候補あり",p)}</div></div>
      <div class="kpi"><div class="kpi-label">SPまでの残りCZ</div><div class="kpi-val">${r}</div></div>
      <div class="kpi"><div class="kpi-label">残りすべてHI以上</div><div class="kpi-val">${c(o.remainingAllHi,"はい","いいえ",p)}</div></div>
    </div>
    ${e.usesStrongHint?`<div class="strong-note">※ ${u(He)}</div>`:""}
    ${Re(e)}
    ${Je(e)}
    <div class="result-actions">
      <button class="btn" data-action="copy">判別結果をコピー</button>
    </div>
    ${W!==null?`<div class="copy-fallback">
            <textarea class="copy-area" readonly rows="8" aria-label="判別結果の本文">${u(W)}</textarea>
            <button class="btn btn-small" data-action="copy-close">閉じる</button>
          </div>`:""}
  `}function De(e){const t=xe(e);return`
    <div class="cand-head">
      <h2 class="cand-title">候補シナリオ</h2>
      <div class="status ${t.cls}">${u(t.text)}</div>
    </div>
    ${We(e)}
    <div class="cand-pos">入力済み ${e.czCount}回 ／ 次回 <strong>${e.nextIndex}回目</strong></div>
  `}function We(e){if(e.status==="empty")return'<div class="cand-banner cand-empty">候補シナリオ：<span class="cand-all">A～I（未入力）</span></div>';if(e.status==="contradiction")return'<div class="cand-banner cand-ng">候補シナリオ：なし（入力が矛盾）</div>';if(e.status==="determined"){const l=e.candidates[0];return`
      <div class="cand-banner cand-fixed">
        <div class="cand-fixed-label">${e.usesStrongHint?"シナリオ確定（濃厚示唆を含む）":"シナリオ確定"}</div>
        <div class="cand-fixed-id">${l}</div>
        <div class="cand-fixed-levels">${k[l].map(n=>M(n)).join(" ")}</div>
      </div>`}return`
    <div class="cand-banner cand-multi">
      <div class="cand-list">${[...e.scenarios].sort((l,n)=>(n.probability??0)-(l.probability??0)).map(l=>`
      <div class="cand-item ${l.hold?"cand-hold":""}">
        <span class="cand-id">${l.id}</span>
        <span class="cand-bar"><span class="cand-bar-fill" style="width:${Math.max(2,Math.round(l.probability??0))}%"></span></span>
        <span class="cand-prob">${u(G(l.probability))}</span>
        ${l.hold?'<span class="tag tag-hold">保留</span>':""}
      </div>`).join("")}</div>
      <div class="cand-note">${u(Te)}</div>
    </div>`}function Re(e){return e.warnings.length===0?"":`<ul class="warnings">${e.warnings.map(t=>`<li class="warn warn-${t.level}">${u(t.message)}</li>`).join("")}</ul>`}function Ke(e,t){return`
    <div class="input-head">
      <h2>判別入力</h2>
      <button class="btn btn-danger-outline btn-small" data-action="reset">この台の入力をリセット</button>
    </div>
    ${Fe(e.eyecatch)}
    ${Ge(e.history,t)}
    ${Ve(e)}
  `}function Fe(e){return`
    <div class="group">
      <div class="group-title">アイキャッチ <span class="hint">同一AT間で見た最も強いものを選ぶ</span></div>
      <div class="opts opts-eye">${pe.map(s=>`
      <button class="opt eye ${s.id===e?"selected":""}" data-action="eyecatch" data-value="${s.id}" style="--opt-color:${s.color}">
        <span class="opt-dot"></span><span class="opt-label">${u(s.label)}</span>
        ${s.candidates?`<span class="opt-sub">${s.candidates[0]}～I</span>`:""}
      </button>`).join("")}</div>
    </div>
  `}function Ge(e,t){const s=e.map((c,r)=>Ye(c,r,t)).join(""),l=e.length<x,n=e.length+1;return`
    <div class="group">
      <div class="group-title">CZ回数・CZ履歴 <span class="hint">AT終了後または設定変更後の1回目から順に。アイルー福引も数える</span></div>
      <div class="cz-count">
        <span class="cz-count-label">消化したCZ回数（スルー回数）</span>
        <div class="segs">${Array.from({length:x+1},(c,r)=>r).map(c=>`<button class="seg ${e.length===c?"selected":""}" data-action="cz-count" data-value="${c}" title="${c===0?"履歴を空にする":`${c}回目まで入力する`}">${c}回</button>`).join("")}</div>
        <span class="hint">回数を選ぶと、その回数分のBZ（失敗）が並びます。アイコンは分かる回だけ選べば判別できます（例：2回目セルレギオス＋3回目QUEST青→C）。</span>
      </div>
      <div class="cz-list">${s||'<div class="cz-empty">まだ履歴がありません。上の「消化したCZ回数」で回数を選ぶか、下のボタンで1回ずつ追加してください。見ていない回はアイコン「未確認」のままで構いません。</div>'}</div>
      <div class="cz-add">
        <button class="btn btn-primary" data-action="cz-add" data-type="BZ" ${l?"":"disabled"}>＋ ${l?`${n}回目`:""}を追加（BZ失敗）</button>
        <button class="btn" data-action="cz-add" data-type="FUKUBIKI" ${l?"":"disabled"}>＋ ${l?`${n}回目`:""}を追加（アイルー福引）</button>
        <button class="btn" data-action="cz-add" data-type="UNKNOWN" ${l?"":"disabled"}>＋ ${l?`${n}回目`:""}を追加（種類不明）</button>
        <button class="btn" data-action="cz-undo" ${e.length>0?"":"disabled"}>最後の1件を取り消し</button>
      </div>
      ${l?"":'<div class="hint">7回目まで入力済みです（7回目はシナリオ上SPです）。</div>'}
    </div>
  `}function Ye(e,t,s){const l=t+1,n=Object.keys(le).map(r=>`<button class="seg ${e.type===r?"selected":""}" data-action="cz-type" data-index="${t}" data-value="${r}">${le[r]}</button>`).join(""),a=e.type==="BZ"?`<div class="icon-cards">${Y.map(r=>`
          <button class="icon-card ${e.icon===r.id?"selected":""}" data-action="cz-icon" data-index="${t}" data-value="${r.id}" style="--opt-color:${r.color}" title="${r.levels?`対応レベル ${r.levels.join("・")}`:"アイコン未確認"}">
            <span class="icon-badge">${r.table?`T${r.table}`:"？"}</span>
            <span class="icon-name">${u(r.label)}</span>
            <span class="icon-lv">${r.levels?r.levels.join("・"):"制約なし"}</span>
          </button>`).join("")}</div>`:`<div class="hint">${e.type==="FUKUBIKI"?"アイルー福引にはBZ初期アイコンがありません。":"種類不明の回は初期アイコンを判別に使いません。"}</div>`,o=s.steps.find(r=>r.label.startsWith(`${l}回目 `)&&r.kind==="observed"),c=o?o.excluded.length>0?`${u(o.label)} により ${D(o.excluded)} を除外`:`${u(o.label)}：除外なし`:"";return`
    <div class="cz-row">
      <div class="cz-row-head">
        <div class="cz-no">${l}回目</div>
        <div class="segs">${n}</div>
        <button class="btn btn-small btn-ghost" data-action="cz-remove" data-index="${t}" aria-label="${l}回目を削除">削除</button>
      </div>
      ${a}
      ${c?`<div class="cz-step">${c}</div>`:""}
    </div>
  `}function Ve(e){const t=he.map(a=>`
      <button class="opt ${e.line===a.id?"selected":""}" data-action="line" data-value="${a.id}">
        <span class="opt-label">${u(a.label)}</span>
        ${a.description?`<span class="opt-sub">${u(a.description)}</span>`:""}
      </button>`).join(""),s=Math.min(e.history.length+1,x),l=[`<option value="" ${e.lineTarget===null?"selected":""}>未指定（判別に使わない）</option>`].concat(Array.from({length:x},(a,o)=>o+1).map(a=>`<option value="${a}" ${e.lineTarget===a?"selected":""}>${a}回目${a===s&&!e.history.some(o=>o.result==="success")?"（履歴の次）":""}</option>`)).join(""),n=e.line!=="none";return`
    <div class="group">
      <div class="group-title">チッチェのセリフ <span class="hint">濃厚示唆。対象の「次回BZ」が何回目かを指定する</span></div>
      <div class="opts opts-line">${t}</div>
      ${n?`<label class="line-target">セリフが示す次回BZの回数
              <select class="select" data-action="line-target">${l}</select>
            </label>
            <div class="hint">回数が分からない場合は「未指定」のままにします。推測で確定判別はしません。</div>`:""}
    </div>
  `}function qe(e,t){return`
    <h2>詳細解析</h2>
    <div class="detail-grid">
      <aside class="cand-panel">${De(t)}</aside>
      <div class="detail-main">
        ${Qe(t.steps)}
        ${Xe(t)}
        ${et(t)}
        <details class="master">
          <summary>正本データ（シナリオ別BZレベル・テーブル）</summary>
          ${tt()}
        </details>
        <div class="hint">入力: アイキャッチ ${u(q[e.eyecatch].label)} ／ セリフ ${u(Q[e.line].label)}</div>
      </div>
    </div>
  `}function Qe(e){if(e.length===0)return'<div class="muted">条件を入力すると、除外の根拠がここに表示されます。</div>';const t=e.map(n=>{const a=n.excluded.length>0?`<strong>${D(n.excluded)}</strong> を除外`:"除外なし";return`<li class="step"><div class="step-head">${n.kind==="strong"?'<span class="tag tag-strong">濃厚示唆</span>':'<span class="tag">観測</span>'}<span class="step-label">${u(n.label)}</span></div><div class="step-body">${a} → 残り <strong>${D(n.remaining)}</strong></div><div class="step-text">${u(n.text)}</div></li>`}).join(""),s=e[e.length-1],l=s.remaining.length===1?`<li class="step step-final">残り <strong>${s.remaining[0]}</strong> に限定</li>`:s.remaining.length===0?'<li class="step step-final step-ng">候補が残りません（矛盾）</li>':`<li class="step step-final">残り <strong>${D(s.remaining)}</strong></li>`;return`<div class="sub-title">判別の根拠</div><ol class="steps">${t}${l}</ol>`}function Je(e){if(e.scenarios.length===0)return"";const t=e.czCount,s=Array.from({length:x},(n,a)=>{const o=a+1;return`<th class="${o<=t?"col-done":o===e.nextIndex&&!e.endedWithSuccess?"col-next":""}">${o}回</th>`}).join(""),l=e.scenarios.map(n=>{const a=Array.from({length:x},(r,I)=>{const p=I+1,d=n.levels[I]??null;return`<td class="${p<=t?"col-done":p===e.nextIndex&&!e.endedWithSuccess?"col-next":""}">${M(d)}</td>`}).join(""),o=n.czToSp===null?"―":`${n.czToSp}回`,c=n.remainingAllHi===null?"―":n.remainingAllHi?"はい":"いいえ";return`<tr class="${n.hold?"row-hold":""}">
        <th class="sc-cell">${n.id}${n.hold?' <span class="tag tag-hold">保留</span>':""}</th>
        <td class="num">${u(G(n.probability))}</td>
        ${a}
        <td>${M(n.next)}</td>
        <td>${o}</td>
        <td>${c}</td>
      </tr>${n.holdReason?`<tr class="row-hold-reason"><td colspan="${x+5}">${u(n.holdReason)}</td></tr>`:""}`}).join("");return`
    <div class="sub-title">候補シナリオの今後のレベル推移 <span class="hint">灰色は消化済み、青枠は次回。横にスクロールできます</span></div>
    <div class="table-wrap">
      <table class="sc-table">
        <thead><tr><th>シナリオ</th><th>確率</th>${s}<th>次回</th><th>SPまで</th><th>残り全HI+</th></tr></thead>
        <tbody>${l}</tbody>
      </table>
    </div>
  `}function Xe(e){const t=e.summary.nextTableShares;return t.length===0||e.endedWithSuccess?"":`<div class="sub-title">次回BZの初期アイコン振り分け <span class="hint">成功期待度はテーブルの値で、収支期待値ではありません</span></div><div class="next-tables">${t.map(l=>{const n=l.shares.map(a=>`<tr><td>T${a.table}</td><td>${u(a.iconLabel)}</td><td class="num">${a.rate.toFixed(1)}%</td><td class="num">${u(a.successRate)}</td></tr>`).join("");return`
        <div class="next-table">
          <div class="next-table-head">次回が ${M(l.level)} の場合の初期アイコン振り分け</div>
          <div class="table-wrap"><table class="mini">
            <thead><tr><th>テーブル</th><th>初期アイコン</th><th class="num">振り分け</th><th class="num">成功期待度（設定1）</th></tr></thead>
            <tbody>${n}</tbody>
          </table></div>
        </div>`}).join("")}</div>`}function et(e){return!e.usesStrongHint||e.observedOnlyCandidates.join()===e.candidates.join()?"":`<div class="observed-only">濃厚示唆（SP成功濃厚、セリフ）を使わず、初期アイコンとアイキャッチだけで残る候補: <strong>${D(e.observedOnlyCandidates)}</strong></div>`}function tt(){const e=F.map(s=>{const l=Array.from({length:x},(n,a)=>`<td>${M(k[s][a]??null)}</td>`).join("");return`<tr><th>${s}</th>${l}</tr>`}).join(""),t=Y.filter(s=>s.table).map(s=>`<tr><td>T${s.table}</td><td>${u(s.label)}</td><td>${s.levels.join("・")}</td><td class="num">${u(s.successRate)}</td></tr>`).join("");return`
    <div class="table-wrap"><table class="mini"><thead><tr><th>シナリオ</th>${Array.from({length:x},(s,l)=>`<th>${l+1}</th>`).join("")}</tr></thead><tbody>${e}</tbody></table></div>
    <div class="table-wrap"><table class="mini"><thead><tr><th>テーブル</th><th>初期アイコン</th><th>対応レベル</th><th class="num">成功期待度（設定1）</th></tr></thead><tbody>${t}</tbody></table></div>
  `}j.addEventListener("click",e=>{const t=e.target.closest("[data-action]");if(!t||t.tagName==="SELECT")return;const s=t.dataset.action,l=J(),n=l.input,a=Number(t.dataset.index),o=t.dataset.value??"";switch(s){case"eyecatch":n.eyecatch=o,y();break;case"cz-add":{if(n.history.length>=x)return;const c=t.dataset.type??"BZ";n.history.push({type:c,icon:"unknown",result:c==="BZ"||c==="FUKUBIKI"?"fail":"unknown"}),y();break}case"cz-count":{const c=Math.max(0,Math.min(x,Number(o)));if(c<n.history.length)n.history.length=c;else for(;n.history.length<c;)n.history.push({type:"BZ",icon:"unknown",result:"fail"});y();break}case"cz-undo":n.history.pop(),y();break;case"cz-remove":n.history.splice(a,1),y();break;case"cz-type":{const c=n.history[a];c.type=o,c.type!=="BZ"&&(c.icon="unknown"),y();break}case"cz-icon":n.history[a].icon=o,y();break;case"line":n.line=o,n.line==="none"&&(n.lineTarget=null),y();break;case"reset":window.confirm(`「${l.name}」の入力をすべてリセットします。よろしいですか？`)&&(l.input=ne(),y());break;case"machine-new":{const c=window.prompt("台の名前を入力してください",`台${m.machines.length+1}`);if(c===null)return;const r=me(c.trim()||`台${m.machines.length+1}`);m.machines.push(r),m.currentId=r.id,y();break}case"machine-rename":{const c=window.prompt("新しい台の名前",l.name);if(c===null||!c.trim())return;l.name=c.trim(),y();break}case"machine-delete":{if(m.machines.length<=1||!window.confirm(`「${l.name}」の履歴を削除します。元に戻せません。よろしいですか？`))return;m.machines=m.machines.filter(c=>c.id!==l.id),m.currentId=m.machines[0].id,y();break}case"copy":st(l);break;case"copy-close":W=null,P();break}});j.addEventListener("change",e=>{const t=e.target;if(t instanceof HTMLSelectElement){const s=t.dataset.action;s==="machine-select"?(m.currentId=t.value,y()):s==="line-target"&&(J().input.lineTarget=t.value===""?null:Number(t.value),y())}});function nt(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let s=!1;try{s=document.execCommand("copy")}catch{s=!1}return t.remove(),s}async function st(e){const t=`台: ${e.name}
`+Oe(e.input,fe(e.input));let s=!1;if(navigator.clipboard&&window.isSecureContext)try{await navigator.clipboard.writeText(t),s=!0}catch{s=!1}s||(s=nt(t)),s?(W=null,te("ok","判別結果をコピーしました。")):(W=t,te("error","自動コピーができないため、下の欄の本文を選択してコピーしてください。"))}"serviceWorker"in navigator&&location.protocol.startsWith("http")&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});P();
