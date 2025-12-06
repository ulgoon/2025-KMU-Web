document.getElementsByTagName('h1') 
HTMLCollection { 0: h1.box__title-logo, 1: h1, 2: h1.itemtit, length: 3 }

document.getElementsByTagName('h1')[2]
<h1 class="itemtit" data-spm-anchor-id="gmktpc.pdp.0.i1.1b69660dUtnwSN">

document.getElementsByTagName('h1')[2].innerHTML
"(오늘만 1매 238원)더말 고농축 앰플 마스크팩 50매 콜라겐 원팩 데일리 1일1팩 보습 마데카소사이드 " 

document.getElementsByClassName('itemtit')
HTMLCollection { 0: h1.itemtit, length: 1 }
​
0: <h1 class="itemtit" data-spm-anchor-id="gmktpc.pdp.0.i1.1b69660dUtnwSN">
​
length: 1
​
<prototype>: HTMLCollectionPrototype { item: item(), namedItem: namedItem(), length: Getter, … }

var productTitle = document.getElementsByClassName('itemtit')[0].innerHTML
undefined

productTitle
"(오늘만 1매 238원)더말 고농축 앰플 마스크팩 50매 콜라겐 원팩 데일리 1일1팩 보습 마데카소사이드 "

document.querySelectorAll('h1.itemtit')
NodeList { 0: h1.itemtit, length: 1 }

document.querySelectorAll('h1.itemtit')[0]
<h1 class="itemtit" data-spm-anchor-id="gmktpc.pdp.0.i1.1b69660dUtnwSN">

document.querySelectorAll('h1.itemtit')[0].innerHTML
"(오늘만 1매 238원)더말 고농축 앰플 마스크팩 50매 콜라겐 원팩 데일리 1일1팩 보습 마데카소사이드 "

    </h1>

document.querySelectorAll('h1.itemtit')[0].innerHTML = '하하 이 페이지는 이제 제겁니다'
"하하 이 페이지는 이제 제겁니다" 
