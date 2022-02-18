var Tbutton = document.querySelector("#btn-translate");
var txtInp = document.querySelector("#txt-input");
var txtOut = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

// error handling if nothing gets back from server
function erorHandler(error) {
    console.log("Error occured on server end!", error)
    alert("this server has limit of 5 requests per hour so if u think u crossed it, try changing your country with a vpn and it will work!")
}

function clickRes() {
    // console.log("button clicked")
    // console.log(txtInp.value);
    // txtOut.innerHTML = txtInp.value;

    var enteredText = txtInp.value; // take input text value
    fetch(serverUrl + "?text=" + enteredText) // added input to server url for fetch
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOut.innerHTML = translatedText
        })
        .catch(erorHandler)


}

Tbutton.addEventListener("click", clickRes)

/**
 * testing api call using fetch() with mock server
 * 
 * var txt1 = "i am ironman"
 * var txt2 = "i am batman"
 * var txt3 = "bring me thanos"
 * 
 * mock server : https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json
 * 
 * function apcall(text)
 *  {fetch(url+"?text="+text).then(Response => Response.json()).then(json => console.log(json))}
 * 
 * call 1 : apcall(txt1)
 * response : 
 *    {
    "success": {
        "total": 1
    },
    "contents": {
        "translated": "Testing,  you are",
        "text": "i am ironman",
        "translation": "yoda"
    }
    }
 *  
    call 2 : apcall(txt2)
 * response : 
 *    {
    "success": {
        "total": 1
    },
    "contents": {
        "translated": "Testing,  you are",
        "text": "i am batman",
        "translation": "yoda"
    }
    }
    call 3 : apcall(txt3)
 * response : 
 *    {
    "success": {
        "total": 1
    },
    "contents": {
        "translated": "Testing,  you are",
        "text": "bring me thanos",
        "translation": "yoda"
    }
    }
 *  */