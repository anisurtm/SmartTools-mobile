
// function clearData(){
//     document.getElementById('textarea1').value= '';
//   }
  
//   function copyText() {
//     var copyText = document.getElementById("textarea1");
//     copyText.select();
  
//     copyText.setSelectionRange(0, 99999); 
//     navigator.clipboard.writeText(copyText.value);
//   }
  
  let inpText = document.getElementById("textarea1");
  let result1 = document.getElementById('textarea2');
  function upper(){
    result1.value = inpText.value.toUpperCase();
  }
  function lower(){
    
    result1.value = inpText.value.toLowerCase();
  }
  
  
  
//   function Capitaliz() {
//     Get the input text
//     let inpText1 = document.getElementById('textarea1');
//     let result2 = document.getElementById('textarea2');
//     Capitalize the first letter of each word
//     let words = inpText1.split(' ');
//     let capitalizedWords = words.map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     let result1 = capitalizedWords.join(' ');
//     let x= document.getElementById('textarea1').value;
    
//     Display the result
//     result2.value =inpText1.value;
//   }
  
  function tOGGLEc(){
    let toogel = document.getElementById('textarea1');
    let input2 = toogel.value.split('ok');
    console.log(input2);
  
      for (let i = 0; i< input2.length; i++)
      // console.log(input2[i]);
    {
      if (input2[i] >= 'A' && input2[i]<='Z')
      {
        input2[i]=input2[i].toLowerCase();
      }
      else if (input2[i] >= 'a' && input2[i]<='z')
      {
        input2[i]=input2[i].toUpperCase();
      }
    }
    
    let out1=document.getElementById('textarea2');
    out1.value=input2.join('');
  }
  
  function Capitliz() {
    let i2np =document.getElementById('textarea1');
    let send2 =document.getElementById('textarea2');
      let str = i2np.value.toLowerCase().split(' ');
      for (let i = 0; i < str.length; i++)
     {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      // console.log(str[i]);
      }
      send2.value=str.join(' ');
  }
  
  
  function Sentce(){
    let inp = document.getElementById('textarea1');
    let inp11= document.getElementById('textarea2');
    let inpo =inp.value.toLowerCase().split('. ');
    console.log(inpo);
    for (let i = 0; i < inpo.length; i++)
    {
      inpo[i] = inpo[i].charAt(0).toUpperCase() + inpo[i].slice(1);
    }
    inp11.value=inpo.join('.');
  }
  
  function aLtErNaTe(){
    let i1np =document.getElementById('textarea1');
    let i12np =document.getElementById('textarea2');
    let i2npo =i1np.value.toLowerCase().split('');
    console.log(i2npo);
    for (let i=0; i<i2npo .length; i++ )
    // console.log();
    {
      if (i % 2 !=0)
      {
        i2npo[i]=i2npo[i].toUpperCase();
        console.log(i2npo[i])
      }
    }
    i12np.value=i2npo.join('');
  }

  function encodSter() {
    const str = document.getElementById('textarea1').value;
      console.log(btoa(str));
      let x = btoa(str);
      document.getElementById('textarea2').innerText=x;
  
  }
  encodeStr();
  
          function decodeSter() {
    const str2 = document.getElementById('textarea1').value;
      console.log(atob(str2));
      let u = atob(str2);
      document.getElementById('textarea2').innerText=u;
  
  }
  encodeStr();

  
function clearData(){
  document.getElementById('textarea1').value= '';
}


function copyText() {
  var input = document.getElementById('textarea1');

  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    // handle iOS devices
    input.contenteditable = true;
    input.readonly = false;

    var range = document.createRange();
    range.selectNodeContents(input);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    input.setSelectionRange(0, 999999);
  } else {
    // other devices are easy
    input.select()
  }
  document.execCommand('copy');
}


function clearData1(){
  document.getElementById('textarea2').value= '';
}


function copyText1() {
  let inp1ut = document.getElementById('textarea2');

  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    // handle iOS devices
    inp1ut.contenteditable = true;
    inp1ut.readonly = false;

    var ran1ge = document.createRange();
    ran1ge.selectNodeContents(inp1ut);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(ran1ge);
    inp1ut.setSelectionRange(0, 999999);
  } else {
    // other devices are easy
    inp1ut.select()
  }
  document.execCommand('copy');
}


function encodSter() {
	const str = document.getElementById('textarea1').value;
    console.log(btoa(str));
    let x = btoa(str);
    document.getElementById('textarea2').innerText=x;

}
encodSter();


function decodeSter() {
	const str2 = document.getElementById('textarea1').value;
    console.log(atob(str2));
    let u = atob(str2);
    document.getElementById('textarea2').innerText=u;

}
encodeStr();

