// HTTP Requests [Browser]
/*
jreq('post', https://page.com', {
    hdr: {
    'X-Access-Token': 'mytoken123',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }
}, function(res, sts){
     console.log('Status:', sts);
     console.log('Result', res);
});
*/
function jreq(mth, url, opt, cb) {
    mth = mth.toUpperCase();
    opt = opt || {};
    opt.hdr = opt.hdr || {}; 
    opt.dta = opt.dta || null; 
    cb = cb || function(){};
    var xhr = new XMLHttpRequest();
    xhr.open(mth, url, true);
    for (k in opt.hdr) {xhr.setRequestHeader(k, opt.hdr[k]);}
    if (typeof opt.dta == 'object')
    opt.dta = JSON.stringify(opt.dta);
    xhr.send(opt.dta); xhr.onreadystatechange = function() {
        if (xhr.readyState === 4){
            var res = xhr.response;
            cb(res, xhr.status);
        }
    }; return xhr;
}
