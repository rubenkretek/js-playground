const obj = {
    adserverRequestSent: true,
    StickyBanner: {
        "a9": false,
        "prebid": false,
        "request": true
    },
    a9: true,
    prebid: true,
    sendAdserverRequest: true
}

const adUnit = "StickyBanner";
 
console.log(obj[adUnit].request);
