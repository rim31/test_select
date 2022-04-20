// var firstHref = $("a[href^='http']").eq(0).attr("href");
// console.log(firstHref);
// alert("Hello from your Chrome extension!")
// // Extension event listeners are a little different from the patterns you may have seen in DOM or
// // Node.js APIs. The below event listener registration can be broken in to 4 distinct parts:
// //
// // * chrome      - the global namespace for Chrome's extension APIs
// // * runtime     – the namespace of the specific API we want to use
// // * onInstalled - the event we want to subscribe to
// // * addListener - what we want to do with this event
// //
// // See https://developer.chrome.com/docs/extensions/reference/events/ for additional details.
// chrome.runtime.onInstalled.addListener(async () => {
//   // While we could have used `let url = "hello.html"`, using runtime.getURL is a bit more robust as
//   // it returns a full URL rather than just a path that Chrome needs to be resolved contextually at
//   // runtime.
// let url = chrome.runtime.getURL("popup.html");
// console.log(`URL`, url);

//   // Open a new tab pointing at our page's URL using JavaScript's object initializer shorthand.
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#new_notations_in_ecmascript_2015
//   //
//   // Many of the extension platform's APIs are asynchronous and can either take a callback argument
//   // or return a promise. Since we're inside an async function, we can await the resolution of the
//   // promise returned by the tabs.create call. See the following link for more info on async/await.
//   // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
// let tab = await chrome.tabs.create({ url });

//   // Finally, let's log the ID of the newly created tab using a template literal.
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//   //
//   // To view this log message, open chrome://extensions, find "Hello, World!", and click the
//   // "service worker" link in th card to open DevTools.
//   console.log(`Created tab ${tab.id}`);
// });

// function changeColor() {
//   chrome.tabs.executeScript(null, {
//     code: "document.body.style.background=hotpink",
//   });
//   window.close();
// }

// function alertMe() {
//   alert('123');
// }

// Customize settings
//
const tags = [
    "a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "bgsound",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "isindex",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "listing",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "nobr",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "plaintext",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "xmp",
  ];
  function getElementsByText(str, tag = "a") {
    return Array.prototype.slice
      .call(document.getElementsByTagName(tag))
      .filter((el) => el.textContent.trim() === str.trim());
  }
  const loopByTagAndClick = (txt) => {
    tags.map((tag) =>
      getElementsByText(txt, tag).filter((e) => {
        setTimeout(() => e.click(), 200);
        console.log(txt);
      })
    );
  };
  function reddenPage() {
    // document.body.style.backgroundColor = "red";
    // let debug = document.body.insertAdjacentHTML("beforeend", "<a>Sign up</a>");
    // console.log(`debug`, debug);
    console.log(`getElementsByText("4G")`, getElementsByText("4G"));
    // let a1 = getElementsByText("Sign")[0].click();
    // let a2 = getElementsByText("Continuer sans accepter", "button")[0].click();
    
    //Yahoo
    loopByTagAndClick("Refuser tout");
  
    
    // for GOOOGLE, YOUTUBE, etc
    loopByTagAndClick("Personnaliser");
    for (let i = 0; i < 2; i++) {
      setTimeout(() => loopByTagAndClick("Désactivé"), 200);
    }
    setTimeout(() => loopByTagAndClick("Confirmer"), 100);
    console.log(`find`, window.find("sign", false /** caseSensitive */));
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => reddenPage(), 2000);
  });
  
  setTimeout(() => reddenPage(), 2000);
  // chrome.action.onClicked.addListener((tab) => {
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id },
  //     function: reddenPage
  //   });
  // });
  
  // document.getElementById('hello').addEventListener('click', alertMe);
  