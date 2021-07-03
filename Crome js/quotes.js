const quotes = [
    {
        quote:"그들이 저급하게 행동해도 우리는 품위를 갖추자",
        author:"오바마",
    },
    {
        quote:"다른 사람의 생각에 내 인생을 맞춰가는 것은 노예나 다름 없다",
        author:"라와나 블랙웰",
    },
    {
       quote:"게이름은 즐겁지만 괴로운 상태다 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
       author:"간디",
    },
    {
        quote:"겸손한 태도를 잊어버리지 말아라 다른 사람을 무시해서 득 될 것은 아무것도 없다.",
        author:"하워드 슐츠",
    },
    {
       quote:"당신은 나이만큼 늙는 것이 아니라 당신의 생각만큼 늙는 것이다",
       author:"조지번스", 
    },
    {
        quote:"내 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
        author:"랄프 완도 에머슨",
    },
    {
        quote:"자신을 믿어라. 자신의 능력을 믿어라. 겸손하지만 합리적인 자신감없이는 성공할 수도 행복할 수도 없다",
        author: "노먼 빈센트 필",
    },
    {
        quote:"최고의 경쟁력은 열정이다.",
        author: "잭월치",   
    },
    {
        quote:"모든 성취의 출발점은 열망이다. 이를 명심하라",
        author:"익명",
    },
    {
        quote: "약한 불이 미약한 열기를 주듯 약한 열망은 미약한 결과를 안겨준다.",
        author:"나폴레온 힐",
    },
    {
        quote:"패배했을 때 끝나는 것이 아니다. 포기했을 때 끝나는 것이다.",
        author: "리처드 닉슨",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;